export const getDatePatternFromLocale = (locale: string) => {
  const formats: Record<string, string> = {
    en_US: 'MM/DD/YYYY',
    en_GB: 'DD/MM/YYYY',
    de_DE: 'DD.MM.YYYY',
    de_AT: 'DD.MM.YYYY',
    fr_FR: 'DD/MM/YYYY',
    nl_NL: 'DD-MM-YYYY',
    es_ES: 'DD/MM/YYYY',
    it_IT: 'DD/MM/YYYY',
    pl_PL: 'YYYY-MM-DD',
    pt_PT: 'DD/MM/YYYY',
    ja_JP: 'YYYY/MM/DD',
    id_ID: 'DD/MM/YYYY',
    fi_FI: 'DD.MM.YYYY',
    sk_SK: 'DD.MM.YYYY',
    sv_SE: 'YYYY-MM-DD',
    cs_CZ: 'DD.MM.YYYY',
    el_GR: 'DD/MM/YYYY',
  };

  const response = formats[locale];
  if (!response) {
    console.error('ERROR | getDatePatternFromLocale | Details: locale not found ', locale);
    return 'DD.MM.YYYY';
  }

  return response;
};
