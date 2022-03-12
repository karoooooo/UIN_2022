export default {
  type: 'document',
  name: 'category',
  title: 'Kategori',
  fields: [
    {
    type: 'slug',
    name: 'name',
    title: 'Navn',    
    },
  ],
  preview:{
    select: {
      title: 'name.current',
    }
  }
}