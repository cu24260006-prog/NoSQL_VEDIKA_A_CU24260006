-- Practical 14: Cassandra consistency levels ONE, QUORUM and ALL.
-- This script assumes CollegeDB has been created with a replication factor
-- that is appropriate for the cluster. RF=1 is suitable only for a single node.

USE CollegeDB;

CREATE TABLE IF NOT EXISTS ConsistencyDemo (
    record_id int PRIMARY KEY,
    message text
);

-- Write with ONE: one replica acknowledgement is required.
CONSISTENCY ONE;
INSERT INTO ConsistencyDemo (record_id, message)
VALUES (1, 'Written at consistency ONE');

-- Read with ONE.
CONSISTENCY ONE;
SELECT * FROM ConsistencyDemo WHERE record_id = 1;

-- Write and read with QUORUM.
CONSISTENCY QUORUM;
INSERT INTO ConsistencyDemo (record_id, message)
VALUES (2, 'Written at consistency QUORUM');

SELECT * FROM ConsistencyDemo WHERE record_id = 2;

-- Write and read with ALL.
CONSISTENCY ALL;
INSERT INTO ConsistencyDemo (record_id, message)
VALUES (3, 'Written at consistency ALL');

SELECT * FROM ConsistencyDemo WHERE record_id = 3;

-- Observe: ONE needs one replica response; QUORUM needs a majority;
-- ALL needs every replica in the replica set for the operation to succeed.
-- With RF=1, these levels all effectively involve one replica.
