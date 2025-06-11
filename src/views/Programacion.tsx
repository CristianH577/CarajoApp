import { useEffect, useRef, useState } from "react";

import { LISTA_PROGRMAS } from "../consts/listas";

import { IconButton } from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const images_programacion = import.meta.glob(
  "../assets/imgs/programacion/**/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
  }
);
const srcs_programacion = Object.entries(images_programacion).map(
  ([_, module]) => (module as { default: string }).default
);
const images_logos = import.meta.glob(
  "../assets/imgs/logos/**/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
  }
);
const srcs_logos = Object.entries(images_logos).map(
  ([_, module]) => (module as { default: string }).default
);

export default function Programacion() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const [index, setIndex] = useState(0);

  const handleIndex = (num: number) => {
    let i = index + num;
    if (i === srcs_programacion.length) {
      i = 0;
    } else if (i < 0) {
      i = srcs_programacion.length - 1;
    }
    setIndex(i);
  };

  const handleMouseDown = (direction: "left" | "right") => {
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += direction === "right" ? 10 : -10;
      }
    }, 16);
  };

  const handleMouseUp = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
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
    <section id="programacion" className="py-4 sm:py-8 space-y-4">
      <h2 className="font-bold text-3xl text-center font-['titulo']">
        Mira nuestra programación!
      </h2>

      <article className="relative">
        <div className="absolute w-full h-full flex justify-between items-center p-4">
          <IconButton
            title="Anterior"
            className="bg-white opacity-20 hover:opacity-100 z-10"
            onMouseDown={() => handleMouseDown("left")}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            title="Siguiente"
            className="bg-white opacity-20 hover:opacity-100 z-10"
            onMouseDown={() => handleMouseDown("right")}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <ChevronRightIcon />
          </IconButton>
        </div>

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hidden relative"
        >
          <div className="flex gap-12 px-20 items-center w-fit lg:place-self-center ">
            {LISTA_PROGRMAS.map((programa, i) => {
              const src = srcs_logos.find((item) => item.includes(programa.id));

              return (
                <div
                  key={i}
                  className={
                    "min-w-16 drop-shadow-md drop-shadow-black hover:drop-shadow-white cursor-pointer data-[selected=true]:drop-shadow-white py-2" +
                    (programa.id === "trinchera" ? " w-72" : "")
                  }
                  data-selected={index === i}
                  onClick={() => setIndex(i)}
                >
                  <img
                    src={src}
                    alt={"Logo de " + programa.label}
                    loading="lazy"
                    className=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </article>

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

        {/* <div className="flex items-center justify-center gap-1 w-full absolute bottom-6 ">
          {srcs_programacion.map((_, i) => (
            <ul
              key={i}
              className="rounded-full border-2 h-5 w-5 p-1 flex items-center justify-center"
            >
              <li
                className="data-[active=true]:bg-secondary-600 hover:bg-white cursor-pointer rounded-full h-2 w-2"
                data-active={index === i}
                onClick={() => setIndex(i)}
              ></li>
            </ul>
          ))}
        </div> */}

        <div className="overflow-x-scroll scroll-smooth scrollbar-hidden min-h-48">
          <ul className="flex w-fit py-2 sm:py-4 select-none">
            {LISTA_PROGRMAS.map((programa, i) => {
              const src = srcs_programacion.find((item) =>
                item.includes(programa.id)
              );
              return (
                <li
                  key={i}
                  id={`slide-${i}`}
                  className="w-dvw lg:w-5xl flex items-center justify-center hover:cursor-pointer px-4"
                  onClick={() => handleIndex(1)}
                >
                  <img
                    src={src}
                    alt={"Banner de " + programa.label}
                    loading="lazy"
                    className="w-full max-w-96"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </section>
  );
}
