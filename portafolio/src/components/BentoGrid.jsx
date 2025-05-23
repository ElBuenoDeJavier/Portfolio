export default function BentoGridDisplay(){
    return (
        <div className="bento-grid text-white font-sans-serif">
            <button className="relative cur">
                <div
                  className="absolute -inset-2 rounded-lg bg-gradient-to-r from-indigo-600 via-slate-600 to-violet-600 opacity-50 blur-2xl"
                ></div>
                Descarga mi CV
            </button>

            <h1 className="font-bold text-6xl mb-4">Tailwind Text <span className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">Gradients</span></h1>
            <div className="bento-item">Item 1</div>
            <div className="bento-item">Item 2</div>
            <div className="bento-item">Item 3</div>
            <div className="bento-item">Item 4</div>
            <div className="bento-item">Item 5</div>
            <div className="bento-item">Item 6</div>
        </div>
    );
};