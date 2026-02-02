import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F0EBE0] relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/flower-trail.png')]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side - Polaroids */}
          <div className="w-full md:w-1/2 relative">
             <div className="relative z-10 bg-white p-4 shadow-xl rotate-[-3deg] stitch-border max-w-md mx-auto transform hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://i.imgur.com/rNj5VEk.jpeg" 
                  alt="Paula Brasil - A Bordadeira" 
                  className="w-full h-auto object-cover aspect-[4/5] filter sepia-[0.15]"
                />
                <div className="pt-4 text-center font-script text-3xl text-forest-800">Paula Brasil</div>
             </div>
             
             {/* Decorative Palette Elements from user images */}
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-rose-300 rounded-full mix-blend-multiply opacity-60 blur-xl"></div>
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-forest-200 rounded-full mix-blend-multiply opacity-60 blur-xl"></div>
          </div>
          
          {/* Text Side */}
          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
            <div>
                <span className="font-script text-4xl text-rose-500">Olá, eu sou a</span>
                <h2 className="font-serif text-5xl md:text-6xl text-forest-900 mt-2">Paula Brasil</h2>
            </div>
            
            <div className="space-y-6 font-serif text-xl text-forest-800/80 leading-relaxed">
              <p>
                Bem-vindo ao meu mundo de linhas e texturas. O <span className="italic text-forest-900 font-semibold">Margarida Bordada</span> nasceu da necessidade de desacelerar em um mundo que não para.
              </p>
              <p>
                Acredito que o bordado é uma forma de linguagem. Seja para eternizar o buquê do seu casamento, anunciar a chegada de um bebê ou presentear alguém amado, cada ponto é feito manualmente com intenção e calma.
              </p>
            </div>

            <div className="border-t border-forest-900/10 pt-8 mt-8 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-sans text-xs uppercase tracking-widest text-forest-500 mb-2">Técnica</h4>
                <p className="font-serif text-2xl text-forest-900">Bordado Livre</p>
              </div>
              <div>
                <h4 className="font-sans text-xs uppercase tracking-widest text-forest-500 mb-2">Inspiração</h4>
                <p className="font-serif text-2xl text-forest-900">Natureza & Memória</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;