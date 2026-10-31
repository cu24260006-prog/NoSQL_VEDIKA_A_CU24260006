#!/usr/bin/env bash
# Practical 7: Create multiple buckets and insert many records.
# Riak distributes objects across the cluster using consistent hashing
# and its partition/vnode ring; clients do not manually select a node per key.
set -e
RIAK="http://localhost:8098"

for bucket in students departments courses; do
  for i in $(seq 1 100); do
    curl -sS -X PUT "$RIAK/buckets/$bucket/keys/${bucket}_${i}" \
      -H "Content-Type: application/json" \
      -d "{\"record_id\":$i,\"bucket\":\"$bucket\",\"description\":\"Sample record $i\"}" \
      >/dev/null
  done
  echo "Inserted 100 records into bucket: $bucket"
done

echo "Scaling note:"
echo "Add Riak nodes to increase cluster capacity; the ring redistributes partitions."
echo "Use the Riak cluster administration tools to inspect cluster membership and ring status."
