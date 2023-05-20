export default {
  name: "detail",
  title: "Details",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "reference",
      title: "Reference",
      type: "reference",
      to: [{ type: "landingProducts" }, { type: "landingProducts2" }],
    },
    {
      name: "desc",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "bannerimg",
      title: "Banner Image",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
