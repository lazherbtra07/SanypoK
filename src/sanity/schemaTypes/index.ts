import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";

import { productType } from "./productType";
import { furniture } from "./furniture";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, productType, furniture],
};
