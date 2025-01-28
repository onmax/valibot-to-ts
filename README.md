# Valibot to TypeScript

This guide shows you how to use [Valibot](https://github.com/valibot/valibot) to generate JSON Schema and then generate TypeScript types from it.

```
Use it in your                                       Automatically generate
runtime to     ◄──────────   Valibot Schemas───────► types so other clients
validate data                                        can use it
```

## Usage

```bash
pnpm install
pnpm run generate # Creates TypeScript types in the `types` folder
```

## How it works

1. You write your `valibot` schemas which can be used in your app to validate data.
2. Then we use `@valibot/to-json-schema` to convert the schemas to JSON Schema.
3. Then we use `json-schema-to-typescript` to generate the TypeScript types from the JSON Schema.

## Valibot Schemas

The projects uses valibot `schemas` as input. This is quite handy since with `valibot` schemas you can define your schemas in a single place.
This way you can ensure that the data that you are working with is valid and then using the small script generate the types.

Please, check the [`schemas.ts`](./scripts/schemas.ts) file for more details in schemas.

## Why

This is useful is you want to automate the process of generating types and you have multiple projects that depend on your main backend. This solution is minimal and it generates the mimimal amount of code in the types world and never generates any runtime code.

## Steps

1. Create Valibot schemas in your application to validate data.
   1.1. You can use these schemas in your runtime to validates the data.
   1.2. See [`schemas.ts`](./scripts/schemas.ts) for more details.
2. Copy the [`./scripts/generate-typescript.ts`](./scripts/generate-typescript.ts) file to your project and modify it to your needs
   2.1. You nee to update it with the schemas you want to generate types for.
   2.2. You can change the paths to the schemas and the output folder.
3. Install the following packages in `devDependencies`: `@types/node`, `@valibot/to-json-schema`, `json-schema-to-typescript`, `pathe`, `typescript`.
4. Create a `generate:types` command in your `package.json` file.
5. Run the command to generate the types.
   5.1. It will use `@valibot/to-json-schema` to create JSON schema from these schemas.
   5.2. It will use `json-schema-to-typescript` to create TypeScript types from the JSON.
6. The types will be generated in the `types` folder in the root of the project.

## JSON Schemas

The script also generates JSON schemas that can be used by other tools.

## Rationale

This helps you to automate type creation for many projects that share data shapes. The code is minimal and never generates runtime code.
