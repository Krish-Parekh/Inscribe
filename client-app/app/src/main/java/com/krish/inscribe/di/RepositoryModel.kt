package com.krish.inscribe.di

import com.krish.inscribe.data.network.NoteService
import com.krish.inscribe.repository.NoteRepository
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object RepositoryModel {

    @Provides
    @Singleton
    fun provideNoteRepository(
        noteService: NoteService
    ): NoteRepository {
        return NoteRepository(noteService)
    }
}