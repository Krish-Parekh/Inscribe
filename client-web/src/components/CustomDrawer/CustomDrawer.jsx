import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { AccountCircle, VpnKey, Close } from "@mui/icons-material";

const styles = {
  drawer: {
    position: "relative",
    fontFamily: "var(--font-family)",
    backgroundColor: "var(--tertiary-color)",
  },
  listItem: {
    color: "#FFFFFF",
  },
  listTitle: {
    variant: "body2",
    component: "div",
    fontFamily: "var(--font-family)",
    fontWeight: "var(--fw-semibold)",
    color: "#FFFFFF",
  },
};

const listItems = [
  {
    icon: <AccountCircle />,
    text: "SIGN UP",
  },
  {
    icon: <VpnKey />,
    text: "LOGIN",
  },
];

const CustomDrawer = ({ open, toggleDrawer }) => {
  return (
    <Drawer anchor="top" open={open} onClose={toggleDrawer}>
      <List sx={styles.drawer}>
        <ListItem>
          <ListItemButton onClick={toggleDrawer}>
            <ListItemIcon sx={styles.listItem}>
              <Close />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        {listItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemIcon sx={styles.listItem}>{item.icon}</ListItemIcon>
              <ListItemText>
                <Typography sx={styles.listTitle}>{item.text}</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
