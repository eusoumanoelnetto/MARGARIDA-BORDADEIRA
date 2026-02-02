import React from 'react';
import { MapPin, Calendar as CalendarIcon, Clock, ArrowRight, Star, Heart, CheckCircle2, Building2, Store, Plane, Mail } from 'lucide-react';

const WorkshopsPage: React.FC = () => {
  // Simulação de dados do calendário (Abril 2026)
  const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);
  const startDayOffset = 3; // Começa na Quarta-feira (exemplo)

  const events = [
    { day: 5, title: 'Iniciação', type: 'workshop', color: 'bg-rose-200 text-rose-800' },
    { day: 12, title: 'Sonho do Artesão', type: 'special', color: 'bg-gold-400 text-white' },
    { day: 20, title: 'Pontos 3D', type: 'workshop', color: 'bg-forest-200 text-forest-800' },
    { day: 26, title: 'Mentoria', type: 'online', color: 'bg-stone-200 text-stone-600' },
  ];

  const getEvent = (day: number) => events.find(e => e.day === day);

  return (
    <div className="min-h-screen bg-linen pt-20 pb-12">
      {/* Header Visual */}
      <div className="relative py-20 px-4 mb-16 overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
         <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
         
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">Education & Community</span>
            <h1 className="font-serif text-6xl md:text-8xl text-forest-900 leading-none mb-6">
              Diário de <span className="font-script text-rose-500">Aulas</span>
            </h1>
            <p className="font-serif text-xl md:text-2xl text-forest-800/70 italic max-w-2xl mx-auto">
              "Ensinar é bordar o conhecimento no coração do outro."
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Coluna Esquerda: Agenda (Estilo Planner) */}
            <div className="lg:w-2/5">
                <div className="bg-white p-6 md:p-8 rounded-sm shadow-2xl border border-stone-200 sticky top-28 rotate-[-1deg]">
                    {/* Visual de Espiral/Fichário */}
                    <div className="flex justify-between -mt-12 mb-8 px-4">
                        {[1,2,3,4].map(i => (
                             <div key={i} className="w-4 h-12 bg-stone-300 rounded-full border border-stone-400 shadow-sm relative top-4"></div>
                        ))}
                    </div>

                    <div className="flex justify-between items-end mb-8 border-b-2 border-dashed border-rose-200 pb-4">
                        <h2 className="font-serif text-4xl text-forest-900">Abril <span className="text-stone-400 text-2xl">2026</span></h2>
                        <span className="font-script text-2xl text-rose-500">Agenda Aberta</span>
                    </div>

                    {/* Grid do Calendário */}
                    <div className="grid grid-cols-7 gap-2 mb-8">
                        {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map(day => (
                            <div key={day} className="text-center font-sans text-xs font-bold text-stone-400 mb-2">{day}</div>
                        ))}
                        
                        {/* Empty slots for offset */}
                        {Array.from({ length: startDayOffset }).map((_, i) => (
                            <div key={`empty-${i}`} className="aspect-square"></div>
                        ))}

                        {/* Days */}
                        {calendarDays.map(day => {
                            const event = getEvent(day);
                            return (
                                <div key={day} className="aspect-square relative group">
                                    <div className={`w-full h-full flex flex-col items-center justify-center rounded-lg border ${event ? 'border-transparent' : 'border-stone-50 hover:border-rose-100'} transition-colors relative overflow-hidden`}>
                                        <span className={`z-10 font-serif text-lg ${event ? 'text-forest-900 font-bold' : 'text-stone-500'}`}>{day}</span>
                                        
                                        {event && (
                                            <>
                                                {/* Washi Tape Effect */}
                                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-8 ${event.color} opacity-80 transform -rotate-12 shadow-sm`}></div>
                                            </>
                                        )}
                                    </div>
                                    
                                    {/* Tooltip for Event */}
                                    {event && (
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1 bg-forest-900 text-linen text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                                            {event.title}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Legenda */}
                    <div className="space-y-3 font-serif text-sm text-forest-700">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-rose-300 rounded-full"></div>
                            <span>Workshops Presenciais</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-gold-400 rounded-full"></div>
                            <span>Eventos Especiais</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-stone-300 rounded-full"></div>
                            <span>Mentoria Online</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Coluna Direita: Detalhes dos Cursos */}
            <div className="lg:w-3/5 space-y-12">
                
                {/* Destaque: Sonho do Artesão */}
                <div className="bg-[#fff9f0] border border-rose-100 p-8 rounded-lg relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                    <div className="absolute top-0 right-0 bg-gold-400 text-white text-xs font-bold px-4 py-1 rounded-bl-lg uppercase tracking-widest z-10">Destaque do Mês</div>
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gold-100 rounded-full mix-blend-multiply opacity-50"></div>

                    <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                           <div className="bg-white p-3 rounded-full shadow-sm text-gold-500">
                               <Star size={24} fill="currentColor" className="text-gold-200" />
                           </div>
                           <div>
                               <h3 className="font-serif text-3xl text-forest-900">O Sonho do Artesão</h3>
                               <p className="text-rose-400 font-script text-xl">Edição Especial de Abril</p>
                           </div>
                        </div>
                        
                        <p className="text-forest-700 font-serif italic mb-6 leading-relaxed">
                            Um encontro mágico em um local histórico. Vamos aprender a bordar flores tridimensionais enquanto compartilhamos histórias e um café colonial inesquecível.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-2 text-forest-600 font-sans text-sm">
                                <CalendarIcon size={16} className="text-rose-400" />
                                <span>12 de Abril, Sábado</span>
                            </div>
                            <div className="flex items-center gap-2 text-forest-600 font-sans text-sm">
                                <Clock size={16} className="text-rose-400" />
                                <span>14h às 18h</span>
                            </div>
                            <div className="flex items-center gap-2 text-forest-600 font-sans text-sm col-span-2">
                                <MapPin size={16} className="text-rose-400" />
                                <span>Espaço Sonho do Artesão - Centro</span>
                            </div>
                        </div>

                        <a 
                            href="https://wa.me/5500000000000?text=Quero saber mais sobre o Sonho do Artesão!"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-forest-900 text-linen px-8 py-3 rounded-sm font-sans text-xs font-bold uppercase tracking-widest hover:bg-rose-500 transition-colors"
                        >
                            Garantir minha vaga <ArrowRight size={14} />
                        </a>
                    </div>
                </div>

                {/* Lista de Outros Cursos */}
                <div className="space-y-6">
                    <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-stone-400 mb-6 border-b border-stone-200 pb-2">Outras Turmas</h3>
                    
                    {/* Card 1 */}
                    <div className="flex flex-col md:flex-row bg-white p-6 rounded-sm border border-stone-100 hover:border-rose-200 transition-colors items-center gap-6">
                        <div className="w-full md:w-32 h-32 shrink-0 overflow-hidden rounded bg-stone-100">
                             <img src="https://i.imgur.com/cqX2s6j.jpeg" className="w-full h-full object-cover" alt="Iniciantes" />
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <h4 className="font-serif text-2xl text-forest-900">Iniciação ao Bordado Livre</h4>
                            <p className="text-sm text-forest-500 font-sans mb-3">Ideal para quem nunca pegou na agulha.</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold uppercase text-stone-500 mb-4">
                                <span className="bg-stone-50 px-2 py-1 rounded">05/04 - Presencial</span>
                                <span className="bg-stone-50 px-2 py-1 rounded">Material Incluso</span>
                            </div>
                        </div>
                        <a href="https://wa.me/5500000000000" className="p-3 rounded-full border border-forest-100 text-forest-400 hover:text-rose-500 hover:border-rose-200 transition-colors">
                            <ArrowRight size={20} />
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col md:flex-row bg-white p-6 rounded-sm border border-stone-100 hover:border-rose-200 transition-colors items-center gap-6">
                        <div className="w-full md:w-32 h-32 shrink-0 overflow-hidden rounded bg-stone-100">
                             <img src="https://i.imgur.com/cUJRskF.jpeg" className="w-full h-full object-cover" alt="Pontos 3D" />
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <h4 className="font-serif text-2xl text-forest-900">Botânica e Texturas 3D</h4>
                            <p className="text-sm text-forest-500 font-sans mb-3">Para quem já borda e quer evoluir.</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold uppercase text-stone-500 mb-4">
                                <span className="bg-stone-50 px-2 py-1 rounded">20/04 - Presencial</span>
                                <span className="bg-stone-50 px-2 py-1 rounded">Nível Intermediário</span>
                            </div>
                        </div>
                        <a href="https://wa.me/5500000000000" className="p-3 rounded-full border border-forest-100 text-forest-400 hover:text-rose-500 hover:border-rose-200 transition-colors">
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>

                {/* Seção de Parcerias e Projetos Especiais (Novo Design) */}
                <div className="pt-16 mt-8 border-t border-dashed border-rose-200">
                   <div className="text-center mb-12">
                      <span className="font-script text-3xl text-rose-500 block mb-2">Além do Ateliê</span>
                      <h3 className="font-serif text-4xl text-forest-900">Leve a Margarida para o seu mundo</h3>
                      <p className="text-forest-600 mt-4 max-w-2xl mx-auto font-serif italic text-lg">
                         Crio experiências manuais personalizadas para marcas, empresas e eventos em qualquer lugar do Brasil.
                      </p>
                   </div>

                   <div className="grid md:grid-cols-3 gap-6">
                      {/* Card Corporativo */}
                      <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group cursor-default">
                         <div className="w-16 h-16 mx-auto bg-forest-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-forest-100 transition-colors">
                            <Building2 className="text-forest-600" size={28} />
                         </div>
                         <h4 className="font-serif text-2xl text-forest-900 mb-2">Wellness & Corporate</h4>
                         <p className="text-sm text-forest-500 mb-4">
                           Workshops de descompressão criativa para equipes. Foco em saúde mental e team building através do fazer manual.
                         </p>
                      </div>

                      {/* Card Lojas/Collabs */}
                      <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group cursor-default">
                         <div className="w-16 h-16 mx-auto bg-rose-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-rose-100 transition-colors">
                            <Store className="text-rose-500" size={28} />
                         </div>
                         <h4 className="font-serif text-2xl text-forest-900 mb-2">Brand Experience</h4>
                         <p className="text-sm text-forest-500 mb-4">
                           Ativações em lojas, lançamentos de coleção e personalização ao vivo para encantar seus clientes.
                         </p>
                      </div>

                      {/* Card Viagens */}
                      <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group cursor-default">
                         <div className="w-16 h-16 mx-auto bg-gold-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-100 transition-colors">
                            <Plane className="text-gold-500" size={28} />
                         </div>
                         <h4 className="font-serif text-2xl text-forest-900 mb-2">Tour Margarida</h4>
                         <p className="text-sm text-forest-500 mb-4">
                           Quer levar o curso para sua cidade? Organize uma turma e eu levo todo o material e conhecimento.
                         </p>
                      </div>
                   </div>
                   
                   <div className="mt-10 text-center">
                      <a 
                        href="mailto:contato@margaridabordada.com"
                        className="inline-flex items-center gap-3 bg-white border border-forest-200 px-8 py-3 rounded-full text-forest-800 font-sans font-bold text-sm uppercase tracking-widest hover:bg-forest-900 hover:text-linen hover:border-transparent transition-all shadow-md"
                      >
                         <Mail size={16} /> Solicitar Proposta Comercial
                      </a>
                   </div>
                </div>

                {/* FAQ Rápido */}
                <div className="bg-stone-50 p-8 rounded-lg mt-12">
                    <h4 className="font-serif text-xl text-forest-900 mb-4 flex items-center gap-2">
                        <Heart size={18} className="text-rose-400" /> Dúvidas Frequentes
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="font-bold text-sm text-forest-800 mb-1">Preciso levar material?</p>
                            <p className="text-sm text-forest-600">Não! Nos cursos presenciais, todo o kit está incluso e é seu para levar para casa.</p>
                        </div>
                        <div>
                            <p className="font-bold text-sm text-forest-800 mb-1">E se eu faltar?</p>
                            <p className="text-sm text-forest-600">Avisando com 48h de antecedência, conseguimos reagendar para a próxima turma disponível.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopsPage;