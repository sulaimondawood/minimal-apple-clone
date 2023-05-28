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
    {
      name: "secGridFourItem1Img",
      title: "Sec Grid Four Item1 Img",
      type: "image",
    },
    {
      name: "secGridFourItem1Text",
      title: "Sec Grid Four Item1 Text",
      type: "string",
    },
    {
      name: "secGridFourItem2Img",
      title: "Sec Grid Four Item2 Img",
      type: "image",
    },
    {
      name: "secGridFiveItemText1",
      title: "Sec Grid Five Item Text 1",
      type: "string",
    },
    {
      name: "secGridFiveItemText1Color",
      title: "Sec Grid Five Item Text 1 Color",
      type: "string",
    },
    {
      name: "seGridFiveItem1Text2",
      title: "Sec Grid Five Item Text 2",
      type: "string",
    },
    {
      name: "secGridFiveItem1Text2Color",
      title: "Sec Grid Five Item Text 2 Color",
      type: "string",
    },
    {
      name: "secGridFiveItem1Img",
      title: "Sec Grid Five Item Img",
      type: "image",
    },
    {
      name: "secGridFiveItem2Text",
      title: "Sec Grid Five Item 2 Text",
      type: "string",
    },
    {
      name: "secGridFiveItem2TextColor",
      title: "Sec Grid Five Item 2 Text Color",
      type: "string",
    },
    {
      name: "secGridFiveItem2Img",
      title: "Sec Grid Five Item2 Img",
      type: "image",
    },
    {
      name: "sec2GridMainTitle",
      title: "Sec2 Grid Main Title",
      type: "string",
    },
    {
      name: "sec2GridItem1Title",
      title: "Sec2 Grid Item1 Title",
      type: "string",
    },
    {
      name: "sec2GridItem1Text",
      title: "Sec2 Grid Item1 Text",
      type: "string",
    },
    {
      name: "sec2GridItem1Image",
      title: "Sec2 Grid Item1 Image",
      type: "image",
    },
    {
      name: "sec2GridItem2Title",
      title: "Sec2 Grid Item2 Title",
      type: "string",
    },
    {
      name: "sec2GridItem2Text",
      title: "Sec2 Grid Item2 Text",
      type: "string",
    },
    {
      name: "sec2GridItem2Image",
      title: "Sec2 Grid Item2 Image",
      type: "image",
    },
    {
      name: "sec2GridItem3Title",
      title: "Sec2 Grid Item3 Title",
      type: "string",
    },
    {
      name: "sec2GridItem3Text",
      title: "Sec2 Grid Item3 Text",
      type: "string",
    },
    {
      name: "sec2GridItem3Image",
      title: "Sec2 Grid Item3 Image",
      type: "image",
    },

    {
      name: "sec3GridMainTitle",
      title: "Sec3 Grid Main Title",
      type: "string",
    },
    {
      name: "sec3GridItem1Icon",
      title: "Sec3 Grid Item1 Icon",
      type: "image",
    },
    {
      name: "sec3GridItem1Title",
      title: "Sec3 Grid Item1 Title",
      type: "string",
    },
    {
      name: "sec3GridItem1Text",
      title: "Sec3 Grid Item1 Text",
      type: "string",
    },
    {
      name: "sec3GridItem1Image",
      title: "Sec3 Grid Item1 Image",
      type: "image",
    },
    {
      name: "sec3GridItem2Icon",
      title: "Sec3 Grid Item2 Icon",
      type: "image",
    },
    {
      name: "sec3GridItem2Title",
      title: "Sec3 Grid Item2 Title",
      type: "string",
    },
    {
      name: "sec3GridItem2Text",
      title: "Sec3 Grid Item2 Text",
      type: "string",
    },
    {
      name: "sec3GridItem2Image",
      title: "Sec3 Grid Item2 Image",
      type: "image",
    },
    {
      name: "sec3GridItem3Icon",
      title: "Sec3 Grid Item3 Icon",
      type: "image",
    },
    {
      name: "sec3GridItem3Title",
      title: "Sec3 Grid Item3 Title",
      type: "string",
    },
    {
      name: "sec3GridItem3Text",
      title: "Sec3 Grid Item3 Text",
      type: "string",
    },
    {
      name: "sec3GridItem3Image",
      title: "Sec3 Grid Item3 Image",
      type: "image",
    },
  ],
};
