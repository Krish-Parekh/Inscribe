package com.krish.inscribe.repository

import com.krish.inscribe.data.model.request.LoginRequest
import com.krish.inscribe.data.model.request.RegisterRequest
import com.krish.inscribe.data.network.AuthenticationService
import com.krish.inscribe.utils.NetworkResult
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.callbackFlow
import javax.inject.Inject

class AuthRepository @Inject constructor(
    private val authApi: AuthenticationService
) {
    suspend fun login(loginRequest: LoginRequest) = callbackFlow {
        trySend(NetworkResult.Loading)
        try {
            val response = authApi.login(loginRequest)
            trySend(NetworkResult.Success(data = response))
        } catch (exception: Exception) {
            trySend(NetworkResult.Failure(exception = exception))
        }

        awaitClose {
            close()
        }
    }

    suspend fun register(registerRequest: RegisterRequest) = callbackFlow {
        trySend(NetworkResult.Loading)
        try {
            val response = authApi.register(registerRequest)
            trySend(NetworkResult.Success(data = response))
        } catch (exception: Exception) {
            trySend(NetworkResult.Failure(exception = exception))
        }

        awaitClose {
            close()
        }
    }
}