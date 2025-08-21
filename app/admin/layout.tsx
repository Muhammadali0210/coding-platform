
import Sidebar from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full flex bg-background">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
}