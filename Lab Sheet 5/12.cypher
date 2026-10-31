// Practical 12: Social network with FRIENDS_WITH, FOLLOWS and WORKS_AT.

CREATE
  (p1:Person {person_id: 1201, name: 'Aarav'}),
  (p2:Person {person_id: 1202, name: 'Diya'}),
  (p3:Person {person_id: 1203, name: 'Rohan'}),
  (p4:Person {person_id: 1204, name: 'Meera'}),
  (company:Company {name: 'Tech Solutions'}),
  (p1)-[:FRIENDS_WITH]->(p2),
  (p1)-[:FOLLOWS]->(p3),
  (p4)-[:FOLLOWS]->(p1),
  (p1)-[:WORKS_AT]->(company),
  (p2)-[:WORKS_AT]->(company);

// Find a person's friends.
MATCH (p:Person {name: 'Aarav'})-[:FRIENDS_WITH]-(friend:Person)
RETURN friend.name AS Friend;

// Find people who follow Aarav.
MATCH (follower:Person)-[:FOLLOWS]->(p:Person {name: 'Aarav'})
RETURN follower.name AS Follower;

// Find people Aarav follows.
MATCH (p:Person {name: 'Aarav'})-[:FOLLOWS]->(followed:Person)
RETURN followed.name AS Following;

// Display the social graph.
MATCH (p:Person)-[r]->(target)
RETURN p, r, target;
