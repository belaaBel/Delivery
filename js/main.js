let signCart = document.querySelector('.sign-cart');
let btnClose = document.querySelector('.btn-close');
let closeModel = document.querySelector('.close-model');
let modelCart = document.querySelector('.model');
let body = document.querySelector(".body-scroll");

signCart.addEventListener('click', () => {
    modelCart.style.display = "flex";
    body.style.overflow = "hidden"
});

closeModel.addEventListener('click', () => {
    modelCart.style.display = "none"
    body.style.overflow = "scroll"
});

btnClose.addEventListener('click', () => {
    modelCart.style.display = "none"
    body.style.overflow = "scroll"
});