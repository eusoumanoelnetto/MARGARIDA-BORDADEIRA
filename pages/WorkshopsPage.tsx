import React from 'react';
import { MapPin, Calendar as CalendarIcon, Clock, ArrowRight, Star, Heart, CheckCircle2, Building2, Store, Plane, Mail } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

type EventType = 'workshop' | 'special' | 'online';

const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);
const startDayOffset = 3;

const eventTypeStyles: Record<EventType, string> = {
    workshop: 'bg-rose-200 text-rose-800',
    special: 'bg-gold-400 text-white',
    online: 'bg-stone-200 text-stone-600',
};

const otherClassImages = [
    'https://i.imgur.com/cqX2s6j.jpeg',
    'https://i.imgur.com/cUJRskF.jpeg',
];

const highlightImage = 'https://i.imgur.com/cqX2s6j.jpeg';

const WorkshopsPage: React.FC = () => {
    const { t } = useTranslation();
    const content = t.workshopsPage;

    const eventsByDay = new Map<number, { title: string; type: EventType }>();
    content.calendar.events.forEach((event: { day: number; title: string; type: EventType }) => {
        eventsByDay.set(event.day, event);
    });

    const getEvent = (day: number) => eventsByDay.get(day);
    const highlightWhatsappUrl = `https://wa.me/5500000000000?text=${encodeURIComponent(content.highlight.whatsappMessage)}`;

    return (
        <div className="min-h-screen bg-linen pt-20 pb-12">
            {/* Header Visual */}
            <div className="relative py-20 px-4 mb-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">{content.eyebrow}</span>
                    <h1 className="font-serif text-6xl md:text-8xl text-forest-900 leading-none mb-6">
                        {content.title.first} <span className="font-script text-rose-500">{content.title.highlight}</span>
                    </h1>
                    <p className="font-serif text-xl md:text-2xl text-forest-800/70 italic max-w-2xl mx-auto">
                        {content.quote}
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
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-4 h-12 bg-stone-300 rounded-full border border-stone-400 shadow-sm relative top-4"></div>
                                ))}
                            </div>

                            <div className="flex justify-between items-end mb-8 border-b-2 border-dashed border-rose-200 pb-4">
                                <h2 className="font-serif text-4xl text-forest-900">
                                    {content.calendar.month} <span className="text-stone-400 text-2xl">{content.calendar.year}</span>
                                </h2>
                                <span className="font-script text-2xl text-rose-500">{content.calendar.status}</span>
                            </div>

                            {/* Grid do Calendário */}
                            <div className="grid grid-cols-7 gap-2 mb-8">
                                {content.calendar.weekdays.map((day: string) => (
                                    <div key={day} className="text-center font-sans text-xs font-bold text-stone-400 mb-2">
                                        {day}
                                    </div>
                                ))}

                                {/* Empty slots for offset */}
                                {Array.from({ length: startDayOffset }).map((_, i) => (
                                    <div key={`empty-${i}`} className="aspect-square"></div>
                                ))}

                                {/* Days */}
                                {calendarDays.map((day) => {
                                    const event = getEvent(day);
                                    return (
                                        <div key={day} className="aspect-square relative group">
                                            <div
                                                className={`w-full h-full flex flex-col items-center justify-center rounded-lg border ${
                                                    event ? 'border-transparent' : 'border-stone-50 hover:border-rose-100'
                                                } transition-colors relative overflow-hidden`}
                                            >
                                                <span className={`z-10 font-serif text-lg ${event ? 'text-forest-900 font-bold' : 'text-stone-500'}`}>
                                                    {day}
                                                </span>

                                                {event && (
                                                    <div
                                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-8 ${
                                                            eventTypeStyles[event.type]
                                                        } opacity-80 transform -rotate-12 shadow-sm`}
                                                    ></div>
                                                )}
                                            </div>

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
                                    <span>{content.calendar.legend.inPerson}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-gold-400 rounded-full"></div>
                                    <span>{content.calendar.legend.special}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-stone-300 rounded-full"></div>
                                    <span>{content.calendar.legend.online}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coluna Direita: Detalhes dos Cursos */}
                    <div className="lg:w-3/5 space-y-12">
                        {/* Destaque */}
                        <div className="bg-[#fff9f0] border border-rose-100 p-8 rounded-lg relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                            <div className="absolute top-0 right-0 bg-gold-400 text-white text-xs font-bold px-4 py-1 rounded-bl-lg uppercase tracking-widest z-10">
                                {content.highlight.badge}
                            </div>
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gold-100 rounded-full mix-blend-multiply opacity-50"></div>

                            <div className="relative z-10">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm text-gold-500">
                                        <Star size={24} fill="currentColor" className="text-gold-200" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-3xl text-forest-900">{content.highlight.title}</h3>
                                        <p className="text-rose-400 font-script text-xl">{content.highlight.subtitle}</p>
                                    </div>
                                </div>

                                <p className="text-forest-700 font-serif italic mb-6 leading-relaxed">{content.highlight.description}</p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-center gap-2 text-forest-600 font-sans text-sm">
                                        <CalendarIcon size={16} className="text-rose-400" />
                                        <span>{content.highlight.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-forest-600 font-sans text-sm">
                                        <Clock size={16} className="text-rose-400" />
                                        <span>{content.highlight.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-forest-600 font-sans text-sm col-span-2">
                                        <MapPin size={16} className="text-rose-400" />
                                        <span>{content.highlight.location}</span>
                                    </div>
                                </div>

                                <a
                                    href={highlightWhatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 bg-forest-900 text-linen px-8 py-3 rounded-sm font-sans text-xs font-bold uppercase tracking-widest hover:bg-rose-500 transition-colors"
                                >
                                    {content.highlight.cta} <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>

                        {/* Lista de Outros Cursos */}
                        <div className="space-y-6">
                            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-stone-400 mb-6 border-b border-stone-200 pb-2">
                                {content.otherClassesTitle}
                            </h3>

                            {content.otherClasses.map((item: { title: string; description: string; chips: string[]; imageAlt: string }, index: number) => (
                                <div
                                    key={item.title}
                                    className="flex flex-col md:flex-row bg-white p-6 rounded-sm border border-stone-100 hover:border-rose-200 transition-colors items-center gap-6"
                                >
                                    <div className="w-full md:w-32 h-32 shrink-0 overflow-hidden rounded bg-stone-100">
                                        <img src={otherClassImages[index] ?? highlightImage} className="w-full h-full object-cover" alt={item.imageAlt} />
                                    </div>
                                    <div className="flex-grow text-center md:text-left">
                                        <h4 className="font-serif text-2xl text-forest-900">{item.title}</h4>
                                        <p className="text-sm text-forest-500 font-sans mb-3">{item.description}</p>
                                        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold uppercase text-stone-500 mb-4">
                                            {item.chips.map((chip) => (
                                                <span key={chip} className="bg-stone-50 px-2 py-1 rounded">
                                                    {chip}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <a
                                        href="https://wa.me/5500000000000"
                                        className="p-3 rounded-full border border-forest-100 text-forest-400 hover:text-rose-500 hover:border-rose-200 transition-colors"
                                    >
                                        <ArrowRight size={20} />
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Parcerias e Projetos Especiais */}
                        <div className="pt-16 mt-8 border-t border-dashed border-rose-200">
                            <div className="text-center mb-12">
                                <span className="font-script text-3xl text-rose-500 block mb-2">{content.beyond.eyebrow}</span>
                                <h3 className="font-serif text-4xl text-forest-900">{content.beyond.title}</h3>
                                <p className="text-forest-600 mt-4 max-w-2xl mx-auto font-serif italic text-lg">{content.beyond.description}</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group cursor-default">
                                    <div className="w-16 h-16 mx-auto bg-forest-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-forest-100 transition-colors">
                                        <Building2 className="text-forest-600" size={28} />
                                    </div>
                                    <h4 className="font-serif text-2xl text-forest-900 mb-2">{content.beyond.cards.corporate.title}</h4>
                                    <p className="text-sm text-forest-500 mb-4">{content.beyond.cards.corporate.description}</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group cursor-default">
                                    <div className="w-16 h-16 mx-auto bg-rose-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-rose-100 transition-colors">
                                        <Store className="text-rose-500" size={28} />
                                    </div>
                                    <h4 className="font-serif text-2xl text-forest-900 mb-2">{content.beyond.cards.retail.title}</h4>
                                    <p className="text-sm text-forest-500 mb-4">{content.beyond.cards.retail.description}</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group cursor-default">
                                    <div className="w-16 h-16 mx-auto bg-gold-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-100 transition-colors">
                                        <Plane className="text-gold-500" size={28} />
                                    </div>
                                    <h4 className="font-serif text-2xl text-forest-900 mb-2">{content.beyond.cards.travel.title}</h4>
                                    <p className="text-sm text-forest-500 mb-4">{content.beyond.cards.travel.description}</p>
                                </div>
                            </div>

                            <div className="mt-10 text-center">
                                <a
                                    href="mailto:contato@margaridabordada.com"
                                    className="inline-flex items-center gap-3 bg-white border border-forest-200 px-8 py-3 rounded-full text-forest-800 font-sans font-bold text-sm uppercase tracking-widest hover:bg-forest-900 hover:text-linen hover:border-transparent transition-all shadow-md"
                                >
                                    <Mail size={16} /> {content.beyond.cta}
                                </a>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="bg-stone-50 p-8 rounded-lg mt-12">
                            <h4 className="font-serif text-xl text-forest-900 mb-4 flex items-center gap-2">
                                <Heart size={18} className="text-rose-400" /> {content.faq.title}
                            </h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                {content.faq.questions.map((question: { question: string; answer: string }) => (
                                    <div key={question.question}>
                                        <p className="font-bold text-sm text-forest-800 mb-1">{question.question}</p>
                                        <p className="text-sm text-forest-600">{question.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkshopsPage;