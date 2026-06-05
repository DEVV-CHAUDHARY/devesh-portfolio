import "./globals.css";

export const metadata = {
  title: "Devesh Singh | AI/ML Engineer",
  description: "Portfolio of Devesh Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}