import React, { useState, useRef } from 'react';
import { Send, Camera, Calendar, ArrowRight, CheckCircle2, Upload, Image as ImageIcon, X } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import type { TranslationKeys } from '../locales/translations';

type OrderPieceType = keyof TranslationKeys['orderPage']['form']['typeOptions'];

const OrderPage: React.FC = () => {
    const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
        type: 'bastidor' as OrderPieceType,
    date: '',
    description: ''
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsapp = t.orderPage.form.whatsapp;
    const typeLabel = t.orderPage.form.typeOptions[formData.type];
        let message = `${whatsapp.greeting}\n\n${whatsapp.nameLabel} ${formData.name}\n${whatsapp.typeLabel} ${typeLabel}\n${whatsapp.dateLabel} ${formData.date || '-'}\n${whatsapp.ideaLabel} ${formData.description}`;
    
    if (selectedFile) {
            const attachment = whatsapp.attachment.replace('{fileName}', selectedFile.name);
            message += `\n\n${attachment}`;
    }

    // Abre o WhatsApp (substitua o número pelo real)
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/5500000000000?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-24 min-h-screen bg-linen relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fdfbf7] border-l border-rose-100 hidden lg:block"></div>
        <div className="absolute top-32 left-10 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 py-12">
                
                {/* Left Side: Inspiration & Text */}
                <div className="lg:w-1/2 space-y-10">
                    <div className="animate-fade-in-up">
                        <span className="inline-block py-1 px-3 border border-forest-900/20 rounded-full text-forest-700 text-xs font-sans tracking-widest uppercase mb-4">
                            {t.orderPage.badge}
                        </span>
                        <h1 className="font-serif text-6xl md:text-7xl text-forest-900 leading-[0.9]">
                            {t.orderPage.title} <br/>
                            <span className="font-script text-rose-500 ml-4">{t.orderPage.highlight}</span>
                        </h1>
                    </div>

                    <p className="font-serif text-xl text-forest-800/80 leading-relaxed italic max-w-md">
                        {t.orderPage.intro}
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-sm shadow-sm border border-stone-100 rotate-[-1deg]">
                            <Camera className="text-rose-500 mb-3" size={24} />
                            <h3 className="font-serif text-xl text-forest-900 mb-2">{t.orderPage.cards.references.title}</h3>
                            <p className="text-sm text-forest-600 font-sans">{t.orderPage.cards.references.description}</p>
                        </div>
                        <div className="bg-white p-6 rounded-sm shadow-sm border border-stone-100 rotate-[1deg]">
                            <Calendar className="text-rose-500 mb-3" size={24} />
                            <h3 className="font-serif text-xl text-forest-900 mb-2">{t.orderPage.cards.timeline.title}</h3>
                            <p className="text-sm text-forest-600 font-sans">{t.orderPage.cards.timeline.description}</p>
                        </div>
                    </div>

                    <div className="hidden lg:block relative mt-12">
                        <img 
                            src="https://i.imgur.com/STywnPX.jpeg" 
                            alt="Mãos bordando" 
                            className="rounded-lg shadow-xl w-full h-64 object-cover filter sepia-[0.2]"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg rounded-sm max-w-xs">
                             <p className="font-script text-2xl text-rose-500 text-center">{t.orderPage.quote}</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: The Form */}
                <div className="lg:w-1/2">
                    <div className="bg-white p-8 md:p-12 rounded-sm shadow-2xl relative stitch-border bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                        
                        <h2 className="font-serif text-3xl text-forest-900 mb-8 border-b border-rose-100 pb-4">{t.orderPage.form.title}</h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-forest-500">{t.orderPage.form.nameLabel}</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        required
                                        className="w-full bg-stone-50 border-b-2 border-stone-200 focus:border-rose-400 px-3 py-2 outline-none transition-colors font-serif text-lg text-forest-900 placeholder:text-stone-400"
                                        placeholder={t.orderPage.form.namePlaceholder}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-forest-500">{t.orderPage.form.contactLabel}</label>
                                    <input 
                                        type="text" 
                                        name="phone"
                                        required
                                        className="w-full bg-stone-50 border-b-2 border-stone-200 focus:border-rose-400 px-3 py-2 outline-none transition-colors font-serif text-lg text-forest-900 placeholder:text-stone-400"
                                        placeholder={t.orderPage.form.contactPlaceholder}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-forest-500">{t.orderPage.form.typeLabel}</label>
                                    <select 
                                        name="type"
                                        className="w-full bg-stone-50 border-b-2 border-stone-200 focus:border-rose-400 px-3 py-2 outline-none transition-colors font-serif text-lg text-forest-900 cursor-pointer"
                                        onChange={handleChange}
                                    >
                                        {Object.entries(t.orderPage.form.typeOptions).map(([value, label]) => (
                                          <option key={value} value={value}>{label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-forest-500">{t.orderPage.form.dateLabel}</label>
                                    <input 
                                        type="date" 
                                        name="date"
                                        className="w-full bg-stone-50 border-b-2 border-stone-200 focus:border-rose-400 px-3 py-2 outline-none transition-colors font-serif text-lg text-forest-900"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Image Upload Section */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-forest-500">{t.orderPage.form.uploadLabel}</label>
                                <div className="relative group">
                                    <input 
                                        type="file" 
                                        id="file-upload" 
                                        className="hidden" 
                                        accept="image/*"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                    />
                                    
                                    {!selectedFile ? (
                                        <label 
                                            htmlFor="file-upload" 
                                            className="w-full h-24 border-2 border-dashed border-stone-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-rose-400 hover:bg-rose-50/30 transition-all group-hover:shadow-sm"
                                        >
                                            <Upload className="text-stone-400 group-hover:text-rose-500 mb-2 transition-colors" size={24} />
                                            <span className="font-serif text-stone-500 group-hover:text-rose-600 transition-colors">{t.orderPage.form.uploadPrompt}</span>
                                        </label>
                                    ) : (
                                        <div className="w-full h-24 border-2 border-solid border-rose-200 bg-rose-50/50 rounded-lg flex items-center justify-between px-6">
                                            <div className="flex items-center gap-4">
                                                <div className="bg-white p-2 rounded-full shadow-sm">
                                                    <ImageIcon className="text-rose-500" size={20} />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-serif text-forest-900 text-lg truncate max-w-[180px] sm:max-w-xs">{selectedFile.name}</span>
                                                    <span className="text-xs text-rose-500 font-medium uppercase tracking-wider">{t.orderPage.form.uploadSelected}</span>
                                                </div>
                                            </div>
                                            <button 
                                                type="button" 
                                                onClick={clearFile}
                                                className="text-stone-400 hover:text-rose-500 transition-colors p-2 hover:bg-white rounded-full"
                                            >
                                                <X size={20} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <p className="text-[10px] text-stone-400 text-right italic">
                                    {t.orderPage.form.uploadHint}
                                </p>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-forest-500">{t.orderPage.form.ideaLabel}</label>
                                <textarea 
                                    name="description"
                                    rows={4}
                                    className="w-full bg-stone-50 border-2 border-dashed border-stone-200 focus:border-rose-400 rounded-lg p-4 outline-none transition-colors font-serif text-lg text-forest-900 resize-none leading-relaxed"
                                    placeholder={t.orderPage.form.ideaPlaceholder}
                                    onChange={handleChange}
                                ></textarea>
                                <p className="text-xs text-stone-400 text-right">{t.orderPage.form.ideaHint}</p>
                            </div>

                            <button 
                                type="submit"
                                className="w-full bg-forest-900 text-linen py-4 mt-4 rounded-sm font-sans text-sm font-bold uppercase tracking-widest hover:bg-rose-500 transition-all flex items-center justify-center gap-3 shadow-lg group"
                            >
                                <span>{t.orderPage.form.submit}</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            
                            <div className="text-center pt-2">
                                <p className="text-xs text-forest-400 flex items-center justify-center gap-2">
                                    <CheckCircle2 size={12} className="text-green-600" />
                                    {t.orderPage.form.responseTime}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default OrderPage;