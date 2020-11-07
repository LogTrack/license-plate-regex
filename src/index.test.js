import { expect, test, describe } from '@jest/globals';
import data, { isPlateValidForCountryCode, regexType } from './index.js';

describe('isPlateValidForCountryCode', () => {

  Object.values(data).forEach(countryData => {
    test(`Testing isPlateValidForCountryCode with examples for country: ${countryData.name}`, () => {
      countryData.list.forEach(item => {
        expect(isPlateValidForCountryCode(item.example, countryData.code, [item.type])).toBeTruthy();
        
        expect(isPlateValidForCountryCode(item.example, countryData.code, [regexType.CURRENT, regexType.OLD])).toBeTruthy();

        if (item.type === regexType.CURRENT) {
          expect(isPlateValidForCountryCode(item.example, countryData.code)).toBeTruthy();
        }
      });
    });
  });
});

describe('Data examples', () => {
  Object.values(data).forEach(countryData => {
    test(`Testing examples for country: ${countryData.name}`, () => {
      countryData.list.forEach(item => {
        expect(item.regex.test(item.example)).toBeTruthy();
      });
    });
  });
});
