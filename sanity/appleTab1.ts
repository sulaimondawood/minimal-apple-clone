export default {
  name: "appleTab1",
  title: "AppleTab1",
  type: "document",
  fields: [
    {
      name: "icon",
      title: "icon",
      type: "image",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "contentTitle",
      title: "Content Title",
      type: "string",
    },

    {
      name: "subContentTitle",
      title: "Sub Content Title",
      type: "string",
    },
    {
      name: "subContentTitle2",
      title: "Sub Content Title2",
      type: "string",
    },
    {
      name: "ContentName",
      title: "Content Name",
      type: "array",
      of: [
        {
          name: "contentDetails",
          title: "Content Details",
          type: "object",
          fields: [
            {
              name: "contentSubName",
              title: "Content Sub Name",
              type: "string",
            },
            {
              name: "contentSubPrice",
              title: "Content Sub Price",
              type: "string",
            },
            {
              name: "contentSubName2",
              title: "Content Sub Name2",
              type: "string",
            },
            {
              name: "contentSubPrice2",
              title: "Content Sub Price2",
              type: "string",
            },
            {
              name: "contentSubName3",
              title: "Content Sub Name3",
              type: "string",
            },
            {
              name: "contentSubPrice3",
              title: "Content Sub Price3",
              type: "string",
            },
            {
              name: "contentSubName4",
              title: "Content Sub Name4",
              type: "string",
            },
            {
              name: "contentSubPrice4",
              title: "Content Sub Price4",
              type: "string",
            },
            {
              name: "contentSubImage",
              title: "Content Sub Image",
              type: "image",
            },
          ],
        },
      ],
    },
  ],
};
