package com.krish.inscribe.repository

import com.krish.inscribe.data.model.Note
import com.krish.inscribe.data.model.RequestNote
import com.krish.inscribe.data.model.UserLogin
import com.krish.inscribe.data.model.UserRegister
import com.krish.inscribe.data.network.NoteService
import com.krish.inscribe.utils.NetworkResult
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.callbackFlow
import javax.inject.Inject

class NoteRepository @Inject constructor(
    private val noteService: NoteService
) {
    fun register(userDetails: UserRegister) = callbackFlow {
        trySend(NetworkResult.Loading)
        try {
            val response = noteService.register(userDetails)
            trySend(NetworkResult.Success(response))
        } catch (e: Exception) {
            trySend(NetworkResult.Failure(e))
        }
        awaitClose {
            close()
        }
    }


    fun login(userDetails: UserLogin) = callbackFlow {
        trySend(NetworkResult.Loading)
        try {
            val response = noteService.login(userDetails)
            trySend(NetworkResult.Success(response))
        } catch (e: Exception) {
            trySend(NetworkResult.Failure(e))
        }
        awaitClose {
            close()
        }
    }


    fun getNotes(token: String,authorId: String) = callbackFlow {
        trySend(NetworkResult.Loading)
        try {
            val response = noteService.getNotes(token, authorId)
            trySend(NetworkResult.Success(response))
        } catch (e: Exception) {
            trySend(NetworkResult.Failure(e))
        }
        awaitClose {
            close()
        }
    }


    fun getNote(authorId: String, noteId: String) = callbackFlow {
        trySend(NetworkResult.Loading)
        try {
            val response = noteService.getNote(authorId, noteId)
            trySend(NetworkResult.Success(response))
        } catch (e: Exception) {
            trySend(NetworkResult.Failure(e))
        }
        awaitClose {
            close()
        }
    }


    fun createNote(token: String, newNote: RequestNote) = callbackFlow {
        trySend(NetworkResult.Loading)
        try {
            val response = noteService.createNote(token, newNote)
            trySend(NetworkResult.Success(response))
        } catch (e: Exception) {
            trySend(NetworkResult.Failure(e))
        }
        awaitClose {
            close()
        }
    }


    fun updateNote(authorId: String, noteId: String, note: Note) = callbackFlow {
        trySend(NetworkResult.Loading)
        try {
            val response = noteService.updateNote(authorId, noteId, note)
            trySend(NetworkResult.Success(response))
        } catch (e: Exception) {
            trySend(NetworkResult.Failure(e))
        }
        awaitClose {
            close()
        }
    }


    fun deleteNote(authorId: String, noteId: String) = callbackFlow {
        trySend(NetworkResult.Loading)
        try {
            val response = noteService.deleteNote(authorId, noteId)
            trySend(NetworkResult.Success(response))
        } catch (e: Exception) {
            trySend(NetworkResult.Failure(e))
        }
        awaitClose {
            close()
        }
    }


    fun deleteAllNotes(authorId: String) = callbackFlow {
        trySend(NetworkResult.Loading)
        try {
            val response = noteService.deleteAllNotes(authorId)
            trySend(NetworkResult.Success(response))
        } catch (e: Exception) {
            trySend(NetworkResult.Failure(e))
        }
        awaitClose {
            close()
        }
    }
}