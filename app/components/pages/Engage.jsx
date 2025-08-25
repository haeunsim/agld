"use client";
import React from "react";
import { motion } from "motion/react";

export default function Engage() {
  return (
    <section className="engage-section">
      <div className="container">
        <div className="flex justify-between">
          <motion.div
            className="w-2/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="title">
              영어 도서관,
              <br />
              이렇게 운영되고 있지 않나요?
            </h2>
          </motion.div>
          <motion.div
            className="w-1/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="engage-box">
              <motion.div
                className="engage-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              >
                <h6>활용률 저조</h6>
                <p>
                  도입은 했지만,
                  <br />
                  <span>꾸준히 읽는 아이들은 소수</span>예요.
                </p>
              </motion.div>
              <motion.div
                className="engage-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <h6>수업 연계 부족</h6>
                <p>
                  <span>교과와 연결</span>되지 않으면
                  <br />
                  아이들에겐 그냥 숙제일 뿐이에요.
                </p>
              </motion.div>
              <motion.div
                className="engage-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <h6>지도 여건 한계</h6>
                <p>
                  수준별 추천부터 피드백까지
                  <br />
                  <span>교사 혼자 감당하기엔 벅차</span>요.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="image"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>
    </section>
  );
}
