document.addEventListener("astro:page-load", () => {
  const navMenu = document.getElementById("nav-menu");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  openBtn.addEventListener("click", openMobileMenu);

  closeBtn.addEventListener("click", closeMobileMenu);

  function openMobileMenu() {
    navMenu?.classList.add("menuOpen", "animating");
  }

  function closeMobileMenu() {
    navMenu?.classList.remove("menuOpen");

    setTimeout(() => {
      navMenu?.classList.remove("animating");
    }, 0.3);
  }
});
