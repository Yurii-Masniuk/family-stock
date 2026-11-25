import { Metadata } from "next";
import TanStackProvider from "@/features/components/providers/TanStackProvider";
import AuthProvider from "@/features/components/providers/AuthProvider";

export const metadata: Metadata = {
    title: 'Family-stock',
    description: 'Family stock',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <AuthProvider>
            {/* <Header/> */}
          {children}
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}