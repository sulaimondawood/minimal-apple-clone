import { type SchemaTypeDefinition } from "sanity";
import landingProducts from "./landingProducts";
import landingProducts2 from "./landingProducts2";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingProducts, landingProducts2],
};
