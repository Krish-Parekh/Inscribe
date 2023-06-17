package com.krish.inscribe.data.model

data class RequestNote(
    val title: String,
    val content: String,
    var authorId: String = "",
)
