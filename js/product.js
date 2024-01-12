const singleProductContainer = document.querySelector(".product");
const baseUrl = "http://cmc-ca.local/wp-json/wc/store/v1/products";

async function getProduct(url) {
    const response = await fetch(url);
    const product = await response.json();

    console.log(product);

    product.innerHTML = `<h1>${product.name}</h1>
    <div class="product.image"
         style="background-image: url('${product_image}')"></div>
    <div class="product.description">${product.description}</div>`;
}

getProduct(baseUrl);