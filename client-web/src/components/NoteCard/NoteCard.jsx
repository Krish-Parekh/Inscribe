import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
const styles = {
  date: {
    fontFamily: "var(--font-family)",
    fontWeight: "var(--fw-semibold)",
    color: "var(--secondary-color)",
  },
  title: {
    fontFamily: "var(--font-family)",
    fontWeight: "var(--fw-bold)",
  },
  content: {
    fontFamily: "var(--font-family)",
    fontWeight: "var(--fw-regular)",
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 6,
  },
  card: {
    width: { xs: "100%", lg: "450px" },
    borderRadius: "8px",
  },
  cardContent: {
    height: "100%",
  },
  button: {
    fontFamily: "var(--font-family)",
    marginTop: "auto",
  },
};
const NoteCard = ({ id, title, content, timestamp }) => {
  return (
    <Card variant="outlined" sx={styles.card}>
      <CardContent sx={styles.cardContent}>
        <Stack direction="column" spacing={1} sx={{ height: "100%" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Typography variant="subtitle1" component="div" sx={styles.date}>
              {timestamp}
            </Typography>
            <Tooltip title="Delete" placement="left">
              <IconButton>
                <ClearRoundedIcon />
              </IconButton>
            </Tooltip>
          </Stack>
          <Typography variant="h6" component="div" sx={styles.title}>
            {title}
          </Typography>
          <Typography variant="body1" component="div" sx={styles.content}>
            {content}
          </Typography>
          <Button variant="outlined" sx={styles.button}>
            <Link to={`/note/${id}`} style={{ textDecoration: "none" }}>
              Read More
            </Link>
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
