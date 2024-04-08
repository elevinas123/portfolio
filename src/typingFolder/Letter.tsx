import { RefObject, useEffect, useRef } from "react";

type LetterProps = {
    pointer: boolean;
    letter: string;
    letterWritten?: string;
    index?: number;
    updateCursorPosition: (ref: RefObject<HTMLDivElement>) => void;
};

export default function Letter(props: LetterProps) {
    const letterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (props.pointer) {
            props.updateCursorPosition(letterRef);
        }
    }, [props]);

    return (
        <div
            className={`min-w-4 flex flex-row    ${
                props.letter === props.letterWritten
                    ? "text-text-color"
                    : props.letterWritten == ""
                    ? "text-sub-color"
                    : props.letter !== ""
                    ? "text-red-500"
                    : "text-red-700"
            }`}
        >
            <div ref={letterRef} className="min-w-4 typingGame">
                {props.letter == "" && props.letterWritten !== "" ? props.letterWritten : props.letter}
            </div>
        </div>
    );
}
