import React from 'react';
import { motion } from 'framer-motion';
import './AboutCard.css';

const AboutCard = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}  // 🔄 Ahora se anima CADA VEZ que entra en pantalla
      transition={{ duration: 0.6 }}
      className="about-card"
    >
      <h3>{title}</h3>
      <p className="card-description">{description}</p>
    </motion.div>
  );
};

export default AboutCard;