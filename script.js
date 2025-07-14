
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".legend-item").forEach(item => {
    item.addEventListener("click", () => {
      const lat = parseFloat(item.getAttribute("data-lat"));
      const lon = parseFloat(item.getAttribute("data-lon"));
      if (window.map) {
        window.map.setView([lat, lon], 17);
      }
    });
  });
});
