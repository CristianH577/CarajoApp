import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
// @ts-ignore
import { SVGTikTok } from "../assets/svgs.jsx";

export const NAV_ITEMS = [
  {
    id: "suscribite",
    href: "suscribite",
    label: "Suscribite",
    icon: HandshakeOutlinedIcon,
  },
  {
    id: "programacion",
    href: "programacion",
    label: "Programación",
    icon: LiveTvIcon,
  },
  {
    id: "nosotros",
    href: "nosotros",
    label: "Nosotros",
    icon: ArticleOutlinedIcon,
  },
  {
    id: "contacto",
    href: "contacto",
    label: "Contacto",
    icon: AlternateEmailIcon,
  },
];

export const REDES = [
  { id: "ig", icon: InstagramIcon, label: "Instagram", href: "#" },
  { id: "yt", icon: YouTubeIcon, label: "YouTube", href: "#" },
  { id: "tk", icon: SVGTikTok, label: "TikTok", href: "#" },
  { id: "x", icon: XIcon, label: "X", href: "#" },
];
export const CONTACTO = [
  { id: "mail", label: "E-mail", value: "comercial@carajo.com.ar" },
];
