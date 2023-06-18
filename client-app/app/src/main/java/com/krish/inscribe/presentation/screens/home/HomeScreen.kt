package com.krish.inscribe.presentation.screens.home

import android.util.Log
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
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FabPosition
import androidx.compose.material3.FloatingActionButton
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
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.krish.inscribe.presentation.component.CustomOutlinedTextField
import com.krish.inscribe.presentation.component.NoteCard
import com.krish.inscribe.ui.theme.SurfaceColor
import com.krish.inscribe.ui.theme.TertiaryColor
import com.krish.inscribe.ui.theme.geologicaFont
import com.krish.inscribe.utils.NetworkResult


private const val TAG = "HomeScreenTAG"

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen(
        navigateToEdit: (id: String) -> Unit,
    navigateToAdd: () -> Unit,
    homeViewModel: HomeViewModel = hiltViewModel()
) {
    val noteState by homeViewModel.notes.collectAsState()
    val deleteState by homeViewModel.deleteState.collectAsState()

    LaunchedEffect(key1 = deleteState) {
        when (val result = deleteState) {
            NetworkResult.Idle -> Unit
            NetworkResult.Loading -> {
                Log.d(TAG, "Loading...")
            }

            is NetworkResult.Success -> {
                Log.d(TAG, "Deleted...")
            }

            is NetworkResult.Failure -> {
                Log.d(TAG, "Error: ${result.exception.message}")
            }
        }
    }

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
        },
        floatingActionButton = {
            FloatingActionButton(
                onClick = navigateToAdd,
                containerColor = TertiaryColor,
            ) {
                Icon(
                    imageVector = Icons.Default.Add,
                    contentDescription = "Add Note",
                    tint = SurfaceColor
                )
            }
        },
        floatingActionButtonPosition = FabPosition.End
    ) { paddingValues ->
        Box(
            modifier = Modifier
                .padding(paddingValues)
                .padding(horizontal = 12.dp)
                .fillMaxSize()
        ) {
            Column {
                SearchBar()
                Spacer(modifier = Modifier.height(8.dp))
                when (val result = noteState) {
                    NetworkResult.Idle -> Unit
                    NetworkResult.Loading -> {
                        Log.d(TAG, "Loading...")
                    }

                    is NetworkResult.Success -> {
                        val notes = result.data.notes
                        LazyColumn(
                            modifier = Modifier.fillMaxWidth(),
                            contentPadding = PaddingValues(vertical = 8.dp),
                            verticalArrangement = Arrangement.spacedBy(8.dp)
                        ) {
                            items(notes) { note ->
                                NoteCard(
                                    note = note,
                                    onClick = { noteId ->
                                        navigateToEdit.invoke(noteId)
                                    },
                                    onDelete = { noteId ->
                                        homeViewModel.deleteNote(noteId)
                                    }
                                )
                            }
                        }
                    }

                    is NetworkResult.Failure -> {
                        Log.d(TAG, "Error: ${result.exception.message}")
                    }
                }
            }
        }
    }
}


@Composable
fun SearchBar() {
    var search by rememberSaveable { mutableStateOf("") }
    val focusManager = LocalFocusManager.current
    CustomOutlinedTextField(
        modifier = Modifier.fillMaxWidth(),
        value = search,
        onValueChange = { search = it },
        label = "Search",
        placeholder = "Search",
        focusManager = focusManager,
        keyboardOptions = KeyboardOptions.Default.copy(
            autoCorrect = true,
            keyboardType = KeyboardType.Text,
            imeAction = ImeAction.Search
        ),
        leadingIcon = {
            Icon(imageVector = Icons.Default.Search, contentDescription = "Search")
        },
    )
}

@Preview(showBackground = true)
@Composable
fun HomeScreenPreview() {
    HomeScreen(navigateToEdit = {}, navigateToAdd = {})
}