/**
 * Function: convertToRoman
 * Converts an integer to a Roman numeral representation.
 *
 * @param {number} num - The integer to convert (1–3999).
 * @returns {string} - Roman numeral equivalent.
 */
function convertToRoman(num) {
    // List of Roman numerals and their corresponding values
    const romanNumerals = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    let result = "";

    // Loop through numeral list and subtract values until number is reduced
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            num -= romanNumerals[i].value;
        }
    }
    return result;
}

/**
 * Event listener for Convert button
 * Handles validation and displays result or error message.
 */
document.getElementById("convert-btn").addEventListener("click", () => {
    // Get value from input
    const input = document.getElementById("number").value;
    const output = document.getElementById("output");

    // Check for empty input
    if (input === "") {
        output.textContent = "Please enter a valid number";
        return;
    }

    // Convert string to integer
    const num = parseInt(input);

    // Validate input and output correct message
    if (isNaN(num)) {
        output.textContent = "Please enter a valid number";
    } else if (num < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (num >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        // Valid input → convert and display Roman numeral
        output.textContent = convertToRoman(num);
    }
});
