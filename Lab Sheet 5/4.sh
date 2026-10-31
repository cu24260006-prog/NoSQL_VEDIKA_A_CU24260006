#!/usr/bin/env bash
# Practical 4: Shopping cart stored as one JSON value per user.
# Riak KV stores the cart document; the script reads, edits and writes it back.
set -e
RIAK="http://localhost:8098"
BUCKET="shopping_carts"
KEY="user_501"

# Create the initial cart.
curl -sS -X PUT "$RIAK/buckets/$BUCKET/keys/$KEY" \
  -H "Content-Type: application/json" \
  -d '{"user_id":501,"items":[{"product_id":"P101","quantity":1,"price":500},{"product_id":"P102","quantity":2,"price":250}]}'

echo "Initial cart:"
curl -sS "$RIAK/buckets/$BUCKET/keys/$KEY"
echo

# Add a product by replacing the cart value.
curl -sS -X PUT "$RIAK/buckets/$BUCKET/keys/$KEY" \
  -H "Content-Type: application/json" \
  -d '{"user_id":501,"items":[{"product_id":"P101","quantity":1,"price":500},{"product_id":"P102","quantity":2,"price":250},{"product_id":"P103","quantity":1,"price":900}]}'

# Update P102 quantity from 2 to 3.
curl -sS -X PUT "$RIAK/buckets/$BUCKET/keys/$KEY" \
  -H "Content-Type: application/json" \
  -d '{"user_id":501,"items":[{"product_id":"P101","quantity":1,"price":500},{"product_id":"P102","quantity":3,"price":250},{"product_id":"P103","quantity":1,"price":900}]}'

echo "Updated cart:"
curl -sS "$RIAK/buckets/$BUCKET/keys/$KEY"
echo

# Remove P101 by writing the cart without that item.
curl -sS -X PUT "$RIAK/buckets/$BUCKET/keys/$KEY" \
  -H "Content-Type: application/json" \
  -d '{"user_id":501,"items":[{"product_id":"P102","quantity":3,"price":250},{"product_id":"P103","quantity":1,"price":900}]}'

echo "Cart after removing P101:"
curl -sS "$RIAK/buckets/$BUCKET/keys/$KEY"
echo
