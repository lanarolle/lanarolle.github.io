const navToggle = document.getElementById('nav-toggle');
const mobileOverlay = document.getElementById('mobile-overlay');

// Toggle overlay and navbar visibility
navToggle.addEventListener('click', () => {
  mobileOverlay.classList.toggle('hidden');
});

// Close overlay if clicked outside the navbar
document.addEventListener('click', (event) => {
  if (!navToggle.contains(event.target) && !mobileOverlay.contains(event.target)) {
    mobileOverlay.classList.add('hidden');
  }
});


// // const navToggle = document.getElementById("nav-toggle");
// const navbar = document.getElementById("navbar-default");


// navToggle.addEventListener("click", () => {
//   navbar.classList.toggle("hidden");
// });

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // Rename "Sheet1" if needed
  const data = JSON.parse(e.postData.contents);

  // Append the new row
  sheet.appendRow([
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.message,
    data.terms
  ]);

  return ContentService.createTextOutput(JSON.stringify({ "result": "success" })).setMimeType(ContentService.MimeType.JSON);
}


document.getElementById("contactForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = {
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
    terms: document.getElementById("terms").checked ? "Yes" : "No"
  };

  try {
    const response = await fetch("AKfycbyB5PCwZRFYc_Z2PWADZJ_99XfsQ0RkCaI5iyn-YW0", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      document.getElementById("contactForm").reset();
    } else {
      alert("Error submitting form. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error submitting form. Please try again.");
  }
});


// Get the overlay and navbar elements
//const mobileOverlay = document.getElementById("mobile-overlay");
const navbarItems = document.querySelectorAll("#navbar-default li");

// Add a click event to each <li> item
navbarItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Hide the overlay
        mobileOverlay.classList.add("hidden");
    }
  );
});




// Get references to the elements
//const mobileOverlay = document.getElementById('mobile-overlay');
const navbarDefault = document.getElementById('navbar-default');

// Function to close the mobile menu
function closeNavbar() {
    mobileOverlay.classList.add('hidden'); // Add the 'hidden' class to hide the overlay
}

// Add event listener to the overlay for closing
mobileOverlay.addEventListener('click', (event) => {
    // Close the navbar only if the user clicks outside the menu
    if (event.target === mobileOverlay) {
        closeNavbar();
    }
});

// Optional: If you have a close button in your menu
const closeButton = document.querySelector('#navbar-default .close-btn');
if (closeButton) {
    closeButton.addEventListener('click', closeNavbar);
}





