package com.krish.inscribe.data.network

import com.krish.inscribe.data.model.Note
import com.krish.inscribe.data.model.RequestNote
import com.krish.inscribe.data.model.User
import com.krish.inscribe.data.model.UserLogin
import com.krish.inscribe.data.model.UserRegister
import com.krish.inscribe.data.model.UserSession
import retrofit2.http.*

interface NoteService {

    @POST("auth/register")
    suspend fun register(@Body userDetails: UserRegister): User

    @POST("auth/login")
    suspend fun login(@Body userDetails: UserLogin): UserSession

    @GET("note/{authorId}")
    suspend fun getNotes(
        @Header("Authorization") token: String,
        @Path("authorId") authorId: String
    ): List<Note>

    @GET("note/{authorId}/{noteId}")
    suspend fun getNote(
        @Path("authorId") authorId: String,
        @Path("noteId") noteId: String
    ): Note

    @POST("note/create")
    suspend fun createNote(
        @Header("Authorization") token: String,
        @Body newNote: RequestNote
    ): Note

    @PUT("note/{authorId}/{noteId}")
    suspend fun updateNote(
        @Path("authorId") authorId: String,
        @Path("noteId") noteId: String,
        @Body note: Note
    ): Note

    @DELETE("note/{authorId}/{noteId}")
    suspend fun deleteNote(
        @Path("authorId") authorId: String,
        @Path("noteId") noteId: String
    ): Note

    @DELETE("note/{authorId}")
    suspend fun deleteAllNotes(@Path("authorId") authorId: String): List<Note>
}
