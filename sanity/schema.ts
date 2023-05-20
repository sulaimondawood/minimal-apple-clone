import { type SchemaTypeDefinition } from "sanity";
import landingProducts from "./landingProducts";
import landingProducts2 from "./landingProducts2";
import slider from "./slider";
import details from "./details";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingProducts, landingProducts2, slider, details],
};
