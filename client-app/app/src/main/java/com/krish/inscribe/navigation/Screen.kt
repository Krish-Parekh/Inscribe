package com.krish.inscribe.navigation

sealed class Screen(val route: String) {
    object OnBoardingScreen : Screen("on_boarding")
    object LoginScreen: Screen("login")
    object RegisterScreen: Screen("register")
    object HomeScreen: Screen("home")
    object AddNoteScreen: Screen("add_note")
    object EditNoteScreen: Screen("edit_note")
}
