import React from "react";
import HeroSection from "../containers/HeroSection";
import Section from "../containers/Section";
import Card from "../containers/Card";
import Button from "../components/Button";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router";

const iconWidth = 40;
const services = [
  {
    icon: <WrenchScrewdriverIcon width={iconWidth} />,
    title: "Lorem, ipsum.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, nobis?"
  },
  {
    icon: <WrenchScrewdriverIcon width={iconWidth} />,
    title: "Lorem, ipsum.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, nobis?"
  },
  {
    icon: <WrenchScrewdriverIcon width={iconWidth} />,
    title: "Lorem, ipsum.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, nobis?"
  },
  {
    icon: <WrenchScrewdriverIcon width={iconWidth} />,
    title: "Lorem, ipsum.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, nobis?"
  }
];

const ServicesPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeroSection>
        <h1 className="text-5xl font-bold mb-4 max-w-lg text-center z-1">Our services</h1>
        <p className="text-xl tracking-wider mb-2 max-w-lg text-center z-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, quod.
        </p>
        <Button handleClick={() => (navigate("/contact"))}>Get in Touch</Button>
      </HeroSection>
      <Section>
        <h2 className="text-4xl font-medium mb-2 text-center">What We Offer</h2>
        <p className="text-2xl tracking-wider text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, nobis?
        </p>
        <ul className="flex flex-wrap md:flex-nowrap gap-4 justify-center mt-6">
          {services.map((service, index) => (
            <li key={index} className="max-w-xs">
              <Card shadow={false}>
                {service.icon}
                <p className="text-xl font-semibold">{service.title}</p>
                <span className="text-md text-gray-600">{service.desc}</span>
              </Card>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default ServicesPage;