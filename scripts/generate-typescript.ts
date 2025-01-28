import { toJsonSchema, } from '@valibot/to-json-schema';
import { compile, JSONSchema } from 'json-schema-to-typescript';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, resolve } from 'pathe';
import { EventSchema, ProductSchema, SignUpSchema } from './schemas';

const signUpSchema = toJsonSchema(SignUpSchema, { definitions: { SignUpSchema } }) as JSONSchema
const productSchema = toJsonSchema(ProductSchema, { definitions: { ProductSchema } }) as JSONSchema
const eventSchema = toJsonSchema(EventSchema, { definitions: { EventSchema } }) as JSONSchema

const outputFolder = resolve(dirname('.'), './types');
console.warn(`Generating TypeScript types to ${outputFolder}`);

// Ensure the output folder exists
if (!existsSync(outputFolder)) {
  mkdirSync(outputFolder, { recursive: true });
}

try {
  compile(signUpSchema, "signup").then(ts => writeFileSync(resolve(outputFolder, "signup.ts"), ts));
  compile(productSchema, "product").then(ts => writeFileSync(resolve(outputFolder, "product.ts"), ts));
  compile(eventSchema, "event").then(ts => writeFileSync(resolve(outputFolder, "event.ts"), ts));
} catch (err) {
  console.error(err);
}
