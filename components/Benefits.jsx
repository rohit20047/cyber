import React, { useState } from "react";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { Link } from "react-router-dom"; // Import Link component
import GoogleForm from "./GoogleForm";

const BenefitCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
      style={{
        // background :  bg-n-8,
        backgroundImage: `url(${item.backgroundUrl})`,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      key={item.id}
    >
      <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.3rem]  bg-n-8 bg-opacity-90">
        <h5 className="h5 mb-5">{item.title}</h5>
        <p className="body-2 mb-6 text-n-3">{item.text}</p>
        <div className="flex items-center mt-auto">
          <img
            src={item.iconUrl}
            width={48}
            height={48}
            alt={item.title}
          />
          {/* Replace button with Link */}
          <Link to="/GoogleForm" className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
            Apply Now
          </Link>
          <Arrow />
        </div>
      </div>

      {item.light && <GradientLight />}

      <div
        className="absolute inset-0.5 bg-n-8"
        style={{ clipPath: "url(#benefits)" }}
      >
        <div
          className="absolute inset-0 transition-opacity"
          style={{ opacity: isHovered ? 0.1 : 0 }}
        >
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              width={380}
              height={362}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      <ClipPath />
    </div>
  );
};

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Empower your skills with CyberWave: Streamline your path to success."
        />

        <div className="flex flex-wrap gap-6 mb-10">
          {benefits.map((item) => (
            <BenefitCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
