// Practical 4: Flexible Product Catalog
const db4 = db.getSiblingDB("Lab3_Practical4");
db4.Products.deleteMany({});
db4.Products.insertMany([
  {productId: "L101", category: "laptop", brand: "Lenovo", model: "IdeaPad", ramGB: 16, storageGB: 512, processor: "i5", price: 55000},
  {productId: "L102", category: "laptop", brand: "HP", model: "Pavilion", ramGB: 8, storageGB: 512, processor: "i5", price: 49000},
  {productId: "M101", category: "mobile", brand: "Samsung", model: "Galaxy", ramGB: 8, storageGB: 256, cameraMP: 50, batteryMah: 5000, price: 30000},
  {productId: "M102", category: "mobile", brand: "OnePlus", model: "Nord", ramGB: 12, storageGB: 256, cameraMP: 64, batteryMah: 5000, price: 28000},
  {productId: "C101", category: "camera", brand: "Canon", model: "EOS", sensor: "APS-C", megapixels: 24, lensMount: "EF", price: 65000}
]);
// All laptops with at least 16 GB RAM.
db4.Products.find({category: "laptop", ramGB: {$gte: 16}});
// Mobiles with 50 MP or better camera.
db4.Products.find({category: "mobile", cameraMP: {$gte: 50}});
// Cameras with APS-C sensor.
db4.Products.find({category: "camera", sensor: "APS-C"});
// Products under Rs. 50,000.
db4.Products.find({price: {$lt: 50000}});
