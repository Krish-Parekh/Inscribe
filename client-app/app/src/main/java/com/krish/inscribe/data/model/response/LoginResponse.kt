package com.krish.inscribe.data.model.response

import com.krish.inscribe.data.model.User

data class LoginResponse(
    val message: String,
    val status: Int,
    val token: String,
    val user: User,
)
