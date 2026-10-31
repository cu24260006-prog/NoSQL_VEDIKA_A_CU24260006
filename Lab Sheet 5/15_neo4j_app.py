"""
Practical 15: Small Python application using Neo4j.
Install: pip install -r requirements.txt
Set environment variables NEO4J_URI, NEO4J_USER and NEO4J_PASSWORD.
Then run: python 15_neo4j_app.py
"""
import os
from neo4j import GraphDatabase

URI = os.getenv("NEO4J_URI", "bolt://localhost:7687")
USER = os.getenv("NEO4J_USER", "neo4j")
PASSWORD = os.getenv("NEO4J_PASSWORD", "password")

class StudentGraphApp:
    def __init__(self, uri, user, password):
        self.driver = GraphDatabase.driver(uri, auth=(user, password))

    def close(self):
        self.driver.close()

    def create_student(self, student_id, name, course):
        query = """
        MERGE (s:Student {student_id: $student_id})
        SET s.name = $name, s.course = $course
        RETURN s
        """
        with self.driver.session() as session:
            return session.run(
                query, student_id=student_id, name=name, course=course
            ).single()["s"]

    def get_student(self, student_id):
        query = "MATCH (s:Student {student_id: $student_id}) RETURN s"
        with self.driver.session() as session:
            record = session.run(query, student_id=student_id).single()
            return record["s"] if record else None

    def update_course(self, student_id, course):
        query = """
        MATCH (s:Student {student_id: $student_id})
        SET s.course = $course
        RETURN s
        """
        with self.driver.session() as session:
            record = session.run(
                query, student_id=student_id, course=course
            ).single()
            return record["s"] if record else None

    def delete_student(self, student_id):
        query = """
        MATCH (s:Student {student_id: $student_id})
        DETACH DELETE s
        RETURN count(s) AS deleted
        """
        with self.driver.session() as session:
            return session.run(query, student_id=student_id).consume().counters.nodes_deleted

    def find_course_mates(self, course):
        query = """
        MATCH (s:Student {course: $course})
        RETURN s.student_id AS id, s.name AS name
        ORDER BY name
        """
        with self.driver.session() as session:
            return [dict(record) for record in session.run(query, course=course)]

def main():
    app = StudentGraphApp(URI, USER, PASSWORD)
    try:
        # Create sample student nodes.
        app.create_student(1501, "Aarav Sharma", "BCA")
        app.create_student(1502, "Diya Singh", "BCA")
        app.create_student(1503, "Rohan Verma", "BBA")

        print("READ:", app.get_student(1501))
        print("UPDATE:", app.update_course(1503, "BCA"))
        print("BCA students:", app.find_course_mates("BCA"))

        # Demonstrate DELETE last so other output remains visible.
        print("Deleted nodes:", app.delete_student(1502))
    finally:
        app.close()

if __name__ == "__main__":
    main()
