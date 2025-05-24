import TextoAnimado from "./TextoAnimado";
import ordenadorImg from "../assets/ordenador.png";
import ordenadorImg2 from "../assets/ordenador2.png";
import perfilImg from "../assets/perfil.jpg";
import sobremi from "../assets/sobremi.png";
import info from "../assets/info.png";
import capibarasFondo from "../assets/capibarasFondo.jpg";
import mongodb from "../assets/mongodb.svg";

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
        <div className="bento-grid text-white font-sans-serif pt-30 pb-30 w-[100%]">
            <a
                href="#"
                className="relative mb-10 cursor-pointer font-medium py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out inline-block"
            >
                <span
                    className="absolute -inset-2 rounded-lg bg-gradient-to-r from-indigo-600 via-slate-600 to-violet-600 opacity-50 blur-2xl"
                ></span>
                <span className="relative px-5 py-2.5 bg-black rounded-4xl">
                   <span className="bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text hover:text-white transition duration-300 ease-in-out">
                    Descarga mi CV
                    </span>
                    
                </span>
            </a>
                <TextoAnimado />
            
            <div className="mt-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-4 gap-2 sm:gap-4 md:h-[calc(100vh-4rem)] md:max-h-[800px]">
                

                <div
                    className={`${itemBaseStyle} md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1 relative overflow-hidden group flex items-center justify-center transition-colors duration-300 hover:bg-indigo-600`}
                >
                    <img
                        src={perfilImg}
                        alt="Foto de Perfil"
                        className="absolute inset-0 w-full h-full object-cover"
                        draggable={false}
                    />
                </div>

                <div
                    className={`${itemBaseStyle} md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-1 
                    bg-gradient-to-tl from-[#191919] via-[#121212] to-[#252525] 
                    flex flex-col items-center justify-center transition-colors duration-300 hover:bg-indigo-600`}
                >
                    <h2 className="text-4xl font-bold text-center bg-gradient-to-tl from-slate-700 via-violet-500 to-zinc-400 bg-clip-text text-transparent">
                        Javier Uberos
                    </h2>
                    <p className="font-medium text-xl">
                        <span className="text-[#9CA3AF]">Jr Web</span> Developer
                    </p>
                </div>

                <div
                    className={`${itemBaseStyle} md:col-start-4 md:col-span-1 md:row-start-1 md:row-span-2 bg-gradient-to-tl from-[#191919] via-[#121212] to-[#252525] 
                    flex flex-col items-center justify-center transition-colors duration-300 hover:bg-indigo-600`}
                >
                    <img src={sobremi} alt="Sobre Mí" className="w-40" draggable={false} />
                    <p className="font-bold text-3xl relative z-10 text-center flex flex-col items-center">
                        <span className="text-[#9CA3AF]">Más información sobre <span className="text-white">mí</span></span> 
                        <span className="flex justify-center w-full mt-2">
                            <svg href="#" className="h-6 text-white hover:text-indigo-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v12m0 0 4-4m-4 4L1 9"/>
                            </svg>
                        </span>
                    </p>
                </div>
                {/* ----- Fila 2 ----- */}
                <div
                className={`${itemBaseStyle} z-1 md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-2`} // Elemento destacado
                >
                <h2 className="text-4xl font-bold">Proyecto <span className="bg-gradient-to-tl from-slate-800 via-violet-500
                to-zinc-400 bg-clip-text text-transparent">destacado</span></h2>
                </div>

                <div
                className={`${itemBaseStyle} z-1 md:col-start-3 md:col-span-1 md:row-start-2 md:row-span-2 bg-gradient-to-tl from-[#191919] via-[#121212] to-[#252525]`}
                >
                    
                <h3 className="text-3xl font-bold">Tecnologías</h3>
                <div className="flex items-center justify-center mt-2">
                    <div className="font-medium mr-10">
                        <p><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                        </svg></p><br/>
                        <p><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                        </svg></p><br/>
                        <p><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                        </svg></p>
                        
                    </div>
                    <div className="font-medium mr-10">
                        
                        <p><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                        <path fill="#878EB7" d="M 25 12 C 11.542969 12 1 17.710938 1 25 C 1 32.289063 11.542969 38 25 38 C 38.457031 38 49 32.289063 49 25 C 49 17.710938 38.457031 12 25 12 Z M 22.507813 16 L 25.128906 16 L 24.296875 20 L 26.636719 20 C 28.121094 20 29.117188 20.207031 29.683594 20.726563 C 30.238281 21.238281 30.40625 22.078125 30.183594 23.222656 L 29.144531 28 L 26.480469 28 L 27.4375 23.582031 C 27.554688 22.976563 27.507813 22.554688 27.304688 22.332031 C 27.101563 22.109375 26.65625 22 25.988281 22 L 23.890625 22 L 22.625 28 L 20 28 Z M 11 20 L 16.332031 20 C 18.875 20 20.414063 21.703125 19.8125 24.246094 C 19.113281 27.199219 17.238281 28 13.792969 28 L 12.144531 28 L 11.621094 31 L 8.972656 31 Z M 32 20 L 37.332031 20 C 39.875 20 41.414063 21.703125 40.8125 24.246094 C 40.113281 27.199219 38.238281 28 34.792969 28 L 33.144531 28 L 32.621094 31 L 29.972656 31 Z M 13.269531 22 L 12.515625 26 L 14.226563 26 C 15.707031 26 17.082031 25.832031 17.3125 23.625 C 17.398438 22.769531 17.042969 22 15.332031 22 Z M 34.269531 22 L 33.515625 26 L 35.226563 26 C 36.707031 26 38.082031 25.832031 38.3125 23.625 C 38.398438 22.769531 38.042969 22 36.332031 22 Z"></path>
                        </svg></p><br/>
                        <p><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 40 40">
                        <path fill="#4e7ab5" d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"></path><path fill="#4e7ab5" d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"></path><path fill="#4e7ab5" d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"></path><path fill="#8bb7f0" d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"></path><path fill="#4e7ab5" d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"></path><path fill="#8bb7f0" d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"></path><path fill="#8bb7f0" d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"></path><g><path fill="#8bb7f0" d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"></path></g>
                        </svg></p><br />
                        <p><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                        <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                        </svg></p>
                        
                    </div>
                    <div className="contenidos text-left mt-2 font-medium">

                        <p><img src={mongodb} className="w-10" alt="" /></p><br/>
                        <p><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 26 26">
                        <path fill="white" d="M 13.03125 0 C 5.882813 0 0.0625 5.820313 0.0625 12.96875 C 0.0625 20.117188 5.882813 25.9375 13.03125 25.9375 C 20.179688 25.9375 26 20.117188 26 12.96875 C 26 5.820313 20.179688 0 13.03125 0 Z M 13.03125 0.59375 C 19.851563 0.59375 25.40625 6.148438 25.40625 12.96875 C 25.40625 19.789063 19.851563 25.34375 13.03125 25.34375 C 6.210938 25.34375 0.65625 19.789063 0.65625 12.96875 C 0.65625 6.148438 6.210938 0.59375 13.03125 0.59375 Z M 13.03125 1.84375 C 9.144531 1.84375 5.738281 3.824219 3.75 6.84375 C 4.011719 6.851563 4.257813 6.875 4.46875 6.875 C 5.632813 6.875 7.4375 6.71875 7.4375 6.71875 C 8.035156 6.683594 8.097656 7.585938 7.5 7.65625 C 7.5 7.65625 6.886719 7.714844 6.21875 7.75 L 10.28125 19.78125 L 12.71875 12.5 L 10.96875 7.75 C 10.371094 7.714844 9.8125 7.65625 9.8125 7.65625 C 9.210938 7.621094 9.277344 6.683594 9.875 6.71875 C 9.875 6.71875 11.71875 6.875 12.8125 6.875 C 13.976563 6.875 15.78125 6.71875 15.78125 6.71875 C 16.382813 6.683594 16.441406 7.585938 15.84375 7.65625 C 15.84375 7.65625 15.230469 7.714844 14.5625 7.75 L 18.59375 19.6875 L 19.6875 16 C 20.25 14.554688 20.53125 13.359375 20.53125 12.40625 C 20.53125 11.03125 20.050781 10.082031 19.625 9.34375 C 19.0625 8.425781 18.53125 7.636719 18.53125 6.71875 C 18.53125 5.699219 19.3125 4.75 20.40625 4.75 C 20.457031 4.75 20.511719 4.746094 20.5625 4.75 C 18.582031 2.9375 15.925781 1.84375 13.03125 1.84375 Z M 22.78125 7.625 C 22.832031 7.980469 22.875 8.371094 22.875 8.78125 C 22.875 9.910156 22.664063 11.164063 22.03125 12.75 L 18.625 22.5625 C 21.929688 20.632813 24.15625 17.070313 24.15625 12.96875 C 24.15625 11.035156 23.648438 9.207031 22.78125 7.625 Z M 2.875 8.4375 C 2.257813 9.820313 1.90625 11.355469 1.90625 12.96875 C 1.90625 17.371094 4.476563 21.164063 8.1875 22.96875 Z M 13.21875 13.9375 L 9.90625 23.625 C 10.902344 23.917969 11.9375 24.09375 13.03125 24.09375 C 14.324219 24.09375 15.5625 23.84375 16.71875 23.4375 C 16.691406 23.390625 16.679688 23.367188 16.65625 23.3125 Z"></path>
                        </svg></p><br/>
                        <p><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 32 32">
                        <path fill="white" d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 11 11 L 11 21 L 13 21 L 13 11 L 11 11 z M 15 11 L 15 13 L 21 13 L 21 11 L 15 11 z M 15 15 L 15 17 L 21 17 L 21 15 L 15 15 z M 15 19 L 15 21 L 21 21 L 21 19 L 15 19 z"></path>
                        </svg></p>
                    </div>
                </div>
                </div>

                <div
                className={`${itemBaseStyle} z-1 md:col-start-4 md:col-span-1 md:row-start-3 md:row-span-1 
                bg-gradient-to-tl from-[#191919] via-[#121212] to-[#252525]`}
                >
                <p className="flex items-center mt-5 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                    <path fill="#8B51FF" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z 
                    M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2
                    ,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,
                    0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>Linkedin

                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="40" viewBox="0 0 30 30">
                        <path fill="#8B51FF" d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051
                        c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>Github
                </p>
                </div>

                {/* ----- Fila 4 ----- */}
                
                <div
  className={`${itemBaseStyle}  md:col-start-1 md:col-span-4 md:row-start-4 md:row-span-1 object-cover transition-all duration-400`}
  style={{
    backgroundImage: `url(${capibarasFondo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 63%'
  }}
>
</div>
            </div>
        </div>
    );
};