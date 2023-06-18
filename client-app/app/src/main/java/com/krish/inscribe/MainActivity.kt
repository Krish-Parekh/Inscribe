package com.krish.inscribe

import android.content.SharedPreferences
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.ui.Modifier
import androidx.navigation.compose.rememberNavController
import com.krish.inscribe.navigation.Screen
import com.krish.inscribe.navigation.SetupNavGraph
import com.krish.inscribe.ui.theme.InscribeTheme
import com.krish.inscribe.utils.Constants.Companion.BOARDING_COMPLETED
import com.krish.inscribe.utils.Constants.Companion.JWT_TOKEN
import dagger.hilt.android.AndroidEntryPoint
import javax.inject.Inject

@AndroidEntryPoint
class MainActivity : ComponentActivity() {

    @Inject
    lateinit var sharedPreferences: SharedPreferences

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            InscribeTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val navController = rememberNavController()
                    SetupNavGraph(
                        startDestination = getStartDestination(),
                        navController = navController
                    )
                }
            }
        }
    }

    private fun getStartDestination(): String {
        val token = sharedPreferences.getString(JWT_TOKEN, "")
        val onBoardingState = sharedPreferences.getBoolean(BOARDING_COMPLETED, false)
        return if (onBoardingState.not()) {
            Screen.OnBoardingScreen.route
        } else if (token.isNullOrEmpty()) {
            Screen.LoginScreen.route
        } else {
            Screen.HomeScreen.route
        }
    }
}

