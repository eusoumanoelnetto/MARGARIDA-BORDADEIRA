import React from 'react';
import { ShieldCheck } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-linen relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white p-12 md:p-16 rounded-sm shadow-xl border border-stone-100 relative overflow-hidden">
            {/* Header decorativo */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-forest-900 via-rose-400 to-forest-900 opacity-80"></div>
            
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center p-4 bg-forest-50 rounded-full mb-6">
                    <ShieldCheck className="text-forest-700" size={32} />
                </div>
                <h1 className="font-serif text-5xl text-forest-900 mb-4">Política de Privacidade</h1>
                <p className="font-sans text-sm text-stone-500 uppercase tracking-widest">Última atualização: Abril de 2026</p>
            </div>

            <div className="prose prose-stone prose-lg max-w-none font-serif text-forest-800/80 leading-relaxed space-y-8">
                <p>
                    A sua privacidade é tão importante quanto a qualidade dos nossos bordados. Na Margarida Bordadeira, tratamos seus dados com transparência, respeito e cuidado.
                </p>

                <div>
                    <h3 className="text-2xl text-forest-900 font-medium mb-4">1. Coleta de Informações</h3>
                    <p>
                        Coletamos apenas as informações essenciais para processar seus pedidos e orçamentos: nome, contato (telefone/WhatsApp) e detalhes fornecidos voluntariamente nos formulários de orçamento. Não compartilhamos seus dados com terceiros para fins de marketing.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl text-forest-900 font-medium mb-4">2. Uso das Informações</h3>
                    <p>
                        Seus dados são utilizados exclusivamente para:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-rose-400">
                        <li>Responder às suas solicitações de orçamento.</li>
                        <li>Processar e enviar suas encomendas.</li>
                        <li>Comunicar atualizações sobre status do pedido ou novidades (caso tenha optado por receber).</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl text-forest-900 font-medium mb-4">3. Assistente Criativa (IA)</h3>
                    <p>
                        Ao utilizar nossa ferramenta de Assistente Criativa, o texto inserido é processado para gerar sugestões. Não armazenamos o conteúdo das suas ideias de forma permanente associada à sua identidade pessoal.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl text-forest-900 font-medium mb-4">4. Seus Direitos</h3>
                    <p>
                        Você tem o direito de solicitar a exclusão ou alteração dos seus dados a qualquer momento. Basta entrar em contato através do email <span className="text-rose-500 font-bold">contato@margaridabordada.com</span>.
                    </p>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-dashed border-stone-200 text-center">
                <p className="font-script text-3xl text-rose-500">Paula Brasil</p>
                <p className="text-xs font-sans text-stone-400 mt-2 uppercase tracking-widest">Margarida Bordadeira © Todos os direitos reservados</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;