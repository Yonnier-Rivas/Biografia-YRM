/*Barra de navegación efecto del scroll*/
window.addEventListener("scroll", function(){
 const header = document.querySelector("header");
 header.classList.toggle("sticky", window.scrollY > 0);   
});

/*Seccion de Hobbies modal*/
const hobbiesModals = document.querySelectorAll(".hobbies-modal");
const leermasBtns = document.querySelectorAll(".leer-mas-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-bnt");

var modal = function(modalClick){
    hobbiesModals[modalClick].classList.add("active");
}

leermasBtns.forEach((leermasBtns, i) => {
    leermasBtns.addEventListener("click", () => {
        modal(i);
    })
})

modalCloseBtns.forEach((modalCloseBtns) => {
    modalCloseBtns.addEventListener("click", () => {
        hobbiesModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

/*Seccion de metas modal*/
const metasModals = document.querySelectorAll(".metas-model");
const imagCard = document.querySelectorAll(".img-card");
const metasCloseBtns = document.querySelectorAll(".metas-close-bnt");

var metaModal = function(modalClick){
    metasModals[modalClick].classList.add("active");
}

imagCard.forEach((imagCard, i) => {
    imagCard.addEventListener("click", () => {
        metaModal(i);
    })
})

metasCloseBtns.forEach((metasCloseBtns) => {
    metasCloseBtns.addEventListener("click", () => {
        metasModals.forEach((metaModalView) => {
            metaModalView.classList.remove("active");
        });
    });
});

/*Boton subir*/
const scrollSubirBtn = document.querySelector(".scrollIiAriiba-btn");

window.addEventListener("scroll", function(){
    scrollSubirBtn.classList.toggle("active", window.scrollY > 500);
});

scrollSubirBtn.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

/*Activar item en la barra de navegación*/

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeigt = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeigt){
            document.querySelector(".elementos a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".elementos a[href*=" + id + "]").classList.remove("active");
        }
    }); 
});

/*Menu responsivo*/
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-bnt");
const navegacionF = document.querySelector(".navegacion");
const navItems = document.querySelector(".elementos a")

menuBtn.addEventListener("click", () => {
    navegacionF.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navegacionF.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () =>{
        navegacionF.classList.remove("active");
    })
});


