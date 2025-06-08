// Select DOM elements
let textInput = document.getElementById("text-input"); // Input field for user text
let checkBtn = document.getElementById("check-btn");  // Button to check palindrome
let result = document.getElementById("result");       // Display result

// Run palindromeChecker when clicking the button
checkBtn.addEventListener("click", palindromeChecker);

// Run palindromeChecker when pressing Enter inside the input field
textInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        palindromeChecker();
    }
});

function palindromeChecker() {
    // Check if input field is empty; alert user and exit function
    if (textInput.value.trim() === "") {
        alert("Please input a value");
        result.innerHTML = "";
        return;
    }

    // Clean the input: remove non-alphanumeric characters and convert to lowercase
    const checkedStr = textInput.value.replace(/[\W_]/g, "").toLowerCase();
    let isPalindrome = true;

    // Compare characters from front and back to check if palindrome
    for (let i = 0; i < Math.floor(checkedStr.length / 2); i++) {
        if (checkedStr[i] !== checkedStr[checkedStr.length - 1 - i]) {
            isPalindrome = false;
            break; // Exit loop early if mismatch found
        }
    }

    // Display result based on palindrome check
    result.innerHTML = isPalindrome
        ? `${textInput.value} is a palindrome`
        : `${textInput.value} is not a palindrome`;

    // Clear the input field after showing the result
    textInput.value = "";

    // Move cursor back to the input field for easier re-entry
    textInput.focus();
}
