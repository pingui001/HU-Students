"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside style={{ width: 200, padding: 20, background: "#eee", height: "100vh" }}>
      <h2>Menú</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link href="/dashboard">Inicio</Link></li>
        <li><Link href="/dashboard/users">Usuarios</Link></li>
        <li><Link href="/dashboard/students">Estudiantes</Link></li>
      </ul>
    </aside>
  );
}
