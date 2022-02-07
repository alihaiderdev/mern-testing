const Product = require("../models/productModel");

const { getPostData } = require("../utils");

// @desc    Gets All Products
// @route   GET /api/products

// async function getProducts(req, res) {
//   try {
//     const products = await Product.findAll();
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(products));
//   } catch (error) {
//     console.log(error);
//   }
// }

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

// @desc    Gets Single Product
// @route   GET /api/product/:id

// async function getProduct(req, res) {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "Product Not Found" }));
//     } else {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(product));
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
};

// @desc    Create a Product
// @route   POST /api/products
// async function createProduct(req, res) {
//   try {
//     const body = await getPostData(req);
//     const { name, description, price } = JSON.parse(body);
//     const product = {
//       name,
//       description,
//       price,
//     };
//     const newProduct = await Product.create(product);

//     res.writeHead(201, { "Content-Type": "application/json" });
//     return res.end(JSON.stringify(newProduct));
//   } catch (error) {
//     console.log(error);
//   }
// }
exports.createProduct = async (req, res) => {
  try {
    // const body = await getPostData(req);
    const { name, description, price } = JSON.parse(JSON.stringify(req.body));

    const product = await Product.create({
      name,
      description,
      price,
    });
    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(product));
  } catch (error) {
    console.log(error);
  }
};

// @desc    Update a Product
// @route   PUT /api/products/:id
// async function updateProduct(req, res) {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     if (!product) {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.end(
//         JSON.stringify({
//           message: `Product with this id (${id}) not exist`,
//         })
//       );
//     } else {
//       const body = await getPostData(req);
//       const { name, description, price } = JSON.parse(body);
//       const productData = {
//         name: name || product.name,
//         description: description || product.description,
//         price: price || product.price,
//       };
//       const updProduct = await Product.update(id, productData);
//       res.writeHead(200, { "Content-Type": "application/json" });
//       return res.end(JSON.stringify(updProduct));
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: `Product with this id (${id}) not exist`,
        })
      );
    } else {
      const body = await getPostData(req);
      const { name, description, price } = JSON.parse(body);
      const productData = {
        name: name || product.name,
        description: description || product.description,
        price: price || product.price,
      };
      const updProduct = await Product.update(id, productData);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(updProduct));
    }
  } catch (error) {
    console.log(error);
  }
};

// @desc    Delete Product
// @route   DELETE /api/product/:id
// async function deleteProduct(req, res) {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     if (!product) {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "Product Not Found" }));
//     } else {
//       await Product.remove(id);
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: `Product ${id} removed` }));
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found" }));
    } else {
      await Product.remove(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: `Product ${id} removed` }));
    }
  } catch (error) {
    console.log(error);
  }
};

// module.exports = {
//   getProducts,
//   getProduct,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// };
