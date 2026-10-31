#!/usr/bin/env bash
# Practical 6: Demonstrate Riak read and write quorum parameters.
# Riak's r and w query parameters request read/write quorum levels.
set -e
RIAK="http://localhost:8098"
BUCKET="quorum_demo"
KEY="student_601"

# Write using w=2 (request acknowledgements from two replicas).
curl -i -X PUT "$RIAK/buckets/$BUCKET/keys/$KEY?w=2" \
  -H "Content-Type: application/json" \
  -d '{"student_id":601,"name":"Diya Singh","course":"BCA"}'

# Read using r=2 (request responses from two replicas).
curl -i "$RIAK/buckets/$BUCKET/keys/$KEY?r=2"

# Quorum values depend on the bucket's configured N value and cluster size.
# A quorum is commonly described as floor(N/2)+1. If the requested quorum
# cannot be satisfied, Riak may return an error rather than a successful result.
