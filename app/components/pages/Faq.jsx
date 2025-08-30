"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const faqs = [
  {
    question: "1. 도입 후 실제 사용률은 어떤가요?",
    answer: "기존 영어도서관 대비 평균 3배 이상 높은 사용률을 보이고 있습니다.",
    answer2:
      "게임화 요소와 AI 상호작용으로 아이들이 자발적으로 참여하게 됩니다.",
  },
  {
    question: "2. 연간 이용권 외에 다른 옵션이 있나요?",
    answer: "기본적으로 연간 이용권을 제공하며,",
    answer2:
      "학교 상황에 따라 분할 결제나 체험 기간 연장 등 유연한 옵션을 제공합니다.",
  },
  {
    question: "3. 교사가 관리해야 할 것들이 많나요?",
    answer:
      "학생 계정은 본사에서 일괄 생성하고, 학년/반/번호로 간편 로그인이 가능합니다.",
    answer2: "LMS에서 클릭 몇 번으로 도서 추천과 과제 설정이 가능합니다.",
  },
  {
    question: "4. 교사 연수나 지원은 어떻게 이루어지나요?",
    answer: "도입 시 무료 교사 연수를 제공하며,",
    answer2:
      "온라인 매뉴얼과 실시간 채팅 지원을 통해 언제든 도움을 받을 수 있습니다.",
  },
  {
    question: "5. 예산 확보는 어떻게 하나요?",
    answer: "학교 운영 예산 중 도서관 운영비의 독후 활동비에 해당하므로",
    answer2: "별도 예산 확보 없이 도입 가능합니다.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="flex">
          <div className="md:w-1/3">
            <motion.h2
              className="title2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              자주 묻는 질문
            </motion.h2>
          </div>
          <div className="faq-accordion md:w-2/3 mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item border-b border-gray-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`faq-question cursor-pointer w-full text-left py-10 px-3 flex justify-between items-center font-medium transition-colors
                    hover:bg-gray-100 ${
                      openIndex === index ? "bg-gray-100" : ""
                    }
                  `}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon text-gray-500">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`faq-answer transition-all duration-300 overflow-hidden ${
                    openIndex === index
                      ? "max-h-96 opacity-100 py-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p>{faq.answer}</p>
                  {faq.answer2 && <p>{faq.answer2}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
