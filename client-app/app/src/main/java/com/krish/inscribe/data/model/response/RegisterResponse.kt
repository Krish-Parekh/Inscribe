package com.krish.inscribe.data.model.response

import com.krish.inscribe.data.model.User

data class RegisterResponse(
    val message: String,
    val status: Int,
    val user : User
)
