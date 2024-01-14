// const baseUrl = "http://cmc-ca.local/wp-json/wc/store/v1/products";
const baseUrl = "https://www.tinakristiansen.no/wp-json/wc/store/products"
const productContainer = document.querySelector(".products");


async function getProducts(url) {
    try {
        const response = await fetch(url);
        const products = await response.json();

        const fragment = document.createDocumentFragment();

        products.forEach(function (product) {
            const productElement = createProductElement(product);
            fragment.appendChild(productElement);

            // Add click event listener to each product
            productElement.addEventListener('click', function () {
                const productId = this.getAttribute('data-product-id');
                // Navigate to a new page or load additional information using the productId
                window.location.href = `/product.html?id=${productId}`;
            });
        });

        productContainer.appendChild(fragment);

        console.log(products);
    } catch {
        console.error('Error fetching products:');
    }
}

function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    // Add data-product-id attribute to store the product ID
    productElement.setAttribute('data-product-id', product.id);


    productElement.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${getImageUrl(product)}" alt="${product.name}">
        <h3>$${product.prices.price / 100}</h3>`;

    return productElement;
}
//Struggled do get the img in the innerhtml
function getImageUrl(product) {
    return product.images.length > 0 ? product.images[0].src : 'path/to/placeholder-image.jpg';
}

getProducts(baseUrl);