"use client";

import React, { useState, useEffect } from "react";

const testimonials = [
  // Government Partner Testimonials
  {
    text: "While Georgia now has an AI policy in effect, the massive boom of generative AI has brought with it specific challenges. This Spring, Paragon fellows worked with the GTA to recommend enforcement and education mechanisms to address generative AI’s potential effect on government operations at the state level. The work produced by Paragon will help inform a GenAI policy that contains guidelines for the use of generative AI by all 40,000 state employees.",
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
    text: "Paragon fellows conducted in-depth research on current language access policies, best practices from other cities, and the needs of our diverse linguistic communities. Their recommendations have directly contributed to improving how St. Louis serves its residents, particularly our immigrant communities.",
    author: "— Simon Huang, Chief Technology Officer, City of St. Louis",
  },
  {
    text: "The collaborative efforts with Paragon in creating an AI auditing framework set a high standard for evaluating and implementing AI technologies. This framework upholds our city's strategic objectives of transparency, accountability, and inclusivity while advancing public trust.",
    author: "— Melanie McDonough, Chief Innovation Officer, City of Lebanon, New Hampshire",
  },
  {
    text: "Paragon fellows' recommendations will have a significant influence on the final policy that GTA uses to govern, enforce, and educate all state employees on generative AI. Their research has been pivotal to shaping our state’s technology policies.",
    author: "— Nikhil Deshpande, Chief Digital and AI Officer, Georgia Technology Authority",
  },

  // Fellow Testimonials
  {
    text: "I have been able to find community in a place that I never thought I would. I've made lifelong connections here and learned so much about the ins and outs of how city government works — all while grappling with some of the biggest issues of today's age. It’s rewarding to be charting what feels like the forefront of a movement.",
    author: "— Sofia Rodriguez, Boston Fellow (Wellesley/Hunter College undergraduate)",
  },
  {
    text: "Paragon has been immensely fulfilling and reaffirmed my commitment to responsible technological advancement. I appreciated directly working with our government partner and being some of the first in helping San Jose build capacity against generative AI miscommunication.",
    author: "— Isabelle Anzabi, San Jose Fellow (Stanford graduate)",
  },
  {
    text: "Local governments are heavily understaffed. Some of these offices don’t have the resources to learn about future technologies, so any opportunity to get students involved is really great. These fellows didn’t just bridge this gap—they provided a creative, academic perspective that only students could bring to the table.",
    author: "— Jude Miller, Paragon Project Lead (Saint Louis University / Washington University in St. Louis graduate)",
  },
  {
    text: "Being able to get this younger generation excited about local government and meaningfully engage them was really nice. These experiences show how impactful student involvement can be in shaping the future of public policy.",
    author: "— Jude Miller, Paragon Project Lead (Saint Louis University / Washington University in St. Louis graduate)",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false); // Track fading state

  // Auto-cycle every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      triggerAnimation(() =>
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
      );
    }, 20000); // 20 seconds
    return () => clearInterval(interval);
  }, []);

  // Trigger fade animation
  const triggerAnimation = (callback: () => void) => {
    setFade(true); // Start fade-out
    setTimeout(() => {
      callback(); // Change the index
      setFade(false); // Fade back in
    }, 300); // Match transition duration
  };

  // Handlers for manual navigation
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
    <div className="relative p-8">
      {/* Testimonial Text */}
      <p
        className={`text-2xl italic text-black pb-5 transition-opacity duration-300 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        “{testimonials[currentIndex].text}”
      </p>

      <div className="flex justify-between items-center">
        {/* Navigation Buttons */}
        <div className="flex px-5">
          <div className="pr-5">
            <button
              onClick={prevTestimonial}
              className="text-gray-500 text-2xl hover:text-black"
            >
              ‹
            </button>
          </div>
          <div>
            <button
              onClick={nextTestimonial}
              className="text-gray-500 text-2xl hover:text-black"
            >
              ›
            </button>
          </div>
        </div>

        {/* Author */}
        <p
          className={`mt-4 text-lg font-semibold text-gray-600 transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {testimonials[currentIndex].author}
        </p>
      </div>
    </div>
  );
}