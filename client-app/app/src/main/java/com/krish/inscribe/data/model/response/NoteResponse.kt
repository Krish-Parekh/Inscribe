package com.krish.inscribe.data.model.response

import com.krish.inscribe.data.model.Note


data class NoteResponse(
    val message: String,
    val status: Int,
    val note : Note
)
