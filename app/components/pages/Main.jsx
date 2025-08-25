"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export default function Main() {
  // const vantaRef = useRef(null);
  // const [vantaEffect, setVantaEffect] = useState(null);

  // useEffect(() => {
  //   if (!vantaEffect && typeof window !== "undefined") {
  //     console.log("Vanta.js 로딩 시작...");

  //     import("vanta/dist/vanta.halo.min")
  //       .then((VANTA) => {
  //         console.log("Vanta HALO 모듈 로드됨");
  //         import("three").then((THREE) => {
  //           console.log("Three.js 모듈 로드됨");
  //           const effect = VANTA.default({
  //             el: vantaRef.current,
  //             THREE: THREE,
  //             mouseControls: true,
  //             touchControls: true,
  //             gyroControls: false,
  //             minHeight: 200.0,
  //             minWidth: 200.0,
  //             baseColor: 0x9ed1ff,
  //             backgroundColor: 0xf0f5ff,
  //             amplitudeFactor: 0.9,
  //             xOffset: 0.03,
  //             yOffset: 0.02,
  //             size: 1.6,
  //           });
  //           console.log("Vanta 효과 생성됨:", effect);
  //           setVantaEffect(effect);
  //         });
  //       })
  //       .catch((error) => {
  //         console.error("Vanta 로딩 오류:", error);
  //         if (vantaRef.current) {
  //           vantaRef.current.style.backgroundColor = "#ffffff";
  //         }
  //       });
  //   }
  //   return () => {
  //     if (vantaEffect) {
  //       console.log("Vanta 효과 제거됨");
  //       vantaEffect.destroy();
  //     }
  //   };
  // }, [vantaEffect]);

  return (
    // <div
    //   ref={vantaRef}
    //   style={{ width: "100%", height: "770px", overflow: "hidden" }}
    // >
    <section className="main-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="main-title">초등 수업에 딱 맞춘 AI 영어 도서관</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          영어 교과 진도에 맞춰 수준별 영어책을 자동 추천하고,
          <br />
          책 속 주인공과의 AI 대화로 독후 활동까지 자연스럽게 이어지는
          <br />
          초등학교 전용 온라인 영어 도서관 플랫폼, 지금 만나보세요.
        </motion.p>

        <motion.div
          className="flex gap-10 mt-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <button className="btn">
            <Link href="https://bit.ly/476CPxg" target="_blank">
              무료체험 신청
            </Link>
          </button>
          <button className="btn">
            <Link href="https://4wlkw.channel.io/home" target="_blank">
              채널톡 문의하기
            </Link>
          </button>
        </motion.div>
      </div>

      <div className="main-image">
        <Image
          src="/images/browser_03.png"
          alt="main-image"
          width={1000}
          height={1000}
        />
      </div>
      <div className="main-image2">
        <Image
          src="/images/pad_02.png"
          alt="main-image"
          width={1000}
          height={1000}
        />
      </div>
    </section>
    // </div>
  );
}
