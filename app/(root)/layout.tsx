import Navbar from "../../components/u/navbar";
import Footer from "../../components/u/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#FFF] w-full min-h-[100vh]">
      <Navbar />
      <div className="py-10 mt-[8vh]">
        {children}
      </div>
      <Footer />
    </div>
  );
}
