import React from "react";
import HeroSection from "../containers/HeroSection";
import defaultImageSrc from '../assets/hero-bg-1.png';
import Section from "../containers/Section";
import Card from '../containers/Card'
import Button from '../components/Button';
import { FaceSmileIcon as DefaultIcon } from "@heroicons/react/24/solid";
import company from './../config/company';

const iconWidth = 40;
const valuesCards = [
  {
    image: <DefaultIcon width={iconWidth} />,
    title: "lorem",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    image: <DefaultIcon width={iconWidth} />,
    title: "Lorem-Lorem",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    image: <DefaultIcon width={iconWidth} />,
    title: "Lorem",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    image: <DefaultIcon width={iconWidth} />,
    title: "Lorem",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
];

const AboutPage = () => {
  return <>
    <HeroSection>
      <h1 className="text-5xl font-bold mb-4 max-w-lg z-1 primary-text-color text-center">About {company.name}</h1>
      <p className="text-xl tracking-wider mb-2 max-w-lg z-1 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa odio provident sequi delectus obcaecati ea consectetur voluptas explicabo libero!</p>
      <Button>
        Lorem, ipsum dolor.
      </Button>
    </HeroSection>
    

    <Section>
      <h2 className="text-4xl font-medium mb-2">Lorem, ipsum dolor.</h2>
      <p className="text-2xl tracking-wider text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus explicabo vel autem, deserunt ex accusamus quod quidem perferendis facere, pariatur voluptatibus neque, quaerat distinctio illo!</p>
    </Section>

    <Section>
      <h2 className="text-4xl font-medium mb-2">Lorem, ipsum.</h2>
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
          <h2 className="text-4xl font-medium mb-2">Lorem, ipsum.</h2>
          <p className="text-2xl tracking-widest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus!</p>
          <p className="text-xl tracking-wide mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur odit ex repudiandae quae excepturi magni necessitatibus sunt natus aperiam.
          </p>
        </div>
      </div>
    </Section>

    {/* More sections for testimonials, client success stories, or company timeline */}
  </>;
};

export default AboutPage;
