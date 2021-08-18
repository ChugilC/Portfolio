import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Education = () => {
  const titleAnimate = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1.5 } },
  };
  const paraAnimate = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2, ease: "easeInOut" } },
  };
  return (
    <Contain>
      <div>
        <Edu>
          <Degree>
            <motion.h4 variants={titleAnimate} initial="hidden" animate="show">
              College
            </motion.h4>
          </Degree>
          <Desc>
            <motion.h3 variants={titleAnimate} initial="hidden" animate="show">
              Velammal Institute of Technology
            </motion.h3>
            <motion.p variants={paraAnimate} initial="hidden" animate="show">
              8.16 CGPA
            </motion.p>
            <motion.p variants={paraAnimate} initial="hidden" animate="show">
              2017 - 2021
            </motion.p>
          </Desc>
        </Edu>
        <Edu>
          <Degree>
            <motion.h4 variants={titleAnimate} initial="hidden" animate="show">
              12th Std
            </motion.h4>
          </Degree>
          <Desc>
            <motion.h3 variants={titleAnimate} initial="hidden" animate="show">
              ST Tresa's Matric Higher Sec School
            </motion.h3>
            <motion.p variants={paraAnimate} initial="hidden" animate="show">
              84.6 %
            </motion.p>
            <motion.p variants={paraAnimate} initial="hidden" animate="show">
              2016 - 2017
            </motion.p>
          </Desc>
        </Edu>
        <Edu>
          <Degree>
            <motion.h4 variants={titleAnimate} initial="hidden" animate="show">
              10th Std
            </motion.h4>
          </Degree>
          <Desc>
            <motion.h3 variants={titleAnimate} initial="hidden" animate="show">
              ST Tresa's Matric Higher Sec School
            </motion.h3>
            <motion.p variants={paraAnimate} initial="hidden" animate="show">
              97.2 %
            </motion.p>
            <motion.p variants={paraAnimate} initial="hidden" animate="show">
              2014 - 2015
            </motion.p>
          </Desc>
        </Edu>
      </div>
    </Contain>
  );
};
const Contain = styled.div`
  height: 89vh;
  width: 100vw;
  display: flex;
  flex: 1;
  margin: 0;
  justify-content: center;
  align-items: center;
`;

const Edu = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`;

const Degree = styled.div`
  padding-right: 30px;
  h4 {
    font-size: 25px;
    color: #1abc9c;
  }
`;

const Desc = styled.div`
  h3 {
    font-size: 30px;
    padding-bottom: 10px;
    color: #fff;
  }
  p {
    font-size: 15px;
    padding-bottom: 10px;
  }
`;

export default Education;
