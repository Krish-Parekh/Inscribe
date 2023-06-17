package com.krish.inscribe.utils

sealed class NetworkResult<out T> {
    data class Success<out T>(val data: T): NetworkResult<T>()
    data class Failure(val exception: Exception): NetworkResult<Nothing>()
    object Loading: NetworkResult<Nothing>()
    object Idle: NetworkResult<Nothing>()
}