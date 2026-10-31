// Practical 8: Shopping Cart using embedded MongoDB documents
const db8 = db.getSiblingDB("Lab3_Practical8");
db8.Carts.deleteMany({});
db8.Carts.insertOne({
  userId: 801,
  items: [
    {productId: "P1", name: "Keyboard", price: 800, quantity: 1},
    {productId: "P2", name: "Mouse", price: 400, quantity: 2}
  ]
});
// Add a product to the embedded items array.
db8.Carts.updateOne({userId: 801}, {$push: {items: {productId: "P3", name: "USB Drive", price: 500, quantity: 1}}});
// Change the quantity of Mouse to 3.
db8.Carts.updateOne({userId: 801, "items.productId": "P2"}, {$set: {"items.$.quantity": 3}});
// Remove Keyboard from the cart.
db8.Carts.updateOne({userId: 801}, {$pull: {items: {productId: "P1"}}});
// Calculate cart value.
db8.Carts.aggregate([
  {$match: {userId: 801}},
  {$unwind: "$items"},
  {$group: {_id: "$userId", cartValue: {$sum: {$multiply: ["$items.price", "$items.quantity"]}}}}
]);
db8.Carts.find({userId: 801});
