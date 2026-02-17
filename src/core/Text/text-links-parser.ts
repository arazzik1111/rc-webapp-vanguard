const parseLinks = (links: any, value: string) => {
  if (links && typeof links === 'object' && Object.keys(links).length > 0) {
    const keys = Object.keys(links);
    value = `<span>${value}</span>`;
    keys.forEach((link_key) => {
      value = value.replace(`<${link_key}>`, `</span><a>${link_key}</a><span>`);
    });
  }
  return value;
};

export const parseFullLinks = (links: any, toParse: string) => {
  // remove reference to original link object to resolve issue on multiple re-renders
  const newLinks = { ...links };
  // iterate over each link in links object

  if (newLinks && toParse && typeof toParse === 'string') {
    Object.keys(newLinks).forEach((linkKey) => {
      // get the link object
      const link = newLinks[linkKey];
      // get the text between the <link1> tags

      if (typeof toParse === 'string') {
        const match = toParse?.match(new RegExp(`<${linkKey}>(.*?)<\/${linkKey}>`));
        if (match !== null) {
          const linkText = match[1];
          // update the link object with the text and remove the text from the original translated variable
          newLinks[linkKey].text = linkText;
          toParse = toParse.replace(new RegExp(`<${linkKey}>.*?<\/${linkKey}>`), `<${linkKey}>`);
        }
      }
    });
  }

  return parseLinks(newLinks, toParse);
};
