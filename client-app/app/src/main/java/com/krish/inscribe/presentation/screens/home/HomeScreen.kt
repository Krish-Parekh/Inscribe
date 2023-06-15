package com.krish.inscribe.presentation.screens.home

import android.annotation.SuppressLint
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Clear
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FabPosition
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
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
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.krish.inscribe.presentation.component.CustomOutlinedTextField
import com.krish.inscribe.ui.theme.SecondaryColor
import com.krish.inscribe.ui.theme.SurfaceColor
import com.krish.inscribe.ui.theme.TertiaryColor
import com.krish.inscribe.ui.theme.geologicaFont


data class Note(
    val id: String,
    val authorId: String,
    val title: String,
    val content: String,
    val timestamp: String,
)

val notes = listOf<Note>(
    Note(
        "1",
        "a",
        "Preparing for android interview",
        "We need to look into the documentation",
        "26 May, 2023"
    ),
    Note(
        "2",
        "b",
        "Understanding Kotlin Coroutines",
        "It's vital to understand how coroutines work for asynchronous programming",
        "27 May, 2023"
    ),
    Note(
        "3",
        "c",
        "Mastering Jetpack Compose",
        "Jetpack Compose is the future of Android UI development",
        "28 May, 2023"
    ),
    Note(
        "4",
        "d",
        "Working with Android Animations",
        "Animations are key to make the UI attractive",
        "29 May, 2023"
    ),
    Note(
        "5",
        "e",
        "Building a REST API client",
        "Fetching data from server is a common task",
        "30 May, 2023"
    ),
    Note(
        "6",
        "f",
        "Implementing Dark Mode",
        "Dark mode is a popular feature these days",
        "31 May, 2023"
    )
)


@OptIn(ExperimentalMaterial3Api::class)
@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@Composable
fun HomeScreen(
    navigateToEdit: (id: String) -> Unit,
    navigateToAdd: () -> Unit
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
                LazyColumn(
                    modifier = Modifier.fillMaxWidth(),
                    contentPadding = PaddingValues(vertical = 8.dp),
                    verticalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    items(notes) { note ->
                        NoteCard(note = note)
                    }
                }
            }
        }
    }
}

@Composable
fun NoteCard(note: Note) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(SurfaceColor),
        border = BorderStroke(1.dp, SecondaryColor)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 8.dp)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = note.timestamp,
                    fontFamily = geologicaFont,
                    fontSize = MaterialTheme.typography.bodyMedium.fontSize,
                    fontWeight = MaterialTheme.typography.bodyMedium.fontWeight,
                    color = SecondaryColor
                )

                Icon(
                    imageVector = Icons.Default.Clear,
                    contentDescription = "delete",
                    modifier = Modifier.size(18.dp)
                )
            }

            Text(
                text = note.title,
                fontFamily = geologicaFont,
                fontSize = MaterialTheme.typography.titleMedium.fontSize,
                fontWeight = MaterialTheme.typography.titleMedium.fontWeight
            )
            Text(
                text = note.content,
                fontFamily = geologicaFont,
                fontSize = MaterialTheme.typography.titleSmall.fontSize,
                fontWeight = MaterialTheme.typography.titleSmall.fontWeight
            )
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