#!/usr/bin/env bash
# Practical 9: Query-by-data using application-level filtering.
# This example fetches known keys and filters JSON records in the application
# using jq. Riak KV is key-oriented; it is not a relational query engine.
set -e
RIAK="http://localhost:8098"
BUCKET="query_users"

# Store sample user JSON documents.
curl -sS -X PUT "$RIAK/buckets/$BUCKET/keys/u1" -H "Content-Type: application/json" \
  -d '{"name":"Aarav","city":"Roorkee","age":21,"preferences":["music","sports"]}' >/dev/null
curl -sS -X PUT "$RIAK/buckets/$BUCKET/keys/u2" -H "Content-Type: application/json" \
  -d '{"name":"Diya","city":"Haridwar","age":22,"preferences":["reading","music"]}' >/dev/null
curl -sS -X PUT "$RIAK/buckets/$BUCKET/keys/u3" -H "Content-Type: application/json" \
  -d '{"name":"Rohan","city":"Roorkee","age":20,"preferences":["travel"]}' >/dev/null

# Application-level lookup of known keys, then filter by city.
for key in u1 u2 u3; do
  curl -sS "$RIAK/buckets/$BUCKET/keys/$key"
  echo
done | jq -s '.[] | select(.city == "Roorkee")'

# This demonstrates filtering after retrieval. For large datasets, maintain
# a secondary lookup/index in the application or use an indexing/search
# capability configured for the particular Riak version.
