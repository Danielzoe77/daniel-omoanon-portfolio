// for the navbar
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("navbar-toggle");
    const menu = document.getElementById("navbar-dropdown");
  
    button.addEventListener("click", function () {
      menu.classList.toggle("hidden");
    });
  });
  
  const navbar = document.getElementById("navbar");
  const img2 = document.getElementById("myImage2");
  const grown = document.getElementById("grow");
  
  window.addEventListener("scroll", () => {
    const imgElement = document.getElementById("myImage");
    if (window.scrollY > 2) {
      navbar.classList.remove("bg-transparent", "text-[#ffffff]");
      navbar.classList.add("bg-white", "text-[#172A46]");
       grown.classList.remove("text-[#ffffff]");
       grown.classList.add("text-[#172A46]");
     
      imgElement.src = "./assets/Insure/INsure Logo.png";
    } else {
      navbar.classList.remove("bg-white", "text-[#172A46]");
      navbar.classList.add("bg-transparent", "text-[#ffffff]");
       grown.classList.add("text-[#ffffff]");
       grown.classList.remove("text-[#172A46]");
      imgElement.src = "./assets/Insure/2-removebg-preview.png";
    }
  });