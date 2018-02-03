const chai = require('chai');
const expect = chai.expect;

const db = require('./../db/products');

describe('Test Product model methods', function () {
  it('should respond to create', function () {
    expect(db).to.respondTo('create');
  });

  it('should respond to findAll', function () {
    expect(db).to.respondTo('findAll');
  });

  it('should respond to findById', function () {
    expect(db).to.respondTo('findById');
  });

  it('findAll should return empty array', function () {
    const result = db.findAll();
    expect(result).to.be.an('array');
    expect(result).to.be.empty;
  })

  describe('Product model methods', function () {
    let newProduct;

    before(function () {
      newProduct = {
        name: 'pencil',
        price: 1.45,
        inventory: 100
      }
    });

    it('create should add a new product when passed data', function () {
      let result = db.create(newProduct);
      expect(result).to.equal(1);
    });

    //test findAll
    it('findAll should return array with one product', function () {
      let result = db.findAll();
      expect(result).to.be.an('array');
      expect(result).to.have.a.lengthOf(1);
      expect(result).to.deep.equal([{id: 1, name: 'pencil', price: 1.45, inventory: 100}]);
    });

    it('findById should return product with matching id', function () {
      let id = '1';
      let result = db.findById(id);
      expect(result).to.have.keys(['id', 'name', 'price', 'inventory']);
      expect(result.id).to.equal(1);
      expect(result.name).to.equal('pencil');
      expect(result.price).to.equal(1.45);
      expect(result.inventory).to.equal(100)

    })
  });
});