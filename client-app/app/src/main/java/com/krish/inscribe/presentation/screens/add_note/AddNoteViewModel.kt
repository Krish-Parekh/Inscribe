package com.krish.inscribe.presentation.screens.add_note

import android.content.SharedPreferences
import android.util.Log
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.krish.inscribe.data.model.RequestNote
import com.krish.inscribe.repository.NoteRepository
import com.krish.inscribe.utils.Constants.Companion.JWT_TOKEN
import com.krish.inscribe.utils.Constants.Companion.USER_ID
import com.krish.inscribe.utils.NetworkResult
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import javax.inject.Inject

private val TAG = "AddNoteViewModel"
@HiltViewModel
class AddNoteViewModel @Inject constructor(
    private val noteRepository: NoteRepository,
    private val sharedPreferences: SharedPreferences
) : ViewModel() {


    fun addNote(note: RequestNote) {
        viewModelScope.launch(Dispatchers.IO) {
            val token = "Bearer " + sharedPreferences.getString(JWT_TOKEN, "")
            note.authorId = sharedPreferences.getString(USER_ID, "").toString()

            noteRepository.createNote(token, note).collect { response ->
                when(response){
                    NetworkResult.Idle -> TODO()
                    NetworkResult.Loading -> {

                    }
                    is NetworkResult.Success -> {
                        Log.d(TAG, "addNote: ${response.data}")
                    }
                    is NetworkResult.Failure -> {
                        Log.d(TAG, "Error: ${response.exception.message}")
                    }
                }
            }
        }
    }
}