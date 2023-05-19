export default {
  name: "landingProducts2",
  title: "Landing Products 2",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "desc",
      title: "Desc",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
    },
    {
      name: "learnmore",
      title: "Learn More",
      type: "string",
    },
    {
      name: "buy",
      title: "Buy",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "color",
      title: "Color",
      type: "string",
    },
  ],
};
