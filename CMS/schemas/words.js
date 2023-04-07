export const words = {
  name: 'words',
  title: 'Words',
  type: 'document',
  fields: [
    {
      name: 'word',
      title: 'Word',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'translation',
      title: 'Translation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pronunciation',
      title: 'Pronunciation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'context',
      title: 'Context',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gramar',
      title: 'Gramar',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'No any rules',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'language',
      title: 'Language',
      type: 'reference',
      to: [{type: 'language'}],
    },
  ],
}
