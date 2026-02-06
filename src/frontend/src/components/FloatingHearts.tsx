export default function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div className="floating-hearts-container">
      {hearts.map((i) => (
        <div
          key={i}
          className="floating-heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
            fontSize: `${1 + Math.random() * 1.5}rem`,
            opacity: 0.15 + Math.random() * 0.15,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
