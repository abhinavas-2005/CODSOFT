document.addEventListener("DOMContentLoaded", () => {
    let display = document.getElementById("result");
    let expression = "";

    // Event listener for all buttons
    document.querySelector(".buttons").addEventListener("click", (event) => {
        const value = event.target.getAttribute("data-value");
        
        if (!value) return; // Ignore clicks outside buttons

        if (value === "C") {
            // Clear the display
            expression = "";
            display.innerText = "0";
        } else if (value === "=") {
            try {
                expression = eval(expression).toString(); // Evaluate safely
                display.innerText = expression;
            } catch (error) {
                display.innerText = "Error";
                expression = "";
            }
        } else {
            // Append value to expression
            if (expression === "0" && value !== ".") expression = "";
            expression += value;
            display.innerText = expression;
        }
    });
});
