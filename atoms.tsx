import { atom } from "jotai";
import { data } from "./utils";
import { atomWithStorage } from "jotai/utils";

const featured = data.filter((item) => item.featured);
export const productsAtom = atom(data);
export const cartItemsAtom = atom([]);
export const featuredAtom = atom(featured);
export const cartDrawerAtom = atom(false);
export const mobileDrawerAtom = atom(false);
export const currentItemsAtom = atom([]);
export const isHomePageAtom = atom(true);
export const isRoutePageAtom = atom(false);

const handleAddToCart = (product) => {
  console.log("product");
};
export const handleAddToCartAtom = atom(handleAddToCart);
