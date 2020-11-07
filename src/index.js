import { getCodes, getName } from 'country-list';
import './styles.scss';

const allCountries = getCodes().reduce((acc, code) => {
  acc[code] = code;
  return acc;
}, {});

export const supportedCountryCodes = {
  [allCountries.BE]: allCountries.BE,
  [allCountries.DE]: allCountries.DE,
  [allCountries.FR]: allCountries.FR,
  [allCountries.GB]: allCountries.GB,
  [allCountries.LU]: allCountries.LU,
};

export const regexType = {
  OLD: 'OLD',
  CURRENT: 'CURRENT',
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
  [supportedCountryCodes.DE]: {
    code: supportedCountryCodes.DE,
    name: getName(supportedCountryCodes.DE),
    list: [
      {
        regex: /^[A-Z]{1,3}\s?[A-Z]{1,2}\s?\d{1,4}$/,
        example: 'KA PA 777',
        type: regexType.CURRENT,
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
        type: regexType.CURRENT,
      },
      {
        regex: /^\d{1,4}\s?[A-Z]{2,3}\s?(\d{2}|2A|2B)$/,
        example: '1023 AC 45',
        type: regexType.OLD,
      }
    ]
  },
  [supportedCountryCodes.GB]: {
    code: supportedCountryCodes.GB,
    name: getName(supportedCountryCodes.GB),
    list: [
      {
        regex: /^[A-Z]{2}\d{2}\s?[A-Z]{3}$/,
        example: 'YR53 JEP',
        type: regexType.CURRENT,
      },
      {
        regex: /^[A-Z]{1,3}\s?\d{1,4}$/,
        example: 'VCZ 6382',
        type: regexType.CURRENT,
      },
      {
        regex: /^[A-Z]{1,2}\s?\d{1,4}$/,
        example: 'HG 8765',
        type: regexType.OLD,
      },
      {
        regex: /^[A-Z]{3}\s?\d{1,3}$/,
        example: 'TYA 990',
        type: regexType.OLD,
      },
      {
        regex: /^\d{1,3}\s?[A-Z]{3}$/,
        example: '883 XUL',
        type: regexType.OLD,
      },
      {
        regex: /^[A-Z]{3}\s?\d{1,3}\s?[A-Z]$/,
        example: 'TVR 765K',
        type: regexType.OLD,
      },
      {
        regex: /^[A-Z]\d{1,3}\s?[A-Z]{1,3}$/,
        example: 'M432 LGE',
        type: regexType.OLD,
      },
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
