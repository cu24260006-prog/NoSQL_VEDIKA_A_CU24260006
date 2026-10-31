#!/usr/bin/env bash
# Practical 2: Store and retrieve user sessions in Riak KV.
set -e
RIAK="http://localhost:8098"
BUCKET="user_sessions"

# The key is the session ID; the value stores session details.
curl -i -X PUT "$RIAK/buckets/$BUCKET/keys/session_1001" \
  -H "Content-Type: application/json" \
  -d '{"session_id":"session_1001","user_id":501,"login_time":"2026-10-31T09:30:00","status":"active"}'

# Retrieve session information using its key.
curl -i "$RIAK/buckets/$BUCKET/keys/session_1001"
