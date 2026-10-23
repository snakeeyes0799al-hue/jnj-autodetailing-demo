
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const serviceField = document.getElementById("service");
    serviceField.value = link.dataset.service;
  });
});

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const customerName = document.getElementById("customerName").value.trim();
  const vehicle = document.getElementById("vehicle").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("customerMessage").value.trim();

  if (!customerName || !vehicle || !service) {
    alert("Please complete your name, vehicle and service.");
    return;
  }

  // Add the verified business WhatsApp number here before launch.
  const businessWhatsApp = "";

  if (!/^[1-9]\d{7,14}$/.test(businessWhatsApp)) {
    alert("Demo only: the real business WhatsApp number must be configured before enquiries can be sent.");
    return;
  }

  const enquiry = [
    "Hello JnJ AutoDetailing, I would like to enquire about your services.",
    "",
    "Name: " + customerName,
    "Vehicle: " + vehicle,
    "Service: " + service,
    "Details: " + (message || "No extra details provided")
  ].join("\n");

  const whatsappURL =
    "https://wa.me/" + businessWhatsApp +
    "?text=" + encodeURIComponent(enquiry);

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
});
