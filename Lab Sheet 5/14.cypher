// Practical 14: Neo4j transactions, consistency and availability.
// Run each transaction block in Neo4j Browser or cypher-shell.
// The first block commits a group of related graph changes atomically.

BEGIN
CREATE (c:Customer {customer_id: 1401, name: 'Diya Singh'})
CREATE (o:Order {order_id: 'O1401', status: 'CREATED', total: 1200})
CREATE (p:Product {product_id: 'P1401', name: 'Headphones', stock: 10})
CREATE (c)-[:PLACED]->(o)
CREATE (o)-[:CONTAINS {quantity: 1}]->(p)
SET p.stock = p.stock - 1
RETURN c, o, p
COMMIT;

// Read the committed graph.
MATCH (c:Customer {customer_id: 1401})-[:PLACED]->(o:Order)-[:CONTAINS]->(p:Product)
RETURN c, o, p;

// A second transaction updates the order status.
BEGIN
MATCH (o:Order {order_id: 'O1401'})
SET o.status = 'CONFIRMED'
RETURN o
COMMIT;

// Example deletion inside a transaction. Uncomment to execute when required.
// BEGIN
// MATCH (o:Order {order_id: 'O1401'})
// DETACH DELETE o
// COMMIT

// Explanation:
// Neo4j transactions group operations into an atomic unit: they commit together
// or roll back on failure. Consistency is supported by transaction guarantees
// and database constraints. Availability depends on deployment, clustering,
// replication, network and edition/configuration; it is not automatic merely
// because a transaction is used.
