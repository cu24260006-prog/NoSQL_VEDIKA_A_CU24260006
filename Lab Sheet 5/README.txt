BCA305P - NOSQL DATABASE DESIGN
LAB SHEET 5
============

This folder contains all 15 practicals in the same order as the teacher's
Lab Sheet 5 PDF. Practicals 1-10 use Riak KV; practicals 11-15 use Neo4j.

FILES
-----
1.sh to 10.sh
  Bash scripts using Riak KV's HTTP API (curl). These demonstrate buckets,
  key-value operations, JSON values, quorum parameters, application-side
  filtering, and set datatype requests.

11.cypher to 14.cypher
  Neo4j Cypher scripts for graph creation, relationships, queries and
  transactions.

15_neo4j_app.py
  Python CRUD and relationship-oriented query example using the Neo4j driver.

requirements.txt
  Python dependency for Practical 15.

REQUIREMENTS
------------
Riak practicals:
- Linux system (as required by the assignment).
- A running Riak KV node with the HTTP interface enabled, normally port 8098.
- curl. Practical 9 also uses jq.
- Practical 10 requires Riak CRDT datatype support and a bucket type configured
  for the set datatype.

Neo4j practicals:
- Neo4j Server / Desktop / Aura database.
- Neo4j Browser or cypher-shell.
- Practical 15: Python 3 and the Neo4j Python driver.

RIAK SETUP AND EXECUTION
------------------------
Riak KV versions and Linux distributions differ. Install a compatible Riak KV
release using its supported package/container instructions for your Linux
distribution, configure the HTTP listener, start the node, and verify that
the HTTP API is reachable at:

  http://localhost:8098

From a Linux terminal, make scripts executable:

  chmod +x *.sh

Run a practical:

  ./1.sh
  ./2.sh
  ...
  ./10.sh

If Riak is on another host or port, edit the RIAK variable at the top of each
script. The scripts use the Riak HTTP API and curl rather than a Python client.

Important Riak notes:
- Riak KV is a distributed key-value store. A bucket groups keys; a key
  identifies one object; the value is the stored data.
- A PUT to an existing bucket/key replaces the stored value (subject to Riak's
  object versioning/conflict-resolution behaviour).
- Practical 4 and 8 model a cart as one JSON object. The read-modify-write
  sequence is illustrative and is not a multi-object ACID transaction.
- Practical 6 uses r and w request parameters. Suitable quorum values depend
  on the bucket's N value and the cluster's available replicas.
- Practical 7 inserts sample data into multiple buckets. Actual distribution
  is handled by Riak's partition/vnode ring across cluster nodes.
- Practical 9 demonstrates application-side filtering after retrieving known
  keys; it is not a server-side arbitrary JSON query.
- Practical 10 uses the Riak datatype HTTP API. A bucket type named "sets"
  must be configured and activated for the set datatype before execution.
  Set membership/common-element comparisons are shown as application logic.

NEO4J EXECUTION
---------------
Open Neo4j Browser or cypher-shell and run the required .cypher file contents:

  11.cypher
  12.cypher
  13.cypher
  14.cypher

The files use Cypher statements. Run the CREATE scripts once in a clean demo
database, or remove old demo data before rerunning to avoid duplicates.

Practical 14 uses explicit transaction syntax supported by current Neo4j
Browser/cypher-shell workflows. If your Neo4j interface expects transaction
commands to be entered separately, run BEGIN, the statements, then COMMIT as
separate steps. The deletion example is commented out to avoid accidental
deletion.

PRACTICAL 15 - PYTHON APPLICATION
---------------------------------
Install the driver:

  python -m pip install -r requirements.txt

Set connection details before running. Example for a local Neo4j server:

  export NEO4J_URI="bolt://localhost:7687"
  export NEO4J_USER="neo4j"
  export NEO4J_PASSWORD="your-password"

Then run:

  python 15_neo4j_app.py

On Windows PowerShell, use $env:NEO4J_URI, $env:NEO4J_USER and
$env:NEO4J_PASSWORD to set environment variables.

TESTING STATUS
--------------
The ZIP contents and expected practical files were checked. The scripts have
not been run against live Riak or Neo4j servers. Riak installation, cluster
configuration, bucket-type activation, database credentials and version
compatibility depend on the actual Linux/Neo4j environment.
