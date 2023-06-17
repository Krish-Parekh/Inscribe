package com.krish.inscribe.presentation.screens.login

import android.content.SharedPreferences
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.krish.inscribe.data.model.request.LoginRequest
import com.krish.inscribe.data.model.response.LoginResponse
import com.krish.inscribe.repository.AuthRepository
import com.krish.inscribe.utils.Constants.Companion.JWT_TOKEN
import com.krish.inscribe.utils.Constants.Companion.USER_ID
import com.krish.inscribe.utils.NetworkResult
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class LoginViewModel @Inject constructor(
    private val authRepository: AuthRepository,
    private val sharedPreferences: SharedPreferences
) : ViewModel() {

    private val _loginState: MutableStateFlow<NetworkResult<LoginResponse>> = MutableStateFlow(NetworkResult.Idle)
    val loginState: StateFlow<NetworkResult<LoginResponse>> = _loginState

    fun login(loginRequest: LoginRequest) {
        viewModelScope.launch(Dispatchers.IO) {
            authRepository.login(loginRequest).collect { response ->
                when (response) {
                    NetworkResult.Idle -> Unit
                    NetworkResult.Loading -> {
                        _loginState.emit(NetworkResult.Loading)
                    }

                    is NetworkResult.Success -> {
                        val data = response.data
                        sharedPreferences.edit().putString(JWT_TOKEN, data.token).apply()
                        sharedPreferences.edit().putString(USER_ID, data.user._id).apply()
                        _loginState.emit(NetworkResult.Success(data = data))
                    }

                    is NetworkResult.Failure -> {
                        _loginState.emit(NetworkResult.Failure(exception = response.exception))
                    }
                }
            }
        }
    }

}