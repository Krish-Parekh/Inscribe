package com.krish.inscribe.presentation.screens.register

import android.content.SharedPreferences
import android.util.Log
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.krish.inscribe.data.model.UserLogin
import com.krish.inscribe.data.model.UserRegister
import com.krish.inscribe.data.model.UserSession
import com.krish.inscribe.repository.NoteRepository
import com.krish.inscribe.utils.Constants
import com.krish.inscribe.utils.NetworkResult
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

private const val TAG = "RegisterViewModel"

@HiltViewModel
class RegisterViewModel @Inject constructor(
    private val noteRepository: NoteRepository,
) : ViewModel() {

    private val _registerResponse = MutableStateFlow<NetworkResult<UserSession>>(NetworkResult.Idle)
    val registerResponse: StateFlow<NetworkResult<UserSession>> = _registerResponse


    fun register(userRegister: UserRegister) {
        viewModelScope.launch(Dispatchers.IO) {
            noteRepository.register(userRegister).collect { response ->
                when (response) {
                    NetworkResult.Idle -> TODO()
                    NetworkResult.Loading -> {

                    }
                    is NetworkResult.Success -> {
                        val userDetails = response.data
                        Log.d(TAG, "register: $userDetails")
                    }
                    is NetworkResult.Failure -> {
                        Log.d(TAG, "login: ${response.exception.message}")
                    }
                }
            }
        }
    }
}