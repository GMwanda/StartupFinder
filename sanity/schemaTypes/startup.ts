import {defineField, defineType} from "sanity";
import {Rule} from "postcss";

export const startup = defineType({
    name: "startup",
    title: 'Startup',
    type: 'document',
    fields: [
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: {type: 'author'},
        }),
        defineField({
            name: 'views',
            type: 'number',
        }),
        defineField({
            name: 'category',
            type: 'string',
            validation: (Rule) => Rule.required().min(1).max(20).error('Please enter a category.'),
        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
        defineField({
            name: 'image',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'pitch',
            type: 'markdown',
        })
    ],

})