import "./globals.scss";

export const metadata = {
  title: "Rosetta Zara Apartments | Vaš mediteranski predah u Zadru",
  description: "Upoznajte Rosetta Zara apartmane u Zadru. Četiri prostora za opušten boravak, uz privatni parking i mediteranski ritam života.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  );
}
