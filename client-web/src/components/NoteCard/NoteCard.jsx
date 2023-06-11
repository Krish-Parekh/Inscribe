import {
  Card,
  CardContent,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { noteCardStyles } from "../../styles/styles";

const NoteCard = ({ id, title, content, timestamp, deleteNote }) => {
  let date = new Date(timestamp);
  let formattedDate = date.getDate() + ' ' + date.toLocaleString('default', { month: 'long' }) + ', ' + date.getFullYear();
  
  return (
    <Card variant="outlined" sx={noteCardStyles.card}>
      <CardContent sx={noteCardStyles.cardContent}>
        <Stack direction="column" spacing={1} sx={noteCardStyles.container}>
          <Stack direction="row" sx={noteCardStyles.header}>
            <Typography
              variant="subtitle1"
              component="div"
              sx={noteCardStyles.date}
            >
              {formattedDate}
            </Typography>
            <Tooltip title="Delete" placement="left">
              <IconButton onClick={() => deleteNote(id)}>
                <ClearRoundedIcon />
              </IconButton>
            </Tooltip>
          </Stack>
          <Typography variant="h6" component="div" sx={noteCardStyles.title}>
            {title}
          </Typography>

          <Typography
            variant="body1"
            component="div"
            sx={noteCardStyles.content}
          >
            {content}
          </Typography>
          <Link to={`/note/${id}`} sx={{ textDecoration: "none" }}>
            <Button fullWidth variant="outlined" sx={noteCardStyles.button}>
              Read More
            </Button>
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
