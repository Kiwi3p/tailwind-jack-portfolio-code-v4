import React from "react";
import Game from "../components/Game";
// import Model from "../components/Model";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Links from "../components/Links";
// import { animationOne, transition } from "./animation";

function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -300,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 300,
      }}
      transition={{ duration: 0.4 }}
    >
      <div className="h-screen flex flex-col justify-center items-center bg-yellow-300">
        <h1 className="text-9xl uppercase font-black">About Me</h1>
        <Game />
      </div>
      <Links />
    </motion.div>
  );
}

export default About;
