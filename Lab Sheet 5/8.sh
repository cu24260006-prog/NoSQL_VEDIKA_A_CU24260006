#!/usr/bin/env bash
# Practical 8: Transaction-like multi-step shopping cart scenario.
# This is NOT an ACID transaction. Each PUT is a separate object write.
set -e
RIAK="http://localhost:8098"
BUCKET="transaction_like_cart"
KEY="user_701_cart"

# Step 1: Create a cart with one item.
curl -i -X PUT "$RIAK/buckets/$BUCKET/keys/$KEY" \
  -H "Content-Type: application/json" \
  -d '{"user_id":701,"items":[{"product_id":"P10","quantity":1,"price":300}],"cart_total":300}'

# Step 2: Add another item and update total.
curl -i -X PUT "$RIAK/buckets/$BUCKET/keys/$KEY" \
  -H "Content-Type: application/json" \
  -d '{"user_id":701,"items":[{"product_id":"P10","quantity":1,"price":300},{"product_id":"P11","quantity":2,"price":150}],"cart_total":600}'

# Step 3: Change quantity and recalculate total.
curl -i -X PUT "$RIAK/buckets/$BUCKET/keys/$KEY" \
  -H "Content-Type: application/json" \
  -d '{"user_id":701,"items":[{"product_id":"P10","quantity":2,"price":300},{"product_id":"P11","quantity":2,"price":150}],"cart_total":900}'

# Step 4: Retrieve final cart.
curl -i "$RIAK/buckets/$BUCKET/keys/$KEY"

# Limitation: Riak KV does not provide general multi-object ACID transactions.
# A failure between writes can leave a partially completed business operation.
# Applications need idempotency, retry logic, version/conflict handling and
# compensating actions where multi-step workflows are required.
