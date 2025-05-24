import React, { useEffect } from "react";

export default function TextoAnimado() {
    useEffect(() => {
        const words = [
            "I'm Web Developer",
            "I'm Full Stack Developer",
            "Hello, World!",
            "I'm Frontend Developer",
            "I'm Backend Developer"
        ];
        let i = 0;
        let j = 0;
        let currentWord = "";
        let isDeleting = false;
        let timeoutId;

        function type() {
            currentWord = words[i];
            const typewriterElem = document.getElementById("typewriter");
            if (!typewriterElem) return;

            // Add the blinking cursor (vertical bar)
            const cursor = '<span class="animate-blink">|</span>';

            if (isDeleting) {
                typewriterElem.innerHTML = currentWord.substring(0, j - 1) + cursor;
                j--;
                if (j === 0) {
                    isDeleting = false;
                    i++;
                    if (i === words.length) {
                        i = 0;
                    }
                    timeoutId = setTimeout(type, 400); // Pause before typing next word
                    return;
                }
            } else {
                typewriterElem.innerHTML = currentWord.substring(0, j + 1) + cursor;
                j++;
                if (j === currentWord.length) {
                    isDeleting = true;
                    timeoutId = setTimeout(type, 1200); // Pause at end of word
                    return;
                }
            }
            timeoutId = setTimeout(type, 100);
        }

        type();

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="h-20">
            <h1 className="font-bold text-6xl mb-4 flex flex-col items-center justify-center">
                Welcome!{" "}
                <span
                    id="typewriter"
                    className="text-4xl bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent"
                >
                </span>
            </h1>
        </div>
        
    );
}