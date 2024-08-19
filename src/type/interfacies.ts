import { LucideIcon } from "lucide-react";

export interface INavLik {
  href: string;
  title: string;
}

export interface IFurniture {
  value: string;
  image: any;
}
export type ProductCategory = "chair" | "table" | "lamp";

export interface IProduct {
  title: string;
  price: number;
  image: any;
  category: ProductCategory;
}

export interface TapItem {
  value: string;
  icon: LucideIcon;
}
