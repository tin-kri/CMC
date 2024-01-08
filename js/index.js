// const baseUrl = "http://cmc-ca.local/wp-json/wc/store/v1/products";
// const productContainer = document.querySelector(".products");

// async function getProducts(url) {
//     const response = await fetch(url);
//     const products = await response.json();

//     products.forEach(function (product) {
//         // Display product information
//         productContainer.innerHTML += `
//             <div class="product">
//                 <h2>${product.name}</h2>
//             </div>`;

//         // Call the getImages function to display images
//         getImages(product);
//     });

//     console.log(products);
// }

// async function getImages(product) {
//     // Check if the product has an image
//     const imageUrl = product.images.length > 0 ? product.images[0].src : 'path/to/placeholder-image.jpg';

//     // Append the image to the existing product container
//     productContainer.innerHTML += `
//         <img src="${imageUrl}" alt="${product.name}">
//     `;
// }

// getProducts(baseUrl);

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
            </div>`;
    });

    console.log(products);
}

function getImageUrl(product) {
    // Check if the product has an image
    return product.images.length > 0 ? product.images[0].src : 'path/to/placeholder-image.jpg';
}

getProducts(baseUrl);