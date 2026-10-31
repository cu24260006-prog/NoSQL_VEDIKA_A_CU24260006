-- Practical 13: Cassandra event logging application.
-- Partition key user_id groups a user's events.
-- event_time is a clustering column, allowing time-ordered retrieval.

USE CollegeDB;

CREATE TABLE IF NOT EXISTS UserEvents (
    user_id text,
    event_time timestamp,
    event_id uuid,
    event_type text,
    status text,
    details text,
    PRIMARY KEY ((user_id), event_time, event_id)
) WITH CLUSTERING ORDER BY (event_time DESC, event_id ASC);

INSERT INTO UserEvents (user_id, event_time, event_id, event_type, status, details)
VALUES ('U101', '2026-10-01 09:00:00+0000', uuid(), 'login', 'success', 'Web login');

INSERT INTO UserEvents (user_id, event_time, event_id, event_type, status, details)
VALUES ('U101', '2026-10-01 09:05:00+0000', uuid(), 'file_upload', 'success', 'Uploaded notes.pdf');

INSERT INTO UserEvents (user_id, event_time, event_id, event_type, status, details)
VALUES ('U102', '2026-10-01 09:10:00+0000', uuid(), 'login', 'failed', 'Incorrect password');

-- Retrieve all events for one user.
SELECT * FROM UserEvents WHERE user_id = 'U101';

-- Retrieve events for one user within a time period.
SELECT * FROM UserEvents
WHERE user_id = 'U101'
AND event_time >= '2026-10-01 00:00:00+0000'
AND event_time < '2026-10-02 00:00:00+0000';
