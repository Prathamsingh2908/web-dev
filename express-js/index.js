import express from "express";
const app = express();

app.get("/ecom/products/iphone/:model", (req, res) => {
  const { model } = req.params;
  res.send(`Iphone ${model} Pro max`);
});

app.listen(8000, () => console.log("server up!"));
