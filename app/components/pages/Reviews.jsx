"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Reviews() {
  return (
    <section className="reviews-section">
      <div className="container">
        <motion.h2
          className="title2 text-center font-kcc"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          선생님들의 생생한 후기
        </motion.h2>

        <div className="review-box">
          <motion.div
            className="review-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
          >
            <div className="profile">
              <Image
                src="/images/teacher-icon1.png"
                width={80}
                height={80}
                alt="teacher"
              />
            </div>
            <h6>수업과 연계가 쉬워요</h6>
            <p>
              "아이들이 책을 읽고 퀴즈까지 풀 수 있어서 수업 시간에 바로 활용할
              수 있습니다. 랭킹이나 보상 기능 덕분에 아이들이 스스로 하려고 하는
              게 큰 장점이에요."
            </p>
          </motion.div>
          <motion.div
            className="review-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="profile">
              <Image
                src="/images/teacher-icon2.png"
                width={80}
                height={80}
                alt="teacher"
              />
            </div>
            <h6>교과 연계 도서가 준비돼 있어요</h6>
            <p>
              "단원에 맞는 책이 있어서 따로 도서를 찾을 필요가 없습니다. LMS에서
              학생들이 얼마나 읽었는지 바로 확인할 수 있어서 지도하기가
              편합니다."
            </p>
          </motion.div>
          <motion.div
            className="review-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="profile">
              <Image
                src="/images/teacher-icon3.png"
                width={80}
                height={80}
                alt="teacher"
              />
            </div>
            <h6>독서가 영어 학습으로 이어져요</h6>
            <p>
              "책 읽기가 퀴즈나 말하기 활동으로 이어지다 보니 학습 효과가
              큽니다. 보상 덕분에 아이들이 꾸준히 읽으면서 자연스럽게 영어
              표현에도 익숙해지고 있어요."
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-icon4"></div>
    </section>
  );
}
