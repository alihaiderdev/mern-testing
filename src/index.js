const express = require("express");

const productRoutes = require("./routes/productRoutes");

const app = express();
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 8000;

app.use(express.json());
var myLogger = function (req, res, next) {
  console.log(req.originalUrl, req.method);
  next();
};
app.use(myLogger);
// app.use(express.static("public"));

// app.use(express.static("files"));
// app.use('/static', express.static('public'))

app.get("/", (req, res) => {
  // res.download("hello.txt", "ali.txt", function (error) {
  //   console.log("Error : ", error);
  // });
  res.send("Hello World!");
});

// app.get("/"x, function (req, res) {
//   res.download("Hello.txt");
// });

// app.get("/api/v1/products", (req, res) => getProducts(req, res));
// app.get("/api/v1/products/:id", (req, res) => getProduct(req, res));

// app.post("/api/v1/products", (req, res) => createProduct(req, res));
// app.delete("/api/v1/products/:id", (req, res) => deleteProduct(req, res));
// app.put("/api/v1/products/:id", (req, res) => updateProduct(req, res));

app.use("/api/v1/products", productRoutes);

function login(req, res, next) {
  console.log("login");
  next();
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
