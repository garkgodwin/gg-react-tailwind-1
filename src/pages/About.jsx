import React from "react";
import HeroSection from "../containers/HeroSection";
import defaultImageSrc from '../assets/hero-bg-1.png';
import Section from "../containers/Section";
import Card from '../containers/Card'
import Button from '../components/Button';
import { FaceSmileIcon as DefaultIcon } from "@heroicons/react/24/solid";

const iconWidth = 40;
const valuesCards = [
  {
    image: <DefaultIcon width={iconWidth} />,
    title: "Innovation",
    desc: "We prioritize innovative solutions that drive success."
  },
  {
    image: <DefaultIcon width={iconWidth} />,
    title: "Client-Centric",
    desc: "Our clients are at the heart of everything we do."
  },
  {
    image: <DefaultIcon width={iconWidth} />,
    title: "Integrity",
    desc: "We value transparency and honesty in all of our work."
  },
  {
    image: <DefaultIcon width={iconWidth} />,
    title: "Teamwork",
    desc: "Collaboration is key to delivering excellent results."
  },
];

const AboutPage = () => {
  return <>
    <HeroSection>
      <h1 className="text-5xl font-bold mb-4 max-w-lg z-1 primary-text-color text-center">About Ascendant Digital Solutions</h1>
      <p className="text-xl tracking-wider mb-2 max-w-lg z-1 text-center">We're a team passionate about helping businesses grow through digital transformation.</p>
      <Button>
        Join Our Team
      </Button>
    </HeroSection>

    <Section>
      <h2 className="text-4xl font-medium mb-2">Who We Are</h2>
      <p className="text-2xl tracking-wider text-center">At Ascendant Digital Solutions, we specialize in creating cutting-edge software and web experiences. With a team of passionate developers and designers, we focus on helping businesses grow through digital transformation.</p>
    </Section>

    <Section>
      <h2 className="text-4xl font-medium mb-2">Our Values</h2>
      <ul className="flex flex-wrap md:flex-nowrap gap-2 md:gap-0 justify-around mt-4">
        {valuesCards.map((item, index) => (
          <li key={index} className="max-w-xs min-w-xs md:max-w-auto md:min-w-auto">
            <Card shadow={false}>
              {item.image}
              <p>{item.title}</p>
              <span>{item.desc}</span>
            </Card>
          </li>
        ))}
      </ul>
    </Section>

    <Section>
      <div className="flex flex-row gap-4 flex-wrap md:flex-nowrap items-center justify-center">
        <div className="sm:w-sm md:w-lg p-8 flex items-center justify-center">
          <img src={defaultImageSrc} alt="Team"/>
        </div>
        <div className="flex flex-col" style={{width: "50%"}}>
          <h2 className="text-4xl font-medium mb-2">Our Team</h2>
          <p className="text-2xl tracking-widest">Meet the team that drives innovation and excellence at Ascendant Digital Solutions.</p>
          <p className="text-xl tracking-wide mt-10">
            Our team is composed of talented professionals who are committed to creating digital experiences that transform businesses. We work collaboratively to deliver tailored solutions that meet our clients’ needs.
          </p>
        </div>
      </div>
    </Section>

    {/* More sections for testimonials, client success stories, or company timeline */}
  </>;
};

export default AboutPage;
