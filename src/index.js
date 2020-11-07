import { getCodes, getName } from 'country-list';

const allCountries = getCodes().reduce((acc, code) => {
  acc[code] = code;
  return acc;
}, {});

export const supportedCountryCodes = {
  [allCountries.BE]: allCountries.BE,
  [allCountries.FR]: allCountries.FR,
  [allCountries.LU]: allCountries.LU,
};

export const regexType = {
  OLD: 'OLD',
  CURRENT: 'CURRENT',
  PROFESSIONAL: 'PROFESSIONAL',
};

const finalData = {
  [supportedCountryCodes.BE]: {
    code: supportedCountryCodes.BE,
    name: getName(supportedCountryCodes.BE),
    list: [
      {
        regex: /^\d-[A-Z]{3}-\d{3}$/,
        example: '1-ABC-003',
        type: regexType.CURRENT,
      },
      {
        regex: /^[A-Z]{3}-\d{3}$/,
        example: 'KAZ-813',
        type: regexType.OLD,
      }
    ]
  },
  [supportedCountryCodes.FR]: {
    code: supportedCountryCodes.FR,
    name: getName(supportedCountryCodes.FR),
    list: [
      {
        regex: /^[A-Z]{2}-\d{3}-[A-Z]{2}$/,
        example: 'AA-123-AA',
        type: regexType.CURRENT,
      },
      {
        regex: /^W-\d{3}-[A-Z]{2}$/,
        example: 'W-573-HJ',
        type: regexType.PROFESSIONAL,
      },
      {
        regex: /^\d{1,4}\s?[A-Z]{2,3}\s?(\d{2}|2A|2B)$/,
        example: '1023 AC 45',
        type: regexType.OLD,
      }
    ]
  },
  [supportedCountryCodes.LU]: {
    code: supportedCountryCodes.LU,
    name: getName(supportedCountryCodes.LU),
    list: [
      {
        regex: /^[A-Z]{2}\s?\d{4}$/,
        example: 'KS 9412',
        type: regexType.CURRENT,
      }
    ]
  },
};

export const getCountryDetails = (code) => {
  if (!supportedCountryCodes[code]) { return null; }
  return finalData[code];
};

export const isPlateValidForCountryCode = (plate, code) => {
  if (!supportedCountryCodes[code]) { return null; }
  return finalData[code].list.reduce((acc, item) => acc || item.regex.test(plate), false);
};

export const fillTable = (tableId, templateId) => {
  const tableContainer = document.getElementById(tableId);
  if (!tableContainer) { throw new Error('tableId is null of is not present in the DOM!'); }

  const template = document.getElementById(templateId)?.innerHTML;
  if (!template) { throw new Error('templateId is null of is not present in the DOM!'); }

  tableContainer.innerHTML += Object.values(finalData)
    .map(countryDetails => 
      template.replace('{{code}}', countryDetails.code)
              .replace('{{name}}', countryDetails.name)
              .replace('{{regex}}', countryDetails.list.map(item => `<div>
                <span class="regex">${item.regex}</span>
                <span class="plate">${item.example}</span>
              </div>`).join('')))
            .join('');
};

(() => {
  const tableId = document?.currentScript?.getAttribute('table-id');
  if (tableId) {
    fillTable(tableId, `${tableId}-template`);
  }
})();

window.fillTable = fillTable;

export default finalData;
