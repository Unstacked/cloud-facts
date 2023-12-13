import { z, defineCollection } from "astro:content";

export const collections = {
  "instance-types": defineCollection({ type: "data" }),
  "instance-families": defineCollection({ type: "data" }),
};
