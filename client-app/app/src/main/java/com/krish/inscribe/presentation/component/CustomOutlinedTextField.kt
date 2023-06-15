package com.krish.inscribe.presentation.component

import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextFieldColors
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusManager
import androidx.compose.ui.text.Placeholder
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.VisualTransformation
import com.krish.inscribe.ui.theme.TertiaryColor
import com.krish.inscribe.ui.theme.geologicaFont

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CustomOutlinedTextField(
    modifier: Modifier = Modifier,
    value: String,
    onValueChange: (String) -> Unit,
    label: String,
    placeholder: String,
    leadingIcon: @Composable (() -> Unit)? = null,
    trailingIcon: @Composable (() -> Unit)? = null,
    visualTransformation: VisualTransformation = VisualTransformation.None,
    focusManager: FocusManager,
    singleLine: Boolean = true,
    colors: TextFieldColors = TextFieldDefaults.outlinedTextFieldColors(
        focusedBorderColor = TertiaryColor,
        focusedLabelColor = TertiaryColor,
        cursorColor = TertiaryColor
    ),
    textStyle: TextStyle = TextStyle(
        fontFamily = geologicaFont,
        fontSize = MaterialTheme.typography.bodyMedium.fontSize,
        fontWeight = MaterialTheme.typography.bodyMedium.fontWeight
    ),
    keyboardOptions: KeyboardOptions,
    keyboardActions: KeyboardActions = KeyboardActions(
        onDone = {
            focusManager.clearFocus()
        }
    ),
) {
    OutlinedTextField(
        modifier = modifier,
        value = value,
        onValueChange = onValueChange,
        leadingIcon = leadingIcon,
        colors = colors,
        textStyle = textStyle,
        trailingIcon = trailingIcon,
        visualTransformation = visualTransformation,
        label = {
            Text(
                text = label,
                fontFamily = geologicaFont,
                fontSize = MaterialTheme.typography.bodyMedium.fontSize,
                fontWeight = MaterialTheme.typography.bodyMedium.fontWeight
            )
        },
        placeholder = {
            Text(
                text = placeholder,
                fontFamily = geologicaFont,
                fontSize = MaterialTheme.typography.bodySmall.fontSize,
                fontWeight = MaterialTheme.typography.bodySmall.fontWeight
            )
        },
        keyboardOptions = keyboardOptions,
        keyboardActions = keyboardActions,
        singleLine = singleLine,
    )
}