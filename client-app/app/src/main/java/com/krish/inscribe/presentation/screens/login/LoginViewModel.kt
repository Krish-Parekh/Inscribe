package com.krish.inscribe.presentation.screens.login

import android.content.SharedPreferences
import android.util.Log
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.krish.inscribe.data.model.UserLogin
import com.krish.inscribe.data.model.UserSession
import com.krish.inscribe.repository.NoteRepository
import com.krish.inscribe.utils.Constants.Companion.JWT_TOKEN
import com.krish.inscribe.utils.Constants.Companion.USER_ID
import com.krish.inscribe.utils.NetworkResult
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

private const val TAG = "LoginViewModel"
@HiltViewModel
class LoginViewModel @Inject constructor(
    private val noteRepository: NoteRepository,
    private val sharedPreferences: SharedPreferences
) : ViewModel() {

    private val _loginResponse = MutableStateFlow<NetworkResult<UserSession>>(NetworkResult.Idle)
    val loginResponse: StateFlow<NetworkResult<UserSession>> = _loginResponse


    fun login(userLogin: UserLogin) {
        viewModelScope.launch(Dispatchers.IO) {
            noteRepository.login(userLogin).collect { response ->
                when (response) {
                    NetworkResult.Idle -> TODO()
                    NetworkResult.Loading -> {

                    }
                    is NetworkResult.Success -> {
                        val token = response.data.token
                        val userId = response.data.user._id
                        sharedPreferences.edit().putString(JWT_TOKEN, token).apply()
                        sharedPreferences.edit().putString(USER_ID, userId).apply()
                    }
                    is NetworkResult.Failure -> {
                        Log.d(TAG, "login: ${response.exception.message}")
                    }
                }
            }
        }
    }
}