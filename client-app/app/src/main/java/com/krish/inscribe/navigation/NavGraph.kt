package com.krish.inscribe.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.navArgument
import com.krish.inscribe.presentation.screens.add_note.AddNoteScreen
import com.krish.inscribe.presentation.screens.edit_note.EditNoteScreen
import com.krish.inscribe.presentation.screens.home.HomeScreen
import com.krish.inscribe.presentation.screens.login.LoginScreen
import com.krish.inscribe.presentation.screens.on_boarding.OnBoardingScreen
import com.krish.inscribe.presentation.screens.register.RegisterScreen

@Composable
fun SetupNavGraph(
    startDestination: String,
    navController: NavHostController
) {
    NavHost(
        navController = navController,
        startDestination = startDestination
    ) {
        composable(route = Screen.OnBoardingScreen.route) {
            OnBoardingScreen(
                navigateToLogin = {
                    navController.navigate(Screen.LoginScreen.route)
                }
            )
        }

        composable(route = Screen.LoginScreen.route) {
            LoginScreen(
                navigateToRegister = {
                    navController.popBackStack()
                    navController.navigate(Screen.RegisterScreen.route)
                }, navigateToHome = {
                    navController.popBackStack()
                    navController.navigate(Screen.HomeScreen.route)
                }
            )
        }

        composable(route = Screen.RegisterScreen.route) {
            RegisterScreen(
                navigateToLogin = {
                    navController.popBackStack()
                    navController.navigate(Screen.LoginScreen.route)
                }
            )
        }

        composable(route = Screen.HomeScreen.route) {
            HomeScreen(
                navigateToAdd = {
                    navController.navigate(Screen.AddNoteScreen.route)
                },
                navigateToEdit = { noteId ->
                    navController.navigate(Screen.EditNoteScreen.passNoteId(noteId))
                }
            )
        }

        composable(route = Screen.AddNoteScreen.route) {
            AddNoteScreen()
        }

        composable(
            route = Screen.EditNoteScreen.route,
            arguments = listOf(navArgument("noteId"){
                type = NavType.StringType
            })
        ) {
            EditNoteScreen()
        }
    }
}