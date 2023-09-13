// import sanityClient from '@sanity/client';
import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
//   projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  projectId: "67jltnkt",

  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
//   token: process.env.REACT_APP_SANITY_TOKEN,
  token: "skIKS0sfrlv4RTCaJQKDRu7O6uOETTrkrflAwHoii0T45lAxZgc5QQJrTT6rhLLrHN55n2thbYHL11TTzfMveIAttwBRfNHXZCt42BSyVZWjPKznwWpY0YpDbGeq1SpF4srwR8JScwKAIyjnJgE4z1O7gqXHNOtra2gE3S1X5R2tuCpeolB8",
});

const data = await client.fetch(`count(*)`)
console.log(`Number of documents: ${data}`)
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);