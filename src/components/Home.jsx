import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Typewriter from "typewriter-effect";

const Home = () => {

  const handleScroll = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div name="home" className="w-full h-screen bg-[#10101a]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-50 text-lg">Hi, my name is</p>
        <h1 class="text-4xl sm:text-7xl font-bold text-gradient-custom">
          Raj Kumar
        </h1>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-50 pt-2 flex">
            <span className='mr-2'>I am</span>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Full Stack Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Penetration Tester")
                  .pauseFor(1000)
                  .deleteAll()

                  .start();
              }}
            />
          </h2>
        </div>
        <p className="text-gray-300 py-4 leading-8">
          With a passion for creating captivating user experiences, I specialize
          in developing mobile applications using Flutter while incorporating
          appealing design principles.
        </p>
        <div>
          <button onClick={handleScroll} className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:button-gradient-custom hover:border-gradient-custom hover:rounded-sm rounded-sm font-semibold">
            View Work{" "}
            <span className="group-hover:translate-x-1 duration-300">
              {" "}
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;