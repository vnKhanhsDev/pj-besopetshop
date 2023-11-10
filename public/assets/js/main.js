document.querySelectorAll('.b-card-info-atc-btn').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        // Lấy thông tin sản phẩm từ phần tử HTML tương ứng
        const productInfo = {
            id: this.closest('.b-card').querySelector('.b-card-info-title-id').innerText,
            name: this.closest('.b-card').querySelector('.b-card-info-title-name').innerText,
            // Thêm các thông tin khác nếu cần
        };

        // Lấy danh sách sản phẩm từ LocalStorage (nếu có)
        let productsInCart = JSON.parse(localStorage.getItem('products')) || [];

        // Thêm sản phẩm mới vào danh sách
        productsInCart.push(productInfo);

        // Lưu lại danh sách sản phẩm vào LocalStorage
        localStorage.setItem('products', JSON.stringify(productsInCart));
    });
});