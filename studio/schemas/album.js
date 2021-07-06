export default {
  name: "album",
  title: "Album",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Album Name",
      type: "string",
    },
    {
      name: "featured",
      title: "Is Album Featured on Home Page",
      type: "boolean",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],

  preview: {
    select: {
      title: "title",
      category: "category",
      media: "mainImage",
    },
    prepare(selection) {
      const { title, category } = selection;
      return !!category
        ? {
            title: `${category.title} // ${title}`,
            ...selection,
          }
        : { title, ...selection };
    },
  },
};
