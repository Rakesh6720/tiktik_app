import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import user from "./sanity/schemas/user";
import comment from "./sanity/schemas/comment";
import postedBy from "./sanity/schemas/postedBy";
import post from "./sanity/schemas/post";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "6zyyxs7g",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-04-13",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
