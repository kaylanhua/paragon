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
      <div className="w-full">
        {/* Top Divider */}
        <div className="border-t border-gray-300"></div>
  
        {/* Navbar */}
        <nav className="flex justify-center space-x-8 py-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className="text-gray-500 hover:text-black font-semibold transition-colors"
            >
              {section.title}
            </button>
          ))}
        </nav>
  
        {/* Bottom Divider */}
        <div className="border-t border-gray-300"></div>
      </div>
    );
  }