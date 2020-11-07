import { expect, test, describe } from '@jest/globals';
import data, { supportedCountryCodes, isPlateValidForCountryCode } from './index.js';

test('isPlateValidForCountryCode', () => {

  expect(isPlateValidForCountryCode('KAZ-81', supportedCountryCodes.BE)).toBeFalsy();
  expect(isPlateValidForCountryCode('ABC-123', supportedCountryCodes.BE)).toBeTruthy();
  expect(isPlateValidForCountryCode('8-WKC-001', supportedCountryCodes.BE)).toBeTruthy();
  
  expect(isPlateValidForCountryCode('RAKL8136', supportedCountryCodes.DE)).toBeTruthy();

  expect(isPlateValidForCountryCode('G-573-HJ', supportedCountryCodes.FR)).toBeFalsy();
  expect(isPlateValidForCountryCode('W-573-HJ', supportedCountryCodes.FR)).toBeTruthy();
  expect(isPlateValidForCountryCode('AA-123-AA', supportedCountryCodes.FR)).toBeTruthy();
  expect(isPlateValidForCountryCode('123ABC45', supportedCountryCodes.FR)).toBeTruthy();
  expect(isPlateValidForCountryCode('123 ABC 45', supportedCountryCodes.FR)).toBeTruthy();
  expect(isPlateValidForCountryCode('1023 AC 45', supportedCountryCodes.FR)).toBeTruthy();

  expect(isPlateValidForCountryCode('AA 01', supportedCountryCodes.LU)).toBeFalsy();
  expect(isPlateValidForCountryCode('AA 1234', supportedCountryCodes.LU)).toBeTruthy();
  expect(isPlateValidForCountryCode('AA1234', supportedCountryCodes.LU)).toBeTruthy();
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
