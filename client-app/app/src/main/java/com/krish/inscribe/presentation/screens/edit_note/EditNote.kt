package com.krish.inscribe.presentation.screens.edit_note

import android.util.Log
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Done
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
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
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.krish.inscribe.data.model.request.NoteRequest
import com.krish.inscribe.presentation.component.CustomOutlinedTextField
import com.krish.inscribe.utils.NetworkResult

private const val TAG = "EditNoteScreenTAG"

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun EditNoteScreen(
    editNoteViewModel: EditNoteViewModel = hiltViewModel()
) {
    var title by rememberSaveable { mutableStateOf("") }
    var content by rememberSaveable { mutableStateOf("") }
    var noteId by rememberSaveable { mutableStateOf("") }

    val focusManager = LocalFocusManager.current
    val noteState by editNoteViewModel.note.collectAsState()

    LaunchedEffect(key1 = noteState) {
        when (val result = noteState) {
            NetworkResult.Idle -> Unit
            NetworkResult.Loading -> {
                Log.d(TAG, "EditNoteScreen: Loading....")
            }

            is NetworkResult.Success -> {
                val note = result.data.note
                noteId = note._id
                title = note.title
                content = note.content
            }

            is NetworkResult.Failure -> {
                Log.d(TAG, "EditNoteScreen: Failure ${result.exception.message}")
            }
        }
    }
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
                        Icon(
                            modifier = Modifier.clickable {
                                val noteRequest = NoteRequest(title, content)
                                editNoteViewModel.updateNote(noteId, noteRequest)
                            },
                            imageVector = Icons.Default.Done,
                            contentDescription = "Done"
                        )
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
            CustomOutlinedTextField(
                modifier = Modifier.fillMaxWidth(),
                value = title,
                onValueChange = { title = it },
                label = "Title",
                placeholder = "Title",
                focusManager = focusManager,
                keyboardOptions = KeyboardOptions.Default.copy(
                    autoCorrect = true,
                    keyboardType = KeyboardType.Text,
                    imeAction = ImeAction.Next
                ),
            )

            Spacer(modifier = Modifier.height(8.dp))

            CustomOutlinedTextField(
                modifier = Modifier.fillMaxSize(),
                value = content,
                onValueChange = { content = it },
                label = "Content",
                placeholder = "Content",
                focusManager = focusManager,
                keyboardOptions = KeyboardOptions.Default.copy(
                    autoCorrect = true,
                    keyboardType = KeyboardType.Text,
                    imeAction = ImeAction.Done
                ),
                singleLine = false
            )
        }
    }
}


@Preview
@Composable
fun EditNoteScreenPreview() {
    EditNoteScreen()
}