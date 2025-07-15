import type { Metadata } from "next";
// import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Navbar } from "@/common";
import { Container } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Post Pilot AI",
  description: "AI powered social media post generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider forcedTheme="light">
          <Navbar />
          <Container>{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
