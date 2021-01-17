let repo = require('../db.repository')
const collection = "products"


function getProducts() {
  return repo.get(collection);
}

function getProductById(id) {
  return repo.getById(collection,id);
}

function createProduct(product) {
  repo.create(collection, product);
}

function updateProduct(product) {
  repo.update(collection, product);
}

function deleteProductById(id) {
  repo.remove(collection, id);
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProductById,
  updateProduct
}