import Navbar from "./_components/shared/navbar";
import Footer from "./_components/shared/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="bg-[#F5F5F7] min-h-[90vh] ">
        {children}
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}
