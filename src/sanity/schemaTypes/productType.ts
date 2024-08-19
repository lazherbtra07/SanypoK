import { DocumentTextIcon } from "@sanity/icons";
import { list } from "postcss";
import { defineArrayMember, defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      initialValue: "chair",
      options: {
        list: [
          { title: "chair", value: "chair" },
          { title: "table", value: "table" },
          { title: "lamp", value: "lamp" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "price",
      type: "number",
    }),
  ],
});
