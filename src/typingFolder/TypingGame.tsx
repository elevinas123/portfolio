import { FaGlobeAmericas, FaRedoAlt } from "react-icons/fa";
import { useState } from "react";
import { useAtom } from "jotai";
import { textWrittenAtom } from "./atoms";
import Text from "./Text";

export default function TypingGame() {
    const [, setTextWritten] = useAtom(textWrittenAtom);
    const [reset, setReset] = useState(false);

    const handleReset = () => {
        setReset((prev) => !prev);
        setTextWritten("");
    };

    return (
        <div className="typingGame flex flex-col items-center justify-center w-full  text-sub-color">
            <div className="text-lg  space-y-6">
                <div className="flex flex-row items-center justify-center space-x-2">
                    <FaGlobeAmericas size="1em" />
                    <span>Javascript</span>
                </div>
                <Text reset={reset} handleReset={handleReset} />
                <button
                    onClick={handleReset}
                    className="text-xl hover:text-yellow-500 transition-colors duration-300 ease-in-out justify-center flex flex-row w-full"
                >
                    <FaRedoAlt />
                </button>
            </div>
        </div>
    );
}
