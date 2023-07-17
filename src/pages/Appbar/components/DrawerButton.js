import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const DrawerButton = ({ data, open, navigate }) => {
  return (
    <ListItem
      key={data}
      disablePadding
      sx={{ display: "block" }}
      onClick={() => navigate(`${data.link}`)}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
            color: "black",
          }}
        >
          {data.icon}
        </ListItemIcon>
        <ListItemText
          primary={data.name}
          sx={{ opacity: open ? 1 : 0 }}
        ></ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerButton;
