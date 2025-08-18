import Navbar from "../../components/root/navbar";
import Footer from "../../components/root/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background w-full min-h-[100vh]">
      <Navbar />
      <div className="py-10 mt-[8vh]">
        {children}
      </div>
      <Footer />
    </div>
  );
}
