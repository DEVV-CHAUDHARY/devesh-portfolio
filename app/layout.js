import "./globals.css";

export const metadata = {
  title: "Devesh Singh | Data Analytics & AI/ML",
  description: "Portfolio of Devesh Singh — BCA student, aspiring Data Analyst & AI/ML Engineer.",
  keywords: ["Devesh Singh", "Data Analyst", "AI/ML", "Python", "SQL", "Power BI", "Portfolio"],
  authors: [{ name: "Devesh Singh" }],
  openGraph: {
    title: "Devesh Singh | Data Analytics & AI/ML",
    description: "Projects, experience and skills of Devesh Singh.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
