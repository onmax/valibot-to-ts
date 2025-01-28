# Valibot to TypeScript

This guide shows you how to use [Valibot](https://github.com/valibot/valibot) to generate JSON Schema and then generate TypeScript types from it.

## Benefits of this approach

- 🔍 Use the `valibot` schemas in your runtime to validate data. See [`schemas.ts`](./scripts/schemas.ts) for examples.
- 🔧 Automatically generate TypeScript types from the schemas.
- 🙈 Minimal code and no runtime code is generated.
- 📝 Generate JSON schemas that can be used by other tools.
- 🎉 Easy to update the code across the project.

## Run the example

This repo contains an example project that uses this approach.

```bash
pnpm install
pnpm run generate # Creates TypeScript types in the `types` folder
```

## Use it in your project

1. Create Valibot schemas in your application to validate data.
   1. You can use these schemas in your runtime to validates the data.
   2. See [`schemas.ts`](./scripts/schemas.ts) for more details.
2. Copy the [`./scripts/generate-typescript.ts`](./scripts/generate-typescript.ts) file to your project and modify it to your needs
   1. You nee to update it with the schemas you want to generate types for.
   2. You can change the paths to the schemas and the output folder.
3. Install the required packages in `devDependencies`:
   1. `npm i -D @types/node @valibot/to-json-schema json-schema-to-typescript pathe typescript esno`
4. Create a `generate:types` command in your `package.json` file.
   1. `"generate:types": "esno ./scripts/generate-typescript.ts"` (`esno` or any other TS script runner)
5. Run the command to generate the types.
   1. It will use `@valibot/to-json-schema` to create JSON schema from these schemas.
   2. It will use `json-schema-to-typescript` to create TypeScript types from the JSON.
6. The types and JSON schemas will be generated in the `types` and `schemas` folders in the root of the project.

## Rationale

1. You write once code to define the shape of your data.
2. You use it in your runtime to validate the data.
3. You use it in your frontend:
4. Optionally validate the data
5. Speak the same language in both runtime and frontend
6. If a change is made, you can easily update the code across the project.
