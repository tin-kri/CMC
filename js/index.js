const baseUrl = "http://cmc-ca.local/wp-json/wc/store/v1/products";
const productContainer = document.querySelector(".products");

// async function getProducts(url) {
//     const response = await fetch(url);
//     const products = await response.json();

//     products.forEach(function (product) {
//         // Display product information with the image inside the product div
//         productContainer.innerHTML += `
//             <div class="product">
//                 <h2>${product.name}</h2>
//                 <img src="${getImageUrl(product)}" alt="${product.name}">
//                 <h3>$${product.prices.price / 100}</h3>
//             </div>`
//     });

//     console.log(products);
// }

// function getImageUrl(product) {
//     return product.images.length > 0 ? product.images[0].src : 'path/to/placeholder-image.jpg';
// }



// getProducts(baseUrl);

// ;

async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();

    const fragment = document.createDocumentFragment();

    products.forEach(function (product) {
        const productElement = createProductElement(product);
        fragment.appendChild(productElement);
    });

    productContainer.appendChild(fragment);

    console.log(products);
}

function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${getImageUrl(product)}" alt="${product.name}">
        <h3>$${product.prices.price / 100}</h3>`;

    return productElement;
}

function getImageUrl(product) {
    return product.images.length > 0 ? product.images[0].src : 'path/to/placeholder-image.jpg';
}



getProducts(baseUrl);