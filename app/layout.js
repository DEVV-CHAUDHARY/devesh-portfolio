import "./globals.css";

export const metadata = {
  title: "Devesh Singh | Data Analytics × AI/ML",
  description:
    "Devesh Singh — BCA student focused on Data Analytics, Python, Machine Learning and Generative AI.",
  keywords: ["Devesh Singh", "Data Analytics", "AI ML", "Python", "SQL", "Portfolio"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
