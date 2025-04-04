import React from "react";
import HeroSection from "../containers/HeroSection";
import Section from "../containers/Section";
import Card from "../containers/Card";
import Button from "../components/Button";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

const iconWidth = 40;

const contactDetails = [
  {
    icon: <EnvelopeIcon width={iconWidth} />,
    title: "Email Us",
    desc: "info@ascendantdigitalsolutions.com"
  },
  {
    icon: <PhoneIcon width={iconWidth} />,
    title: "Call Us",
    desc: "+63 912 345 6789"
  },
  {
    icon: <MapPinIcon width={iconWidth} />,
    title: "Visit Us",
    desc: "123 Digital Lane, Tech City, Philippines"
  }
];

const ContactPage = () => {
  return (
    <>
      <HeroSection>
        <h1 className="text-5xl font-bold mb-4 max-w-lg text-center z-1">Get in Touch</h1>
        <p className="text-xl tracking-wider mb-2 max-w-lg text-center z-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempora nemo hic, nobis vitae adipisci.
        </p>
        <Button handleClick={() => window.location = "#contact-form"}>Send a Message</Button>
      </HeroSection>

      <Section>
        <h2 className="text-4xl font-medium mb-2 text-center">Contact Information</h2>
        <p className="text-2xl tracking-wider text-center">
          Here's how you can reach us
        </p>
        <ul className="flex flex-wrap md:flex-nowrap gap-4 justify-center mt-6">
          {contactDetails.map((detail, index) => (
            <li key={index} className="max-w-xs">
              <Card shadow={false}>
                {detail.icon}
                <p className="text-xl font-semibold">{detail.title}</p>
                <span className="text-md text-gray-600">{detail.desc}</span>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact-form">
        <h2 className="text-4xl font-medium mb-4 text-center">Send Us a Message</h2>
        <form className="flex flex-col justify-center sm:items-center gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="md:w-100 sm:w-75 w-auto p-3 rounded-md border border-gray-300"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="md:w-100 sm:w-75 w-auto p-3 rounded-md border border-gray-300"
            required
          />
          <textarea
            rows="6"
            placeholder="Your Message"
            className="md:w-100 sm:w-75 w-auto p-3 rounded-md border border-gray-300 resize-none"
            required
          />
          <div className="text-center flex items-center justify-center">
            <Button type="submit" className="md:-100 sm:w-75 w-auto">Submit</Button>
          </div>
        </form>
      </Section>
    </>
  );
};

export default ContactPage;
