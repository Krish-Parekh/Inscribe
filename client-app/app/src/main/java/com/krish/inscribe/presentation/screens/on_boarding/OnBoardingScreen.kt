package com.krish.inscribe.presentation.screens.on_boarding


import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.krish.inscribe.R
import com.krish.inscribe.ui.theme.SecondaryColor
import com.krish.inscribe.ui.theme.TertiaryColor
import com.krish.inscribe.ui.theme.geologicaFont
import com.krish.inscribe.ui.theme.geologicaFontFamily

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun OnBoardingScreen(
    navigateToLogin: () -> Unit,
    boardingScreenViewModel: BoardingScreenViewModel = hiltViewModel()
) {
    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(
                        text = "✏️ Inscribe",
                        fontFamily = geologicaFont,
                    )
                },
                modifier = Modifier.background(Color.Transparent)
            )
        }
    ) { paddingValues: PaddingValues ->
        Box(
            modifier = Modifier
                .padding(top = paddingValues.calculateTopPadding())
                .padding(horizontal = 16.dp)
                .padding(bottom = 16.dp)
                .fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            Column(
                modifier = Modifier.fillMaxSize(),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center
            ) {
                Image(
                    modifier = Modifier
                        .fillMaxWidth()
                        .weight(0.7f),
                    painter = painterResource(id = R.drawable.on_boarding_banner),
                    contentDescription = "onBoardingBanner"
                )
                Spacer(Modifier.height(8.dp))
                Column(
                    modifier = Modifier.weight(0.3f),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.SpaceEvenly
                ) {
                    Text(
                        buildAnnotatedString {
                            append("Craft Your ")
                            withStyle(style = SpanStyle(color = TertiaryColor)) {
                                append("Idea")
                            }
                            append("\nCraft Your Future!")
                        },
                        fontFamily = geologicaFont,
                        fontSize = geologicaFontFamily.headlineMedium.fontSize,
                        textAlign = TextAlign.Center
                    )
                    Spacer(Modifier.height(8.dp))
                    Text(
                        text = "Unleash Your Creativity, Sculpt Your Thoughts, and Shape Your Success with Inscribe’s Artful Note-Taking Experience.",
                        fontFamily = geologicaFont,
                        fontSize = geologicaFontFamily.bodySmall.fontSize,
                        fontWeight = geologicaFontFamily.bodySmall.fontWeight,
                        textAlign = TextAlign.Center,
                        color = SecondaryColor
                    )
                    Spacer(Modifier.height(16.dp))
                    Button(
                        modifier = Modifier.fillMaxWidth(),
                        colors = ButtonDefaults.buttonColors(TertiaryColor),
                        onClick = {
                            boardingScreenViewModel.saveOnBoardingState(true)
                            navigateToLogin.invoke()
                        }
                    ) {
                        Text(
                            text = "Get Started",
                            fontFamily = geologicaFont,
                        )
                    }
                }
            }
        }
    }
}


@Preview
@Composable
fun OnBoardingScreenPreview() {
    OnBoardingScreen(navigateToLogin = {})
}