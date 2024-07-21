import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { language } from '../data/Static';

const Skill = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      name="skill"
      className="w-full bg-[#10101a] text-gray-300 py-32"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  h-full text-white">
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gradient-custom">
            Skills
          </p>

          <div className="flex justify-center space-x-10 mt-10">
            <button
              className="text-white group border-2 px-3 py-2 my-2 rounded-full flex items-center hover:button-gradient-custom hover:border-gradient-custom focus:outline-none hover:border-transparent hover:ring-0 font-semibold"
            >
              Development
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Security
            </button>
          </div>

          <p className="py-6 pb-12">
            I have used and worked with the following technologies
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {language.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md transform hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              data-aos="fade-up" data-aos-duration={id + '00'} data-aos-easing="linear"
            >
              <img
                src={src}
                alt=""
                className="mx-auto"
                style={{ width: "4rem", height: "4rem" }}
              />
              <p className="mt-1">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;