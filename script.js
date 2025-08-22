document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll("ul li a");
  const images = document.querySelectorAll(".images img");

  listItems.forEach((listItem, index) => {
    listItem.addEventListener("mouseenter", () => {
      images.forEach(img => img.style.display = "none");
      if (images[index]) images[index].style.display = "block";
    });

    listItem.addEventListener("mouseleave", () => {
      if (images[index]) images[index].style.display = "none";
    });
  });
});
