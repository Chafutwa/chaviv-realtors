// src/sanity/schemas/property.ts
export default {
    name: 'property',
    type: 'document',
    title: 'Property',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'price',
            type: 'string',
            title: 'Price (e.g., KES 5,000,000)',
        },
        {
            name: 'priceValue',
            type: 'number',
            title: 'Price Value (numeric, for sorting)',
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location',
        },
        {
            name: 'neighborhood',
            type: 'string',
            title: 'Neighborhood',
            options: {
                list: [
                    { title: 'Kilimani', value: 'kilimani' },
                    { title: 'Westlands', value: 'westlands' },
                    { title: 'Lavington', value: 'lavington' },
                    { title: 'Kileleshwa', value: 'kileleshwa' },
                ],
            },
        },
        {
            name: 'beds',
            type: 'number',
            title: 'Bedrooms',
        },
        {
            name: 'baths',
            type: 'number',
            title: 'Bathrooms',
        },
        {
            name: 'size',
            type: 'string',
            title: 'Size (e.g., 43 sqm)',
        },
        {
            name: 'sizeValue',
            type: 'number',
            title: 'Size Value (numeric, for sorting)',
        },
        {
            name: 'type',
            type: 'string',
            title: 'Property Type',
            options: {
                list: [
                    { title: 'Apartment', value: 'Apartment' },
                    { title: 'House', value: 'House' },
                    { title: 'Villa', value: 'Villa' },
                    { title: 'Penthouse', value: 'Penthouse' },
                    { title: 'Commercial', value: 'Commercial' },
                ],
            },
        },
        {
            name: 'status',
            type: 'string',
            title: 'Status',
            options: {
                list: [
                    { title: 'For Sale', value: 'For Sale' },
                    { title: 'For Rent', value: 'For Rent' },
                ],
            },
        },
        {
            name: 'featured',
            type: 'boolean',
            title: 'Featured Property',
            initialValue: false,
        },
        {
            name: 'image',
            type: 'image',
            title: 'Main Image',
            options: { hotspot: true },
        },
        {
            name: 'images',
            type: 'array',
            title: 'Additional Images',
            of: [{ type: 'image', options: { hotspot: true } }],
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            name: 'amenities',
            type: 'array',
            title: 'Amenities',
            of: [{ type: 'string' }],
        },
        {
            name: 'investmentScore',
            type: 'object',
            title: 'Investment Score',
            fields: [
                { name: 'rentalYield', type: 'string', title: 'Rental Yield' },
                { name: 'appreciation', type: 'string', title: 'Appreciation' },
                { name: 'demandLevel', type: 'string', title: 'Demand Level', options: { list: ['Very High', 'High', 'Medium', 'Low'] } },
            ],
        },
        {
            name: 'paymentPlan',
            type: 'object',
            title: 'Payment Plan',
            fields: [
                { name: 'deposit', type: 'string', title: 'Deposit' },
                { name: 'installmentPeriod', type: 'string', title: 'Installment Period' },
                { name: 'monthlyPayment', type: 'string', title: 'Monthly Payment' },
            ],
        },
        {
            name: 'agent',
            type: 'object',
            title: 'Agent',
            fields: [
                { name: 'phone', type: 'string', title: 'Phone' },
                { name: 'email', type: 'string', title: 'Email' },
            ],
        },
        {
            name: 'coordinates',
            type: 'object',
            title: 'Coordinates',
            fields: [
                { name: 'lat', type: 'number', title: 'Latitude' },
                { name: 'lng', type: 'number', title: 'Longitude' },
            ],
        },
    ],
}