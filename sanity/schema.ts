import { type SchemaTypeDefinition } from "sanity";
import landingProducts from "./landingProducts";
import landingProducts2 from "./landingProducts2";
import slider from "./slider";
import details from "./details";
import details2 from "./details2";
import appleTab1 from "./appleTab1";
import appleTab2 from "./appleTab2";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    landingProducts,
    landingProducts2,
    slider,
    details,
    details2,
    appleTab1,
    appleTab2,
  ],
};
