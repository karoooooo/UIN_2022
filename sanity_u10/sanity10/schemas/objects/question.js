export default {
  type: 'object',
  name: 'question',
  title: 'Spørsmål og svar',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Spørsmål',  
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'array',
      name: 'answers',
      title: 'Svar',
      of: [{type: 'answer'}],
      validation: (Rule) => 
        Rule.custom((answers) => {
          return answers?.filter((answer) => answer?.correct)?.length > 0 ? true 
            : 'Må ha minst ett riktig svar'
          }),
    },
  ],
}