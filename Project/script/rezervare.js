function createFormGroup(type, id, labelText, attributes = {}) {
  const div = document.createElement("div");
  div.className = "mb-3";

  const label = document.createElement("label");
  label.htmlFor = id;
  label.className = "form-label";
  label.textContent = labelText;

  const input = document.createElement("input");
  input.type = type;
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

function createFormGroupSelect(id, labelText, options) {
  const div = document.createElement("div");
  div.className = "mb-3";

  const label = document.createElement("label");
  label.htmlFor = id;
  label.className = "form-label";
  label.textContent = labelText;

  const select = document.createElement("select");
  select.id = id;
  select.name = id;
  select.className = "form-select form-select-sm";
  select.required = true;

  options.forEach((opt) => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.text;
    select.appendChild(option);
  });

  div.appendChild(label);
  div.appendChild(select);
  return div;
}

export function renderRezervarePage() {
  const pageContent = document.getElementById("page-content");
  pageContent.innerHTML = "";

  const formContainer = document.createElement("div");
  formContainer.className = "form-container";

  const title = document.createElement("h3");
  title.textContent = "Rezervă Acum!";
  formContainer.appendChild(title);

  const form = document.createElement("form");
  form.id = "bookingForm";

  const roomOptions = [
    { value: "1", text: "1 Cameră" },
    { value: "2", text: "2 Camere" },
    { value: "3", text: "3 Camere" },
    { value: "4", text: "4 Camere" },
    { value: "5", text: "5 Camere" },
  ];

  form.appendChild(createFormGroup("text", "bookingNume", "Nume:"));
  form.appendChild(createFormGroup("text", "bookingPrenume", "Prenume:"));
  form.appendChild(createFormGroup("email", "bookingEmail", "Email:"));
  form.appendChild(
    createFormGroup("tel", "bookingTelefon", "Număr de Telefon:")
  );

  form.appendChild(
    createFormGroupSelect("bookingCamere", "Număr Camere:", roomOptions)
  );

  form.appendChild(
    createFormGroup("number", "bookingAdulti", "Adulți:", { min: "1" })
  );
  form.appendChild(
    createFormGroup("number", "bookingCopii", "Copii (0-17 ani):", { min: "0" })
  );
  form.appendChild(createFormGroup("date", "bookingCheckIn", "Data Check-in:"));
  form.appendChild(
    createFormGroup("date", "bookingCheckOut", "Data Check-out:")
  );

  const observatiiGroup = createFormGroup(
    "text",
    "bookingObservatii",
    "Observații suplimentare:(Optional)",
    { placeholder: "Ex: preferințe de cameră, alergii etc." }
  );
  observatiiGroup.querySelector("input").required = false;
  form.appendChild(observatiiGroup);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "btn btn-primary mt-3";
  submitButton.textContent = "Rezervă Acum!";
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

    feedbackMsg.textContent = "Cererea de rezervare a fost trimisă!";
    feedbackMsg.style.backgroundColor = "#d4edda";
    feedbackMsg.style.color = "#155724";
    feedbackMsg.style.border = "1px solid #c3e6cb";
    feedbackMsg.style.display = "block";

    form.reset();
  });

  formContainer.appendChild(form);
  pageContent.appendChild(formContainer);
}
