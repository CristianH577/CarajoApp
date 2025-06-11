import { Button } from "@mui/material";

import logo from "../assets/imgs/logo.webp";
import screenshot from "../assets/imgs/misa-screenshot.webp";

export default function Home() {
  return (
    <section className="flex sm:justify-center overflow-x-auto w-fit scrollbar-hidden">
      <article className="p-8 flex flex-col md:flex-row-reverse md:items-center gap-4 md:pgap-8 sm:w-fit">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center md:flex-col">
          <img
            src={logo}
            alt="Logo"
            loading="lazy"
            className="w-full h-fit max-w-64 drop-shadow-md drop-shadow-white"
          />
          <img
            src={screenshot}
            alt="Screenshot de la misa"
            loading="lazy"
            className="w-full h-fit max-w-96 shadow-md shadow-black rounded-lg"
          />
        </div>

        <div className="space-y-4 max-w-[500px]">
          <h1 className="text-7xl uppercase font-bold font-['titulo']">
            <div>Los pimeros </div>
            <div className="bg-secondary-500 w-fit px-2">en verla</div>
          </h1>

          <h2 className="font-semibold text-xl">
            ¿QUERÉS FINANCIAR A LA DERECHA MUNDIAL? HACELO Y LISTO.
          </h2>

          <Button
            href="#suscribite"
            title="Suscribite"
            variant="contained"
            className="bg-secondary font-semibold normal-case text-2xl p-2 sm:p-4 rounded-lg hover:scale-105 transition-transform drop-shadow-[0_0_3px_white] hover:drop-shadow-[0_0_5px_white]"
          >
            Suscribite YA, abrazo
          </Button>
        </div>
      </article>
    </section>
  );
}
