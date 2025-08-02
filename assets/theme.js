// ...existing JS...

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  var mobileToggle = document.getElementById("mobile-menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", function () {
      mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
    });
    // Hide menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!mobileMenu.contains(e.target) && e.target !== mobileToggle) {
        mobileMenu.style.display = "none";
      }
    });
  }

  // Modal logic (basic)
  document.querySelectorAll(".modal-close, .quickview-close").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.closest(".modal-overlay, .quickview-modal").style.display = "none";
    });
  });
});