import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['400', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "PHT Blog | Marketing Jurídico",
  description: "Artigos sobre marketing jurídico, captação de clientes e crescimento de escritórios de advocacia.",
  keywords: ["marketing jurídico", "advocacia", "captação de clientes", "escritório de advocacia", "blog jurídico"],
  authors: [{ name: "PHT" }],
  openGraph: {
    title: "PHT Blog | Marketing Jurídico",
    description: "Aprenda estratégias de marketing jurídico com especialistas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={montserrat.className}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
