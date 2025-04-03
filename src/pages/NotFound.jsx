import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import Button from "../components/Button";
import HeroSection from "../containers/HeroSection";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <HeroSection>
        <div className="flex flex-col items-center text-center">
          <ExclamationTriangleIcon className="w-20 h-20 text-red-500 z-1" />
          <h1 className="text-5xl font-bold mt-4 text-black z-1">404 - Page Not Found</h1>
          <p className="text-xl mt-2 mb-2 z-1">Oops! The page you are looking for does not exist.</p>
          <Button handleClick={() => (navigate('/'))}>Go Home</Button>
        </div>
      </HeroSection>
    </>
  );
};

export default NotFound;