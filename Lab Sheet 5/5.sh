#!/usr/bin/env bash
# Practical 5: Different value types in a Riak key-value store.
set -e
RIAK="http://localhost:8098"
BUCKET="value_examples"

# String value.
curl -i -X PUT "$RIAK/buckets/$BUCKET/keys/greeting" \
  -H "Content-Type: text/plain" \
  --data-binary "Hello from Riak KV"

# JSON document value.
curl -i -X PUT "$RIAK/buckets/$BUCKET/keys/student_101" \
  -H "Content-Type: application/json" \
  -d '{"id":101,"name":"Aarav","course":"BCA"}'

# List value represented as a JSON array.
curl -i -X PUT "$RIAK/buckets/$BUCKET/keys/subjects" \
  -H "Content-Type: application/json" \
  -d '["NoSQL","Python","Networking"]'

# Retrieve all three values.
curl -i "$RIAK/buckets/$BUCKET/keys/greeting"
curl -i "$RIAK/buckets/$BUCKET/keys/student_101"
curl -i "$RIAK/buckets/$BUCKET/keys/subjects"

# Explanation:
# Bucket = logical grouping of keys.
# Key    = unique name used to locate one stored item in a bucket.
# Value  = data stored against that key (string, JSON, array, etc.).
