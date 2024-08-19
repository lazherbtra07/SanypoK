import { defineType, defineField } from "sanity";

export const furniture = defineType({
  name: "furniture",
  title: "Furniture",
  type: "document",
  fields: [
    defineField({
      name: "value",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
