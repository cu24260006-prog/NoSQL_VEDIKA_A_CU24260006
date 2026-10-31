BCA305P - NOSQL DATABASE DESIGN
LAB SHEET 2
============

This folder contains files for all 15 practicals in the order given in the
teacher-provided PDF. Native formats are used for each database technology.

CONTENTS
--------
Practical 1:
  1_mysql.sql       - MySQL table and five student rows
  1_mongodb.js     - Equivalent MongoDB collection and documents

Practical 2:
  2.js             - MongoDB CRUD operations on CollegeDB.Students

Practical 3:
  3.js             - MongoDB embedded Orders and aggregation

Practical 4:
  4_redis.txt       - Redis CLI commands

Practical 5:
  5.cql             - Cassandra keyspace, table and CQL operations

Practical 6:
  6_hbase.txt       - HBase Shell commands

Practical 7:
  7.cypher          - Neo4j nodes, relationships and Cypher queries

Practical 8:
  8_mongodb.js      - Student dataset in MongoDB
  8_cassandra.cql  - Student dataset in Cassandra
  8_neo4j.cypher   - Student dataset in Neo4j
  8_comparison.txt - Comparison of data model, storage, query, scalability
                      and suitable applications

Practical 9:
  9.js              - MongoDB single-server CRUD demonstration

Practical 10:
  10_sharding_guide.txt - MongoDB sharding setup and verification guide

Practical 11:
  11_replication_guide.txt - MongoDB primary-secondary replica set guide

Practical 12:
  12_cassandra_peer_replication.txt - Cassandra peer-to-peer replication guide

Practical 13:
  13_sharding_replication_guide.txt - MongoDB sharding + replication guide

Practical 14:
  14_mapreduce.js   - MapReduce count and average marks by course

Practical 15:
  15_distribution_models.txt - Architectures, data distribution, failure
                               handling, advantages, limitations and uses

REQUIREMENTS
------------
Install only the database systems needed for the practical you are running:
- MySQL Server and MySQL client
- MongoDB Server and MongoDB Shell (mongosh)
- Redis Server and redis-cli
- Apache Cassandra and cqlsh
- Apache HBase and HBase Shell
- Neo4j Database and Neo4j Browser or cypher-shell

You do not need all database systems installed at once to read the files.
Practicals 10-13 require multi-process or multi-node configurations and
cannot be demonstrated fully with one standalone database server.

HOW TO RUN
----------
MySQL:
  mysql -u root -p < 1_mysql.sql

MongoDB:
  mongosh "mongodb://localhost:27017/" 1_mongodb.js
  mongosh "mongodb://localhost:27017/" 2.js
  mongosh "mongodb://localhost:27017/" 3.js
  mongosh "mongodb://localhost:27017/" 9.js
  mongosh "mongodb://localhost:27017/" 14_mapreduce.js

Redis:
  Start Redis, then open redis-cli and enter commands from 4_redis.txt.

Cassandra:
  Open cqlsh and run commands from 5.cql or 8_cassandra.cql.

HBase:
  Start HBase and its required services, open hbase shell, and enter commands
  from 6_hbase.txt.

Neo4j:
  Open Neo4j Browser or cypher-shell and run commands from 7.cypher or
  8_neo4j.cypher.

GUIDANCE
--------
- Run practicals in the order given by the teacher.
- Use the matching database shell/client for each file extension.
- Text files containing setup steps are guides, not executable scripts.
- Sample names, IDs and values are illustrative.
- If you rerun an INSERT script, duplicate-key or duplicate-document errors
  may occur. Clear the demonstration collection/table/database first or use
  a fresh demo database when appropriate.
- Practical 1 uses the same five sample student records in MySQL and MongoDB.
- Practical 3 calculates each order's total as Price multiplied by Quantity.
- Practical 5 creates a secondary index on Course because Cassandra does not
  generally allow arbitrary filtering without a suitable key/index design.
- Practical 10 needs a functioning sharded cluster; enabling sharding commands
  alone on a standalone MongoDB server does not create multiple shards.
- Practical 11 requires multiple MongoDB instances configured as a replica set.
- Practical 12 requires multiple Cassandra nodes. The example replication
  factor assumes three nodes in a data centre named datacenter1.
- Practical 13 combines multiple shards with replica sets for each shard.
- Practical 14 uses MongoDB mapReduce because the assignment specifically asks
  for MapReduce. MongoDB's mapReduce command is deprecated in modern versions;
  use a compatible environment for this demonstration.
- Practical 15 is an explanation/architecture practical and is provided as
  a text guide.

IMPORTANT LIMITATIONS
--------------------
The assignment asks for practical demonstrations of distributed deployments.
Those tasks depend on the local machine, installed software, ports, network,
server configuration and database version. The guide files provide a
repeatable outline, but do not claim that a multi-node cluster is already
running.

TESTING STATUS
--------------
Files were generated and checked for expected filenames and ZIP integrity.
The database commands have not been executed against live MySQL, MongoDB,
Redis, Cassandra, HBase or Neo4j servers. Check syntax/version compatibility
in your installed database environment before practical submission.
