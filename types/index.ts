/* eslint-disable */


export type Event = SignUpSchema & ProductSchema & EventSchema;

export interface SignUpSchema {
  username: string;
  email: string;
  password: string;
  birthDate: string;
  website?: string;
  role: "admin" | "user" | "guest";
  agreeToTerms: boolean;
  [k: string]: unknown;
}
export interface ProductSchema {
  id: string;
  name: string;
  price: number;
  tags: string[];
  inStock: boolean;
  dimensions: {
    length: number;
    width: number;
    height: number;
    [k: string]: unknown;
  };
  warehouseLocation?: {
    latitude: number;
    longitude: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface EventSchema {
  title: string;
  description?: string;
  date: string;
  location: {
    address: string;
    city: string;
    postalCode: string;
    [k: string]: unknown;
  };
  attendees: {
    name: string;
    email: string;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
