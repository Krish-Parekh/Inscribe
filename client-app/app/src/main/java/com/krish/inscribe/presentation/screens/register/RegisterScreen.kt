package com.krish.inscribe.presentation.screens.register

import android.util.Log
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.VisibilityOff
import androidx.compose.material.icons.rounded.Visibility
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.krish.inscribe.data.model.request.RegisterRequest
import com.krish.inscribe.presentation.component.CustomOutlinedTextField
import com.krish.inscribe.ui.theme.SecondaryColor
import com.krish.inscribe.ui.theme.TertiaryColor
import com.krish.inscribe.ui.theme.geologicaFont
import com.krish.inscribe.utils.NetworkResult


private const val TAG = "RegisterScreenTAG"

@Composable
fun RegisterScreen(
    navigateToLogin: () -> Unit,
    registerViewModel: RegisterViewModel = hiltViewModel()
) {
    val registerState by registerViewModel.registerState.collectAsState()
    val focusManager = LocalFocusManager.current
    var username by rememberSaveable { mutableStateOf("") }
    var email by rememberSaveable { mutableStateOf("") }
    var password by rememberSaveable { mutableStateOf("") }
    var showPassword by rememberSaveable { mutableStateOf(false) }
    LaunchedEffect(key1 = registerState) {
        when (val result = registerState) {
            NetworkResult.Idle -> Unit
            NetworkResult.Loading -> {
                Log.d(TAG, "RegisterScreen: Loading...")
            }
            is NetworkResult.Success -> {
                val message = result.data.message
                Log.d(TAG, "RegisterScreen: $message")
                navigateToLogin.invoke()
            }

            is NetworkResult.Failure -> {
                val exception = result.exception
                val message = exception.message
                Log.d(TAG, "RegisterScreen: $message")
            }
        }
    }


    Box(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier.fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = "Create an Account",
                fontFamily = geologicaFont,
                fontSize = MaterialTheme.typography.headlineSmall.fontSize,
                fontWeight = MaterialTheme.typography.headlineSmall.fontWeight,
            )
            Text(
                text = "Let’s Signup. Fill in your details to get started with our note-taking app",
                fontFamily = geologicaFont,
                fontSize = MaterialTheme.typography.bodySmall.fontSize,
                fontWeight = MaterialTheme.typography.bodySmall.fontWeight,
                textAlign = TextAlign.Center,
                color = SecondaryColor
            )

            Spacer(modifier = Modifier.height(22.dp))

            CustomOutlinedTextField(
                modifier = Modifier.fillMaxWidth(),
                value = username,
                onValueChange = { username = it },
                label = "Username",
                placeholder = "Username",
                focusManager = focusManager,
                keyboardOptions = KeyboardOptions.Default.copy(
                    autoCorrect = true,
                    keyboardType = KeyboardType.Text,
                    imeAction = ImeAction.Next
                ),
            )

            Spacer(modifier = Modifier.height(12.dp))

            CustomOutlinedTextField(
                modifier = Modifier.fillMaxWidth(),
                value = email,
                onValueChange = { email = it },
                label = "Email",
                placeholder = "Email",
                focusManager = focusManager,
                keyboardOptions = KeyboardOptions.Default.copy(
                    autoCorrect = true,
                    keyboardType = KeyboardType.Email,
                    imeAction = ImeAction.Next
                )
            )

            Spacer(modifier = Modifier.height(12.dp))

            CustomOutlinedTextField(
                modifier = Modifier.fillMaxWidth(),
                value = password,
                onValueChange = { password = it },
                label = "Password",
                placeholder = "Password",
                focusManager = focusManager,
                visualTransformation = if (showPassword) VisualTransformation.None else PasswordVisualTransformation(),
                trailingIcon = {
                    val icon = if (showPassword) {
                        Icons.Rounded.Visibility
                    } else {
                        Icons.Default.VisibilityOff
                    }
                    IconButton(onClick = { showPassword = !showPassword }) {
                        Icon(icon, contentDescription = "Visibility")
                    }
                },
                keyboardOptions = KeyboardOptions.Default.copy(
                    autoCorrect = true,
                    keyboardType = KeyboardType.Password,
                    imeAction = ImeAction.Done
                )
            )

            Spacer(modifier = Modifier.height(12.dp))

            Button(
                modifier = Modifier.fillMaxWidth(),
                colors = ButtonDefaults.buttonColors(TertiaryColor),
                onClick = {
                    val registerRequest = RegisterRequest(username, email, password)
                    registerViewModel.register(registerRequest)
                }
            ) {
                Text(
                    text = "Register",
                    fontFamily = geologicaFont,
                )
            }
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                buildAnnotatedString {
                    append("Have an account? ")
                    withStyle(style = SpanStyle(color = TertiaryColor)) {
                        append("Login")
                    }
                },
                fontFamily = geologicaFont,
                fontSize = MaterialTheme.typography.bodySmall.fontSize,
                fontWeight = MaterialTheme.typography.bodySmall.fontWeight,
                textAlign = TextAlign.Center,
                modifier = Modifier.clickable(onClick = navigateToLogin),
            )
        }
    }
}

@Preview(showBackground = true)
@Composable
fun RegisterScreenPreview() {
    RegisterScreen(navigateToLogin = {})
}