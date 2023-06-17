package com.krish.inscribe.data.model


import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class UserSession(
    @SerialName("token")
    val token: String,
    @SerialName("user")
    val user: User
)