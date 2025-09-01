import "./styles/globals.css";
import { pretendard } from "./styles/font";

export const metadata = {
  title: "알공 Books 랜딩페이지",
  description: "초등 수업에 딱 맞춘 AI 영어 도서관 알공 Books",
  openGraph: {
    title: "알공 Books 랜딩페이지",
    description: "초등 수업에 딱 맞춘 AI 영어 도서관 알공 Books",
    url: "https://argongbooks.ai", // 실제 배포 도메인
    siteName: "알공 Books",
    images: [
      {
        url: "https://argongbooks.ai/og-image.png", // 절대 경로
        width: 1200,
        height: 630,
        alt: "알공 Books",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "알공 Books 랜딩페이지",
    description: "알공 Books 초등 수업에 딱 맞춘 AI 영어 도서관",
    images: ["https://argongbooks.ai/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
