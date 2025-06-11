import { CONTACTO, REDES } from "../consts/siteConfig";

import { Divider, Link } from "@mui/material";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import logo from "../assets/imgs/logo.webp";

export default function Footer() {
  // const links = [
  //   // { label: "Contacto", href: "#" },
  // ];

  return (
    <footer
      id="contacto"
      className="bg-gradient-to-t from-primary to-primary-500 p-4 sm:px-8 sm:pt-8 max-sm:mt-8"
    >
      <div className="max-w-[800px] place-self-center space-y-4 w-full">
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-8 lg:py-8">
          <span className="drop-shadow-md drop-shadow-white">
            <img src={logo} alt="Logo" loading="lazy" className="max-h-20" />
          </span>

          <section className="max-sm:space-y-4 sm:flex sm:flex-row gap-8 sm:mt-4 lg:gap-12">
            {/* <article className="text-xl">
              <h2 className="font-bold">Secciones</h2>
              <ol>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      underline="hover"
                      title={`Ir a ${link.label}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </article> */}

            <article>
              <h2 className="text-xl font-bold">Redes</h2>
              <ol>
                {REDES.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center text-white"
                      title={`Ir a ${item.label}`}
                    >
                      <item.icon className="h-4 w-fit" /> {item.label}{" "}
                      <OpenInNewIcon className="h-4 w-fit" />
                    </Link>
                  </li>
                ))}
              </ol>
            </article>

            <article>
              <h2 className="text-xl font-bold">Contacto</h2>
              <ol>
                {CONTACTO.map((item) => (
                  <li key={item.label} className="max-xs:break-all">
                    <span className="font-semibold">{item.label}:</span>{" "}
                    {item.value}
                  </li>
                ))}
              </ol>
            </article>
          </section>
        </div>

        <Divider variant="middle" className="bg-neutral-600" />

        <div className="text-center text-neutral-500">
          <p>© 2025 Carajo Stream. Todos los derechos reservados.</p>

          <span>
            Diseñado por{" "}
            <Link
              href="https://github.com/CristianH577"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir al perfil de Github"
              className="text-inherit"
            >
              © VerdeAve
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
