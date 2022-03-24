export default {
  type: 'document',
  name: 'game',
  title: 'Spill',
  fields: [
    {
    type: 'string',
    name: 'email',
    title: 'E-post',
    },
    {
    type: 'reference',
    name: 'quiz',
    title: 'Quiz',
    to: {type: 'quiz'},
    },
  ],
}