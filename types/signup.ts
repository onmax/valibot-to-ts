/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Signup {
  username: string;
  email: string;
  password: string;
  birthDate: string;
  website?: string;
  role: "admin" | "user" | "guest";
  agreeToTerms: boolean;
  [k: string]: unknown;
}
