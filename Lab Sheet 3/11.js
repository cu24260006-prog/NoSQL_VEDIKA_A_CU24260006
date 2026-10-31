// Practical 11: Bank Wallet Transfer using MongoDB transactions.
// IMPORTANT: Transactions require a replica set or sharded cluster.
// Connect mongosh to a replica-set URI before running this practical.
const db11 = db.getSiblingDB("Lab3_Practical11");
db11.Wallets.deleteMany({});
db11.Wallets.insertMany([
  {_id: "userA", name: "Aarav", balance: 5000},
  {_id: "userB", name: "Diya", balance: 3000}
]);

const session = db.getMongo().startSession();
const sessionDB = session.getDatabase("Lab3_Practical11");
try {
  session.startTransaction();
  const amount = 1000;
  const debit = sessionDB.Wallets.updateOne(
    {_id: "userA", balance: {$gte: amount}},
    {$inc: {balance: -amount}}
  );
  if (debit.modifiedCount !== 1) {
    throw new Error("Transfer stopped: sender has insufficient funds.");
  }
  const credit = sessionDB.Wallets.updateOne(
    {_id: "userB"},
    {$inc: {balance: amount}}
  );
  if (credit.modifiedCount !== 1) {
    throw new Error("Transfer stopped: receiver wallet was not found.");
  }
  session.commitTransaction();
  print("Transfer completed successfully.");
} catch (error) {
  session.abortTransaction();
  print("Transfer failed; transaction rolled back: " + error.message);
} finally {
  session.endSession();
}
db11.Wallets.find();
