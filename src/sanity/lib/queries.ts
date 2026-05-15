import { client } from './client'

export async function getAllProperties() {
    const query = `*[_type == "property"] {
    _id,
    title,
    slug,
    price,
    location,
    type,
    status,
    beds,
    baths,
    size,
    featured,
    "imageUrl": image.asset->url,
  }`
    return await client.fetch(query)
}

export async function getPropertyBySlug(slug: string) {
    const query = `*[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    price,
    priceValue,
    location,
    neighborhood,
    beds,
    baths,
    size,
    sizeValue,
    type,
    status,
    featured,
    description,
    amenities,
    "imageUrl": image.asset->url,
    "images": images[].asset->url,
    investmentScore,
    paymentPlan,
    agent,
    coordinates,
  }`
    return await client.fetch(query, { slug })
}

export async function getFeaturedProperties() {
    const query = `*[_type == "property" && featured == true] {
    _id,
    title,
    slug,
    price,
    location,
    "imageUrl": image.asset->url,
  }`
    return await client.fetch(query)
}

export async function getAllNeighborhoods() {
    const query = `*[_type == "neighborhood"] {
    _id,
    name,
    slug,
    shortDescription,
    "imageUrl": image.asset->url,
  }`
    return await client.fetch(query)
}