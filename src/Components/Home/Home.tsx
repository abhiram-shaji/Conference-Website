import React from "react";
import homeData from '../../data/homeData';

interface HeadingProps {
  tagline: string;
  subHeading: string;
  src: string;
}

interface SectionProps {
  tagline: string;
  subHeading: string;
  src: string;
  reverse?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ tagline, subHeading, src }) => {
  return (
    <div className="relative w-full h-screen">
      <img
        className="w-full h-full object-cover"
        src={src}
        alt="Comox Valley Programs"
      />
      <div className="absolute inset-0 flex items-center p-8 lg:pl-24">
        {/* Semi-transparent black rectangle with rounded corners */}
        <div className="bg-black bg-opacity-75 max-w-2xl rounded-lg p-6">
          <h1 className="text-white font-bold text-5xl md:text-6xl">{tagline}</h1>
          <p className="text-white text-lg md:text-xl mt-4">{subHeading}</p>
          <a
            href={homeData[0].callToAction.link}
            className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            {homeData[0].callToAction.text}
          </a>
        </div>
      </div>
    </div>
  );
};

// Section component with flexible layout
const Section: React.FC<SectionProps> = ({ tagline, subHeading, src, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center justify-between py-16 px-8 bg-white max-w-screen-xl mx-auto`}>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{tagline}</h2>
        <p className="text-lg mb-6">{subHeading}</p>
        <a
          href={homeData[0].callToAction.link}
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          {homeData[0].callToAction.text}
        </a>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <img className="w-full h-auto rounded-lg shadow-lg" src={src} alt={tagline} />
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <div className="relative">
        <Heading
          tagline={homeData[0].headline}
          subHeading={homeData[0].subheadline}
          src={homeData[0].backgroundImage}
        />
      </div>
      {/* Section 1 - Text on left, Image on right */}
      <Section
        tagline={homeData[1].headline}
        subHeading={homeData[1].subheadline}
        src={homeData[1].backgroundImage} 
      />
      {/* Section 2 - Image on left, Text on right */}
      <Section
        tagline={homeData[2].headline}
        subHeading={homeData[2].subheadline}
        src={homeData[2].backgroundImage} 
        reverse
      />
    </>
  );
};

export default Home;
