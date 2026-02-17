export const getWebsiteScreenshotUrl = (websiteUrl: string, resolution: string = '430x330') => {
  // Same as Datafilter::encode($url) in Kohana
  let encodedText = btoa(websiteUrl); // Base64 encode the text
  encodedText = encodedText.replace(/\//g, '_SL_'); // Replace '/' with '_SL_'
  encodedText = encodedText.replace(/\+/g, '_PL_'); // Replace '+' with '_PL_'

  // Same as $domain->getImage('800x600') in Kohana
  return `/thumbs/subdomain/${encodedText}/@@${resolution}@@1@@0`;
};
