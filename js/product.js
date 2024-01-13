const url = document.location;
const search = url.search;
const params = new URLSearchParams(search);

async function getSingleProduct(id) {
    const url = `http://cmc-ca.local/wp-json/wc/store/v1/products/${id}`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("There was an error with response.");
        }
    } catch (error) {
        console.error('Error fetching single product:', error);
    }
}

async function renderSingleProduct() {
    const id = params.get('id');
    const singleData = await getSingleProduct(id);
    const singleProduct = document.getElementById("singleProduct");

    // Clear the existing content in case this function is called again
    singleProduct.innerHTML = "";

    if (Object.keys(singleData).length !== 0) {
        // Create and append HTML elements for product details
        const productDetailsContainer = document.createElement('div');
        productDetailsContainer.classList.add('product-details-container');

        const productName = document.createElement('h2');
        productName.textContent = singleData.name;

        const productImage = document.createElement('img');
        productImage.src = getImageUrl(singleData);
        productImage.alt = singleData.name;
        productImage.classList.add('product-image');

        const productPrice = document.createElement('h3');
        productPrice.textContent = `$${singleData.prices.price / 100}`;

        const productDescription = document.createElement('p');
        productDescription.innerHTML = singleData.description;


        productDetailsContainer.appendChild(productName);
        productDetailsContainer.appendChild(productImage);
        productDetailsContainer.appendChild(productPrice);
        productDetailsContainer.appendChild(productDescription)

        singleProduct.appendChild(productDetailsContainer);

        // Log singleProduct after rendering is complete
        console.log(singleProduct);
    } else {
        console.error('No data or error fetching single product.');
        // You might want to display an error message or redirect to an error page.
    }
}
function getImageUrl(product) {
    return product.images.length > 0 ? product.images[0].src : 'path/to/placeholder-image.jpg';
}
// Call the renderSingleProduct function after defining it
renderSingleProduct();
