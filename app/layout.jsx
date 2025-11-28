import "../styles/globals.css";

export const metadata = {
  title: "CUFUCAFA COFFEE",
  description: "Kopi Susu Gula Aren — Pre-order setiap Kamis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
