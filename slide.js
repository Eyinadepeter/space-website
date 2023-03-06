const menubar = document.querySelector(".menu-ico")
const menucontent = document.querySelector(".sm-screen")
const close = document.getElementById("close")



menubar.addEventListener("click", () => {
    menucontent.classList.add("show")

})

close.addEventListener("click", () => menucontent.classList.remove("show"))
