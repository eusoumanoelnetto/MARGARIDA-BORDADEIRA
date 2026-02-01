import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { ShoppingBag, X, ExternalLink, Heart } from 'lucide-react';

// Dados atualizados com descrições poéticas e detalhadas
const galleryItems: GalleryItem[] = [
  { 
    id: 1, 
    category: 'Bastidor', 
    title: 'Detalhes Florais', 
    imageUrl: 'https://i.imgur.com/Dc1PG1T.jpeg',
    price: 'R$ 189,90',
    description: 'Um jardim particular eternizado em algodão cru. Pequenas flores silvestres bordadas com fios de meada em tons pastéis, capturando a leveza de uma manhã de primavera. Uma peça que respira delicadeza e convida o olhar a passear por cada pétala feita à mão.',
    shopUrl: 'https://www.nuvemshop.com.br/' 
  },
  { 
    id: 2, 
    category: 'Paisagem', 
    title: 'Campos de Lavanda', 
    imageUrl: 'https://i.imgur.com/372USRj.jpeg',
    price: 'R$ 249,00',
    description: 'A serenidade violeta traduzida em pontos livres. Este bordado transporta a brisa suave dos campos de Provence para o seu lar. Com texturas que simulam o movimento do vento nas flores, é um convite diário à pausa e à respiração profunda.',
    shopUrl: 'https://www.nuvemshop.com.br/'
  },
  { 
    id: 3, 
    category: 'Botânico', 
    title: 'Folhagens', 
    imageUrl: 'https://i.imgur.com/cUJRskF.jpeg',
    price: 'R$ 159,00',
    description: 'Um estudo botânico em tons de verde musgo e eucalipto. A sobreposição de pontos haste e cheio cria um volume orgânico, trazendo a vitalidade da natureza para dentro de casa sem precisar regar. Minimalismo com alma para amantes do estilo Urban Jungle.',
    shopUrl: 'https://www.nuvemshop.com.br/'
  },
  { 
    id: 4, 
    category: 'Decoração', 
    title: 'Composição de Parede', 
    imageUrl: 'https://i.imgur.com/8P3KZ5W.jpeg',
    price: 'Sob Consulta',
    description: 'Uma narrativa visual contada em três atos. Bastidores que dialogam entre si através de paletas complementares e elementos naturais, criando uma galeria íntima na sua parede. Ideal para preencher espaços vazios com significado e harmonia estética.',
    shopUrl: 'https://wa.me/' // Exemplo de link para WhatsApp se for sob encomenda
  },
  { 
    id: 5, 
    category: 'Delicado', 
    title: 'Rosas Antigas', 
    imageUrl: 'https://i.imgur.com/nTle37p.jpeg',
    price: 'R$ 210,00',
    description: 'O romantismo nostálgico das rosas inglesas, bordadas com a nobreza de fios de seda que captam a luz. Inspirado em cartas de amor antigas e jardins secretos, esta peça evoca a beleza clássica que resiste ao tempo. Um toque de poesia vintage.',
    shopUrl: 'https://www.nuvemshop.com.br/'
  },
  { 
    id: 6, 
    category: 'Processo', 
    title: 'Mesa de Trabalho', 
    imageUrl: 'https://i.imgur.com/cqX2s6j.jpeg',
    price: null, // Apenas portfólio
    description: 'Onde a magia acontece: entre meadas embaraçadas, tesouras douradas e riscos a lápis. Um registro honesto do processo criativo, mostrando que antes da arte final, existe o tempo, a paciência e o amor depositado em cada laçada de linha.',
  },
  { 
    id: 7, 
    category: 'Textura', 
    title: 'Ponto Cheio', 
    imageUrl: 'https://i.imgur.com/STywnPX.jpeg',
    price: 'R$ 175,00',
    description: 'Uma experiência tátil em relevo. O ponto cheio é explorado aqui em sua máxima potência, criando superfícies aveludadas que pedem para ser tocadas. Contrastes de luz e sombra formados apenas pela direção do fio, celebrando a técnica em sua forma mais pura.',
    shopUrl: 'https://www.nuvemshop.com.br/'
  },
];

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 relative bg-linen">
      {/* Decorative Thread Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 border-l border-dashed border-rose-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="font-script text-3xl text-rose-500 block mb-2">Loja & Portfolio</span>
          <h2 className="font-serif text-5xl md:text-6xl text-forest-900 mb-6">Galeria de Pontos</h2>
          <p className="text-forest-700 font-serif italic text-xl max-w-2xl mx-auto">
            Peças disponíveis para pronta entrega e inspirações para suas encomendas personalizadas.
          </p>
        </div>

        {/* Masonry Layout (Pinterest Style) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 px-2 space-y-8">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedItem(item)}
              className={`break-inside-avoid relative group cursor-pointer bg-white p-3 shadow-lg shadow-stone-200/50 hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-500 ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 flex flex-col`}
            >
              <div className="relative overflow-hidden aspect-auto stitch-border">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-in-out"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-forest-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-forest-900 font-serif italic flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {item.shopUrl ? <ShoppingBag size={18} /> : <Heart size={18} />}
                        <span>{item.shopUrl ? 'Ver Detalhes' : 'Ver Arte'}</span>
                    </div>
                </div>
              </div>
              
              <div className="pt-4 px-2 pb-2 text-center mt-auto">
                 <p className="font-sans text-xs tracking-widest text-rose-500 uppercase mb-1">{item.category}</p>
                 <h3 className="font-serif text-2xl text-forest-900 italic">{item.title}</h3>
                 {item.price && (
                     <p className="font-sans text-sm font-medium text-forest-500 mt-1">{item.price}</p>
                 )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <a href="https://instagram.com/margaridabordada" target="_blank" rel="noreferrer" className="inline-block group">
                <span className="font-serif text-2xl text-forest-900 border-b border-rose-300 pb-1 group-hover:text-rose-600 transition-colors">
                  Ver mais no Instagram @margaridabordada
                </span>
            </a>
        </div>
      </div>

      {/* Product Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-forest-900/60 backdrop-blur-sm transition-opacity"
                onClick={() => setSelectedItem(null)}
            ></div>

            {/* Modal Card */}
            <div className="bg-linen w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl relative z-10 flex flex-col md:flex-row animate-fade-in-up border-4 border-white">
                <button 
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 z-20 text-forest-900 hover:text-rose-500 transition-colors bg-white/50 rounded-full p-2 backdrop-blur-sm"
                >
                    <X size={24} />
                </button>

                {/* Image Section */}
                <div className="w-full md:w-1/2 bg-white p-4">
                    <div className="w-full h-full min-h-[300px] md:min-h-[500px] stitch-border relative overflow-hidden">
                         <img 
                            src={selectedItem.imageUrl} 
                            alt={selectedItem.title}
                            className="w-full h-full object-cover absolute inset-0"
                         />
                    </div>
                </div>

                {/* Details Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-rose-500 mb-2">
                        {selectedItem.category}
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl text-forest-900 mb-4 leading-none">
                        {selectedItem.title}
                    </h3>
                    
                    {selectedItem.price && (
                        <p className="font-serif text-2xl text-forest-600 mb-6 border-b border-rose-200 pb-4 inline-block self-start">
                            {selectedItem.price}
                        </p>
                    )}

                    <p className="font-serif text-lg text-forest-800/80 leading-relaxed mb-8 italic">
                        {selectedItem.description || "Uma peça única, bordada à mão com materiais de alta qualidade, carregando afeto e exclusividade em cada ponto."}
                    </p>

                    <div className="mt-auto space-y-4">
                        {selectedItem.shopUrl ? (
                            <a 
                                href={selectedItem.shopUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full bg-forest-900 text-linen py-4 rounded-sm font-sans text-sm font-bold uppercase tracking-widest hover:bg-rose-500 transition-all flex items-center justify-center gap-3 group shadow-lg"
                            >
                                <ShoppingBag size={18} className="text-gold-400 group-hover:text-white transition-colors" />
                                Comprar na Loja
                            </a>
                        ) : (
                            <a 
                                href="https://wa.me/5500000000000"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full bg-rose-500 text-white py-4 rounded-sm font-sans text-sm font-bold uppercase tracking-widest hover:bg-rose-600 transition-all flex items-center justify-center gap-3 shadow-lg"
                            >
                                Encomendar Similar
                            </a>
                        )}
                        
                        <div className="text-center pt-2">
                            <span className="text-xs font-sans text-forest-400 uppercase tracking-widest flex items-center justify-center gap-2">
                                <ExternalLink size={12} />
                                Compra Segura via {selectedItem.shopUrl?.includes('wa.me') ? 'WhatsApp' : 'Nuvemshop'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;