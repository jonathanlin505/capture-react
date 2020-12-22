import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Images
import athlete from "../img/athlete-small.png";
// import theracer from "../img/theracer-small.png";
// import goodtimes from "../img/goodtimes-small.png";

// Animations
import { motion } from "framer-motion";
import {
    pageAnimation2,
    fade,
    photoAnim,
    lineAnim,
    slider,
    sliderContainer,
} from "../animation";
// import { useScroll } from "../components/useScroll";

import TheRacer from "../components/TheRacer";
import GoodTimes from "../components/GoodTimes";

import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
    return (
        <Work
            variants={pageAnimation2}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>

            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img
                            variants={photoAnim}
                            src={athlete}
                            alt="The Athlete"
                        />
                    </Hide>
                </Link>
            </Movie>

            <TheRacer />
            {/* <Movie
                ref={element}
                animate={controls}
                initial="hidden"
                variants={fade}
            >
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <Hide>
                        <motion.img
                            variants={photoAnim}
                            src={theracer}
                            alt="The Racer"
                        />
                    </Hide>
                </Link>
            </Movie> */}

            <GoodTimes />
            {/* <Movie>
                <motion.h2 variants={fade}>Good Times</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <Hide>
                        <motion.img
                            variants={photoAnim}
                            src={goodtimes}
                            alt="Good Times"
                        />
                    </Hide>
                </Link>
            </Movie> */}

            <ScrollTop />
        </Work>
    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    background: #fff;

    h2 {
        padding: 1rem 0rem;
    }

    @media (max-width: 1300px) {
        padding: 2rem 2rem;
    }
`;

const Movie = styled(motion.div)`
    padding-bottom: 10rem;

    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: #fffedf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default OurWork;
