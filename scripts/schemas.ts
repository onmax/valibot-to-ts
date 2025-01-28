import * as v from 'valibot'

export const SignUpSchema = v.object({
  username: v.pipe(
    v.string(),
    v.minLength(3, 'Username must be at least 3 characters long'),
    v.maxLength(20, 'Username must be at most 20 characters long')
  ),
  email: v.pipe(
    v.string(),
    v.email('Please provide a valid email address')
  ),
  password: v.pipe(
    v.string(),
    v.minLength(8, 'Password must be at least 8 characters long')
  ),
  birthDate: v.string(),
  website: v.optional(
    v.pipe(
      v.string(),
      v.url('Please provide a valid URL')
    )
  ),
  role: v.picklist(['admin', 'user', 'guest'], 'Role must be one of: admin, user, guest'),
  agreeToTerms: v.boolean('You must agree to the terms and conditions')
});


export const ProductSchema = v.object({
  id: v.pipe(
    v.string(),
    v.uuid('Product ID must be a valid UUID')
  ),
  name: v.pipe(
    v.string(),
    v.minLength(1, 'Product name cannot be empty')
  ),
  price: v.pipe(
    v.number(),
    v.minValue(0, 'Price must be a positive number')
  ),
  tags: v.array(v.string(), 'Tags must be an array of strings'),
  inStock: v.boolean('In-stock status must be a boolean'),
  dimensions: v.object({
    length: v.pipe(
      v.number(),
      v.minValue(0, 'Length must be a positive number')
    ),
    width: v.pipe(
      v.number(),
      v.minValue(0, 'Width must be a positive number')
    ),
    height: v.pipe(
      v.number(),
      v.minValue(0, 'Height must be a positive number')
    ),
  }),
  warehouseLocation: v.optional(
    v.object({
      latitude: v.pipe(
        v.number(),
        v.minValue(-90, 'Latitude must be between -90 and 90'),
        v.maxValue(90, 'Latitude must be between -90 and 90')
      ),
      longitude: v.pipe(
        v.number(),
        v.minValue(-180, 'Longitude must be between -180 and 180'),
        v.maxValue(180, 'Longitude must be between -180 and 180')
      ),
    })
  ),
});

export const EventSchema = v.object({
  title: v.pipe(
    v.string(),
    v.minLength(5, 'Title must be at least 5 characters long')
  ),
  description: v.optional(v.string()),
  date: v.string(),
  location: v.object({
    address: v.string(),
    city: v.string(),
    postalCode: v.pipe(
      v.string(),
      v.regex(/^\d{5}$/, 'Postal code must be a 5-digit number')
    ),
  }),
  attendees: v.array(
    v.object({
      name: v.string(),
      email: v.pipe(
        v.string(),
        v.email('Please provide a valid email address')
      ),
    }),
    'Attendees must be an array of objects with name and email'
  ),
});