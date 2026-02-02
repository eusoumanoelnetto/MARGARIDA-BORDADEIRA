import React from 'react';
import { Cookie } from 'lucide-react';

const CookiesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-linen relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white p-12 md:p-16 rounded-sm shadow-xl border border-stone-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 via-gold-400 to-rose-400 opacity-80"></div>
            
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center p-4 bg-rose-50 rounded-full mb-6">
                    <Cookie className="text-rose-500" size={32} />
                </div>
                <h1 className="font-serif text-5xl text-forest-900 mb-4">Política de Cookies</h1>
                <p className="font-sans text-sm text-stone-500 uppercase tracking-widest">Transparência Digital</p>
            </div>

            <div className="prose prose-stone prose-lg max-w-none font-serif text-forest-800/80 leading-relaxed space-y-8">
                <p>
                    Este site utiliza cookies para garantir que você tenha a melhor experiência possível. Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita nosso ateliê digital.
                </p>

                <div>
                    <h3 className="text-2xl text-forest-900 font-medium mb-4">Que tipos de cookies usamos?</h3>
                    <div className="space-y-6">
                        <div className="bg-stone-50 p-6 rounded-lg border border-stone-100">
                            <span className="font-bold text-forest-900 block mb-2">Essenciais</span>
                            <p className="text-sm">Necessários para o site funcionar corretamente, como lembrar suas preferências de navegação básica.</p>
                        </div>
                        <div className="bg-stone-50 p-6 rounded-lg border border-stone-100">
                            <span className="font-bold text-forest-900 block mb-2">Desempenho e Análise</span>
                            <p className="text-sm">Nos ajudam a entender como os visitantes interagem com o site (quais páginas são mais visitadas), de forma anônima, para que possamos melhorar sempre.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl text-forest-900 font-medium mb-4">Gerenciamento</h3>
                    <p>
                        Você pode optar por desativar os cookies nas configurações do seu navegador a qualquer momento. No entanto, observe que algumas funcionalidades do site (como o Assistente Criativo) podem não funcionar perfeitamente sem eles.
                    </p>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-dashed border-stone-200 text-center">
                <p className="text-xs font-sans text-stone-400 uppercase tracking-widest">Margarida Bordada - Feito à mão e com carinho</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;