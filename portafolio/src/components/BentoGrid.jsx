export default function BentoGridDisplay(){
    return (
        <div className="bento-grid text-white font-sans-serif">
            <a
                href="#"
                className="relative mb-10 cursor-pointer font-medium py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out inline-block"
            >
                <span
                    className="absolute -inset-2 rounded-lg bg-gradient-to-r from-indigo-600 via-slate-600 to-violet-600 opacity-50 blur-2xl"
                ></span>
                <span className="relative px-5 py-2.5 bg-black rounded-4xl">
                   <span className="bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                    Descarga mi CV</span>
                </span>
            </a>
            <h1 className="font-bold text-6xl mb-4">
                Javier Uberos{" "}
                <span className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">
                    Web Developer
                </span>
            </h1>
        </div>
    );
};