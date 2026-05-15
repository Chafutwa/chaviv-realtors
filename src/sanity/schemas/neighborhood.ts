// src/sanity/schemas/neighborhood.ts
export default {
    name: 'neighborhood',
    type: 'document',
    title: 'Neighborhood',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'shortDescription',
            type: 'string',
            title: 'Short Description',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: { hotspot: true },
        },
    ],
}