let repo = require('../db.repository')


function getProducts() {
  return repo.get("products");
}

function getProductById(id) {
  return repo.getById("products",id);
}

function createProduct(product) {
  repo.create("products", product);
}

function updateProduct(product) {
  repo.update("products", product);
}

function deleteProductById(id) {
  repo.remove("products", id);
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProductById,
  updateProduct
}