package com.krish.inscribe.di

import android.content.SharedPreferences
import com.krish.inscribe.data.network.AuthenticationService
import com.krish.inscribe.data.network.NoteService
import com.krish.inscribe.utils.Constants.Companion.AUTH_BASE_URL
import com.krish.inscribe.utils.Constants.Companion.JWT_TOKEN
import com.krish.inscribe.utils.Constants.Companion.NOTE_BASE_URL
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import okhttp3.Interceptor
import okhttp3.OkHttpClient
import retrofit2.Retrofit
import retrofit2.converter.moshi.MoshiConverterFactory
import java.util.concurrent.TimeUnit
import javax.inject.Qualifier
import javax.inject.Singleton


@Qualifier
@Retention(AnnotationRetention.BINARY)
annotation class AuthRetrofit

@Qualifier
@Retention(AnnotationRetention.BINARY)
annotation class NoteRetrofit


@Module
@InstallIn(SingletonComponent::class)
object NetworkModule {

    @Provides
    @Singleton
    fun provideHttpClient(): OkHttpClient {
        return OkHttpClient.Builder()
            .readTimeout(15, TimeUnit.SECONDS)
            .connectTimeout(15, TimeUnit.SECONDS)
            .build()
    }

    @Provides
    @Singleton
    fun provideMoshiConvertorFactory(): MoshiConverterFactory {
        return MoshiConverterFactory.create()
    }

    @AuthRetrofit
    @Singleton
    @Provides
    fun provideAuthRetrofit(
        okHttpClient: OkHttpClient,
        moshiConverterFactory: MoshiConverterFactory
    ): Retrofit {
        return Retrofit.Builder()
            .baseUrl(AUTH_BASE_URL)
            .client(okHttpClient)
            .addConverterFactory(moshiConverterFactory)
            .build()
    }

    @Provides
    @Singleton
    fun provideAuthApi(@AuthRetrofit retrofit: Retrofit): AuthenticationService {
        return retrofit.create(AuthenticationService::class.java)
    }

    @NoteRetrofit
    @Singleton
    @Provides
    fun provideNoteRetrofit(
        okHttpClient: OkHttpClient,
        moshiConvertorFactory: MoshiConverterFactory,
        sharedPreferences: SharedPreferences
    ): Retrofit {
        val token = sharedPreferences.getString(JWT_TOKEN, "")
        val authInterceptor = Interceptor { chain ->
            val originalRequest = chain.request()
            val modifiedRequest = originalRequest.newBuilder()
                .header("Authorization", "Bearer $token")
                .build()
            chain.proceed(modifiedRequest)
        }
        val clientWithInterceptor = okHttpClient.newBuilder()
            .addInterceptor(authInterceptor)
            .build()

        return Retrofit.Builder()
            .baseUrl(NOTE_BASE_URL)
            .client(clientWithInterceptor)
            .addConverterFactory(moshiConvertorFactory)
            .build()
    }


    @Provides
    @Singleton
    fun provideNoteService(@NoteRetrofit retrofit: Retrofit): NoteService {
        return retrofit.create(NoteService::class.java)
    }
}