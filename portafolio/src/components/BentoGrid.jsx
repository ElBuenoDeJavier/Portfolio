export default function BentoGridDisplay(){
    return (
        <div className="bento-grid text-white font-sans-serif">
            <button href="#" className="relative mb-10 cursor-pointer font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out">
                <span
                  className="absolute -inset-2 rounded-lg bg-gradient-to-r from-indigo-600 via-slate-600 to-violet-600 opacity-50 blur-2xl"
                ></span>
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md">
                    Descarga mi CV
                </span>
            </button>
            <h1 className="font-bold text-6xl mb-4">Javier Uberos <span className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">Web Developer</span></h1>
            
        </div>
    );
};