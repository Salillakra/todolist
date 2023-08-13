import { useEffect, useState } from "react";
import { randomEmoji } from "../Supporters/emojis";

const Header = () => {
  const [emoji, setEmoji] = useState("😊");

  useEffect(() => {
    setEmoji(randomEmoji());
  }, []);
  return (
    <>
      <header className=" h-1/6 md:h-[25%] bg-gradient-to-b from-[rgba(193,123,255,0.8)] to-[rgba(0,0,0,0.01)] flex justify-center items-center flex-col">
        <div className="flex flex-col">
          <div className="text-3xl">TODO LIST {emoji}</div>
          <p className="text-[10px] ml-20">Powered by SL Productions</p>
        </div>
      </header>
    </>
  );
};

export default Header;
