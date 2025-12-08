import Sidebar from "../components/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", padding: "20px", gap: "250px" }}>
      <Sidebar />

      {children}
    </div>
  );
}
