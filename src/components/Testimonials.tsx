"use client";

import React, { useState, useEffect } from "react";

const testimonials = [
  // Government Partner Testimonials
  {
    text: "While Georgia now has an AI policy in effect, the massive boom of generative AI has brought with it specific challenges. This Spring, Paragon fellows worked with the GTA to recommend enforcement and education mechanisms to address generative AI's potential effect on government operations at the state level. The work produced by Paragon will help inform a GenAI policy that contains guidelines for the use of generative AI by all 40,000 state employees.",
    author: "— Nikhil Deshpande, Chief Digital and AI Officer, Georgia Technology Authority",
  },
  {
    text: "Paragon fellows helped our city create a comprehensive AI procurement framework, establishing a structured approach for evaluating AI technologies against core values such as privacy, security, equity, and transparency. This framework will directly benefit over 15,000 residents and ensure all future AI applications align with ethical standards and serve the public responsibly.",
    author: "— Melanie McDonough, Chief Innovation Officer, City of Lebanon, New Hampshire",
  },
  {
    text: "This Spring, Paragon fellows helped us with Language Access—specifically, in support of the Office of New Americans created in 2024 to assist immigrants in the St. Louis area. Their research laid the groundwork for developing a comprehensive language access plan for our city, and their final report included actionable recommendations that will undoubtedly improve language access services for our residents.",
    author: "— Simon Huang, Chief Technology Officer, City of St. Louis",
  },
  {
    text: "The team was highly engaged, efficient, and consistently motivated, which made the collaboration both productive and enjoyable... [The Fellows] brought the right mix of skills and competencies needed to successfully tackle nuanced and complex projects.",
    author: "— Christopher Paul, Chief Privacy Officer, Santa Clara County",
  },

  // Fellow Testimonials
  {
    text: "I have been able to find community in a place that I never thought I would. I've made lifelong connections here and learned so much about the ins and outs of how city government works — all while grappling with some of the biggest issues of today's age. It's rewarding to be charting what feels like the forefront of a movement.",
    author: "— Sofia Rodriguez, Boston Fellow (Wellesley/Hunter College undergraduate)",
  },
  {
    text: "Paragon has been immensely fulfilling and reaffirmed my commitment to responsible technological advancement. I appreciated directly working with our government partner and being some of the first in helping San Jose build capacity against generative AI miscommunication.",
    author: "— Isabelle Anzabi, San Jose Fellow (Stanford graduate)",
  },
  {
    text: "Local governments are heavily understaffed. Some of these offices don't have the resources to learn about future technologies, so any opportunity to get students involved is really great. These fellows didn't just bridge this gap—they provided a creative, academic perspective that only students could bring to the table.",
    author: "— Jude Miller, Paragon Project Lead (Saint Louis University / Washington University in St. Louis graduate)",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      triggerAnimation(() =>
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
      );
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const triggerAnimation = (callback: () => void) => {
    setFade(true);
    setTimeout(() => {
      callback();
      setFade(false);
    }, 300);
  };

  const nextTestimonial = () => {
    triggerAnimation(() =>
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    );
  };

  const prevTestimonial = () => {
    triggerAnimation(() =>
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      )
    );
  };

  return (
    <div className="relative p-4 md:p-8">
      {/* Testimonial Text */}
      <p
        className={`min-h-64 h-auto text-lg md:text-2xl italic text-black pb-3 md:pb-5 transition-opacity duration-300 max-w-[85%] md:max-w-full mx-auto text-center ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        &ldquo;{testimonials[currentIndex].text}&rdquo;
      </p>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Navigation Buttons */}
        <div className="flex px-5 mt-4 md:mt-0">
          <div className="pr-5">
            <button
              onClick={prevTestimonial}
              className="text-gray-500 text-2xl hover:text-black w-12 h-12 flex items-center justify-center"
            >
              ‹
            </button>
          </div>
          <div>
            <button
              onClick={nextTestimonial}
              className="text-gray-500 text-2xl hover:text-black w-12 h-12 flex items-center justify-center"
            >
              ›
            </button>
          </div>
        </div>

        {/* Author */}
        <p
          className={`h-8 text-base md:text-lg font-semibold text-gray-600 transition-opacity duration-300 mb-2 md:mb-0 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {testimonials[currentIndex].author}
        </p>
      </div>
    </div>
  );
}