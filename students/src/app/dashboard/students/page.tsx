import Sidebar from "@/src/app/components/Sidebar";
import Navbar from "@/src/app/components/Navbar";
import Table from "@/src/app/components/Table";
import { mockStudents } from "@/src/app/mock/students";

export default function StudentsPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: 20 }}>
        <Navbar />
        <h1>Estudiantes</h1>
        <Table data={mockStudents} />
      </div>
    </div>
  );
}
