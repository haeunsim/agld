import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="wave-banner">
      <div className="inner">
        <div className="icon-wrap">
          <Image
            src="/images/books-icon.png"
            alt="icon01"
            width={140}
            height={140}
            className="icon"
          />
          <p>초등학교 전용 AI 영어 도서관</p>
        </div>

        <div className="logo-wrap">
          <Image src="/images/logo.png" alt="icon01" width={240} height={140} />
        </div>

        <div className="button-wrap">
          <button>
            <Link href="https://4wlkw.channel.io/home" target="_blank">
              실시간 견적 문의
            </Link>
          </button>
          <button>
            <Link href="https://bit.ly/476CPxg" target="_blank">
              무료체험 신청
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
