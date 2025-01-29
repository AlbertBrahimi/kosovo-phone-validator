/**
 * Validate a Kosovo phone number (compact format).
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {boolean} - Returns true if the number is valid, false otherwise.
 */
const validateKosovoNumber = (phoneNumber: string | null | undefined): boolean => {
    if (!phoneNumber) return false;

    const VALID_PREFIXES = {
      MOBILE: new Set(['44', '45', '49', '43', '48', '46', '47']),
      LANDLINE: new Set(['38', '28', '39', '290', '280', '29']),
    };

    // Ensure the number only contains digits, spaces, or a single leading "+" and no other non-numeric characters
    if (/[^+\d\s]/.test(phoneNumber)) {
      return false; 
    }

    // Remove all non-numeric characters except for "+" and spaces
    const sanitizedNumber = phoneNumber.replace(/[^+\d\s]/g, '').replace(/\s+/g, ' '); 

    // Ensure the number contains exactly one + and it is at the beginning
    if (sanitizedNumber.indexOf('+') !== 0 || (sanitizedNumber.match(/\+/g) || []).length > 1) {
      return false;
    }

    // Ensure the number starts with +383
    if (!sanitizedNumber.startsWith('+383')) {
      return false;
    }

    // Extract the local number by removing the country code (+383)
    const localNumber = sanitizedNumber.slice(4).replace(/\s+/g, ''); 
    const prefix = localNumber.slice(0, 2);

    // Check for valid mobile prefixes and length
    if (VALID_PREFIXES.MOBILE.has(prefix) && localNumber.length === 8) {
      return true;
    }

    // Check for valid landline prefixes and length
    if (
      VALID_PREFIXES.LANDLINE.has(prefix) && 
      (localNumber.length === 8 || localNumber.length === 9)
    ) {
      return true;
    }

    return false;
};

export default validateKosovoNumber;
