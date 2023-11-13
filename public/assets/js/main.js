$(document).ready(function () {
    // localStorage.clear();
    document.querySelectorAll('.b-card-info-atc-btn').forEach(addToCartBtn => {
        addToCartBtn.addEventListener('click', function (event) {
            event.preventDefault();

            const productInfo = {
                img: this.closest('.b-card').querySelector('.b-card-thumb-img img').getAttribute('src'),
                id: this.closest('.b-card').querySelector('.b-card-info-title-id').innerText,
                name: this.closest('.b-card').querySelector('.b-card-info-title-name').innerText,
                price: this.closest('.b-card').querySelector('.b-card-info-now-price-number').innerText,
            };

            let productsInCart = JSON.parse(localStorage.getItem('products')) || [];

            productsInCart.push(productInfo);

            localStorage.setItem('products', JSON.stringify(productsInCart));
        });
    });
});