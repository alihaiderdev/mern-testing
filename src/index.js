const express = require("express");


const productRoutes = require("./routes/productRoutes")

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/api/v1/products", (req, res) => getProducts(req, res));
// app.get("/api/v1/products/:id", (req, res) => getProduct(req, res));

// app.post("/api/v1/products", (req, res) => createProduct(req, res));
// app.delete("/api/v1/products/:id", (req, res) => deleteProduct(req, res));
// app.put("/api/v1/products/:id", (req, res) => updateProduct(req, res));

app.use("/api/v1/products", productRoutes);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
