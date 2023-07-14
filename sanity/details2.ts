export default {
  name: "details2",
  title: "Details 2",
  type: "document",
  fields: [
    {
      name: "layoutState",
      title: "LayoutState",
      type: "string",
    },
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
      name: "heroDesc",
      title: "Hero Desc",
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

    // grid 5 begin here
    {
      name: "div5BgColor",
      title: "Div5 BgColor",
      type: "string",
    },

    {
      name: "div5Title",
      title: "Div5 Title",
      type: "string",
    },
    {
      name: "div5TitleColor",
      title: "Div5 Title Color",
      type: "string",
    },

    {
      name: "div5Image",
      title: "Div5 Image",
      type: "image",
    },

    // div6 starts
    {
      name: "div6BgColor",
      title: "Div6 BgColor",
      type: "string",
    },
    {
      name: "div6Text",
      title: "Div6 Text",
      type: "string",
    },
    {
      name: "div6Title",
      title: "Div6 Title",
      type: "string",
    },

    // div7 starts

    {
      name: "sec2BgColor",
      title: "Sec2 BgColor ",
      type: "image",
    },
    {
      name: "sec2Img",
      title: "Sec2 Image",
      type: "image",
    },
    {
      name: "sec2GrandTitle",
      title: "Sec2 Grand Title",
      type: "string",
    },
    {
      name: "sec2Title",
      title: "Sec2 Title",
      type: "string",
    },
    {
      name: "sec2Text",
      title: "Sec2 Text",
      type: "string",
    },
    {
      name: "sec2Title2",
      title: "Sec2 Title2",
      type: "string",
    },
    {
      name: "sec2Text2",
      title: "Sec2 Text2",
      type: "string",
    },

    // cartfkmmgrkgmrk
    {
name:'quantity',
title: 'Cart Quantity',
type: 'number'
    },
    {
      name: "cartImages",
      title: "Cart Images",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
    },

    {
      name: "cartProductModel",
      title: "Cart Product Model",
      type: "array",
      of: [
        {
          name: "cartP",
          title: "Cart P",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "desc",
              title: "Desc",
              type: "string",
            },
            {
              name: "price",
              title: "Price",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "cartProductBox",
      title: "Cart Product Box",
      type: "array",
      of: [
        {
          name: "cartBox",
          title: "Cart Box",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
            },
          ],
        },
      ],
    },

    {
      name: "bagImage",
      title: "Bag Image",
      type: "image",
    },
  ],
};
