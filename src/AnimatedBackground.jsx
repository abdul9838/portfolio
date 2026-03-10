const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "8s" }}
      ></div>
      <div
        className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "10s", animationDelay: "2s" }}
      ></div>
      <div
        className="absolute -bottom-40 right-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "12s", animationDelay: "4s" }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
