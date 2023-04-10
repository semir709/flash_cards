export const language = {
  name: 'language',
  title: 'Language',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of language',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description:
        'Here you are adding anything extra to tell user for specific language, for exmaple if language have two different volve for same letter etc.',
    },
  ],
}
