package com.krish.inscribe.presentation.screens.add_note

import android.content.SharedPreferences
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.krish.inscribe.data.model.request.NoteRequest
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
class AddNoteViewModel @Inject constructor(
    private val noteRepository: NoteRepository,
    private val sharedPreferences: SharedPreferences,
) : ViewModel() {

    private val _noteState : MutableStateFlow<NetworkResult<String>> = MutableStateFlow(NetworkResult.Loading)
    val noteState : StateFlow<NetworkResult<String>> = _noteState

    fun create(noteRequest: NoteRequest) {
        viewModelScope.launch(Dispatchers.IO) {
            val userId = sharedPreferences.getString(USER_ID, "").toString()
            noteRequest.userId = userId
            noteRepository.create(noteRequest).collect { response ->
                when(response){
                    NetworkResult.Idle -> Unit
                    NetworkResult.Loading -> {
                        _noteState.emit(NetworkResult.Loading)
                    }
                    is NetworkResult.Success -> {
                        val data = response.data
                        _noteState.emit(NetworkResult.Success(data = data.message))
                    }
                    is NetworkResult.Failure -> {
                        val exception = response.exception
                        _noteState.emit(NetworkResult.Failure(exception = exception))
                    }
                }
            }
        }
    }


}