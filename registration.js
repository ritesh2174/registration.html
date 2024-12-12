// JavaScript Code

document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const mobileInput = document.getElementById("mobileInput");
    const genderInput = document.getElementById("gender");
    const dobInput = document.getElementById("dobInput");
    const displaySection = document.getElementById("registrations");
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const mobile = mobileInput.value.trim();
        const gender = genderInput.value;
        const dob = dobInput.value;

        if (name && email && mobile && gender && dob) {
            const entry = document.createElement("div");
            entry.classList.add("entry");
            entry.innerHTML = `
                <strong>Name:</strong> ${name} <br>
                <strong>Email:</strong> ${email} <br>
                <strong>Mobile:</strong> ${mobile} <br>
                <strong>Gender:</strong> ${gender} <br>
                <strong>Date of Birth:</strong> ${dob}
            `;
            displaySection.appendChild(entry);

            // Clear inputs after submission
            nameInput.value = "";
            emailInput.value = "";
            mobileInput.value = "";
            genderInput.value = "";
            dobInput.value = "";
        } else {
            alert("Please fill out all fields.");
        }
    });
});