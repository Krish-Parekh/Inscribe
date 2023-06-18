package com.krish.inscribe.presentation.component

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Clear
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.krish.inscribe.data.model.Note
import com.krish.inscribe.ui.theme.SecondaryColor
import com.krish.inscribe.ui.theme.SurfaceColor
import com.krish.inscribe.ui.theme.geologicaFont

@Composable
fun NoteCard(
    note: Note,
    onClick: (noteId: String) -> Unit,
    onDelete: (noteId: String) -> Unit
) {
    Card(
        modifier = Modifier.fillMaxWidth().clickable { onClick(note._id) },
        colors = CardDefaults.cardColors(SurfaceColor),
        border = BorderStroke(1.dp, SecondaryColor),
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
                    text = note.updatedAt,
                    fontFamily = geologicaFont,
                    fontSize = MaterialTheme.typography.bodyMedium.fontSize,
                    fontWeight = MaterialTheme.typography.bodyMedium.fontWeight,
                    color = SecondaryColor
                )

                Icon(
                    imageVector = Icons.Default.Clear,
                    contentDescription = "delete",
                    modifier = Modifier.size(18.dp).clickable { onDelete(note._id) }
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