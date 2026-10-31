// Practical 13: Shopping/e-commerce graph in Neo4j.

CREATE
  (customer:Customer {customer_id: 1301, name: 'Aarav Sharma'}),
  (product1:Product {product_id: 'P101', name: 'Keyboard', price: 800}),
  (product2:Product {product_id: 'P102', name: 'Mouse', price: 400}),
  (category:Category {category_id: 'CAT01', name: 'Computer Accessories'}),
  (order:Order {order_id: 'O1001', order_date: '2026-10-31'}),
  (customer)-[:PLACED]->(order),
  (order)-[:CONTAINS {quantity: 1}]->(product1),
  (order)-[:CONTAINS {quantity: 2}]->(product2),
  (product1)-[:IN_CATEGORY]->(category),
  (product2)-[:IN_CATEGORY]->(category);

// Find products purchased by a particular customer.
MATCH (c:Customer {customer_id: 1301})-[:PLACED]->(o:Order)-[line:CONTAINS]->(p:Product)
RETURN c.name AS Customer, o.order_id AS Order, p.name AS Product,
       line.quantity AS Quantity, p.price AS UnitPrice;

// Visualize the e-commerce graph.
MATCH (c:Customer)-[r1:PLACED]->(o:Order)-[r2:CONTAINS]->(p:Product)-[r3:IN_CATEGORY]->(cat:Category)
RETURN c, r1, o, r2, p, r3, cat;
