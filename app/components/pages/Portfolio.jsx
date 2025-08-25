"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Portfolio() {
  const images1 = [
    "/images/books/ACS012.jpg",
    "/images/books/ACS014.jpg",
    "/images/books/ACS015.jpg",
    "/images/books/ACS021.jpg",
    "/images/books/ACS024.jpg",
    "/images/books/CMA014.jpg",
    "/images/books/ECR021.jpg",
    "/images/books/ECR042.jpg",
    "/images/books/ECR048.jpg",
    "/images/books/ECR053.jpg",
    "/images/books/ECR062.jpg",
    "/images/books/ECR071.jpg",
    "/images/books/ECR078.jpg",
    "/images/books/ECR082.jpg",
    "/images/books/LSR002.jpg",
    "/images/books/LSR003.jpg",
    "/images/books/LSR017.jpg",
  ];

  const images2 = [
    "/images/books/PFR021.jpg",
    "/images/books/PFR022.jpg",
    "/images/books/PYP003.jpg",
    "/images/books/PYP005.jpg",
    "/images/books/PYP020.jpg",
    "/images/books/PYP021.jpg",
    "/images/books/PYP023.jpg",
    "/images/books/PYP029.jpg",
    "/images/books/SPR020.jpg",
    "/images/books/SRA017.jpg",
    "/images/books/SRT011.jpg",
    "/images/books/SRT024.jpg",
    "/images/books/SRT026.jpg",
    "/images/books/SRT031.jpg",
    "/images/books/SRT043.jpg",
    "/images/books/SRT050.jpg",
    "/images/books/VAH003.jpg",
  ];

  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      id: 0,
      title: "PRE A 레벨 (1~2학년)",
      description:
        "국내 초등학교 채택율 1위 스마트 파닉스의 파닉스 리더스 3대 시리즈",
      series: [
        "Smart Phonics Reader",
        "Phonics Fun Readers",
        "Little Sprout Readers",
      ],
    },
    {
      id: 1,
      title: "A1 레벨 (3~4학년)",
      description:
        "세계 명작동화와 창작 스토리 중심의 그림책 + 쉬운 문장의 리더스 시리즈",
      series: [
        "My First Classic Readers",
        "e-future Classic Readers (Lower Elementary)",
        "Read Along & Read Together",
        "Magic Adventures (Comics)",
      ],
    },
    {
      id: 2,
      title: "A2 레벨 (5~6학년)",
      description: "이야기 구조 이해 및 표현력 확장을 위한 픽션 + 논픽션 조합",
      series: [
        "e-future Classic Readers (Upper Elementary)",
        "Art Classic Stories",
        "Rainbow Readers",
        "School Adventures (Comics)",
      ],
    },
    {
      id: 3,
      title: "B1~B2 레벨 (확장 독서)",
      description: "사고력, 추론력, 배경지식 확장을 위한 고학년/중등용 콘텐츠",
      series: [
        "e-future Classic Readers (Secondary)",
        "e-future PYP Readers",
        "Biography Readers",
      ],
    },
  ];

  return (
    <section className="portfolio-section">
      <div className="container">
        <motion.h2
          className="title2 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          초등 눈높이에 딱 맞춘 수준별 독서 시스템
        </motion.h2>

        <div className="text">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            알공북스는 <span>영어 교과 과정과 연계</span>되며 국제 언어 수준
            기준 CEFR 체계(Pre-A1~B2)에 따른 <span>레벨별 원서 시리즈</span>를
            제공합니다.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            국내 초등학교에서 검증된 스마트파닉스 시리즈부터, IB PYP 연계
            고학년용 콘텐츠까지 알차게 구성되어 있으며,
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span>명작동화, 창작 스토리, 코믹북, 논픽션, 전기</span> 등 다양한
            장르의 책을 통해 읽기의 재미를 느끼고 <span>사고력과 표현력</span>
            까지 기를 수 있습니다.
          </motion.p>
        </div>

        <div className="level-tabs">
          <div className="tab-wrap">
            {/* 탭 버튼 */}
            <motion.div
              className="tab-buttons w-full md:w-1/4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h5
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                레벨별 주요 시리즈
              </motion.h5>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </motion.div>

            {/* 탭 콘텐츠 */}
            <motion.div
              className="tab-content w-full md:w-3/4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="tab-description">
                <h6>{tabs[activeTab].title}</h6>
                <p>{tabs[activeTab].description}</p>
              </div>

              <ul className="series-list">
                {tabs[activeTab].series.map((series, index) => (
                  <li key={index}>- {series}</li>
                ))}
              </ul>
            </motion.div>
          </div>
          <button className="more-btn">
            <Link
              target="_blank"
              href="https://www.onlinekorea.co.kr/datafiles/manual/eLibrary_brochure.pdf"
            >
              전체 도서 보기
            </Link>
          </button>
        </div>
      </div>

      <div className="portfolio-slider">
        <div className="portfolio-slider-row right-moving">
          <div className="portfolio-slider-track">
            {[...images1, ...images1].map((image, index) => (
              <div key={index} className="portfolio-slider-item">
                <img src={image} alt={`Portfolio ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="portfolio-slider-row left-moving">
          <div className="portfolio-slider-track">
            {[...images2, ...images2].map((image, index) => (
              <div key={`left-${index}`} className="portfolio-slider-item">
                <img src={image} alt={`Portfolio ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
