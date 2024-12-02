import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: "ykqx47gv",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-11-17",
};

export const sanityClient = createClient(config);

export function processProjectEntries(rawProject: SanityProject) {
  const builder = imageUrlBuilder(sanityClient);
  const projectImageUrl = builder.image(rawProject.image).url();

  const processedProject: ProcessedProject = {
    name: rawProject.name,
    company: rawProject.company,
    dateAccomplished: rawProject.dateAccomplished,
    stack: rawProject.stack,
    slug: rawProject.slug,
    projectImageUrl,
    content: rawProject.content.map(processProjectContent),
  };
  return processedProject;
}

function processProjectContent(content: RawTextContent | RawImageContent) {
  if (content._type === "image") {
    const builder = imageUrlBuilder(sanityClient);
    const projectImageUrl = builder.image(content).url();
    const processedImage: ProcessedImageContent = {
      type: "image",
      imageUrl: projectImageUrl,
    };
    return processedImage;
  }
  if (content._type === "block") {
    const processedTextContent: ProcessedTextContent = {
      type: "text",
      style: content.style,
      textToRender: content.children.map((child) => child.text).join("\n"),
    };
    return processedTextContent;
  }
  return content;
}
