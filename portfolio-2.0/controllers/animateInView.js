export default function animateInView(ref) {
    if (!ref.current) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');

        }
        if (!entry.isIntersecting) {
          entry.target.classList.add('animate-out');
        }
      },
      { threshold: 0.1 },


    );
  
    observer.observe(ref.current);


  }