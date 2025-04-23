export default function animateInView(ref) {
    if (!ref.current) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');

        }
       
      },
      { threshold: .05},


    );
  
    observer.observe(ref.current);


  }