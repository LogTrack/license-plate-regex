import { getCodes, getName } from 'country-list';
import './styles.scss';

const allCountries = getCodes().reduce((acc, code) => {
  acc[code] = code;
  return acc;
}, {});

export const supportedCountryCodes = {
  [allCountries.AD]: allCountries.AD,
  [allCountries.AT]: allCountries.AT,
  [allCountries.BE]: allCountries.BE,
  [allCountries.CH]: allCountries.CH,
  [allCountries.DE]: allCountries.DE,
  [allCountries.DK]: allCountries.DK,
  [allCountries.ES]: allCountries.ES,
  [allCountries.FR]: allCountries.FR,
  [allCountries.GB]: allCountries.GB,
  [allCountries.IE]: allCountries.IE,
  [allCountries.IT]: allCountries.IT,
  [allCountries.LI]: allCountries.LI,
  [allCountries.LU]: allCountries.LU,
  [allCountries.NL]: allCountries.NL,
  [allCountries.PL]: allCountries.PL,
  [allCountries.PT]: allCountries.PT,
};

export const regexType = {
  OLD: 'OLD',
  CURRENT: 'CURRENT',
};

const finalData = {
  [supportedCountryCodes.AD]: {
    code: supportedCountryCodes.AD,
    name: getName(supportedCountryCodes.AD),
    list: [
      {
        regex: /^[A-Z]\s?\d{4}$/,
        example: 'L 3705',
        type: regexType.CURRENT,
      },
      {
        regex: /^[A-Z]\s?\d{2}$/,
        example: 'A78',
        type: regexType.CURRENT,
      },
      {
        regex: /^\d{5}$/,
        example: '27604',
        type: regexType.OLD,
      },
      {
        regex: /^[A-Z]{3}-\d{3}$/,
        example: 'AND-438',
        type: regexType.OLD,
      },
      {
        regex: /^[A-Z]{2}-\d{2}$/,
        example: 'RA-15',
        type: regexType.OLD,
      },
    ]
  },
  [supportedCountryCodes.AT]: {
    code: supportedCountryCodes.AT,
    name: getName(supportedCountryCodes.AT),
    list: [
      {
        regex: /^[A-Z]{1,2}\s([A-Z0-9]\s?){3,6}$/,
        example: 'G 527 GH',
        type: regexType.CURRENT,
      }
    ]
  },
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
  [supportedCountryCodes.CH]: {
    code: supportedCountryCodes.CH,
    name: getName(supportedCountryCodes.CH),
    list: [
      {
        regex: /^[A-Z]{2}\s?(\d\s?){1,6}$/,
        example: 'ZH 522 802',
        type: regexType.CURRENT,
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
  [supportedCountryCodes.DK]: {
    code: supportedCountryCodes.DK,
    name: getName(supportedCountryCodes.DK),
    list: [
      {
        regex: /^[A-Z]{2}\s?\d{5}$/,
        example: 'XM32345',
        type: regexType.CURRENT,
      }
    ]
  },
  [supportedCountryCodes.ES]: {
    code: supportedCountryCodes.ES,
    name: getName(supportedCountryCodes.ES),
    list: [
      {
        regex: /^\d{4}\s?[A-Z]{3}$/,
        example: '5776 CNS',
        type: regexType.CURRENT,
      },
      {
        regex: /^[A-Z]{1,2}\s?-?\d{4}\s?-?[A-Z]{1,2}$/,
        example: 'M-6320-YN',
        type: regexType.OLD,
      }
    ]
  },
  [supportedCountryCodes.FR]: {
    code: supportedCountryCodes.FR,
    name: getName(supportedCountryCodes.FR),
    list: [
      {
        regex: /^([A-Z]{2}|W)-\d{3}-[A-Z]{2}$/,
        example: 'AA-123-AA',
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
  [supportedCountryCodes.IE]: {
    code: supportedCountryCodes.IE,
    name: getName(supportedCountryCodes.IE),
    list: [
      {
        regex: /^\d{2,3}-[A-Z]{1,2}-\d{1,6}$/,
        example: '00-MO-7630',
        type: regexType.CURRENT,
      }
    ]
  },
  [supportedCountryCodes.IT]: {
    code: supportedCountryCodes.IT,
    name: getName(supportedCountryCodes.IT),
    list: [
      {
        regex: /^[A-Z]{2}\s?\d{3}[A-Z]{2}$/,
        example: 'CZ 898NF',
        type: regexType.CURRENT,
      },
      {
        regex: /^[A-Z]{2}\s?\d{3}\s[A-Z]{2}$/,
        example: 'AA 843 BC',
        type: regexType.OLD,
      },
      {
        regex: /^([A-Z]{2}|Roma)\s?\d{2}\s?\d{4}$/,
        example: 'Roma 12 5504',
        type: regexType.OLD,
      }
    ]
  },
  [supportedCountryCodes.LI]: {
    code: supportedCountryCodes.LI,
    name: getName(supportedCountryCodes.LI),
    list: [
      {
        regex: /^[A-Z]{2}\s?\d{1,5}$/,
        example: 'FL 6107',
        type: regexType.CURRENT,
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
  [supportedCountryCodes.NL]: {
    code: supportedCountryCodes.NL,
    name: getName(supportedCountryCodes.NL),
    list: [
      {
        regex: /^[A-Z]{2}-\d{2}-\d{2}$/,
        example: 'XX-99-99',
        type: regexType.OLD,
      },
      {
        regex: /^\d{2}-\d{2}-[A-Z]{2}$/,
        example: '99-99-XX',
        type: regexType.OLD,
      },
      {
        regex: /^\d{2}-[A-Z]{2}-\d{2}$/,
        example: '99-XX-99',
        type: regexType.OLD,
      },
      {
        regex: /^[A-Z]{2}-\d{2}-[A-Z]{2}$/,
        example: 'XX-99-XX',
        type: regexType.OLD,
      },
      {
        regex: /^[A-Z]{2}-[A-Z]{2}-\d{2}$/,
        example: 'XX-XX-99',
        type: regexType.OLD,
      },
      {
        regex: /^\d{2}-[A-Z]{2}-[A-Z]{2}$/,
        example: '99-XX-XX',
        type: regexType.OLD,
      },
      {
        regex: /^\d{2}-[A-Z]{3}-\d$/,
        example: '99-XXX-9',
        type: regexType.CURRENT,
      },
      {
        regex: /^\d-[A-Z]{3}-\d{2}$/,
        example: '9-XXX-99',
        type: regexType.CURRENT,
      },
      {
        regex: /^[A-Z]{2}-\d{3}-[A-Z]$/,
        example: 'XX-999-X',
        type: regexType.CURRENT,
      },
      {
        regex: /^[A-Z]-\d{3}-[A-Z]{2}$/,
        example: 'X-999-XX',
        type: regexType.CURRENT,
      },
      {
        regex: /^[A-Z]{3}-\d{2}-[A-Z]$/,
        example: 'XXX-99-X',
        type: regexType.CURRENT,
      },
      {
        regex: /^\d-[A-Z]{2}-\d{3}$/,
        example: '9-XX-999',
        type: regexType.CURRENT,
      }
    ]
  },
  [supportedCountryCodes.PL]: {
    code: supportedCountryCodes.PL,
    name: getName(supportedCountryCodes.PL),
    list: [
      {
        regex: /^[A-Z]{2,3}\s[A-Z0-9]{4,5}$/,
        example: 'ERA 75TM',
        type: regexType.CURRENT,
      },
      {
        regex: /^([A-Z]{2}\s\d{2}(\d|[A-Z]))|([A-Z]{3}\s\d(\d|[A-Z]|\.))|([A-Z]{3}\s([A-Z]|\d))$/,
        example: 'CBR 7C',
        type: regexType.CURRENT,
      }
    ]
  },
  [supportedCountryCodes.PT]: {
    code: supportedCountryCodes.PT,
    name: getName(supportedCountryCodes.PT),
    list: [
      {
        regex: /^[A-Z]{2}-\d{2}-[A-Z]{2}$/,
        example: 'AA-01-AA',
        type: regexType.CURRENT,
      },
      {
        regex: /^\d{2}-[A-Z]{2}-\d{2}$/,
        example: '00-AA-00',
        type: regexType.OLD,
      },
      {
        regex: /^\d{2}-\d{2}-[A-Z]{2}$/,
        example: '00-00-AA',
        type: regexType.OLD,
      },
      {
        regex: /^[A-Z]{2}-\d{2}-\d{2}$/,
        example: 'AA-00-00',
        type: regexType.OLD,
      }
    ]
  },
};

export const getCountryDetails = (code) => {
  if (!supportedCountryCodes[code]) { return null; }
  return finalData[code];
};

export const isPlateValidForCountryCode = (plate, code, type=[regexType.CURRENT]) => {
  if (!supportedCountryCodes[code]) { return null; }
  return finalData[code].list.filter(item => type.includes(item.type)).reduce((acc, item) => acc || item.regex.test(plate), false);
};

export const getCountryCodesForPlate = (plate, type=[regexType.CURRENT]) => {
  return Object.values(finalData)
    .filter(country => country.list.filter(item => type.includes(item.type)).reduce((acc, item) => acc || item.regex.test(plate), false))
    .map(country => country.code);
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
