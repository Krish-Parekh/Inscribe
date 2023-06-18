package com.krish.inscribe.presentation.screens.edit_note

import android.content.SharedPreferences
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.krish.inscribe.data.model.request.NoteRequest
import com.krish.inscribe.data.model.response.NoteResponse
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
class EditNoteViewModel @Inject constructor(
    private val noteRepository: NoteRepository,
    private val sharedPreferences: SharedPreferences,
    savedStateHandle: SavedStateHandle
) : ViewModel() {

    private val _note: MutableStateFlow<NetworkResult<NoteResponse>> =
        MutableStateFlow(NetworkResult.Idle)
    val note: StateFlow<NetworkResult<NoteResponse>> = _note

    private val _updateState: MutableStateFlow<NetworkResult<NoteResponse>> = MutableStateFlow(NetworkResult.Idle)
    val updateState: StateFlow<NetworkResult<NoteResponse>> = _updateState

    init {
        viewModelScope.launch(Dispatchers.IO) {
            val userId = sharedPreferences.getString(USER_ID, "").toString()
            val noteId = savedStateHandle.get<String>("noteId").toString()
            noteRepository.getNote(userId, noteId).collect { response ->
                when (response) {
                    NetworkResult.Idle -> Unit
                    NetworkResult.Loading -> {
                        _note.emit(NetworkResult.Loading)
                    }

                    is NetworkResult.Success -> {
                        val data = response.data
                        _note.emit(NetworkResult.Success(data = data))
                    }

                    is NetworkResult.Failure -> {
                        val exception = response.exception
                        _note.emit(NetworkResult.Failure(exception = exception))
                    }
                }
            }
        }
    }

    fun updateNote(noteId: String, noteRequest: NoteRequest) {
        viewModelScope.launch(Dispatchers.IO) {
            val userId = sharedPreferences.getString(USER_ID, "").toString()
            noteRequest.userId = userId
            noteRepository.updateNote(userId, noteId, noteRequest).collect { response ->
                when (response) {
                    NetworkResult.Idle -> Unit
                    NetworkResult.Loading -> {
                        _updateState.emit(NetworkResult.Loading)
                    }

                    is NetworkResult.Success -> {
                        val data = response.data
                        _note.emit(NetworkResult.Success(data = data))
                    }

                    is NetworkResult.Failure -> {
                        val exception = response.exception
                        _note.emit(NetworkResult.Failure(exception = exception))
                    }
                }
            }
        }
    }
}