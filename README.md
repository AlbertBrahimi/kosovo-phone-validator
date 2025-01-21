# Kosovo Phone  Validator

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

A JavaScript utility to validate and normalize Kosovo phone numbers in a compact format. This library ensures that phone numbers follow the correct format and are valid based on Kosovo's phone number standards.

## General Idea

The `kosovo-phone-validator` library provides a function to validate Kosovo phone numbers. It ensures that the input number:

- Is in the correct format (with spaces).
- Starts with the Kosovo country code (`+383`).
- Contains a valid mobile or landline prefix.
- Contains only valid digits or a leading "+".

It removes all non-numeric characters (except spaces or the leading `+`) and validates the number according to the format used in Kosovo.

## Key Features

- **Format Validation**: Ensures that the phone number contains only valid digits or a single `+` sign at the beginning.
- **Prefix Validation**: Validates mobile and landline prefixes based on Kosovo's telecommunication standards.
  - **Mobile**: Valid prefixes are `44`, `45`, `49`, `43`, `48`.
  - **Landline**: Valid prefixes include `38`, `28`, `39`, `290`, `280`, `29`.
- **Length Check**: Checks that the length of the local number (excluding the country code) is appropriate:
  - For mobile numbers: 8 digits.
  - For landline numbers: 8 or 9 digits.
- **Whitespace Handling**: Automatically removes spaces between digits for validation, but spaces are allowed in the input (e.g., `+383 44 555 1234` is valid).
- **No Dashes Allowed**: Does not allow dashes in the number (e.g., `+383-44-555-123` is invalid).

## Installation

To install the library via npm:

```bash
npm install kosovo-phone-validator
```

## Usage Example

Here’s a simple example of how to use the `kosovo-phone-validator` library:

```javascript
import validateKosovoNumber from "kosovo-phone-validator";

// Example phone numbers
const phone1 = "+383 44 555 123"; // Valid mobile number
const phone2 = "+383 28 555 123"; // Valid landline number
const phone3 = "383 44 555 134"; // Invalid (missing + sign)
const phone4 = "+383 45 555 12345"; // Invalid (too long)

// Validate phone numbers
console.log(validateKosovoNumber(phone1)); // true
console.log(validateKosovoNumber(phone2)); // true
console.log(validateKosovoNumber(phone3)); // false
console.log(validateKosovoNumber(phone4)); // false
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
