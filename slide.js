const menubar = document.querySelector(".menu-ico")
const menucontent = document.querySelector(".menu-content")
const close = document.querySelector(".close")



menubar.addEventListener("click", () => {
    menucontent.classList.add("show")

})

close.addEventListener("click", () => menucontent.classList.remove("show"))
