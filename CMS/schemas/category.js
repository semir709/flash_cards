export const category = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'category_name',
      title: 'Category name',
      type: 'string',
    },
    {
      name: 'language',
      title: 'Language',
      type: 'reference',
      to: [{type: 'language'}],
    },
  ],
}
