import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="wave-banner">
      <div className="inner">
        <Image
          src="/images/books-icon.png"
          alt="icon01"
          width={140}
          height={140}
          className="icon"
        />
        <p className="w-2/5 !pl-[140px]">
          초등학교 전용
          <br />
          온라인 영어 도서관 플랫폼
        </p>
        <div className="w-2/5 logo">
          <Image src="/images/logo.png" alt="icon01" width={240} height={140} />
        </div>
        <button className="w-1/5">
          <Link href="https://bit.ly/476CPxg" target="_blank">
            무료체험 신청
          </Link>
        </button>
      </div>
    </div>
  );
}
