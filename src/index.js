import { getCodes, getName } from 'country-list';
import './styles.scss';

const allCountries = getCodes().reduce((acc, code) => {
  acc[code] = code;
  return acc;
}, {});

export const supportedCountryCodes = {
  [allCountries.AD]: allCountries.AD,
  [allCountries.AE]: allCountries.AE,
  [allCountries.AF]: allCountries.AF,
  [allCountries.AG]: allCountries.AG,
  [allCountries.AI]: allCountries.AI,
  [allCountries.AL]: allCountries.AL,
  [allCountries.AM]: allCountries.AM,
  [allCountries.AO]: allCountries.AO,
  [allCountries.AQ]: allCountries.AQ,
  [allCountries.AR]: allCountries.AR,
  [allCountries.AS]: allCountries.AS,
  [allCountries.AT]: allCountries.AT,
  [allCountries.AU]: allCountries.AU,
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
  [supportedCountryCodes.AE]: {
    code: supportedCountryCodes.AE,
    name: getName(supportedCountryCodes.AE),
    list: [
      {
        regex: /^\d{1,2}\s\d{1,5}$/,
        example: '20 10234',
        type: regexType.CURRENT,
      },
      {
        regex: /^(A|B|C|D|E|H)\s?\d{1,5}$/,
        example: 'B 12345',
        type: regexType.CURRENT,
      },
      {
        regex: /^[A-Z]{1,2}\s\d{1,5}$/,
        example: 'A 10234',
        type: regexType.CURRENT,
      },
      {
        regex: /^([A-Z]\s?\d{1,5})|(\d{1,5}\s?[A-Z])$/,
        example: '12345 B',
        type: regexType.CURRENT,
      },
      {
        regex: /^[A-Z]?\s?\d{1,5}\s?[A-Z]?$/,
        example: 'B 10234',
        type: regexType.CURRENT,
      },
      {
        regex: /^(1|2|3)\s\d{1,5}$/,
        example: '2 14567',
        type: regexType.CURRENT,
      },
      {
        regex: /^([A-I]|X)\s\d{1,5}$/,
        example: 'B 12345',
        type: regexType.CURRENT,
      },
    ]
  },
  [supportedCountryCodes.AF]: {
    code: supportedCountryCodes.AF,
    name: getName(supportedCountryCodes.AF),
    list: [
      {
        regex: /^[A-Z]{3}\s((\d{3}\s?M)|(\d{5}\s?(B|L|PRV|T)))$/,
        example: 'KBL 12345 B',
        type: regexType.CURRENT,
      },
    ]
  },
  [supportedCountryCodes.AG]: {
    code: supportedCountryCodes.AG,
    name: getName(supportedCountryCodes.AG),
    list: [
      {
        regex: /^PM\s?\d{1,3}\s\d{4}$/,
        example: 'PM363 1938',
        type: regexType.OLD,
      },
      {
        regex: /^AG\s?\d{1,4}$/,
        example: 'AG 8593',
        type: regexType.OLD,
      },
      {
        regex: /^(H|P|R)A?\s?\d{1,4}$/,
        example: 'RA 8893',
        type: regexType.OLD,
      },
      {
        regex: /^(A\s?\d{1,5})|((AT|SC)\s?\d{1,3})|((C|R|TX)\s?\d{1,4})$/,
        example: 'TX 916',
        type: regexType.CURRENT,
      },
    ]
  },
  [supportedCountryCodes.AI]: {
    code: supportedCountryCodes.AI,
    name: getName(supportedCountryCodes.AI),
    list: [
      {
        regex: /^A\s?\d{3}$/,
        example: 'A 999',
        type: regexType.CURRENT,
      },
    ]
  },
  [supportedCountryCodes.AL]: {
    code: supportedCountryCodes.AL,
    name: getName(supportedCountryCodes.AL),
    list: [
      {
        regex: /^[A-Z]{2}\s\d{3}\s?[A-Z]{2}$/,
        example: 'AA 000 AA',
        type: regexType.CURRENT,
      },
      {
        regex: /^[A-Z]{2}\s\d{4}\s?[A-Z]$/,
        example: 'TR 1474 M',
        type: regexType.OLD,
      },
    ]
  },
  [supportedCountryCodes.AM]: {
    code: supportedCountryCodes.AM,
    name: getName(supportedCountryCodes.AM),
    list: [
      {
        regex: /^\d{2}\s?([^0-9]){2}\s?\d{3}$/,
        example: '01 AD 234',
        type: regexType.CURRENT,
      },
    ]
  },
  [supportedCountryCodes.AO]: {
    code: supportedCountryCodes.AO,
    name: getName(supportedCountryCodes.AO),
    list: [
      {
        regex: /^[A-Z]{2}-\d{2}-\d{2}-[A-Z]{2}$/,
        example: 'LD-38-75-CL',
        type: regexType.CURRENT,
      },
      {
        regex: /^[A-Z]{3}-\d{2}-\d{2}$/,
        example: 'AAE-62-63',
        type: regexType.OLD,
      },
    ]
  },
  [supportedCountryCodes.AQ]: {
    code: supportedCountryCodes.AQ,
    name: getName(supportedCountryCodes.AQ),
    list: [
      {
        regex: /^\d{2}$/,
        example: '39',
        type: regexType.CURRENT,
      },
    ]
  },
  [supportedCountryCodes.AR]: {
    code: supportedCountryCodes.AR,
    name: getName(supportedCountryCodes.AR),
    list: [
      {
        regex: /^[A-Z]\s?(\d\s?)?\d{6}$/,
        example: 'B 1 225945',
        type: regexType.OLD,
      },
      {
        regex: /^[A-Z]{3}(\s|D|T)?\d{3}$/,
        example: 'NVZ 087',
        type: regexType.OLD,
      },
      {
        regex: /^[A-Z]{2}\s?\d{3}\s?[A-Z]{2}$/,
        example: 'AA 000 AB',
        type: regexType.CURRENT,
      },
    ]
  },
  [supportedCountryCodes.AS]: {
    code: supportedCountryCodes.AS,
    name: getName(supportedCountryCodes.AS),
    list: [
      {
        regex: /^\d{3}$/,
        example: '893',
        type: regexType.OLD,
      },
      {
        regex: /^\d-\d{3}$/,
        example: '4-205',
        type: regexType.OLD,
      },
      {
        regex: /^\d{4}$/,
        example: '5511',
        type: regexType.CURRENT,
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
  [supportedCountryCodes.AU]: {
    code: supportedCountryCodes.AU,
    name: getName(supportedCountryCodes.AU),
    list: [
      {
        regex: /^(Y[A-Z]{2}-\d{2}[A-Z])|(T\s?\d{4}\s?[A-Z])|(A-\d{4})$/,
        example: 'YOX-00A',
        type: regexType.CURRENT,
        description: 'Australian Capital Territory'
      },
      {
        regex: /^([A-Z]{2}-\d{2}-[A-Z]{2})|(T[A-Z]-\d{2}-[A-Z]{2})|((K|E)[A-Z]{2}-\d{2})$/,
        example: 'CZ-00-QB',
        type: regexType.CURRENT,
        description: 'New South Wales'
      },
      {
        regex: /^(C[A-Z]-\d{2}-[A-Z]{2})|(T[A-Z]-\d{4})|([A-Z]-\d{4})$/,
        example: 'CE-21-AA',
        type: regexType.CURRENT,
        description: 'Northern Territory'
      },
      {
        regex: /^(\d{3}-[A-Z]{2}\d)|(\d{3}-U[A-Z]{2})|([A-Z]{2}-\d{4})|(\d{3}-[A-Z]{2})$/,
        example: '000-AL5',
        type: regexType.CURRENT,
        description: 'Queensland'
      },
      {
        regex: /^(S\d{3}-[A-Z]{3})|(S\d{3}-T[A-Z]{2})|(S\d{2}-[A-Z]{3})$/,
        example: 'S000-CGU',
        type: regexType.CURRENT,
        description: 'South Australia'
      },
      {
        regex: /^([A-Z]\s\d{2}\s[A-Z]{2})|([A-Z]\d{3}[A-Z])$/,
        example: 'J 00 EX',
        type: regexType.CURRENT,
        description: 'Tasmania'
      },
      {
        regex: /^(\d[A-Z]{2}-\d[A-Z]{2})|([A-Z]\d{2}-\d{3})|(\d{4}-S\d)|(\d{5}-A)|(2[A-Z]-\d[A-Z]{2})$/,
        example: '1SR-1AA',
        type: regexType.CURRENT,
        description: 'Victoria'
      },
      {
        regex: /^(1[A-Z]{3}-\d{3})|(1T[A-Z]{2}-\d{3})|(1[A-Z]{2}-\d{3})$/,
        example: '1HDO-000',
        type: regexType.CURRENT,
        description: 'Western Australia'
      },
      {
        regex: /^Y[A-Z]{2}-\d{3}$/,
        example: 'YZZ-999',
        type: regexType.OLD,
        description: 'Australian Capital Territory - Old'
      },
      {
        regex: /^[A-Z]{3}-\d{3}$/,
        example: 'ZLF-999',
        type: regexType.OLD,
        description: 'New South Wales - Old'
      },
      {
        regex: /^\d{1,3}(-\d{1,3})?$/,
        example: '999-999',
        type: regexType.OLD,
        description: 'Northern Territory - Old'
      },
      {
        regex: /^(N|O|P)[A-Z]{2}-\d{3}$/,
        example: 'PZZ-999',
        type: regexType.OLD,
        description: 'Queensland - Old'
      },
      {
        regex: /^[A-Z]{3}-\d{3}$/,
        example: 'XUN-299',
        type: regexType.OLD,
        description: 'South Australia - Old'
      },
      {
        regex: /^(W[A-Z]{2}-\d{3})|([A-Z]-\d{4})$/,
        example: 'WZZ-999',
        type: regexType.OLD,
        description: 'Tasmania - Old'
      },
      {
        regex: /^[A-Z]{3}-\d{3}$/,
        example: 'IZZ-999',
        type: regexType.OLD,
        description: 'Victoria - Old'
      },
      {
        regex: /^([U-X][A-Z]{2}-\d{3})|(\d[A-Z]{2}-\d{3})$/,
        example: '6AA-000',
        type: regexType.OLD,
        description: 'Western Australia - Old'
      },
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
        regex: /^[A-Z]{2}-\d{3}-[A-Z]{2}$/,
        example: 'AA-123-AA',
        type: regexType.CURRENT,
      },
      {
        regex: /^W-\d{3}-[A-Z]{2}$/,
        example: 'W-123-AA',
        type: regexType.CURRENT,
        description: 'Car dealers'
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
