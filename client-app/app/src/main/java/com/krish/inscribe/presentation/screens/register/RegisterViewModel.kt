package com.krish.inscribe.presentation.screens.register

import android.content.SharedPreferences
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.krish.inscribe.data.model.request.RegisterRequest
import com.krish.inscribe.data.model.response.RegisterResponse
import com.krish.inscribe.repository.AuthRepository
import com.krish.inscribe.utils.NetworkResult
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class RegisterViewModel @Inject constructor(
    private val authRepository: AuthRepository
) : ViewModel() {

    private val _registerState: MutableStateFlow<NetworkResult<RegisterResponse>> = MutableStateFlow(NetworkResult.Idle)
    val registerState: StateFlow<NetworkResult<RegisterResponse>> = _registerState

    fun register(registerRequest: RegisterRequest) {
        viewModelScope.launch(Dispatchers.IO) {
            authRepository.register(registerRequest).collect { response ->
                when (response) {
                    NetworkResult.Loading -> {
                        _registerState.emit(NetworkResult.Loading)
                    }

                    is NetworkResult.Success -> {
                        _registerState.emit(NetworkResult.Success(data = response.data))
                    }

                    is NetworkResult.Failure -> {
                        val exception = response.exception
                        _registerState.emit(NetworkResult.Failure(exception = exception))
                    }

                    else -> Unit
                }
            }
        }
    }
}