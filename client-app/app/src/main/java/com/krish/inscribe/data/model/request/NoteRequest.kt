package com.krish.inscribe.data.model.request

data class NoteRequest(
    val title: String,
    val content: String,
    var userId: String = ""
)
