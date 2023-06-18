package com.krish.inscribe.data.network

import com.krish.inscribe.data.model.Note
import com.krish.inscribe.data.model.request.NoteRequest
import com.krish.inscribe.data.model.response.NoteResponse
import com.krish.inscribe.data.model.response.NotesResponse
import retrofit2.http.Body
import retrofit2.http.DELETE
import retrofit2.http.GET
import retrofit2.http.PATCH
import retrofit2.http.POST
import retrofit2.http.PUT
import retrofit2.http.Path

interface NoteService {
    @POST("create")
    suspend fun create(@Body noteRequest: NoteRequest): NoteResponse

    @GET("{userId}")
    suspend fun getNotes(@Path("userId") userId: String): NotesResponse

    @GET("{userId}/{noteId}")
    suspend fun getNote(
        @Path("userId") userId: String,
        @Path("noteId") noteId: String
    ): NoteResponse

    @PUT("{userId}/{noteId}")
    suspend fun updateNote(
        @Path("userId") userId: String,
        @Path("noteId") noteId: String,
        @Body noteRequest: NoteRequest
    ): NoteResponse

    @DELETE("{userId}/{noteId}")
    suspend fun deleteNote(
        @Path("userId") userId: String,
        @Path("noteId") noteId: String
    ): NoteResponse

    @DELETE("{userId}")
    suspend fun deleteAllNotes(@Path("userId") userId: String) : NoteResponse
}
