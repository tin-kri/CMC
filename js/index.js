const baseUrl = "http://cmc-ca.local/wp-json/wc/store/v1/products";
const productContainer = document.querySelector(".products")


async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function (product) {
        productContainer.innerHTML += `
<div class="product">
<h2>${product.name}</h2>
<div class="product-image" style="background-image:url('${product.image}"
</div>`

    })
    console.log(products);
}

getProducts(baseUrl); 