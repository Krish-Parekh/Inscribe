package com.krish.inscribe.presentation.screens.home

import android.content.SharedPreferences
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.krish.inscribe.data.model.Note
import com.krish.inscribe.data.model.response.NoteResponse
import com.krish.inscribe.data.model.response.NotesResponse
import com.krish.inscribe.repository.NoteRepository
import com.krish.inscribe.utils.Constants.Companion.USER_ID
import com.krish.inscribe.utils.NetworkResult
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class HomeViewModel @Inject constructor(
    private val noteRepository: NoteRepository,
    private val sharedPreferences: SharedPreferences
) : ViewModel() {

    private val _notes: MutableStateFlow<NetworkResult<NotesResponse>> = MutableStateFlow(NetworkResult.Idle)
    val notes: StateFlow<NetworkResult<NotesResponse>> = _notes

    private val _deleteState: MutableStateFlow<NetworkResult<String>> = MutableStateFlow(NetworkResult.Idle)
    val deleteState: StateFlow<NetworkResult<String>> = _deleteState

    init {
        getNotes()
    }

    fun getNotes() {
        viewModelScope.launch {
            val userId = sharedPreferences.getString(USER_ID, "").toString()
            noteRepository.getNotes(userId).collect { response ->
                when (response) {
                    NetworkResult.Idle -> Unit
                    NetworkResult.Loading -> {
                        _notes.emit(NetworkResult.Loading)
                    }

                    is NetworkResult.Success -> {
                        val data = response.data
                        _notes.emit(NetworkResult.Success(data = data))
                    }

                    is NetworkResult.Failure -> {
                        val exception = response.exception
                        _notes.emit(NetworkResult.Failure(exception = exception))
                    }
                }
            }
        }
    }

    fun deleteNote(noteId: String) {
        viewModelScope.launch(Dispatchers.IO) {
            val userId = sharedPreferences.getString(USER_ID, "").toString()
            noteRepository.deleteNote(userId, noteId).collect { response ->
                when (response) {
                    NetworkResult.Idle -> Unit
                    NetworkResult.Loading -> {
                        _deleteState.emit(NetworkResult.Loading)
                    }

                    is NetworkResult.Success -> {
                        val data = response.data
                        _deleteState.emit(NetworkResult.Success(data = data.message))
                    }

                    is NetworkResult.Failure -> {
                        val exception = response.exception
                        _deleteState.emit(NetworkResult.Failure(exception = exception))
                    }
                }
            }
        }
    }

    fun deleteAllNotes() {
        viewModelScope.launch(Dispatchers.IO) {
            val userId = sharedPreferences.getString(USER_ID, "").toString()
            noteRepository.deleteAllNotes(userId).collect { response ->
                when(response){
                    NetworkResult.Idle -> Unit
                    NetworkResult.Loading -> {
                        _deleteState.emit(NetworkResult.Loading)
                    }
                    is NetworkResult.Success -> {
                        val data = response.data
                        _deleteState.emit(NetworkResult.Success(data = data.message))
                    }
                    is NetworkResult.Failure -> {
                        val exception = response.exception
                        _deleteState.emit(NetworkResult.Failure(exception))
                    }
                }
            }
        }
    }
}