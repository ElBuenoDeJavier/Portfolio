import React, { useEffect } from "react";

export default function TextoAnimado() {
    useEffect(() => {
        const words = ["Web Developer", "Hello, World!", "Full Stack Developer"];
        let i = 0;
        let j = 0;
        let currentWord = "";
        let isDeleting = false;
        let timeoutId;

        function type() {
            currentWord = words[i];
            const typewriterElem = document.getElementById("typewriter");
            if (!typewriterElem) return;
            if (isDeleting) {
                typewriterElem.textContent = currentWord.substring(0, j - 1);
                j--;
                if (j === 0) {
                    isDeleting = false;
                    i++;
                    if (i === words.length) {
                        i = 0;
                    }
                }
            } else {
                typewriterElem.textContent = currentWord.substring(0, j + 1);
                j++;
                if (j === currentWord.length) {
                    isDeleting = true;
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
                Javier Uberos{" "}
                <span
                    id="typewriter"
                    className="text-4xl bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent"
                >
                    Web Developer
                </span>
            </h1>
        </div>
        
    );
}