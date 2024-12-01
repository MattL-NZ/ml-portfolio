import type { DevExperience } from "$cms/sanity.types";
import type { PageLoad } from "./$types.d";
import { sanityClient } from "$lib/utils/sanity";

export const load: PageLoad = async () => {
  const workExperience: DevExperience[] = await sanityClient.fetch(
    `*[_type == "devExperience"] | order(order asc)`
  );

  return {
    workExperience,
  };
};
