const movie = {
   type: 'document',
   name: 'movie',
   title: 'Movie',
   fields: [
      {
         type: 'string',
         name: 'title',
         title: 'Title',
         validation: (Rule) => Rule.required(),
      },
      {
         type: 'reference',
         name: 'actor',
         title: 'Actor',
         to: [{ type: 'actor' }],
         description: 'Add actors here',
      },
      {
        type: 'slug',
        name: 'slug',
        title: 'Name',
        validation: (Rule) => Rule.required(),
        options: {
           source: 'title',
           slugify: (input) => input.toLowerCase()
           .replace(/\s+/g, '-')
           .slice(0, 80),
        },
      },
   ],
   preview: {
      select: {
         title: 'title',
         subtitle: 'actor.full_name',
      },
      prepare(selection) {
         const { title, subtitle } = selection
         return  {
            title,
            subtitle: `Actors: ${subtitle}`,
         }
      },
   },
}
export default movie
