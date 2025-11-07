import Sidebar from "@/src/app/components/Sidebar";
import Navbar from "@/src/app/components/Navbar";

export default function DashboardPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: 20 }}>
        <Navbar />
        <h1>Dashboard</h1>
        <p>...</p>
      </div>
    </div>
  );
}
