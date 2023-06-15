package com.krish.inscribe.data.network

import com.krish.inscribe.data.model.UserSession
import com.krish.inscribe.data.model.Note
import com.krish.inscribe.data.model.UserDetails
import retrofit2.http.*

interface NoteService {

    @POST("register")
    suspend fun register(@Body userDetails: UserDetails)

    @POST("login")
    suspend fun login(@Body userDetails: UserDetails): UserSession

    @GET("{authorId}")
    suspend fun getNotes(@Path("authorId") authorId: String): List<Note>

    @GET("{authorId}/{noteId}")
    suspend fun getNote(
        @Path("authorId") authorId: String,
        @Path("noteId") noteId: String
    ): Note

    @POST("create")
    suspend fun createNote(@Body newNote: Note): Note

    @PUT("{authorId}/{noteId}")
    suspend fun updateNote(
        @Path("authorId") authorId: String,
        @Path("noteId") noteId: String,
        @Body note: Note
    ): Note

    @DELETE("{authorId}/{noteId}")
    suspend fun deleteNote(
        @Path("authorId") authorId: String,
        @Path("noteId") noteId: String
    ): Note

    @DELETE("{authorId}")
    suspend fun deleteAllNotes(@Path("authorId") authorId: String): List<Note>
}
