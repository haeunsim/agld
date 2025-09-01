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

  const reviews = [
    {
      title: "수업과 연계가 쉬워요",
      content:
        "아이들이 책을 읽고 퀴즈까지 풀 수 있어서 수업 시간에 바로 활용할 수 있습니다. 랭킹이나 보상 기능 덕분에 아이들이 스스로 하려고 하는 게 큰 장점이에요.",
      teacher: "서울 00초 영어 전담 교사",
      image: "/images/teacher1.png",
    },
    {
      title: "교과 연계 도서가 준비돼 있어요",
      content:
        "단원에 맞는 책이 있어서 따로 도서를 찾을 필요가 없습니다. LMS에서 학생들이 얼마나 읽었는지 바로 확인할 수 있어서 지도하기가 편합니다.",
      teacher: "군산 00초 5학년 담임 교사",
      image: "/images/teacher2.png",
    },
    {
      title: "독서가 영어 학습으로 이어져요",
      content:
        "책 읽기가 퀴즈나 말하기 활동으로 이어지다 보니 학습 효과가 큽니다. 보상 덕분에 아이들이 꾸준히 읽으면서 자연스럽게 영어 표현에도 익숙해지고 있어요.",
      teacher: "의정부 00초 영어 전담교사",
      image: "/images/teacher3.png",
    },
    {
      title: "아이들이 자발적으로 참여해요",
      content:
        "보상과 랭킹 덕분에 아이들이 스스로 책을 읽고 활동을 이어갑니다. 옆에서 별도의 지도를 하지 않아도 적극적으로 참여하는 모습이 보입니다.",
      teacher: "아산 00초 4학년 담임 교사",
      image: "/images/teacher4.png",
    },
    {
      title: "난이도 있는 책도 있어서 좋아요",
      content:
        "쉬운 책만 있는 게 아니라서 학습 욕심이 있는 학생들에게 도움이 됩니다. 학생들이 스스로 도전하면서 영어 표현에도 더 깊게 다가가고 있어요.",
      teacher: "원주 00초 영어 전담 교사",
      image: "/images/teacher5.png",
    },
    {
      title: "소통이 잘 되는 서비스예요",
      content:
        "업데이트가 자주 이뤄지고, 문의나 개선 요청도 빠르게 반영돼서 만족스럽습니다. 현장에서 바로 활용할 수 있도록 지원해 주는 점이 특히 좋아요.",
      teacher: "세종 00초 영어 전담 교사",
      image: "/images/teacher6.png",
    },
  ];

  return (
    <section id="about" className="about-section">
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

        <div className="youtube-wrap">
          <iframe
            width="1024"
            height="576"
            src="https://www.youtube.com/embed/ZEAR-8pzo6E?si=lZhZeZytRxY-fwDa&amp;controls=1&modestbranding=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h4 className="title">
            <span className="font-himchan">
              <span className="font-himchan text-yellow-600">
                6,100명의 교사
              </span>
              가 직접 검증한{" "}
              <span className="font-himchan text-yellow-600">알공 영어</span>,
            </span>
          </h4>
          <h2 className="title2">
            영어 수업은 이제{" "}
            <span className="text-yellow-500">AI 영어 도서관</span>
            으로 확장됩니다.
          </h2>
        </motion.div>

        <div className="about-wrap">
          <motion.div
            className="item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text">
              <h6 className="text-stone-700">몰입형 독서 경험</h6>
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
              <Image src="/images/about5.png" alt="" width={600} height={400} />
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
              <h6 className="text-stone-700">수업과 연결된 책 추천</h6>
              <div>
                <p>
                  이제 영어도서관이 수업과 따로 놀지 않습니다. <br />
                  2022교육과정 8종 검정 영어교과서 단원과 연계된 책을 추천하고,
                  <br />
                  선생님은 반 전체 미션을 설정해 간단히 연계할 수 있어요. <br />
                  표현 중심 교육과정과도 자연스럽게 맞물려,
                  <br />
                  수업과 독서가 하나의 흐름이 됩니다.
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
              <h6 className="text-stone-700">입체 독서로 완독하는 읽기 루틴</h6>
              <div>
                <p>
                  책에 나오는 단어를 익히고, 원어민 음원을 듣고,
                  <br />
                  AI 음성인식으로 직접 소리내 읽으며 자연스럽게
                  <br />
                  자기주도적 독서를 이어갈 수 있습니다
                </p>
              </div>
            </div>
            <div className="image">
              <Image src="/images/about4.png" alt="" width={600} height={400} />
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
              <Image src="/images/about3.png" alt="" width={600} height={400} />
            </div>
            <div className="text text-right">
              <h6 className="text-stone-700">AI 독후 활동</h6>
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
          </motion.div>
        </div>
      </div>

      <div className="slider-wrap">
        <div className="slider-container">
          <div className="slider-track">
            {[...reviews, ...reviews].map((review, reviewIndex) => (
              <div key={reviewIndex} className="slide">
                <div className="profile">
                  <Image
                    src={review.image}
                    width={80}
                    height={80}
                    alt="teacher"
                  />
                </div>
                <div className="content">
                  <h6>{review.title}</h6>
                  <p>❝ {review.content} ❞</p>
                  <p className="font-himchan">{review.teacher}</p>
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
