import { phoneFormatter } from './formatters/phone-formatter';

const phone = '8 (927) 000-00-00';
const formattedPhone = phoneFormatter(phone);
console.log(formattedPhone); // +79270000000
