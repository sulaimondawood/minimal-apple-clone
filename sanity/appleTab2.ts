export default {
  name: "appleTab2",
  title: "Apple Tab2",
  type: "document",
  fields: [
    {
      name: "btnText1",
      type: "string",
      title: "Btn Text1",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "btnText1",
      },
    },
    {
      name: "btnText2",
      type: "string",
      title: "Btn Text2",
    },
    {
      name: "title1",
      type: "string",
      title: "Title1",
    },
    {
      name: "title2",
      type: "string",
      title: "Title2",
    },
    {
      name: "extraDetails",
      title: "Extra Details",
      type: "array",
      of: [
        {
          name: "details",
          title: "Details",
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
            },
            {
              name: "step",
              title: "Step",
              type: "string",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "desc",
              title: "Desc",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
