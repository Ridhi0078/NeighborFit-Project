import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Autotype() {
  const [typeEffect] = useTypewriter({
    words: ["Community", "Place to Live", "Locality", "Home Zone", "Living Space"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <div className="flex flex-col items-center justify-center text-center py-12">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-snug">
        Discover your Perfect{" "}
        <span className="text-[#F43F5E]">{typeEffect}</span>
        <Cursor cursorColor="#f59e0b" /> {/* Amber cursor */}
      </h1>
      {/* <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
        Find the best place tailored to your lifestyle – safe, affordable, and connected.
      </p> */}
    </div>
  );
}
