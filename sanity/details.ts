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
    {
      name: "secGridOneItemTitle",
      title: "Sec Grid One Item Title",
      type: "string",
    },
    {
      name: "secGridOneItemText1",
      title: "Sec Grid One Item Text 1",
      type: "string",
    },
    {
      name: "secGridOneItemText2",
      title: "Sec Grid One Item Text 2",
      type: "string",
    },
    {
      name: "secGridOneItemInch1",
      title: "Sec Grid One Item Inch 1",
      type: "string",
    },
    {
      name: "secGridOneItemInch2",
      title: "Sec Grid One Item Inch 2",
      type: "string",
    },
    {
      name: "secGridOneItem2Title",
      title: "Sec Grid One Item2 Title",
      type: "string",
    },
    {
      name: "secGridOneItem2Text",
      title: "Sec Grid One Item2 Text",
      type: "string",
    },
    {
      name: "secGridOneItem3Title",
      title: "Sec Grid One Item3 Title",
      type: "string",
    },
    {
      name: "secGridOneItem3Text",
      title: "Sec Grid One Item3 Text",
      type: "string",
    },
    {
      name: "secGridTwoItem1Img",
      title: "Sec Grid Two Item1 Img",
      type: "image",
    },
    {
      name: "secGridTwoItem2Title",
      title: "Sec Grid Two Item2 Title",
      type: "string",
    },
    {
      name: "secGridTwoItem2Text",
      title: "Sec Grid Two Item2 Text",
      type: "string",
    },
    {
      name: "secGridTwoItem2Img",
      title: "Sec Grid Two Item2 Img",
      type: "image",
    },
    {
      name: "secGridThreeItem1Img",
      title: "Sec Grid Three Item1 Img",
      type: "image",
    },
    {
      name: "secGridThreeItem1Text",
      title: "Sec Grid Three Item1 Text",
      type: "string",
    },
    {
      name: "secGridThreeItem2Img",
      title: "Sec Grid Three Item2 Img",
      type: "image",
    },
    {
      name: "secGridThreeItem3Img",
      title: "Sec Grid Three Item3 Img",
      type: "image",
    },
    {
      name: "secGridThreeItem3Text",
      title: "Sec Grid Three Item3 Text",
      type: "string",
    },
  ],
};
