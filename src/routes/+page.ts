import type { PageLoad } from "./$types.d";
import { processProjectEntries, sanityClient } from "$lib/utils/sanity";

export const load: PageLoad = async () => {
  const workExperience: SanityWorkExperience[] = await sanityClient.fetch(
    `*[_type == "devExperience"] | order(order asc)`
  );

  const rawProjects: SanityProject[] = await sanityClient.fetch(
    "*[_type == 'project']"
  );

  const projects = rawProjects.map(processProjectEntries);

  return {
    workExperience,
    projects,
  };
};
