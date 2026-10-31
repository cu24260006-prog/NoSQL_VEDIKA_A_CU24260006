BCA305P - NOSQL DATABASE DESIGN
LAB SHEET 3
============

This folder contains all 15 MongoDB practicals in the exact order shown in
the teacher-provided Lab Sheet 3 PDF. Each practical has its own .js file.

CONTENTS
--------
1.js  - Student Activity Tracking System
2.js  - Event Logging System
3.js  - Mini Blogging Platform
4.js  - Flexible Product Catalog
5.js  - E-Commerce Order Management System
6.js  - Website Analytics System
7.js  - Content Management System
8.js  - Shopping Cart using embedded documents
9.js  - Product Review and Rating System
10.js - Inventory Monitoring System
11.js - Bank Wallet Transfer using MongoDB transactions
12.js - User Notification System
13.js - Course Learning Platform
14.js - Real-Time Order Tracking System
15.js - Flexible News Database
README.txt - Setup and execution instructions

REQUIREMENTS
------------
- MongoDB Community Server or another MongoDB deployment.
- MongoDB Shell (mongosh).
- Practical 11 specifically requires a replica set or sharded cluster because
  MongoDB transactions are not supported on a standalone server.

HOW TO RUN
----------
1. Start MongoDB Server.
2. Open a terminal/command prompt.
3. Run an individual practical, for example:

   mongosh "mongodb://localhost:27017/" 1.js

4. Replace 1.js with the practical number you want to execute.
5. View the output in the mongosh terminal.

You may also open mongosh first and paste the contents of a practical file.

IMPORTANT NOTES
---------------
- Each practical uses its own database named Lab3_Practical1 through
  Lab3_Practical15 to keep examples separate.
- The scripts clear only their own sample collections before inserting data,
  so rerunning them starts with a clean demonstration dataset.
- Sample names, IDs, dates and values are illustrative.
- Practical 5 uses $lookup to combine order documents with customer details
  and an aggregation pipeline to calculate order totals.
- Practical 6 uses aggregation pipelines to count page visits by page,
  device and browser.
- Practical 8 uses embedded documents and array operators such as $push,
  positional $set and $pull.
- Practical 11 uses a MongoDB session and transaction. Connect to a replica
  set, for example:
  mongosh "mongodb://localhost:27017,localhost:27018,localhost:27019/?replicaSet=rs0"
  Replace hostnames, ports and replica-set name with your actual configuration.
  A standalone MongoDB server will not support this transaction example.
- Practical 14 stores both the current order status and the full status history.

TESTING STATUS
--------------
All 15 files were created and checked for expected filenames and ZIP integrity.
The scripts have not been executed against a live MongoDB server. Run them in
your MongoDB environment and check compatibility with your installed version.
