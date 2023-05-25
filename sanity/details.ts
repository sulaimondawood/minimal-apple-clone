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
    {
      name: "sec2Title",
      title: "Sec2 Title",
      type: "string",
    },
    {
      name: "sec2pricerange",
      title: "Sec 2Price Range",
      type: "string",
    },
    {
      name: "sec2gridone",
      title: "Sec2 Grid One",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
