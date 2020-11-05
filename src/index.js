
const supportedCountries = {};

const finalData = {};

export const getCountryDetails = (code) => {
  if (!supportedCountries[code]) { return null; }
  return finalData[code];
}

export const isPlateValidForCountryCode = (plate, code) => {
  if (!supportedCountries[code]) { return null; }
  return finalData[code].list.reduce((acc, regex) => acc || regex.text(plate), false);
}

export default finalData;

