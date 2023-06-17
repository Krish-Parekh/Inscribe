package com.krish.inscribe.data.model


import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class User(
    @SerialName("createdAt")
    val createdAt: String,
    @SerialName("email")
    val email: String,
    @SerialName("_id")
    val _id: String,
    @SerialName("updatedAt")
    val updatedAt: String,
    @SerialName("username")
    val username: String,
    @SerialName("__v")
    val v: Int
)