import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId:'iuhgopst',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skHDFQmGluxe4RJSd5zlz1JC6iYI14xwo4N6kRVs99yBeAkPAQDCmeAJJcuWUVTdqXiPvp7sxtr6Fk5FMehEYROBE0vDFOUuxrTSzZpM44Zyq7SVFgJ4mQ1EmJyrDcHfrpUT5MfXPgNMRfvJswi0Cu1iQJw1OxNH1D7VHds0LxiWElVv3YrL',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);