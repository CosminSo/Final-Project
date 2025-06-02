// Export the function that will generate the Contact page
export function renderContactPage() {
  const pageContent = document.getElementById("page-content");

  pageContent.innerHTML = "";

  const formContainer = document.createElement("div");

  formContainer.className = "form-container";

  const title = document.createElement("h3");

  title.textContent = "Contactează-ne!";

  formContainer.appendChild(title);

  const form = document.createElement("form");

  form.id = "contactForm";

  // 10. Function that creates a form field (input or textarea)
  function createFormGroup(type, id, labelText, attributes = {}) {
    const div = document.createElement("div");

    div.className = "mb-3";

    const label = document.createElement("label");
    // Creează un element `<label>`.
    label.htmlFor = id;

    label.className = "form-label";

    label.textContent = labelText;

    const input = document.createElement(
      type === "textarea" ? "textarea" : "input"
    );

    if (type !== "textarea") input.type = type;

    input.id = id;

    input.name = id;

    input.className = "form-control form-control-sm";

    input.required = true;

    for (const key in attributes) {
      input.setAttribute(key, attributes[key]);
    }

    div.appendChild(label);

    div.appendChild(input);

    return div;
  }

  form.appendChild(createFormGroup("text", "contactNume", "Nume:"));

  form.appendChild(createFormGroup("text", "contactPrenume", "Prenume:"));

  form.appendChild(createFormGroup("email", "contactEmail", "Email:"));

  form.appendChild(
    createFormGroup("tel", "contactTelefon", "Telefon:", {
      pattern: "[0-9]{10}",
    })
  );

  form.appendChild(
    createFormGroup("textarea", "contactMesaj", "Mesaj:", { rows: "4" })
  );

  const submitButton = document.createElement("button");

  submitButton.type = "submit";

  submitButton.className = "btn btn-primary mt-3";

  submitButton.textContent = "Trimite Mesaj";

  form.appendChild(submitButton);

  const feedbackMsg = document.createElement("div");

  feedbackMsg.style.display = "none";

  feedbackMsg.style.marginTop = "15px";

  feedbackMsg.style.padding = "10px";

  feedbackMsg.style.borderRadius = "8px";

  feedbackMsg.style.fontWeight = "bold";

  feedbackMsg.style.textAlign = "center";

  form.appendChild(feedbackMsg);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    feedbackMsg.textContent = "Mesaj trimis cu succes!";

    feedbackMsg.style.backgroundColor = "#d4edda";

    feedbackMsg.style.color = "#155724";

    feedbackMsg.style.border = "1px solid #c3e6cb";

    feedbackMsg.style.display = "block";

    form.reset();
  });

  formContainer.appendChild(form);

  pageContent.appendChild(formContainer);
}
