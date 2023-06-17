package com.krish.inscribe.repository

import com.krish.inscribe.data.model.request.NoteRequest
import com.krish.inscribe.data.network.NoteService
import com.krish.inscribe.utils.NetworkResult
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.callbackFlow
import javax.inject.Inject

class NoteRepository @Inject constructor(
    private val noteService: NoteService
) {
    suspend fun create(noteRequest: NoteRequest) = callbackFlow {
        trySend(NetworkResult.Loading)
        try {
            val response = noteService.create(noteRequest)
            trySend(NetworkResult.Success(data = response))
        } catch (exception: Exception) {
            trySend(NetworkResult.Failure(exception = exception))
        }

        awaitClose {
            close()
        }
    }

    suspend fun getNotes(userId: String) = callbackFlow {
        trySend(NetworkResult.Loading)
        try {
            val response = noteService.getNotes(userId)
            trySend(NetworkResult.Success(data = response))
        } catch (exception: Exception) {
            trySend(NetworkResult.Failure(exception = exception))
        }

        awaitClose {
            close()
        }
    }

    suspend fun getNote(userId: String, noteId: String) = callbackFlow {
        trySend(NetworkResult.Loading)
        try {
            val response = noteService.getNote(userId, noteId)
            trySend(NetworkResult.Success(data = response))
        } catch (exception: Exception) {
            trySend(NetworkResult.Failure(exception = exception))
        }

        awaitClose {
            close()
        }
    }

    suspend fun updateNote(userId: String, noteId: String) = callbackFlow {
        trySend(NetworkResult.Loading)
        try {
            val response = noteService.updateNote(userId, noteId)
            trySend(NetworkResult.Success(data = response))
        } catch (exception: Exception) {
            trySend(NetworkResult.Failure(exception = exception))
        }

        awaitClose {
            close()
        }
    }

    suspend fun deleteNote(userId: String, noteId: String) = callbackFlow {
        trySend(NetworkResult.Loading)
        try {
            val response = noteService.deleteNote(userId, noteId)
            trySend(NetworkResult.Success(data = response))
        } catch (exception: Exception) {
            trySend(NetworkResult.Failure(exception = exception))
        }

        awaitClose {
            close()
        }
    }

    suspend fun deleteAllNotes(userId: String) = callbackFlow {
        trySend(NetworkResult.Loading)
        try {
            val response = noteService.deleteAllNotes(userId)
            trySend(NetworkResult.Success(data = response))
        } catch (exception: Exception) {
            trySend(NetworkResult.Failure(exception = exception))
        }

        awaitClose {
            close()
        }
    }
}