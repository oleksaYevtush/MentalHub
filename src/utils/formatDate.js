export function formatDate(isoString, locale = 'uk') {
  const localeMap = {
    uk: 'uk-UA',
    en: 'en-US',
    de: 'de-DE',
  };
  const localeStr = localeMap[locale] || 'uk-UA';
  return new Date(isoString).toLocaleDateString(localeStr, {
    day: 'numeric',
    month: 'short',
  });
}
