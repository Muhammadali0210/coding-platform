import { Golos_Text, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-providers";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin", "latin-ext", "cyrillic"],
});

const golosText = Golos_Text({
  variable: "--font-golos-text",
  subsets: ["latin", "latin-ext", "cyrillic"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Coding - platform</title>
        <meta name="description" content="test description" />

        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/favicon.svg" />
        {/* <link rel="icon" type="image/svg+xml" sizes="32x32" href="/icons/favicon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/icons/favicon.svg" /> */}

        <meta property="og:title" content="Coding - platform" />
        <meta property="og:description" content="test description" />
        <meta property="og:image" content="/icons/logo.svg" />
        {/* <meta property="og:url" content="https://timeedu.uz" /> */}
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coding - platform" />
        <meta name="twitter:description" content="test description" />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />
      </head>
      <body
        className={`${nunitoSans.className} antialiased ` }
      >
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
