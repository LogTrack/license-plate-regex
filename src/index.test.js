import { supportedCountryCodes, isPlateValidForCountryCode } from './index.js';

test('isPlateValidForCountryCode', () => {

  expect(isPlateValidForCountryCode('G-573-HJ', supportedCountryCodes.FR)).toBe(false);
  expect(isPlateValidForCountryCode('W-573-HJ', supportedCountryCodes.FR)).toBe(true);
  expect(isPlateValidForCountryCode('AA-123-AA', supportedCountryCodes.FR)).toBe(true);
  expect(isPlateValidForCountryCode('123ABC45', supportedCountryCodes.FR)).toBe(true);
  expect(isPlateValidForCountryCode('123 ABC 45', supportedCountryCodes.FR)).toBe(true);
  expect(isPlateValidForCountryCode('1023 AC 45', supportedCountryCodes.FR)).toBe(true);

  expect(isPlateValidForCountryCode('KAZ-81', supportedCountryCodes.BE)).toBe(false);
  expect(isPlateValidForCountryCode('ABC-123', supportedCountryCodes.BE)).toBe(true);
  expect(isPlateValidForCountryCode('8-WKC-001', supportedCountryCodes.BE)).toBe(true);
});
