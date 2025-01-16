fetch(JS/products.json)
 .then(Response => Response.json())
 .then (data => {
    const productListElement = document.getElementById('products');
data.forEach(product =>{
    const categoryDiv = document.getElementById('products');
    categoryDiv.classList.add('category');

    categoryDiv.innerHTML = `
    <img src="${product.product_img}" alt="${prouduct.product_name}">
    <h3>${product.product_name}</h3>
    <p>Giá: ${product.product_price.tolocaleString()}  VNĐ</p> 
    `
    
    productListElement.appendChild(categoryDiv) 
});
 })
 .catch(error => {
    console.error('lỗi khi tải dữ liệu:', error);
 });
 
