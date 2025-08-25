import "./styles/globals.css";

export const metadata = {
  title: "알공북스 랜딩페이지",
  description: "알공북스 랜딩페이지",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/wanted-sans@1.0.1/packages/wanted-sans/fonts/webfonts/variable/woff2/WantedSansVariable.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
