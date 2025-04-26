import { phoneFormatter } from '../phone-formatter';

describe('Функция phoneFormatter', () => {
  const phones = [
    { phone: '1234567890', expected: '+1234567890' },
    { phone: '8 (927) 000-00-00', expected: '+79270000000' },
    { phone: '+7 960 000 00 00', expected: '+79600000000' },
    { phone: '+79876543210', expected: '+79876543210' },
    { phone: '+86 000 000 0000', expected: '+860000000000' },
  ];

  describe('принимает номер телефона и возвращает его в отформатированном формате', () => {
    phones.forEach(({ phone, expected }) => {
      it(`номер ${phone} должен быть отформатирован в ${expected}`, () => {
        expect(phoneFormatter(phone)).toBe(expected);
      });
    });
  })
});
