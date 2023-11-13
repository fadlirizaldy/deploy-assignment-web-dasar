const modalPricing = document.getElementById("modalPricing");
const pricingBtn = document.getElementById("pricingBtn");

const cancelBtn = document.getElementById("cancelBtn");
console.log(cancelBtn);

pricingBtn.addEventListener("click", (event) => {
  event.preventDefault();

  modalPricing.classList.toggle("activate");
});

cancelBtn.addEventListener("click", () => {
  console.log("HEHE");
  modalPricing.classList.remove("activate");
});
