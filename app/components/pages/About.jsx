"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  const slides = [
    {
      image: "/images/about1.png",
      title: "몰입형 독서 경험",
      subTitle: "랭킹존",
      details: [
        "학생이 책을 읽을수록, 나만의 서재가 자라납니다.",
        "읽은 책은 자동으로 전시되고, 포인트로 꾸민 아바타 와 공간은 읽는 재미를 더해줍니다.",
        "랭킹존에 전시되는 동상과 친구 초대 기능은 자연스럽게 반복 독서를 유도합니다.",
      ],
      features: [
        "완독한 책은 서재에 독서 컬렉션으로 전시",
        "포인트로 서재 확장 및 캐릭터 꾸미기",
        "내 캐릭터 동상 전시 및 친구 초대",
      ],
    },
    {
      image: "/images/about2.png",
      title: "수업과 연결된 책 추천",
      subTitle: "잉글북",
      details: [
        "이제 영어도서관이 수업과 따로 놀지 않습니다.",
        "AI가 교과 진도에 맞춘 책을 추천하고, 선생님은 반 전체 미션을 설정해 간단히 연계할 수 있어요.",
        "표현 중심 교육과정과도 자연스럽게 맞물려, 수업과 독서가 하나의 흐름이 됩니다.",
      ],
      features: [
        "단원에 맞춰 AI가 수준별 영어책 추천",
        "교사 미션을 통해 수업 활동과 연계 가능",
        "이해·표현 중심 교육과정에 자연스럽게 적용",
      ],
    },
    {
      image: "/images/about3.png",
      title: "AI 독후 활동",
      subTitle: "AI 부크",
      details: [
        "책을 다 읽으면, 이야기 속 캐릭터와의 대화가 이어집니다.",
        "감상을 나누고 게임을 즐기며, 이해가 깊어지고 흥미가 커집니다.",
        "즐겁게 마무리된 독서는 곧 다음 책으로 자연스럽게 연결됩니다.",
      ],
      features: [
        "책 속 캐릭터와 대화하며 감상 확장",
        "완독한 책 기반 게임으로 학습 흥미 강화",
        "다음 책 추천으로 독서 흐름 유지",
      ],
    },
  ];

  return (
    <section className="about-section">
      <div className="container">
        <motion.p
          className="description"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          초등학생에 딱 맞춘 온라인 영어 도서관
        </motion.p>
        <motion.h2
          className="title2 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          알공북스가 특별한 이유
        </motion.h2>

        <div className="youtube-wrap"></div>

        <div className="about-wrap">
          <motion.div
            className="item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text">
              <h6 className="font-kcc text-stone-700">몰입형 독서 경험</h6>
              <div>
                <p>
                  학생이 책을 읽을수록 나만의 서재가 자라납니다.
                  <br />
                  읽은 책은 자동으로 전시되고, 포인트로 꾸민 아바타와 공간은{" "}
                  <br />
                  읽는 재미를 더해줍니다. 랭킹존에 전시되는 친구 초대 기능은{" "}
                  <br />
                  자연스럽게 반복 독서를 유도합니다.
                </p>
              </div>
            </div>
            <div className="image">
              <Image src="/images/about1.png" alt="" width={600} height={400} />
            </div>
          </motion.div>

          <motion.div
            className="item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="image">
              <Image src="/images/about2.png" alt="" width={600} height={400} />
            </div>
            <div className="text text-right">
              <h6 className="font-kcc text-stone-700">수업과 연결된 책 추천</h6>
              <div>
                <p>
                  이제 영어도서관이 수업과 따로 놀지 않습니다.
                  <br /> 교과 진도에 맞춘 책을 추천하고, 선생님은 반 전체 미션을
                  <br />
                  설정해 간단히 연계할 수 있어요. 표현 중심 교육과정과도 <br />
                  자연스럽게 맞물려, 수업과 독서가 하나의 흐름이 됩니다.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text">
              <h6 className="font-kcc text-stone-700">AI 독후 활동</h6>
              <div>
                <p>
                  책을 다 읽으면, 이야기 속 캐릭터와의 대화가 이어집니다.
                  <br />
                  감상을 나누고 게임을 즐기며, 이해가 깊어지고 흥미가 커집니다.
                  <br />
                  즐겁게 마무리된 독서는 곧 다음 책으로 자연스럽게 연결됩니다.
                </p>
              </div>
            </div>
            <div className="image">
              <Image src="/images/about3.png" alt="" width={600} height={400} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="slider-wrap">
        <div className="slider-container">
          <div className="slider-track">
            {[...slides, ...slides].map((slide, index) => (
              <div key={index} className="slide">
                <div className="image">
                  <h5>{slide.subTitle}</h5>
                  <Image src={slide.image} alt="" width={370} height={500} />
                </div>
                <div className="text">
                  <h6>{slide.title}</h6>

                  <div>
                    {slide.features.map((feature, featureIndex) => (
                      <p key={featureIndex}>{feature}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-image2">
        <Image src="/images/vector02.png" alt="" width={500} height={500} />
      </div>
      <div className="about-image4">
        <Image src="/images/vector02.png" alt="" width={500} height={500} />
      </div>
    </section>
  );
}
