var person = [
    {
    "familyName": "McGee",
    "givenName": "Chuckles",
    "greeting": "Miss.",
    "age": 28,
    "height": 165,
    "colors": {
    "eye": "green",
    "hair": "green"
    },
    "home address": {
    "streetNumber": "12345",
    "streetName": "Any St",
    "state": "Mo",
    "zip": 63102,
    "city": "Kansas City"
    person.information= function() {
    return;
    }
    
    }
    // - given an object with data for a person in it, generate a shipping label in the following form:
    //   - input: 
    //     [
    // {
    // "familyName": "McGee",
    // "givenName": "Chuckles",
    // "greeting": "Miss.",
    // "age": 28,
    // "height": 165,
    // "colors": {
    // "eye": "green",
    // "hair": "green"
    // },
    // "home address": {
    // "streetNumber": "12345",
    // "streetName": "Any St",
    // "state": "Mo",
    // "zip": 63102,
    // "city": "Kansas City"
    // }
    
    // }
    // }
    // ]
    
    //   - return "Miss. Chuckles McGee\n12345 Any St\nKansas City, Mo 63102"