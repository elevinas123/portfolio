import { ReactElement, RefObject, useEffect, useRef, useState } from "react";
import Cursor from "./Cursor";
import { useAtom } from "jotai";
import SentenceLine from "./SentenceLine";
import { textWrittenAtom } from "./atoms";

type TextProps = {
    reset: boolean;
    handleReset: () => void;
};

export default function Text(props: TextProps) {
    const [textWritten, setTextWritten] = useAtom(textWrittenAtom);
    const containerRef = useRef<HTMLDivElement>(null);
    const [sentences, setSentences] = useState<ReactElement[]>([]);
    const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 32 });
    const [index, setIndex] = useState(0);
    const indexRef = useRef<number>();
    indexRef.current = index;
    const code = [
        // 1. Calculate factorial
        `function calculateFactorial(n) {/enter  if (n === 0 || n === 1) {/enter    return 1;/enter  } else {/enter    return n * calculateFactorial(n - 1);/enter  }/enter}`,

        // 2. Fibonacci sequence
        `function fibonacci(n) {/enter  if (n <= 1) {/enter    return n;/enter  } else {/enter    return fibonacci(n - 1) + fibonacci(n - 2);/enter  }/enter}`,

        // 3. Check if number is prime
        `function isPrime(num) {/enter  for (let i = 2; i <= Math.sqrt(num); i++) {/enter    if (num % i === 0) return false;/enter  }/enter  return num > 1;/enter}`,

        // 4. Find maximum number in an array
        `function findMax(arr) {/enter  return Math.max(...arr);/enter}`,

        // 5. Reverse a string
        `function reverseString(str) {/enter  return str.split('').reverse().join('');/enter}`,

        // 6. Convert temperature from Celsius to Fahrenheit
        `function celsiusToFahrenheit(celsius) {/enter  return celsius * 9/5 + 32;/enter}`,

        // 7. Sort an array of numbers
        `const sortNumbers = (arr) => arr.sort((a, b) => a - b);`,

        // 8. Filter out falsy values from an array
        `const filterFalsy = (arr) => arr.filter(Boolean);`,

        // 9. Find the longest word in a string
        `function findLongestWord(str) {/enter  return str.split(' ').sort((a, b) => b.length - a.length)[0];/enter}`,

        // 11. Count the vowels in a string
        `function countVowels(str) {/enter  return str.match(/[aeiou]/gi).length;/enter}`,

        // 12. Generate a random number between two values
        `function randomInRange(min, max) {/enter  return Math.floor(Math.random() * (max - min + 1)) + min;/enter}`,

        // 13. Check if a string is a palindrome
        `function isPalindrome(str) {/enter  const revStr = str.split('').reverse().join('');/enter  return str === revStr;/enter}`,

        // 14. Remove duplicates from an array
        `function removeDuplicates(arr) {/enter  return [...new Set(arr)];/enter}`,

        // 15. Find the greatest common divisor (GCD) of two numbers
        `function gcd(a, b) {/enter  while(b !== 0) {/enter    let t = b;/enter    b = a % b;/enter    a = t;/enter  }/enter  return a;/enter}`,

        // 16. Check if a year is a leap year
        `function isLeapYear(year) {/enter  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;/enter}`,

        // 17. Find the factorial of a number (iterative approach)
        `function factorial(num) {/enter  let result = 1;/enter  for (let i = 2; i <= num; i++) {/enter    result *= i;/enter  }/enter  return result;/enter}`,

        // 18. Sum all numbers till the given one
        `function sumUpTo(n) {/enter  return n * (n + 1) / 2;/enter}`,

        // 19. Count the occurrence of a specific element in an array
        `function countOccurrences(arr, val) {/enter  return arr.reduce((acc, curr) => (curr === val ? acc + 1 : acc), 0);/enter}`,

        // 20. Deep clone an object
        `function deepClone(obj) {/enter  return JSON.parse(JSON.stringify(obj));/enter}`,
    ];

    const [text, setText] = useState(code[Math.floor(Math.random() * code.length)].replace(/\s/g, "/sp /sp"));
    const textRef = useRef<string>();
    textRef.current = text;
    // Example of updating cursor position
    const updateCursorPosition = (newLetterElement: RefObject<HTMLDivElement>) => {
        if (!containerRef.current) return;
        if (!newLetterElement.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const letterRect = newLetterElement.current.getBoundingClientRect();

        // Calculate the top position to align the cursor vertically to the middle of the letter
        const relativeTop = letterRect.top - containerRect.top + letterRect.height / 2;

        // Calculate the left position to align the cursor to the right of the letter + 10px offset
        const relativeLeft = letterRect.left - containerRect.left + letterRect.width;

        setCursorPosition({ left: relativeLeft, top: relativeTop });
    };

    const enterSplit = (sentence: string) => {
        let splitSentence = sentence.split("/enter");

        return splitSentence;
    };
    useEffect(() => {
        setIndex(0);
    }, [props.reset]);

    useEffect(() => {
        if (!textRef.current) return;
        if (!indexRef.current) indexRef.current = 0;
        let index = indexRef.current;
        if (textWritten === "") index = 0;
        if (textRef.current.split("/enter").length < 7 + index) {
            setText(
                (text) => text + "/enter" + code[Math.floor(Math.random() * code.length)].replace(/\s/g, "/sp /sp")
            );
        }
        let splitText = enterSplit(text).splice(Math.max(0, index - 1), 7);
        let splitTextWritten = enterSplit(textWritten).splice(Math.max(0, index - 1), 7);
        let newItems = splitText.map((sentence, index) => (
            <SentenceLine
                prevIndex={index + 1}
                updateCursorPosition={updateCursorPosition}
                index={index}
                pointer={index == splitTextWritten.length - 1 ? true : false}
                sentence={sentence}
                key={index}
                sentenceWritten={splitTextWritten[index] !== undefined ? splitTextWritten[index] : ""}
            />
        ));
        setSentences(newItems);
        if (textWritten == "") {
            setCursorPosition({ left: 0, top: 32 });
        }
    }, [textWritten, text]);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Backspace") {
                setTextWritten((textWritten) => {
                    // Check if the last 3 characters are "/br" (assuming "/br" is a marker for a space)
                    if (textWritten.endsWith("/sp")) {
                        return textWritten.slice(0, -7); // Remove last 3 characters
                    } else {
                        return textWritten.slice(0, -1); // Remove last character
                    }
                });
                return;
            } else if (event.key === " ") {
                setTextWritten((textWritten) => textWritten + "/sp /sp");
                return;
            } else if (event.key === "Enter") {
                setIndex((i) => i + 1);
                setTextWritten((textWritten) => textWritten + "/enter");
                return;
            }
            if (event.key === "Escape") {
                props.handleReset();
            }
            if (event.key.length > 1) {
                return;
            }
            setTextWritten((text) => {
                let newText = text + event.key;
                return newText;
            });
        };
        // Add event listener when component mounts
        document.addEventListener("keydown", handleKeyPress);

        // Cleanup: Remove event listener when component unmounts
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);
    useEffect(() => {}, []);

    return (
        <div ref={containerRef} className="relative ">
            <div className=" relative text-2xl  mt-4 flex flex-col flex-wrap  text-pretty select-none">{sentences}</div>
            <Cursor left={cursorPosition.left} top={cursorPosition.top} />
        </div>
    );
}
