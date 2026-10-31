#!/usr/bin/env bash
# Practical 10: Riak set datatype operations.
# Requires Riak KV with CRDT datatype support and a bucket type configured
# for the set datatype. Create/activate the bucket type before running.
set -e
RIAK="http://localhost:8098"
TYPE="sets"
BUCKET="user_interests"
KEY="user_801"

# Add set elements using the Riak datatype HTTP API.
curl -i -X PUT "$RIAK/types/$TYPE/buckets/$BUCKET/datatypes/$KEY" \
  -H "Content-Type: application/json" \
  -d '{"add":["music","sports","reading"]}'

# Retrieve set contents.
curl -i "$RIAK/types/$TYPE/buckets/$BUCKET/datatypes/$KEY"

# Add another element.
curl -i -X POST "$RIAK/types/$TYPE/buckets/$BUCKET/datatypes/$KEY" \
  -H "Content-Type: application/json" \
  -d '{"add":["travel"]}'

# Remove an element.
curl -i -X POST "$RIAK/types/$TYPE/buckets/$BUCKET/datatypes/$KEY" \
  -H "Content-Type: application/json" \
  -d '{"remove":["sports"]}'

# Retrieve the final set.
curl -i "$RIAK/types/$TYPE/buckets/$BUCKET/datatypes/$KEY"

# Membership/common-elements operations are performed by reading the set
# and comparing its members in application logic. Riak's set datatype API
# does not provide a general SQL-style INTERSECT query across arbitrary keys.
