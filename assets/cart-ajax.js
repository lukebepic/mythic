// AJAX logic for cart: add, update, remove, and UI sync
document.addEventListener("DOMContentLoaded", function () {
  function updateCartUI(html) {
    // Replace main cart, drawer, and modal contents
    document.getElementById("CartDrawerContents")?.replaceWith(
      new DOMParser().parseFromString(html, "text/html").getElementById("CartDrawerContents")
    );
    document.getElementById("CartModalContents")?.replaceWith(
      new DOMParser().parseFromString(html, "text/html").getElementById("CartModalContents")
    );
    document.querySelector(".cart-main")?.replaceWith(
      new DOMParser().parseFromString(html, "text/html").querySelector(".cart-main")
    );
  }

  document.body.addEventListener("submit", function (e) {
    const form = e.target;
    if (form.matches("#CartForm, .upsell-add-form")) {
      e.preventDefault();
      const formData = new FormData(form);
      fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { "X-Requested-With": "XMLHttpRequest" }
      })
        .then((r) => r.text())
        .then(updateCartUI);
    }
  });

  // Optional: auto-open drawer or modal after add-to-cart
  document.body.addEventListener("click", function (e) {
    if (e.target.closest(".add-to-cart")) {
      setTimeout(() => {
        document.querySelector(".cart-toggle")?.click();
      }, 200);
    }
  });
});