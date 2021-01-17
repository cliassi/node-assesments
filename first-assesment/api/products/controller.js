let productRepository = require('./product.repository');

function getProducts() {
        return productRepository.getProducts();
}

function getProduct(id) {
        return productRepository.getProductById(id);
}

function createProduct(product) {
        return productRepository.createProduct(product);
}

function updateProduct(product) {
        return productRepository.updateProduct(product);
}

function deleteProduct(id) {
        return productRepository.deleteProductById(id);
}

module.exports = {
        getProducts,
        getProduct,
        createProduct,
        deleteProduct,
        updateProduct
};
