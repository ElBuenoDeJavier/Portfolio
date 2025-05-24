import TextoAnimado from "./TextoAnimado";
import ordenadorImg from "../assets/ordenador.png";
import ordenadorImg2 from "../assets/ordenador2.png";
import perfilImg from "../assets/perfil.jpg";
import sobremi from "../assets/sobremi.png";
import info from "../assets/info.png";

export default function BentoGridDisplay(){

    // Estilo común para cada celda del Bento Grid
    const itemBaseStyle =
        'bg-[#171717] rounded-xl p-4 text-white flex flex-col items-center justify-center';
    // Clases para el contenido de marcador de posición dentro de cada celda
    const placeholderContentStyle = 'text-center text-sm';

    // Contenido de ejemplo para las celdas
    const cellContents = [
        'Celda 1 (Arriba Izquierda)',
        'Celda 2 (Arriba Centro)',
        'Celda 3 (Arriba Derecha)',
        'Celda 4 (Medio Izquierda - Destacada)',
        'Celda 5 (Medio Centro - Grande)',
        'Celda 6 (Medio Derecha)',
        'Celda 7 (Abajo Izquierda)',
        'Celda 8 (Abajo Centro-Izquierda)',
        'Celda 9 (Abajo Centro-Derecha)',
        'Celda 10 (Abajo Derecha)',
    ];


    return (
        <div className="bento-grid text-white font-sans-serif pt-30 pb-30">
            <a
                href="#"
                className="relative mb-10 cursor-pointer font-medium py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out inline-block"
            >
                <span
                    className="absolute -inset-2 rounded-lg bg-gradient-to-r from-indigo-600 via-slate-600 to-violet-600 opacity-50 blur-2xl"
                ></span>
                <span className="relative px-5 py-2.5 bg-black rounded-4xl">
                   <span className="bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text hover:text-white transition duration-300 ease-in-out">
                    Descarga mi CV</span>
                </span>
            </a>
                <TextoAnimado />
            
            <div className="mt-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-4 gap-2 sm:gap-4 md:h-[calc(100vh-4rem)] md:max-h-[800px]">
                {/* ----- Fila 1 ----- */}

                <div
                    className={`${itemBaseStyle} md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1 relative overflow-hidden`}
                >
                    <img
                        src={perfilImg}
                        alt="Foto de Perfil"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                        draggable={false}
                    />
                </div>

                <div
                    className={`${itemBaseStyle} md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-1 bg-gradient-to-tl from-[#191919] via-[#121212] to-[#252525]`}
                >
                    <h2 className="text-4xl font-bold text-center bg-gradient-to-tl from-slate-700 via-violet-500 to-zinc-400 bg-clip-text text-transparent">
                        Javier Uberos
                    </h2>
                    <p className="font-medium text-xl">
                        <span className="text-[#9CA3AF]">Jr Web</span> Developer
                    </p>
                </div>

                <div
                    className={`${itemBaseStyle} md:col-start-4 md:col-span-1 md:row-start-1 md:row-span-2 bg-gradient-to-tl from-[#191919] via-[#121212] to-[#252525]`}
                >
                    <img src={sobremi} alt="Sobre Mí" className="w-40" draggable={false} />
                    <p className="font-bold text-3xl relative z-10"><span className="text-[#9CA3AF]">Sobre</span> mí</p>
                </div>
                {/* ----- Fila 2 ----- */}
                <div
                className={`${itemBaseStyle} md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-2`} // Elemento destacado
                >
                <p className={placeholderContentStyle}>{cellContents[3]}</p>
                <p className="mt-2 text-xs text-neutral-400">(Destacado)</p>
                </div>

                <div
                className={`${itemBaseStyle} md:col-start-3 md:col-span-1 md:row-start-2 md:row-span-2 bg-gradient-to-tl from-[#191919] via-[#121212] to-[#252525]`}
                >
                <p className={placeholderContentStyle}>{cellContents[4]}</p>
                </div>

                <div
                className={`${itemBaseStyle} md:col-start-4 md:col-span-1 md:row-start-3 md:row-span-1 bg-gradient-to-tl from-[#191919] via-[#121212] to-[#252525]`}
                >
                <img src={info} alt="Sobre Mí" className="w-20" draggable={false} />
                <p>Redes sociales, pero de trabajo</p>
                </div>

                {/* ----- Fila 4 ----- */}
                <div
                className={`${itemBaseStyle} md:col-start-1 md:col-span-4 md:row-start-4 md:row-span-1`}
                >
                <p className={placeholderContentStyle}>Imagen de fondo con algo de blur e información</p>
                </div>
            </div>
        </div>
    );
};