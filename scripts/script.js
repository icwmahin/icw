// Add smooth hover interactions
document.querySelectorAll(".feature-item").forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "translateY(-5px)";
  });

  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
  });
});
