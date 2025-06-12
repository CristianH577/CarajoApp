import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./views/Home";
import Programacion from "./views/Programacion";
import Apoyo from "./views/Apoyo";
import Nosotros from "./views/Nosotros";

import KeyboardCapslockIcon from "@mui/icons-material/KeyboardCapslock";
import { IconButton } from "@mui/material";

import banner from "./assets/imgs/channels_banner.webp";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[url('./assets/imgs/background.png')] bg-fixed bg-cover text-white max-[200px]:break-all">
      <Navbar />

      <main className="gap-6 max-w-5xl lg:self-center">
        <Home />

        <Programacion />
        <Nosotros />
        <Apoyo />

        <img
          src={banner}
          alt="Banner de canales"
          loading="lazy"
          className="max-sm:hidden lg:rounded-t-lg"
          width={1024}
          height={170}
        />
      </main>

      <Footer />

      <IconButton
        className="fixed bottom-5 right-4 z-10 text-white border-2 hover:bg-white hover:text-primary opacity-50 hover:opacity-100"
        onClick={() => window.scrollTo(0, 0)}
      >
        <KeyboardCapslockIcon />
      </IconButton>
    </div>
  );
}

export default App;
