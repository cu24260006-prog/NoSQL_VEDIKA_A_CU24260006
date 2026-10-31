// Practical 3: MongoDB Orders with embedded customer and product information.
const shopDB = db.getSiblingDB("OrderDB");

shopDB.Orders.insertMany([
    {
        Order_ID: 1,
        customer: { Customer_ID: 101, Name: "Aarav", City: "Haridwar" },
        products: [{ Product: "Keyboard", Price: 800, Quantity: 1 }, { Product: "Mouse", Price: 400, Quantity: 2 }]
    },
    {
        Order_ID: 2,
        customer: { Customer_ID: 102, Name: "Diya", City: "Roorkee" },
        products: [{ Product: "Monitor", Price: 7000, Quantity: 1 }]
    },
    {
        Order_ID: 3,
        customer: { Customer_ID: 101, Name: "Aarav", City: "Haridwar" },
        products: [{ Product: "USB Drive", Price: 500, Quantity: 3 }]
    },
    {
        Order_ID: 4,
        customer: { Customer_ID: 103, Name: "Meera", City: "Dehradun" },
        products: [{ Product: "Laptop", Price: 45000, Quantity: 1 }, { Product: "Mouse", Price: 400, Quantity: 1 }]
    },
    {
        Order_ID: 5,
        customer: { Customer_ID: 104, Name: "Kabir", City: "Haridwar" },
        products: [{ Product: "Headphones", Price: 1500, Quantity: 2 }]
    }
]);

// 1. Display all orders.
shopDB.Orders.find().forEach(order => printjson(order));

// 2. Display orders of a particular customer.
shopDB.Orders.find({ "customer.Name": "Aarav" }).forEach(order => printjson(order));

// 3. Update quantity of a product in Order_ID 1.
shopDB.Orders.updateOne(
    { Order_ID: 1, "products.Product": "Mouse" },
    { $set: { "products.$.Quantity": 3 } }
);

// 4. Calculate each order's total amount using aggregation.
shopDB.Orders.aggregate([
    { $unwind: "$products" },
    { $group: {
        _id: "$Order_ID",
        Customer: { $first: "$customer.Name" },
        TotalAmount: { $sum: { $multiply: ["$products.Price", "$products.Quantity"] } }
    }},
    { $sort: { _id: 1 } }
]).forEach(result => printjson(result));

// 5. Display orders above a specified amount (example: 2000).
shopDB.Orders.aggregate([
    { $unwind: "$products" },
    { $group: {
        _id: "$Order_ID",
        Customer: { $first: "$customer.Name" },
        TotalAmount: { $sum: { $multiply: ["$products.Price", "$products.Quantity"] } }
    }},
    { $match: { TotalAmount: { $gt: 2000 } } }
]).forEach(result => printjson(result));
