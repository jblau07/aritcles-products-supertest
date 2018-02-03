let collection = [];
let curId = 0;

module.exports = {
  create,
  findAll,
  findById
}

function create(data) {
  const productData = {
    id: ++curId,
    name: data.name,
    price: data.price,
    inventory: data.inventory
  };
  collection.push(productData);
  return collection.length;
}

function findAll() {
  return collection;
}

function findById(id) {
  id = parseInt(id);
  const foundProduct = collection.filter( product => {
    return product.id === id;
  });
  if (foundProduct.length) {
    return foundProduct[0];
  } else {
    return false;
  }
  // return collection.find(product => {
  //   return product.id === id;
  // });
}