const baseUrl = "http://cmc-ca.local/wp-json/wc/store/v1/products";
const productContainer = document.querySelector(".products");

async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();

    products.forEach(function (product) {
        // Display product information with the image inside the product div
        productContainer.innerHTML += `
            <div class="product">
                <h2>${product.name}</h2>
              
                <img src="${getImageUrl(product)}" alt="${product.name}">
                <h3>$${product.prices.price / 100}</h3>
            </div>`
    });
    document.querySelector(".products").addEventListener("click", () => {
        console.log(event.target)
    })
    console.log(products);
}

function getImageUrl(product) {
    // Check if the product has an image
    return product.images.length > 0 ? product.images[0].src : 'path/to/placeholder-image.jpg';

}


getProducts(baseUrl);

;