
document.getElementById("legend-toggle").addEventListener("click", function () {
  var legend = document.getElementById("legend");
  legend.style.display = legend.style.display === "none" ? "block" : "none";
});

document.querySelectorAll(".legend-item").forEach(function (item) {
  item.addEventListener("click", function () {
    var lat = parseFloat(this.dataset.lat);
    var lon = parseFloat(this.dataset.lon);
    window.map.setView([lat, lon], 17);
  });
});
