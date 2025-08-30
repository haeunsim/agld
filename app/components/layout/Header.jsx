"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY >= 1750);
    };

    window.addEventListener("scroll", handleScroll);

    // 초기 스크롤 위치 확인
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{
            y: -120,
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={{
            y: -120,
            opacity: 0,
            scale: 0.95,
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94], // 커스텀 cubic-bezier
            opacity: { duration: 0.4 },
            scale: { duration: 0.5 },
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: "white",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div className="navbar">
            <div className="inner">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={140}
                    height={60}
                  />
                </Link>
              </div>
              <ul className="nav-list">
                <li>
                  <a href="#about">기능 소개</a>
                </li>
                <li>
                  <a href="#portfolio">도서 소개</a>
                </li>
                <li>
                  <a href="#usage">활용 방법</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
              <div className="links">
                <Link
                  href="https://www.notion.so/dnsoft/v1-24c7839c45bb80fe8483ea1e56361e76"
                  target="_blank"
                >
                  이용가이드
                </Link>
                <Link href="https://web.argongbooks.ai/" target="_blank">
                  알공북스
                </Link>
                <Link
                  href="https://manager.argongbooks.ai/auth/login"
                  target="_blank"
                >
                  교사 LMS
                </Link>
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
