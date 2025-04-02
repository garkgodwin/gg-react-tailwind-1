import React from "react";
import HeroSection from "../containers/HeroSection";
import defaultImageSrc  from '../assets/hero-bg-1.png';
import Section from "../containers/Section";
import Card from '../containers/Card'
import Button from '../components/Button';
import { FaceSmileIcon as DefaultIcon } from "@heroicons/react/24/solid";

const iconWidth = 40;
const section1Cards = [
  {
    image: <DefaultIcon width={iconWidth}/>,
    title: "Card 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, sunt!"
  },
  {
    image: <DefaultIcon width={iconWidth}/>,
    title: "Card 2",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
  },
  {
    image: <DefaultIcon width={iconWidth}/>,
    title: "Card 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias adipisci sunt nobis vitae ex!"
  },
  {
    image: <DefaultIcon width={iconWidth}/>,
    title: "Card 4",
    desc: "Lorem ipsum dolor sit, amet"
  },
]
const Home = () => {
  const handleCTAClick = (e) => {
    console.log(e);
  }
  return <>
    <HeroSection>
      <h1 className="text-5xl font-bold mb-4 max-w-lg z-1 primary-text-color">Lorem ipsum dolor sit.</h1>
      <p className="text-xl tracking-wider mb-2 max-w-lg z-1 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, necessitatibus!</p>
      <Button handleClick={handleCTAClick}>
        Lorem, ipsum.
      </Button>
    </HeroSection>
    <Section>
      <h2 className="text-4xl font-medium mb-2">Lorem, ipsum.</h2>
      <p className="text-2xl tracking-widest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eaque id odio.</p>
      <ul className="flex flex-wrap md:flex-nowrap gap-2 md:gap-0 justify-around mt-4">
        {section1Cards.map((item, index) => {
          return <li key={index} className="max-w-xs min-w-xs md:max-w-auto md:min-w-auto">
            <Card shadow={false}>
              {item.image}
              <p>{item.title}</p>
              <span>{item.desc}</span>
            </Card>
          </li>
        })}
      </ul>
    </Section>
    <Section>
      <div className="flex flex-row gap-4 flex-wrap md:flex-nowrap items-center justify-center">
        <div className="sm:w-sm md:w-lg p-8 flex items-center justify-center">
          <img src={defaultImageSrc} alt="Something"/>
        </div>
        <div className="flex flex-col" style={{width: "50%"}}>
          <h2 className="text-4xl font-medium mb-2">Lorem, ipsum.</h2>
          <p className="text-2xl tracking-widest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eaque id odio.</p>
          <p className="text-xl/8 tracking-wide mt-10 line-">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam cumque molestiae molestias minima nulla provident non nisi nihil, eveniet optio dolores dolorum totam, ducimus itaque natus. Vero magnam officiis eligendi nihil libero assumenda, earum cumque veniam dignissimos adipisci, ducimus nemo, debitis sequi quisquam? Quod esse amet laudantium voluptatibus eius.
          </p>
        </div>
      </div>
    </Section>
    <Section>
      <div className="flex flex-row gap-4 flex-wrap md:flex-nowrap items-center justify-center">
        <div className="flex flex-col" style={{width: "50%"}}>
          <h2 className="text-4xl font-medium mb-2">Lorem, ipsum.</h2>
          <p className="text-2xl tracking-widest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eaque id odio.</p>
          <p className="text-xl/8 tracking-wide mt-10 line-">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam cumque molestiae molestias minima nulla provident non nisi nihil, eveniet optio dolores dolorum totam, ducimus itaque natus. Vero magnam officiis eligendi nihil libero assumenda, earum cumque veniam dignissimos adipisci, ducimus nemo, debitis sequi quisquam? Quod esse amet laudantium voluptatibus eius.
          </p>
        </div>
        <div className="sm:w-sm md:w-lg p-8 flex items-center justify-center">
          <img src={defaultImageSrc} alt="Something"/>
        </div>
      </div>
    </Section>
  </>;
};

export default Home;
