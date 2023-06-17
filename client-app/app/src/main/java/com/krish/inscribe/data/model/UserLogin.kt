package com.krish.inscribe.data.model

data class UserLogin(val email: String, val password: String)

data class UserRegister(val username: String, val email: String, val password: String)
