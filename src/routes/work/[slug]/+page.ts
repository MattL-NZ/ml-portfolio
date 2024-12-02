import { processProjectEntries, sanityClient } from "$lib/utils/sanity";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const { slug } = params;
  const project: SanityProject[] = await sanityClient.fetch(
    `*[_type == "project" && slug == "${slug}"]`
  );

  if (project.length !== 1) {
    throw error(404, "Project not found");
  }

  const processedProject = processProjectEntries(project[0]);
  return {
    project: processedProject,
  };
};
