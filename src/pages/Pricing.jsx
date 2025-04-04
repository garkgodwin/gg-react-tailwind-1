import React from "react";
import HeroSection from "../containers/HeroSection";
import Section from "../containers/Section";
import Card from "../containers/Card";
import Button from "../components/Button";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router";

const iconWidth = 24;

const pricingPlans = [
  {
    title: "Starter",
    price: "$49",
    frequency: "/mo",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
  },
  {
    title: "Professional",
    price: "$99",
    frequency: "/mo",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    frequency: "",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
    ],
  }
];

const PricingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection>
        <h1 className="text-5xl font-bold mb-4 text-center z-1">Pricing Plans</h1>
        <p className="text-xl tracking-wide text-center max-w-lg mx-auto mb-4 z-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, magni.
        </p>
        <Button handleClick={() => navigate("/contact")}>
          Contact Us for a Quote
        </Button>
      </HeroSection>

      <Section>
        <h2 className="text-4xl font-medium text-center mb-2">Our Packages</h2>
        <p className="text-xl text-center mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem.
        </p>
        <ul className="flex flex-wrap md:flex-nowrap gap-6 justify-center w-[100%]">
          {pricingPlans.map((plan, index) => (
            <li key={index} className=" w-[100%]">
              <Card>
                <h3 className="text-2xl font-bold mb-2 text-center">{plan.title}</h3>
                <p className="text-center text-3xl font-semibold text-accent mb-4">
                  {plan.price}
                  <span className="text-base font-light">{plan.frequency}</span>
                </p>
                <ul className="mb-4 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircleIcon width={iconWidth} className="text-teal-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Button handleClick={() => navigate("/contact")}>
                    Get Started
                  </Button>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default PricingPage;
