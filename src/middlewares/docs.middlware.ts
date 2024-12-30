import fs from "node:fs";
import type { Express } from "express";
import swagger from "swagger-ui-express";
import yaml from "yaml";

export function useSwagger(app: Express) {
  const yamlDoc = fs.readFileSync("./docs.yaml", "utf8");
  const doc = yaml.parse(yamlDoc);

  app.use("/docs", swagger.serve, swagger.setup(doc));
}
