// Practical 10: Inventory Monitoring System
const db10 = db.getSiblingDB("Lab3_Practical10");
db10.Inventory.deleteMany({});
db10.Inventory.insertMany([
  {productId: "P1", name: "Keyboard", stock: 5, minimumStock: 10, supplier: "ABC Supplies", restockDate: ISODate("2026-11-02")},
  {productId: "P2", name: "Mouse", stock: 25, minimumStock: 10, supplier: "Tech Traders", restockDate: ISODate("2026-11-10")},
  {productId: "P3", name: "Monitor", stock: 2, minimumStock: 5, supplier: "Display World", restockDate: ISODate("2026-11-01")},
  {productId: "P4", name: "USB Drive", stock: 8, minimumStock: 8, supplier: "ABC Supplies", restockDate: ISODate("2026-11-04")}
]);
// Products that need immediate restocking (stock at or below minimum).
db10.Inventory.find({$expr: {$lte: ["$stock", "$minimumStock"]}});
// Sort urgent items by lowest stock first.
db10.Inventory.find({$expr: {$lte: ["$stock", "$minimumStock"]}}).sort({stock: 1});
// Display supplier and restocking information.
db10.Inventory.find({$expr: {$lte: ["$stock", "$minimumStock"]}}, {name: 1, supplier: 1, restockDate: 1, stock: 1, minimumStock: 1});
