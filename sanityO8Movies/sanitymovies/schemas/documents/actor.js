const actor = {
   type: 'document',
   name: 'actor',
   title: 'Actor',
   fields: [
      {
         type: 'string',
         name: 'full_name',
         title: 'Full name',
      },
      {
         type: 'slug',
         name: 'slug',
         title: 'Name',
         validation: (Rule) => Rule.required(),
         options: {
            source: 'full_name',
            slugify: (input) => input.toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 80),
         },
      },
   ]
}
export default actor