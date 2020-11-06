import { getCodes, getName } from 'country-list';

const allCountries = getCodes().reduce((acc, code) => {
  acc[code] = code;
  return acc;
}, {});

export const supportedCountryCodes = {
  [allCountries.FR]: allCountries.FR,
  [allCountries.BE]: allCountries.BE,
};

export const regexType = {
  OLD: 'OLD',
  CURRENT: 'CURRENT',
  PROFESSIONAL: 'PROFESSIONAL',
};

const finalData = {
  [supportedCountryCodes.FR]: {
    code: supportedCountryCodes.FR,
    name: getName(supportedCountryCodes.FR),
    list: [
      {
        regex: /[A-Z]{2}-\d{3}-[A-Z]{2}/g,
        example: 'AA-123-AA',
        type: regexType.CURRENT,
      },
      {
        regex: /W-\d{3}-[A-Z]{2}/g,
        example: 'W-573-HJ',
        type: regexType.PROFESSIONAL,
      },
      {
        regex: /\d{1,4}[A-Z]{2,3}(\d{2}|2A|2B)/g,
        example: '123ABC45',
        type: regexType.OLD,
      }
    ]
  },
  [supportedCountryCodes.BE]: {
    code: supportedCountryCodes.BE,
    name: getName(supportedCountryCodes.BE),
    list: [
      {
        regex: /\d-[A-Z]{3}-\d{3}/g,
        example: '1-ABC-003',
        type: regexType.CURRENT,
      },
      {
        regex: /[A-Z]{3}-\d{3}/g,
        example: 'KAZ-813',
        type: regexType.OLD,
      }
    ]
  },
};

export const getCountryDetails = (code) => {
  if (!supportedCountryCodes[code]) { return null; }
  return finalData[code];
}

export const isPlateValidForCountryCode = (plate, code) => {
  if (!supportedCountryCodes[code]) { return null; }
  return finalData[code].list.reduce((acc, item) => acc || item.regex.test(plate), false);
}

export default finalData;

