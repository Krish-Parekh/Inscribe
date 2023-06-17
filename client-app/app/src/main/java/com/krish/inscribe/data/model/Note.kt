package com.krish.inscribe.data.model

data class Note(
    val _id: String,
    val title: String,
    val content: String,
    val userId: String,
    val createdAt: String,
    val updatedAt: String,
)
