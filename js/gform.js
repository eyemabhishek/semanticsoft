const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyANmYWqqZ-u7o5yqwfP2Pphr-ifO0cqq3Xl8GsilJy4wgX7NET4cs6d35wlKS9sCnN/exec";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(e);
  // Get form data
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
    console.log(data);
console.log(formData);
  // Make a POST request to the Google Apps Script
  fetch(scriptURL, {
    method: "POST",
    body: new URLSearchParams(formData),
    // Don't set the Content-Type header, let the browser set it automatically
  })
    .then((response) => response.text())
    .then((responseText) => {
      alert("Great! We'll be in touch with you soon.", responseText);
      // Reset the form
      form.reset();
      // Handle the response as needed
      submitButton.disabled = false;
    })
    .catch((error) => {
      alert("Error!", error.message);
    });
});

