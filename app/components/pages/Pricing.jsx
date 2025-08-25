"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container">
        <motion.h2
          className="title2 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          연간 이용권
        </motion.h2>

        <motion.h6
          className="pricing-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          전교생수 기준 간편한 가격 정책
        </motion.h6>

        <div className="pricing-wrap">
          <motion.div
            className="pricing-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
          >
            <h3 className="font-bold text-lg">200명 이하</h3>
            <p className="text-2xl font-semibold">
              <span className="font-yonepick">200</span>만원
            </p>
          </motion.div>
          <motion.div
            className="pricing-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="font-bold text-lg">300명 이하</h3>
            <p className="text-2xl font-semibold">
              <span className="font-yonepick">300</span>만원
            </p>
          </motion.div>
          <motion.div
            className="pricing-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <h3 className="font-bold text-lg">400명 이하</h3>
            <p className="text-2xl font-semibold">
              <span className="font-yonepick">400</span>만원
            </p>
          </motion.div>
          <motion.div
            className="pricing-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <h3 className="font-bold text-lg">500명 이상</h3>
            <p className="text-2xl font-semibold">
              <span className="font-yonepick">500</span>만원
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
