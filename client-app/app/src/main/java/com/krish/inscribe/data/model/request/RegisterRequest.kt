package com.krish.inscribe.data.model.request

data class RegisterRequest(
    val username: String,
    val email: String,
    val password: String
)
