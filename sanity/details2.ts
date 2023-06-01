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
    {
      name: "div1Bg",
      title: "Div1 Bg",
      type: "string",
    },
    {
      name: "div1Text",
      title: "Div1 Text",
      type: "string",
    },
    {
      name: "div1Image",
      title: "Div1 Image",
      type: "image",
    },
    {
      name: "div2ItemBgColor",
      title: "Div2 Item BgColor",
      type: "string",
    },
    {
      name: "div2ItemText",
      title: "Div2 Item Text",
      type: "string",
    },
    {
      name: "div2ItemTextColor",
      title: "Div2 Item Text Color",
      type: "string",
    },
    {
      name: "div2Item2Image",
      title: "Div2 Item2 Image",
      type: "image",
    },
    {
      name: "div2Item2Text",
      title: "Div2 Item2 Text",
      type: "string",
    },
    {
      name: "div2Item2TextColor",
      title: "Div2 Item2 Text Color",
      type: "string",
    },
    {
      name: "div3BgColor",
      title: "Div3 BgColor",
      type: "string",
    },
    {
      name: "div3Title",
      title: "Div3 Title",
      type: "string",
    },
    {
      name: "div3TitleColor",
      title: "Div3 Title Color",
      type: "string",
    },
    {
      name: "div3Image",
      title: "Div3 Image",
      type: "image",
    },
    {
      name: "div4Item1Text",
      title: "Div4 Item1 Text",
      type: "string",
    },
    {
      name: "div4Item1TextColor",
      title: "Div4 Item1 Text Color",
      type: "string",
    },
    {
      name: "div4Item2BgColor",
      title: "Div4 Item2 BgColor ",
      type: "string",
    },
    {
      name: "div4Item2Text",
      title: "Div4 Item2 Text ",
      type: "string",
    },
    {
      name: "div4Item2TextColor",
      title: "Div4 Item2 Text Color",
      type: "string",
    },
    {
      name: "div4Item2Image",
      title: "Div4 Item2 Image",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
