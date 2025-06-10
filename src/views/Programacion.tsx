import { useEffect, useState } from "react";

import { IconButton } from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const images_all = import.meta.glob(
  "../assets/imgs/programacion/**/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
  }
);
const srcs = Object.entries(images_all).map(
  ([_, module]) => (module as { default: string }).default
);

export default function Programacion() {
  const [index, setIndex] = useState(0);

  const handleIndex = (num: number) => {
    let i = index + num;
    if (i === srcs.length) {
      i = 0;
    } else if (i < 0) {
      i = srcs.length - 1;
    }
    setIndex(i);
  };

  useEffect(() => {
    const handleResetView = () => setIndex(0);
    window.addEventListener("resize", handleResetView);
    return () => window.removeEventListener("resize", handleResetView);
  }, []);

  useEffect(() => {
    const element = document.getElementById(`slide-${index}`);
    if (element) {
      element.scrollIntoView({
        block: "nearest",
      });
    }
  }, [index]);

  return (
    <section id="programacion" className="py-8 overflow-hidden">
      <h2 className="font-bold text-3xl text-center font-['titulo']">
        Mira nuestra programación!
      </h2>

      <article className="relative w-full overflow-x-hidden">
        <IconButton
          title="Anterior"
          className="absolute left-4 top-1/2 bg-white opacity-40 hover:opacity-100"
          onClick={() => handleIndex(-1)}
        >
          <ChevronLeftIcon />
        </IconButton>

        <IconButton
          title="Siguiente"
          className="absolute right-4 top-1/2 bg-white opacity-40 hover:opacity-100"
          onClick={() => handleIndex(1)}
        >
          <ChevronRightIcon />
        </IconButton>

        <article className="flex items-center justify-center gap-1 w-full absolute bottom-6 ">
          {srcs.map((_, i) => (
            <div
              key={i}
              className="rounded-full border-2 h-5 w-5 p-1 flex items-center justify-center"
            >
              <div
                className="data-[active=true]:bg-secondary-600 hover:bg-white cursor-pointer rounded-full h-2 w-2"
                data-active={index === i}
                onClick={() => setIndex(i)}
              ></div>
            </div>
          ))}
        </article>

        <article className="overflow-x-scroll scroll-smooth scrollbar-hidden min-h-48">
          <ul className="flex max-xs:gap-4 w-fit py-2 sm:py-4 select-none">
            {srcs.map((src, i) => (
              <li
                key={i}
                id={`slide-${i}`}
                className="w-screen lg:w-5xl flex items-center justify-center hover:cursor-pointer px-2"
                onClick={() => handleIndex(1)}
              >
                <img src={src} className="w-full max-w-96" />
              </li>
            ))}
          </ul>
        </article>
      </article>
    </section>
  );
}
