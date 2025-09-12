import { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
    <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="fixed bottom-24 md:bottom-20 right-5 bg-blue-300 text-white w-14 h-14 rounded-full shadow-lg hover:bg-blue-800 transition flex items-center justify-center"
  aria-label="Volver arriba"
>
  <span className="text-3xl">↑</span>
</button>

    )
  );
}

export default ScrollToTopButton;
