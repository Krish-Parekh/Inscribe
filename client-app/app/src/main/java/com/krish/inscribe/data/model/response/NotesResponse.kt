package com.krish.inscribe.data.model.response

import com.krish.inscribe.data.model.Note

data class NotesResponse(
    val message: String,
    val status: Int,
    val notes : List<Note>
)