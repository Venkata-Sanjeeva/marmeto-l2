
const cartBtn = document.querySelector('.cart-btn');

cartBtn.addEventListener('click',() => {
    const msg = document.querySelector('.pop-up-msg');
    msg.classList.add('js-pop-up-msg');
    msg.innerText = 'Embrace Sideboard with Color Yellow and Size Small added to cart';
})
