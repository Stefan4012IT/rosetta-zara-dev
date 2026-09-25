import "./globals.scss";

export const metadata = {
  title: "Rosetta Zara",
  description: "Rosetta Zara — projekat u pripremi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr-Latn">
      <body>{children}</body>
    </html>
  );
}
