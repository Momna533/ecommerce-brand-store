import { atom } from "jotai";
import { data } from "./utils";

const featured = data.filter((item) => item.featured);
export const productsAtom = atom(data);
export const featuredAtom = atom(featured);
export const cartDrawerAtom = atom(false);
export const mobileDrawerAtom = atom(false);
