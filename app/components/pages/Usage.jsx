"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Usage() {
  return (
    <section className="usage-section">
      <div className="container">
        <motion.h2
          className="title2 text-center mb-[40px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          이렇게 활용해보세요
        </motion.h2>

        <div className="flex justify-between mb-[100px]">
          <motion.div
            className="usage-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
          >
            <h6>아침 독서 시간</h6>
            <div className="icon">
              <Image
                src="/images/alphabet.png"
                width={600}
                height={300}
                alt="아이콘"
              />
            </div>
            <p>
              아침 시간을 활용한
              <br />
              영어 독서 습관 형성
            </p>
          </motion.div>
          <motion.div
            className="usage-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            <h6>학급 특색 시간</h6>
            <div className="icon">
              <Image
                src="/images/note.png"
                width={180}
                height={180}
                alt="아이콘"
              />
            </div>
            <p>
              학급 특색 활동으로
              <br />
              영어 독서 프로그램 운영
            </p>
          </motion.div>
          <motion.div
            className="usage-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <h6>방과후 시간</h6>
            <div className="icon">
              <Image
                src="/images/backpack.png"
                width={180}
                height={180}
                alt="아이콘"
              />
            </div>
            <p>
              방과후 프로그램으로
              <br />
              영어 독서 활동
            </p>
          </motion.div>
        </div>

        <div className="!pt-[150px]">
          <h2 className="title-banner">수업 연계 흐름</h2>
          <div className="environment2">
            <motion.div
              className="item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            >
              <div className="text">
                <h3>1</h3>
                <p>교과 단원 연계 도서 제공</p>
              </div>

              <div className="image">
                <Image
                  src="/images/usage1.png"
                  width={600}
                  height={400}
                  alt="school"
                />
              </div>
            </motion.div>
            <motion.div
              className="item"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              <div className="text">
                <h3>2</h3>
                <p>다양한 아케이드 활동</p>
              </div>
              <div className="image">
                <Image
                  src="/images/usage2.png"
                  width={600}
                  height={400}
                  alt="school"
                />
              </div>
            </motion.div>
            <motion.div
              className="item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div className="text">
                <h3>3</h3>
                <p>실시간 접속 현황 확인</p>
              </div>

              <div className="image">
                <Image
                  src="/images/usage3.png"
                  width={600}
                  height={400}
                  alt="school"
                />
              </div>
            </motion.div>
            <motion.div
              className="item"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            >
              <div className="text">
                <h3>4</h3>
                <p>교사 미션 설정 및 대시보드 확인</p>
              </div>
              <div className="image">
                <Image
                  src="/images/usage4.png"
                  width={600}
                  height={400}
                  alt="school"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="environment">
        <motion.h2
          className="title-banner"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          언제 어디서든 다양한 독서환경 지원
        </motion.h2>
        <div className="flex flex-col justify-between items-center">
          <motion.div
            className="image-wrap"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src="/images/usage5.png"
                width={300}
                height={400}
                alt="school"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/images/usage6.png"
                width={300}
                height={400}
                alt="school"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/images/usage7.png"
                width={300}
                height={400}
                alt="school"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="box-wrap"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <div className="icon">
                <Image
                  src="/images/icon-school.png"
                  width={80}
                  height={80}
                  alt="school"
                />
              </div>
              <div className="text">
                <h3>학교에서</h3>
                <p>수업시간에 바로 활용</p>
              </div>
            </motion.div>
            <motion.div
              className="box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <div className="icon">
                <Image
                  src="/images/icon-house.png"
                  width={80}
                  height={80}
                  alt="house"
                />
              </div>
              <div className="text">
                <h3>가정에서</h3>
                <p>집에서도 연속된 독서 경험</p>
              </div>
            </motion.div>
            <motion.div
              className="box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <div className="icon">
                <Image
                  src="/images/icon-pc.png"
                  width={80}
                  height={80}
                  alt="pc"
                />
              </div>
              <div className="text">
                <h3>PC</h3>
                <p>노트북, 크롬북, 웨일북 등</p>
              </div>
            </motion.div>
            <motion.div
              className="box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              <div className="icon">
                <Image
                  src="/images/icon-phone.png"
                  width={80}
                  height={80}
                  alt="phone"
                />
              </div>
              <div className="text">
                <h3>태블릿/핸드폰</h3>
                <p>iOS/Android OS</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="bg-icon"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.4, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>
      <motion.div
        className="bg-icon2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.4, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      ></motion.div>
    </section>
  );
}
