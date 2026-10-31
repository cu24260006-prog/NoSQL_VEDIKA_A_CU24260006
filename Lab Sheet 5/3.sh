#!/usr/bin/env bash
# Practical 3: User profiles and preferences using Riak KV.
set -e
RIAK="http://localhost:8098"
BUCKET="user_profiles"

# PUT: store a profile and its preferences as one JSON value.
curl -i -X PUT "$RIAK/buckets/$BUCKET/keys/user_501" \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Aarav Sharma",
    "email":"aarav@example.com",
    "city":"Roorkee",
    "language":"English",
    "theme":"dark",
    "notifications":{"email":true,"sms":false,"push":true}
  }'

# GET: retrieve the profile.
curl -i "$RIAK/buckets/$BUCKET/keys/user_501"
