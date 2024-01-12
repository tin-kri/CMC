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
        console.log('Error fetching single product');
    }
}


async function renderSingleProduct() {
    const id = params.get('id');
    const singleData = await getSingleProduct(id);
    const singleProduct = document.getElementById("singleProduct");


    singleProduct.innerHTML = JSON.stringify(singleData);


}




renderSingleProduct();
