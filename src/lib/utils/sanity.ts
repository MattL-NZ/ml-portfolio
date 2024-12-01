import type { DevExperience } from "$cms/sanity.types";
import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "ykqx47gv",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-11-17",
};

export const sanityClient = createClient(config);

export function processProjectEntries(rawProject: DevExperience) {
  const processedProject: ProcessedProject = {};
}
