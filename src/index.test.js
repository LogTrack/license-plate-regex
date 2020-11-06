import { supportedCountryCodes, isPlateValidForCountryCode } from './index.js';

test('isPlateValidForCountryCode', () => {

  expect(isPlateValidForCountryCode('G-573-HJ', supportedCountryCodes.FR)).toBe(false);
  expect(isPlateValidForCountryCode('W-573-HJ', supportedCountryCodes.FR)).toBe(true);
  expect(isPlateValidForCountryCode('AA-123-AA', supportedCountryCodes.FR)).toBe(true);
  expect(isPlateValidForCountryCode('123ABC45', supportedCountryCodes.FR)).toBe(true);

  expect(isPlateValidForCountryCode('KAZ-81', supportedCountryCodes.BE)).toBe(false);
  expect(isPlateValidForCountryCode('KAZ-813', supportedCountryCodes.BE)).toBe(true);
  expect(isPlateValidForCountryCode('1-ABC-003', supportedCountryCodes.BE)).toBe(true);
});
