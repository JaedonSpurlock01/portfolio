const PulsatingDot = () => {
  return (
    <div className="relative w-6 h-6">
      {/* Core dot */}
      <div className="absolute inset-1/4 rounded-full bg-green-500" />

      {/* Pulsing rings */}
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping" />
      <div
        className="absolute inset-0 rounded-full bg-green-500 opacity-50"
        style={{
          animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute inset-0 rounded-full bg-green-500 opacity-25"
        style={{
          animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
          animationDelay: "1s",
        }}
      />
    </div>
  );
};

export default PulsatingDot;
