import { expect, test, describe } from '@jest/globals';
import data, { isPlateValidForCountryCode, getCountryCodesForPlate, regexType, supportedCountryCodes } from './index.js';

describe('Validate Data',() => {
  test('Verify that supportedCountryCodes are all inside the data', () => {
    expect(Object.keys(supportedCountryCodes).length).toEqual(Object.keys(data).length);

    Object.keys(supportedCountryCodes).forEach(countryCode => {
      expect(data[countryCode]).not.toBeNull();
    });
  });

  test('Verify that all countries have at least one CURRENT plate format', () => {
    Object.keys(supportedCountryCodes).forEach(countryCode => {
      expect(data[countryCode].list.filter(item => item.type === regexType.CURRENT).length).toBeGreaterThanOrEqual(1);
    });
  });
});

describe('Data examples', () => {
  Object.values(data).forEach(countryData => {
    test(`Testing examples for country: ${countryData.name}`, () => {
      countryData.list.forEach(item => {
        // Verify for that item that its example corresponds to its regex
        expect(item.regex.test(item.example)).toBeTruthy();
      });
    });
  });
});

describe('isPlateValidForCountryCode', () => {
  Object.values(data).forEach(countryData => {
    test(`Testing isPlateValidForCountryCode with examples for country: ${countryData.name}`, () => {
      countryData.list.forEach(item => {
        // Testing for the specific item type
        expect(isPlateValidForCountryCode(item.example, countryData.code, [item.type])).toBeTruthy();

        // Testing for all types
        expect(isPlateValidForCountryCode(item.example, countryData.code, [regexType.CURRENT, regexType.OLD])).toBeTruthy();

        // Testing without the type if the item is current
        if (item.type === regexType.CURRENT) {
          expect(isPlateValidForCountryCode(item.example, countryData.code)).toBeTruthy();
        }
      });
    });
  });
});

describe('getCountryCodesForPlate', () => {
  Object.values(data).forEach(countryData => {
    test(`Testing getCountryCodesForPlate with examples for country: ${countryData.name}`, () => {
      countryData.list.forEach(item => {
        // Testing for the specific item type
        expect(getCountryCodesForPlate(item.example, [item.type])).toContain(countryData.code);

        // Testing for all types
        expect(getCountryCodesForPlate(item.example, [regexType.CURRENT, regexType.OLD])).toContain(countryData.code);

        // Testing without the type if the item is current
        if (item.type === regexType.CURRENT) {
          expect(getCountryCodesForPlate(item.example)).toContain(countryData.code);
        }
      });
    });
  });
});
