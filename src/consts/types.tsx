import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

export type TypeObjectGeneral = { [key: string]: any };

export type TypeIcon = OverridableComponent<SvgIconTypeMap>;

export type TypeRoute = {
  id: string;
  label: string;
  href: string;
  icon?: TypeIcon;
};
