# Kosovo Phone Number Validator

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
- **Length Check**: Checks that the length of the local number is appropriate:
  - For mobile numbers: 8 digits.
  - For landline numbers: 8 or 9 digits.
- **Whitespace Handling**: Automatically removes spaces between digits for validation, but spaces are allowed in the input (e.g., `+383 44 555 1234` is valid).
- **No Dashes Allowed**: Does not allow dashes in the number (e.g., `+383-44-555-123` is invalid).

## Installation

To install the library via npm:

```bash
npm install kosovo-phone-validator
