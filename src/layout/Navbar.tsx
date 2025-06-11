import { useState } from "react";

import { NAV_ITEMS } from "../consts/siteConfig";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Button, Link } from "@mui/material";

import DrawerMenu from "./NavBar/DrawerMenu";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

import logo from "../assets/imgs/logo.webp";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenDrawer = () => setOpenMenu(!openMenu);

  return (
    <AppBar
      position="static"
      className="bg-gradient-to-b from-primary to-primary-500 pb-1"
    >
      <Toolbar className="w-full max-w-6xl self-center">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          className="xs:me-2 md:hidden"
          onClick={handleOpenDrawer}
        >
          <MenuOpenIcon className="text-4xl hover:text-secondary-300 hover:scale-105 transition-transform" />
        </IconButton>

        <Link
          href="#"
          className="flex-grow flex gap-1 drop-shadow-md drop-shadow-white"
          underline="none"
          title="Ir al inicio"
        >
          <img
            src={logo}
            alt="Logo"
            loading="lazy"
            className="max-h-10 hover:scale-95 transition-transform"
          />
        </Link>

        <ul className="hidden md:flex gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={"#" + item.href}
              title={"Ir a " + item.label}
              className={
                "hover:bg-gradient-to-r from-secondary to-secondary-500 flex items-center gap-1 p-2 rounded-lg border-2 border-transparent hover:border-white transition-all" +
                (item.id === "suscribite" ? " uppercase font-bold" : "")
              }
            >
              {item?.icon && (
                <item.icon
                  className={
                    "w-fit text-white " +
                    (item.id === "suscribite" ? "h-8" : "h-6")
                  }
                />
              )}

              <p>{item.label}</p>
            </a>
          ))}
        </ul>

        <Button
          href="#suscribite"
          title="Suscribite"
          className="hover:scale-105 text-white transition-all bg-secondary rounded-lg px-4 drop-shadow-[0_0_3px_white] hover:drop-shadow-[0_3px_5px_white] font-bold md:hidden"
          startIcon={<HandshakeOutlinedIcon className="h-8 w-fit" />}
          classes={{
            startIcon: "me-0 xs:me-2",
          }}
        >
          <span className="hidden xs:block">Suscribite</span>
        </Button>
      </Toolbar>

      <DrawerMenu openMenu={openMenu} handleOpen={handleOpenDrawer} />
    </AppBar>
  );
}
