function renderProducts(products) {
    document.getElementById('products-size').innerHTML = `${products.length} results`;
    const container = document.getElementById('product_table');
    container.innerHTML = '';
    for (let product of products) {
        container.insertAdjacentHTML('beforeend', renderProduct(product));
    }
}

async function getProducts() {
    let products = await fetchProducts();
    return products;
}

function fetchProducts() {
    return new Promise(function (resolve, reject) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                try {
                    resolve(JSON.parse(xmlhttp.responseText));
                } catch (err) {
                    reject(xmlhttp.status);
                }
            }
        };
        xmlhttp.open("GET", '/data', true);
        xmlhttp.send();
    });
}

function filterBySize(size, products) {
    if (size === '0') return products;
    return products.filter(product => product.size.startsWith(size));
}

function filterByPrice(price, products) {
    if (ValidationUtil.isEmptyOrSpaces(price)) return products;
    return products.filter(product => product.price === ('$' + price));
}