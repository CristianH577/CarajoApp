import { REDES, NAV_ITEMS } from "../../consts/siteConfig";

import type { TypeRoute } from "../../consts/types";

import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import logo from "../../assets/imgs/logo.webp";

export default function DrawerMenu({
  openMenu = false,
  handleOpen = () => {},
}) {
  return (
    <SwipeableDrawer open={openMenu} onClose={handleOpen} onOpen={handleOpen}>
      <Box
        sx={{ width: 220 }}
        role="presentation"
        className="bg-gradient-to-t from-primary to-primary-500 text-white h-full"
        onClick={handleOpen}
      >
        <Link
          href="#"
          className="flex gap-1 p-4 pt-2 drop-shadow-md drop-shadow-white"
          underline="none"
          title="Ir al inicio"
        >
          <img
            src={logo}
            alt="Logo"
            className="max-h-10 hover:scale-95 transition-transform"
          />
        </Link>

        <Divider variant="middle" className="bg-neutral-500" />

        <List>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                component="a"
                href={"#" + item.href}
                title={"Ir a " + item.label}
                className="hover:bg-gradient-to-r from-secondary to-secondary-500"
              >
                <ListItemIcon className="min-w-0 justify-center me-6">
                  {item?.icon && <item.icon className="h-7 w-fit text-white" />}
                </ListItemIcon>

                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider className="bg-neutral-500" />

        <List>
          {REDES.map((item: TypeRoute) => (
            <ListItem
              key={item.label}
              disablePadding
              secondaryAction={<OpenInNewIcon className="text-neutral-500" />}
            >
              <ListItemButton
                component="a"
                href={item.href}
                title={"Ir a " + item.label}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gradient-to-r from-secondary to-secondary-500"
              >
                <ListItemIcon className="min-w-0 justify-center me-6">
                  {item?.icon && <item.icon className="h-6 w-fit text-white" />}
                </ListItemIcon>

                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
}
