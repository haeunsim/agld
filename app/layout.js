import "./styles/globals.css";
import { pretendard } from "./styles/font";

export const metadata = {
  title: "알공 Books 랜딩페이지",
  description: "알공 Books 랜딩페이지",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
