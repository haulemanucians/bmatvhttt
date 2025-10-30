const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Cấu hình phục vụ file tĩnh trong thư mục public
app.use(express.static(path.join(__dirname, "public")));

// Route cho trang about
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
