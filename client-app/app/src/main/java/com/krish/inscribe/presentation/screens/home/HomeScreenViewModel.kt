package com.krish.inscribe.presentation.screens.home

import android.content.SharedPreferences
import android.util.Log
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.krish.inscribe.repository.NoteRepository
import com.krish.inscribe.utils.Constants.Companion.JWT_TOKEN
import com.krish.inscribe.utils.Constants.Companion.USER_ID
import com.krish.inscribe.utils.NetworkResult
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.launch
import javax.inject.Inject

private const val TAG = "HomeScreenViewModel"
@HiltViewModel
class HomeScreenViewModel @Inject constructor(
    private val noteRepository: NoteRepository,
    private val sharedPreferences: SharedPreferences
) : ViewModel() {

    init {
        getNotes()
    }

    private fun getNotes() {
        viewModelScope.launch {
            val userId = sharedPreferences.getString(USER_ID, "").toString()
            val token = "Bearer " + sharedPreferences.getString(JWT_TOKEN, "")
            noteRepository.getNotes(token, userId).collect {response ->
                when(response){
                    NetworkResult.Idle -> TODO()
                    NetworkResult.Loading -> {

                    }
                    is NetworkResult.Success -> {
                        val data = response.data
                        Log.d(TAG, "getNotes: $data")
                    }
                    is NetworkResult.Failure -> {}
                }
            }
        }
    }

}