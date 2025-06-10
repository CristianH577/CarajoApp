import { useState, type ReactNode, type SyntheticEvent } from "react";

import { ANUAL, MENSUAL, UNICO } from "../consts/aportes.js";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button, Divider } from "@mui/material";

//@ts-ignore
import { SVGLogoPaypal } from "../assets/svgs.jsx";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`apoyo-tabpanel-${index}`}
      aria-labelledby={`apoyo-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `apoyo-tab-${index}`,
    "aria-controls": `apoyo-tabpanel-${index}`,
  };
}

const contents = [
  {
    label: "Unico",
    list: UNICO,
  },
  {
    label: "Mensual",
    list: MENSUAL,
  },
  {
    label: "Anual",
    list: ANUAL,
  },
];

export default function Apoyo() {
  const [value, setValue] = useState(1);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section
      id="suscribite"
      className="flex flex-col xs:items-center gap-4 py-8 overflow-x-auto px-2"
    >
      <h2 className="font-bold text-3xl text-center font-['titulo']">
        Apoya a la derecha mundial con tu aporte
      </h2>

      <div className="bg-white rounded-lg w-fit bg-gradient-to-t from-primary-500/80 to-white p-2 sm:p-4">
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Pestañas de apoyo"
          >
            {contents.map((content, i) => (
              <Tab
                key={i}
                label={content.label}
                className="font-bold text-lg aria-[selected=true]:text-"
                {...a11yProps(i)}
              />
            ))}
          </Tabs>
        </div>

        {contents.map((content, i) => (
          <CustomTabPanel key={i} value={value} index={i}>
            <ul className="space-y-4">
              {content.list.map((item, k) => (
                <li key={k}>
                  <Button
                    href={item.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ir a MercadoPago"
                    className="w-full rounded-lg font-bold text-secondary bg-white border-2 border-secondary hover:bg-secondary hover:text-white"
                  >
                    {new Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: "ARS",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(item.value * 1000)}{" "}
                    ARS
                  </Button>
                </li>
              ))}
            </ul>
          </CustomTabPanel>
        ))}

        <Divider variant="middle" className="bg-secondary" />

        <div className="flex flex-col text-center gap-2 p-4 sm:py-6 text-primary-600">
          <b>Si estas fuera de Argentina</b>
          <Button
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            title="Ir a Paypal"
            variant="contained"
            startIcon={<SVGLogoPaypal className="h-5 w-fit" />}
            size="large"
            className="bg-primary-600 rounded-lg font-bold"
          >
            Paypal
          </Button>
        </div>
      </div>
    </section>
  );
}
