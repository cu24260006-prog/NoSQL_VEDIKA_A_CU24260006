#!/usr/bin/env bash
# Practical 1: Riak KV bucket and basic key-value operations.
# Requires a running Riak node with the HTTP interface on localhost:8098.
set -e
RIAK="http://localhost:8098"
BUCKET="students"

# Store a student record (PUT).
curl -i -X PUT "$RIAK/buckets/$BUCKET/keys/101" \
  -H "Content-Type: application/json" \
  -d '{"student_id":101,"name":"Aarav Sharma","course":"BCA","semester":3}'

# Retrieve the record (GET).
curl -i "$RIAK/buckets/$BUCKET/keys/101"

# Update the record by replacing its value (PUT with the same key).
curl -i -X PUT "$RIAK/buckets/$BUCKET/keys/101" \
  -H "Content-Type: application/json" \
  -d '{"student_id":101,"name":"Aarav Sharma","course":"BCA","semester":4}'

# Retrieve the updated record.
curl -i "$RIAK/buckets/$BUCKET/keys/101"

# Delete the record (DELETE).
curl -i -X DELETE "$RIAK/buckets/$BUCKET/keys/101"
