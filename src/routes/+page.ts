import { processProjectEntries, sanityClient } from "$lib/utils/sanity";

export const load = async () => {
  const workExperience: SanityWorkExperience[] = await sanityClient.fetch(
    `*[_type == "devExperience"] | order(order asc)`
  );

  const rawProjects: SanityProject[] = await sanityClient.fetch(
    "*[_type == 'project'] | order(dateAccomplished desc)"
  );

  const skills: Skill[] = await sanityClient.fetch(
    "*[_type == 'skills'][0].skillsList"
  );
  const projects = rawProjects.map(processProjectEntries);

  return {
    workExperience,
    projects,
    skills,
  };
};
