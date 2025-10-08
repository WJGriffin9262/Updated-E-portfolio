//template_m2xp97o
//service_prmsgo8
//pC3Xs5nEQtKJb34Zy

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"

   emailjs
   .sendForm(
    'service_prmsgo8',
    'template_m2xp97o',
    event.target,
    'pC3Xs5nEQtKJb34Zy'
   ).then(() =>{
    loading.classList.remove("modal__overlay--visible");
    success.classList += ' modal__overlay--visible'
   }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
        "The email service is temporarily unavailable. Please contact me directly at william9262@gmail.com"
    )
   })
}
let isModalOpen = false;
function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += "modal--open";
}