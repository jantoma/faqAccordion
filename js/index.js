let summarys = document.querySelectorAll("summary");

summarys.forEach((summary) => {
    let img = document.createElement("img");
    img.src = "images/icon-plus.svg";
    img.setAttribute("originalSrc", img.src);
    summary.appendChild(img);

  summary.addEventListener("click", () => {
    const img = summary.querySelector("img");
    const originalSrc = img.getAttribute("originalSrc");
    img.src = img.src === originalSrc ? "images/icon-minus.svg" : originalSrc;
  });
});

