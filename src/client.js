import { createClient } from "@sanity/client";
// import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = createClient({
  projectId: process.env.REACT_APP_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  token: process.env.REACT_APP_TOKEN,
});

// const builder = ImageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);
