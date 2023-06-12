package com.krish.inscribe.presentation.screens.edit_note

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Done
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.krish.inscribe.ui.theme.TertiaryColor
import com.krish.inscribe.ui.theme.geologicaFont

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun EditNoteScreen() {
    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(end = 16.dp),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(text = "✏️ Edit Note")
                        Icon(imageVector = Icons.Default.Done, contentDescription = "Done")
                    }
                }

            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .padding(paddingValues)
                .padding(16.dp)
        ) {
            var title by rememberSaveable { mutableStateOf("") }
            var content by rememberSaveable { mutableStateOf("") }

            val focusManager = LocalFocusManager.current
            OutlinedTextField(
                modifier = Modifier.fillMaxWidth(),
                value = title,
                onValueChange = { it ->
                    title = it
                },
                colors = TextFieldDefaults.outlinedTextFieldColors(
                    focusedBorderColor = TertiaryColor,
                    focusedLabelColor = TertiaryColor,
                    cursorColor = TertiaryColor
                ),
                textStyle = TextStyle(
                    fontFamily = geologicaFont,
                    fontSize = MaterialTheme.typography.bodyMedium.fontSize,
                    fontWeight = MaterialTheme.typography.bodyMedium.fontWeight
                ),
                label = {
                    Text(
                        text = "Title",
                        fontFamily = geologicaFont,
                        fontSize = MaterialTheme.typography.bodyMedium.fontSize,
                        fontWeight = MaterialTheme.typography.bodyMedium.fontWeight
                    )
                },
                placeholder = {
                    Text(
                        text = "Title",
                        fontFamily = geologicaFont,
                        fontSize = MaterialTheme.typography.bodySmall.fontSize,
                        fontWeight = MaterialTheme.typography.bodySmall.fontWeight
                    )
                },
                keyboardOptions = KeyboardOptions.Default.copy(
                    autoCorrect = true,
                    keyboardType = KeyboardType.Text,
                    imeAction = ImeAction.Next
                ),
                keyboardActions = KeyboardActions(
                    onDone = {
                        focusManager.clearFocus()
                    }
                ),

                singleLine = true,
            )

            Spacer(modifier = Modifier.height(8.dp))

            OutlinedTextField(
                modifier = Modifier.fillMaxSize(),
                value = content,
                onValueChange = { it ->
                    content = it
                },
                colors = TextFieldDefaults.outlinedTextFieldColors(
                    focusedBorderColor = TertiaryColor,
                    focusedLabelColor = TertiaryColor,
                    cursorColor = TertiaryColor,
                ),
                textStyle = TextStyle(
                    fontFamily = geologicaFont,
                    fontSize = MaterialTheme.typography.bodyMedium.fontSize,
                    fontWeight = MaterialTheme.typography.bodyMedium.fontWeight
                ),
                placeholder = {
                    Text(
                        text = "Content",
                        fontFamily = geologicaFont,
                        fontSize = MaterialTheme.typography.bodySmall.fontSize,
                        fontWeight = MaterialTheme.typography.bodySmall.fontWeight
                    )
                },
                keyboardOptions = KeyboardOptions.Default.copy(
                    autoCorrect = true,
                    keyboardType = KeyboardType.Email,
                    imeAction = ImeAction.Done
                ),
                keyboardActions = KeyboardActions(
                    onDone = {
                        focusManager.clearFocus()
                    }
                ),

                )
        }
    }
}


@Preview
@Composable
fun EditNoteScreenPreview() {
    EditNoteScreen()
}