//@ts-ignore
import { LISTA_INTEGRANTES } from "../consts/listas.tsx";

import type { TypeIcon, TypeObjectGeneral } from "../consts/types.js";

import { Link } from "@mui/material";

import ImageCustom from "../components/ImageCustom.tsx";

import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const images_all = import.meta.glob(
  "../assets/imgs/integrantes/**/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
  }
);
const srcs = Object.entries(images_all).map(
  ([_, module]) => (module as { default: string }).default
);

type TypeRedesIconList = {
  [key: string]: TypeItemListRedes;
};

type TypeItemListRedes = {
  label: string;
  icon: TypeIcon;
};

const list_redes: TypeRedesIconList = {
  x: {
    label: "X",
    icon: XIcon,
  },
  ig: {
    label: "Instagram",
    icon: InstagramIcon,
  },
};

export default function Nosotros() {
  return (
    <section id="nosotros" className="space-y-12 p-2 xs:p-4 sm:p-6">
      <h1 className="font-bold text-3xl text-center font-['titulo']">
        El único medio NO ZURDO de Argentina
      </h1>

      <article className="space-y-12">
        {LISTA_INTEGRANTES.map((item: TypeObjectGeneral, i: number) => {
          const src = srcs.find((e) => e.includes(item.id));
          const Redes = list_redes[item.redesID as keyof TypeRedesIconList];

          return (
            <div
              key={item.id}
              className={
                "flex flex-col items-center gap-4 md:gap-8 " +
                (i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse")
              }
            >
              <ImageCustom
                src={src}
                alt={"Foto de " + item.nombre}
                className="w-full max-w-96 sm:max-w-72 md:max-w-96 rounded-lg shadow-md shadow-black"
                width={380}
                height={216}
              />

              <div className="w-full p-2 max-w-96">
                <div className="relative">
                  <span
                    className={
                      "absolute w-full h-full bg-secondary-500/70 rounded-xl shadow-md shadow-black " +
                      (i % 2 === 0 ? "-skew-4" : "skew-4")
                    }
                  ></span>

                  <div className="flex flex-col gap-1 relative z-10 p-4 pb-5">
                    <span className="text-neutral-400">{item.nombre}</span>
                    <b className="text-4xl">{item.apodo}</b>

                    <p className="inline-flex items-center gap-1">
                      <Redes.icon className="h-5 w-fit" />

                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        title={`Ir a ${Redes.label} de ${item.apodo}`}
                        className="text-white"
                      >
                        {item.arroba}
                        <OpenInNewIcon className="ms-1 h-4 w-fit text-neutral-400" />
                      </Link>
                    </p>

                    {item?.desc && <p>{item.desc}.</p>}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
}
