export default {
  name: "details2",
  title: "Details 2",
  type: "document",
  fields: [
    {
      name: "heroBg",
      title: "Hero Bacground Img",
      type: "image",
    },
    {
      name: "heroName",
      title: "Hero Name",
      type: "string",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "navBg",
      title: "Nav Bg",
      type: "string",
    },
    {
      name: "navColor",
      title: "Nav Color",
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
      name: "heroTitle",
      title: "Hero Title",
      type: "image",
    },
    {
      name: "heroTitleString",
      title: "Hero Title String",
      type: "string",
    },
    {
      name: "reference",
      title: "reference",
      type: "reference",
      to: [{ type: "landingProducts2" }],
    },

    {
      name: "secBg",
      title: "Sec Bg",
      type: "string",
    },
    {
      name: "secTitle",
      title: "Sec Title",
      type: "string",
    },
    {
      name: "secTitleColor",
      title: "Sec Title Color",
      type: "string",
    },
    {
      name: "secText",
      title: "Sec Text",
      type: "string",
    },
  ],
};
