export default {
  name: "detail",
  title: "Details",
  type: "document",
  fields: [
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
    },
    {
      name: "eachSecTitleColor",
      title: "Each Sec Title Color",
      type: "string",
    },
    {
      name: "eachGridItemColor",
      title: "Each Grid Item Color",
      type: "string",
    },
    {
      name: "headerBackgroundColor",
      title: "Header Background Color",
      type: "string",
    },
    {
      name: "layoutState",
      title: "LayoutState",
      type: "string",
    },
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
      name: "heroDescColor",
      title: "Description Color",
      type: "string",
    },
    {
      name: "desc",
      title: "Description",
      type: "string",
    },
    {
      name: "heroColor",
      title: "HeroColor",
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
      name: "sec2BackgroundColor",
      title: "Sec2 Background Color",
      type: "string",
    },
    {
      name: "sec2Title",
      title: "Sec2 Title",
      type: "string",
    },
    {
      name: "sec2TitleColor",
      title: "Sec2 Title Color",
      type: "string",
    },
    {
      name: "sec2pricerangeColor",
      title: "Sec 2Price Range Color",
      type: "string",
    },
    {
      name: "sec2gridoneimgstate",
      title: "Sec2 Grid One Img State",
      type: "boolean",
    },
    {
      name: "sec2gridone",
      title: "Sec2 Grid One",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "secGridOneItemColor",
      title: "Sec Grid One Item Color",
      type: "string",
    },
    {
      name: "secGridOneItemTitle",
      title: "Sec Grid One Item Title",
      type: "string",
    },
    {
      name: "secGridOneItemTitleColor",
      title: "Sec Grid One Item Title Color",
      type: "string",
    },
    {
      name: "secGridOneItemText1",
      title: "Sec Grid One Item Text 1",
      type: "string",
    },
    {
      name: "secGridOneItemText1Color",
      title: "Sec Grid One Item Text 1 Color",
      type: "string",
    },
    {
      name: "secGridOneItemText2",
      title: "Sec Grid One Item Text 2",
      type: "string",
    },
    {
      name: "secGridOneItemText2Color",
      title: "Sec Grid One Item Text 2 Color",
      type: "string",
    },
    {
      name: "secGridOneItemInch1",
      title: "Sec Grid One Item Inch 1",
      type: "string",
    },
    {
      name: "secGridOneItemInch1Color",
      title: "Sec Grid One Item Inch 1 Color",
      type: "string",
    },
    {
      name: "secGridOneItemInch2",
      title: "Sec Grid One Item Inch 2",
      type: "string",
    },
    {
      name: "secGridOneItemInch2Color",
      title: "Sec Grid One Item Inch 2 Color",
      type: "string",
    },
    {
      name: "secGridOneItem2Color",
      title: "Sec Grid One Item2 Color",
      type: "string",
    },
    {
      name: "secGridOneItem2Title",
      title: "Sec Grid One Item2 Title",
      type: "string",
    },
    {
      name: "secGridOneItem2TextColor",
      title: "Sec Grid One Item2 Text Color",
      type: "string",
    },
    {
      name: "secGridOneItem2Text",
      title: "Sec Grid One Item2 Text",
      type: "string",
    },
    {
      name: "secGridOneItem3Color",
      title: "Sec Grid One Item3 Color",
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
      name: "secGridTwoItem2BgColor",
      title: "Sec Grid Two Item2 BgColor",
      type: "string",
    },
    {
      name: "secGridTwoItem2TitleColor",
      title: "Sec Grid Two Item2 Title Color",
      type: "string",
    },
    {
      name: "secGridTwoItem2Title",
      title: "Sec Grid Two Item2 Title",
      type: "string",
    },
    {
      name: "secGridTwoItem2TextColor",
      title: "Sec Grid Two Item2 Text Color",
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
      name: "secGridThreeItem1TextColor",
      title: "Sec Grid Three Item1 Text Color",
      type: "string",
    },
    {
      name: "secGridThreeItem1Text",
      title: "Sec Grid Three Item1 Text",
      type: "string",
    },
    {
      name: "secGridThreeItem2Color",
      title: "Sec Grid Three Item2 BgColor",
      type: "string",
    },
    {
      name: "secGridThreeItem2Img",
      title: "Sec Grid Three Item2 Img",
      type: "image",
    },
    {
      name: "secGridThreeItem2TextColor",
      title: "Sec Grid Three Item2 Text Color",
      type: "string",
    },
    {
      name: "secGridThreeItem2Text",
      title: "Sec Grid Three Item2 Text",
      type: "string",
    },

    {
      name: "secGridThreeItem3Img",
      title: "Sec Grid Three Item3 Img",
      type: "image",
    },
    {
      name: "secGridThreeItem3TextColor",
      title: "Sec Grid Three Item3 Text Color",
      type: "string",
    },
    {
      name: "secGridThreeItem3Text",
      title: "Sec Grid Three Item3 Text",
      type: "string",
    },
    {
      name: "sec2Grid4State",
      title: "Sec Grid Four State",
      type: "boolean",
    },
    {
      name: "secGridFourItem1Img",
      title: "Sec Grid Four Item1 Img",
      type: "image",
    },
    {
      name: "secGridFourItem1TextColor",
      title: "Sec Grid Four Item1 Text Color",
      type: "string",
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
      name: "secGridFiveItem1Color",
      title: "Sec Grid Five Item Color",
      type: "string",
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
      name: "seGridFiveItem1Text2Color",
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
      name: "sec2sec3GridItem1TitleColor",
      title: "Sec2 Sec3 Grid Item1 Title Color",
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

    // all iphone products

    // {
    //   name: "sec4GridItem1Top",
    //   type: "array",
    //   title: "Sec4 Grid Item1 Top",
    //   of: [
    //     {
    //       title: "Iphone Image",
    //       type: "object",
    //       name: "iphoneImageM",
    //       fields: [
    //         {
    //           title: "Iphone Image",
    //           name: "iphoneImage",
    //           type: "image",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Iphone Name",
    //       type: "object",
    //       name: "iphoneNameM",

    //       fields: [
    //         {
    //           title: "Iphone Name",
    //           name: "iphoneName",
    //           type: "string",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Iphone Text",
    //       type: "object",
    //       name: "iphoneTextM",
    //       fields: [
    //         {
    //           title: "Iphone Text",
    //           name: "iphoneText",
    //           type: "string",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Iphone Price",
    //       type: "object",
    //       name: "iphonePriceM",
    //       fields: [
    //         {
    //           title: "Iphone Price",
    //           name: "iphonePrice",
    //           type: "string",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "sec4GridItem2Top",
    //   type: "array",
    //   title: "Sec4 Grid Item2 Top",
    //   of: [
    //     {
    //       title: "Iphone Image",
    //       type: "object",
    //       name: "iphoneImageM",
    //       fields: [
    //         {
    //           title: "Iphone Image",
    //           name: "iphoneImage",
    //           type: "image",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Iphone Name",
    //       type: "object",
    //       name: "iphoneNameM",

    //       fields: [
    //         {
    //           title: "Iphone Name",
    //           name: "iphoneName",
    //           type: "string",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Iphone Text",
    //       type: "object",
    //       name: "iphoneTextM",
    //       fields: [
    //         {
    //           title: "Iphone Text",
    //           name: "iphoneText",
    //           type: "string",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Iphone Price",
    //       type: "object",
    //       name: "iphonePriceM",
    //       fields: [
    //         {
    //           title: "Iphone Price",
    //           name: "iphonePrice",
    //           type: "string",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "sec4GridItem3Top",
    //   type: "array",
    //   title: "Sec4 Grid Item3 Top",
    //   of: [
    //     {
    //       title: "Iphone Image",
    //       type: "object",
    //       name: "iphoneImageM",
    //       fields: [
    //         {
    //           title: "Iphone Image",
    //           name: "iphoneImage",
    //           type: "image",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Iphone Name",
    //       type: "object",
    //       name: "iphoneNameM",

    //       fields: [
    //         {
    //           title: "Iphone Name",
    //           name: "iphoneName",
    //           type: "string",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Iphone Text",
    //       type: "object",
    //       name: "iphoneTextM",
    //       fields: [
    //         {
    //           title: "Iphone Text",
    //           name: "iphoneText",
    //           type: "string",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Iphone Price",
    //       type: "object",
    //       name: "iphonePriceM",
    //       fields: [
    //         {
    //           title: "Iphone Price",
    //           name: "iphonePrice",
    //           type: "string",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "sec4GridItem4Top",
    //   type: "array",
    //   title: "Sec4 Grid Item4 Top",
    //   of: [
    //     {
    //       title: "Iphone Image",
    //       type: "object",
    //       name: "iphoneImageM",
    //       fields: [
    //         {
    //           title: "Iphone Image",
    //           name: "iphoneImage",
    //           type: "image",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Iphone Name",
    //       type: "object",
    //       name: "iphoneNameM",

    //       fields: [
    //         {
    //           title: "Iphone Name",
    //           name: "iphoneName",
    //           type: "string",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Iphone Text",
    //       type: "object",
    //       name: "iphoneTextM",
    //       fields: [
    //         {
    //           title: "Iphone Text",
    //           name: "iphoneText",
    //           type: "string",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Iphone Price",
    //       type: "object",
    //       name: "iphonePriceM",
    //       fields: [
    //         {
    //           title: "Iphone Price",
    //           name: "iphonePrice",
    //           type: "string",
    //         },
    //       ],
    //     },
    //   ],
    // },

    {
      name: "sec4GridItem1Image",
      title: "Sec4 Grid Item Image",
      type: "image",
    },
    {
      name: "sec4GridItem1Name",
      title: "Sec4 Grid Item Name",
      type: "string",
    },
    {
      name: "sec4GridItem1Text",
      title: "Sec4 Grid Item Text",
      type: "string",
    },
    {
      name: "sec4GridItem1Price",
      title: "Sec4 Grid Item Price",
      type: "string",
    },
    {
      name: "sec4GridItem2Image",
      title: "Sec4 Grid Item2 Image",
      type: "image",
    },
    {
      name: "sec4GridItem2Name",
      title: "Sec4 Grid Item2 Name",
      type: "string",
    },
    {
      name: "sec4GridItem2Text",
      title: "Sec4 Grid Item2 Text",
      type: "string",
    },
    {
      name: "sec4GridItem2Price",
      title: "Sec4 Grid Item2 Price",
      type: "string",
    },

    {
      name: "sec4GridItem3Image",
      title: "Sec4 Grid Item3 Image",
      type: "image",
    },
    {
      name: "sec4GridItem3Name",
      title: "Sec4 Grid Item3 Name",
      type: "string",
    },
    {
      name: "sec4GridItem3Text",
      title: "Sec4 Grid Item3 Text",
      type: "string",
    },
    {
      name: "sec4GridItem3Price",
      title: "Sec4 Grid Item3 Price",
      type: "string",
    },
    {
      name: "sec4GridItem4Image",
      title: "Sec4 Grid Item4 Image",
      type: "image",
    },
    {
      name: "sec4GridItem4Name",
      title: "Sec4 Grid Item4 Name",
      type: "string",
    },
    {
      name: "sec4GridItem4Text",
      title: "Sec4 Grid Item4 Text",
      type: "string",
    },
    {
      name: "sec4GridItem4Price",
      title: "Sec4 Grid Item4 Price",
      type: "string",
    },
  ],
};
