import type { JSONSchema } from 'json-schema-to-typescript'
import { mkdir, writeFile } from 'node:fs/promises'
import { toJsonSchema } from '@valibot/to-json-schema'
import { compile } from 'json-schema-to-typescript'
import { dirname, resolve } from 'pathe'
import { intersect } from 'valibot'
import { EventSchema, ProductSchema, SignUpSchema } from './schemas'

async function writeToFile(fileName: string, content: string) {
  const path = dirname(fileName)
  await mkdir(path, { recursive: true })
  await writeFile(fileName, content) // Overwrites the file if it already exists
}

const mergedSchema = toJsonSchema(intersect([SignUpSchema, ProductSchema, EventSchema]), { definitions: { SignUpSchema, ProductSchema, EventSchema } }) as JSONSchema

async function writeSchemas() { // remove me if you don't need schemas
  await writeToFile(resolve('schemas', 'json-schema.json'), JSON.stringify(mergedSchema, null, 2))
}

async function generateTs() {
  const generated = await compile(mergedSchema, 'event')
  const ts = generated.replace(/\/\*\*[\s\S]*?\*\//g, '')
  await writeToFile(resolve('types', 'index.ts'), ts)
}

(async () => {
  await writeSchemas()
  await generateTs()
})()
