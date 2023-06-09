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


const CustomDrawer = ({ open, toggleDrawer, handleLoginClick, handleSignupClick }) => {
  const listItems = [
    {
      icon: <AccountCircle />,
      text: "SIGN UP",
      action: handleSignupClick
    },
    {
      icon: <VpnKey />,
      text: "LOGIN",
      action: handleLoginClick
    },
  ];
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
            <ListItemButton onClick={item.action}>
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
