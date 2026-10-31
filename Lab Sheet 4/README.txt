BCA305P - NOSQL DATABASE DESIGN
LAB SHEET 4
============

This folder contains all 15 practicals from the teacher's Lab Sheet 4 PDF,
in the original order.

FILE LIST
---------
1.hbase  - HBase Student table and five records
2.hbase  - HBase Employee CRUD
3.hbase  - HBase Event Logging System
4.hbase  - HBase Content Management System
5.hbase  - HBase Blogging Platform
6.hbase  - HBase column-family model and qualifiers
7.hbase  - HBase WebsiteCounter increment operations
8.hbase  - HBase session data with TTL
9.hbase  - HBase row-key design and horizontal scaling
10.hbase - HBase pre-split regions and RegionServers
11.cql   - Cassandra CollegeDB and Students
12.cql   - Cassandra Employees CRUD
13.cql   - Cassandra event logging and time-range queries
14.cql   - Cassandra consistency levels ONE, QUORUM and ALL
15.hbase - Final column-oriented Event Logging application using HBase
README.txt - Setup and execution guide

REQUIREMENTS
------------
HBase practicals (1-10 and 15):
- Java version supported by the selected HBase release.
- Apache Hadoop/HDFS and ZooKeeper as required by the selected HBase setup.
- Apache HBase installed and configured.
- HBase shell available.

Cassandra practicals (11-14):
- Java version supported by the selected Cassandra release.
- Apache Cassandra installed and running.
- cqlsh available.

INSTALLATION OVERVIEW
---------------------
Install Apache HBase and Apache Cassandra using the official installation
instructions for versions compatible with your operating system and Java
version. Configure and start the required services before opening their shells.
This README does not assume a particular operating system or version, because
the teacher's sheet does not specify one.

RUN HBASE PRACTICALS
--------------------
1. Start the HBase services required by your installation.
2. Open the HBase shell:

   hbase shell

3. Open the required .hbase file in a text editor.
4. Copy and paste its commands into the HBase shell, in order.
5. Execute one practical at a time.

Example:
   hbase shell
   # Then paste the commands from 1.hbase.

RUN CASSANDRA PRACTICALS
------------------------
1. Start the Cassandra service.
2. Open Cassandra Query Language shell:

   cqlsh

3. Copy and paste the required .cql file into cqlsh, in order.
4. Execute one practical at a time.

Example:
   cqlsh
   # Then paste the commands from 11.cql.

IMPORTANT PRACTICAL NOTES
-------------------------
- Practicals 1-10 use Apache HBase. Practicals 11-14 use Apache Cassandra.
  Practical 15 uses HBase as the selected column-oriented database.
- HBase column families are declared when a table is created. Qualifiers
  (such as personal:name or academic:course) are flexible within each family.
- HBase TTL in Practical 8 is 60 seconds for a quick demonstration. Expired
  cells become eligible for cleanup; physical removal may wait for compaction.
- Practical 9 uses salted row-key prefixes. Salting is most useful when matching
  split points are configured and the application can query across prefixes.
- Practical 10 pre-splits a table into multiple regions. RegionServers host
  regions; multiple regions may still reside on one RegionServer unless the
  cluster has multiple RegionServers and balancing distributes them.
- Cassandra Practical 11 uses SimpleStrategy with replication_factor 1 for a
  single-node lab. For a multi-node cluster, choose a suitable replication
  factor and use an appropriate replication strategy for the topology.
- Cassandra Practical 13 models events with user_id as the partition key and
  event_time as a clustering column, supporting user-specific time-range reads.
- Cassandra Practical 14 demonstrates consistency settings in cqlsh. With
  replication_factor 1, ONE, QUORUM and ALL effectively contact one replica;
  meaningful comparison requires a multi-replica cluster.
- Practical 15's explanation distinguishes HBase row-level atomicity from
  general multi-row ACID transactions and notes that availability depends on
  the cluster services and configuration.

SAFETY / RE-RUNNING
-------------------
The scripts use fixed table names. If a table already exists, a CREATE command
may report that it exists. Review existing data before rerunning. Do not drop
tables unless you are sure you no longer need their contents.

TESTING STATUS
--------------
All 15 practical files, README and ZIP contents were checked for completeness
and archive integrity. Commands have not been executed against live HBase or
Cassandra clusters. Installation commands and service configuration depend on
your operating system and the database versions installed.
