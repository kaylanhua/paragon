"use client";

type Section = {
  id: string;
  title: string;
};

export default function Navbar({ sections }: { sections: Section[] }) {
  const handleScroll = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const offset = -200; // Adjust this value to change the scroll offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const targetPosition = elementRect - bodyRect + offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // Smooth scroll animation
      });
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Top Divider */}
      <div className="border-t border-gray-300"></div>
      
      {/* Navbar */}
      <nav className="flex flex-wrap justify-center md:space-x-8 py-4 px-2">
        {sections.map((section) => (
          <div key={section.id} className="w-1/2 md:w-auto p-2 md:p-0">
            <button
              onClick={() => handleScroll(section.id)}
              className="w-full text-sm md:text-md text-gray-500 hover:text-black font-semibold transition-colors whitespace-normal md:whitespace-nowrap text-center"
            >
              {section.title}
            </button>
          </div>
        ))}
      </nav>
      
      {/* Bottom Divider */}
      <div className="border-t border-gray-300"></div>
    </div>
  );
}