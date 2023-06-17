package com.krish.inscribe.data.network

import com.krish.inscribe.data.model.request.LoginRequest
import com.krish.inscribe.data.model.request.RegisterRequest
import com.krish.inscribe.data.model.response.LoginResponse
import com.krish.inscribe.data.model.response.RegisterResponse
import retrofit2.http.Body
import retrofit2.http.POST

interface AuthenticationService {

    @POST("login")
    suspend fun login(@Body loginRequest: LoginRequest) : LoginResponse

    @POST("register")
    suspend fun register(@Body registerRequest: RegisterRequest) : RegisterResponse
}