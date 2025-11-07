import Sidebar from "@/src/app/components/Sidebar";
import Navbar from "@/src/app/components/Navbar";
import Table from "@/src/app/components/Table";
import { mockUsers } from "@/src/app/mock/users";

export default function UsersPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: 20 }}>
        <Navbar />
        <h1>Usuarios</h1>
        <Table data={mockUsers} />
      </div>
    </div>
  );
}
