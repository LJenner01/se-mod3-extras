initializePage();

let products = [];
function initializePage() {
    // Fetch Product Data and if successful, Add to the page
    fetchProducts()
        .then(data => {
            products = data;
            data.forEach(productInfo => {
                addProductCard(productInfo)
            });
        })
        .catch(error => {
            console.error(error.message);
        });
}

function addProductCard(productInfo) {
    // clone the template
    const template = document.getElementById("product-template").content.cloneNode(true);

    // populate the template
    template.querySelector('.card-title').innerText = productInfo.title;
    template.querySelector('.card-text').innerText = productInfo.price;
    template.querySelector('.card-img-top').setAttribute('src', `${productInfo.image}`);

    // now we need to dynamically inject the product id, into the onclick handler for each products 'Show Details' button
    template.querySelector('.show-prod-btn').setAttribute('onclick', `showModal(${productInfo.id})`);

    // append the populated template to the product list
    document.querySelector('#card-list').appendChild(template);

}

function showModal(productId) {
    let productDetails = products.find((x) => x.id == productId);

    // Update modal content
    document.querySelector('#productModal .modal-title').textContent = productDetails.title;
    document.querySelector('#productModal .modal-body').textContent = productDetails.description;

    // Show the modal
    var myModal = new bootstrap.Modal(document.getElementById('productModal'));
    myModal.show();
}

function fetchProducts() {
    return fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .catch(error => {
            throw new Error(`Failed to fetch products: ${error.message}`);
        });
}