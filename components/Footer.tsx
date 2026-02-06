"use client";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Coluna 1: Logo e Slogan */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-zinc-900 text-white w-14 h-14 flex items-center justify-center">
                <span className="font-black text-2xl tracking-tighter">IB</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-zinc-900 font-black text-lg uppercase tracking-wider">Cachoeirinha</span>
                <span className="text-zinc-400 text-xs font-medium uppercase tracking-widest">Igreja Batista</span>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              Um lugar de novas vidas. Nossa missão é conectar pessoas ao amor de Deus através de uma comunidade acolhedora e relevante.
            </p>
          </div>

          {/* Coluna 2: Contato Rápido */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <h4 className="text-zinc-900 font-black text-[10px] uppercase tracking-[0.3em] mb-2">Contato</h4>
            <a href="https://wa.me/5551998183573" className="flex items-center gap-4 text-zinc-500 hover:text-zinc-900 transition-colors group">
              <div className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-50">
                <Phone size={16} />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest">(51) 99818-3573</span>
            </a>
            <a href="https://www.instagram.com/ibagcachoeirinha/" className="flex items-center gap-4 text-zinc-500 hover:text-zinc-900 transition-colors group">
              <div className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-50">
                <Instagram size={16} />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest">@ibagcachoeirinha</span>
            </a>
          </div>

          {/* Coluna 3: Endereço */}
          <div className="md:col-span-3">
            <h4 className="text-zinc-900 font-black text-[10px] uppercase tracking-[0.3em] mb-6">Localização</h4>
            <div className="flex items-start gap-4 text-zinc-500 leading-relaxed text-sm uppercase font-bold tracking-tight">
              <MapPin size={18} className="shrink-0 mt-0.5" />
              <p>
                R. Espírito Santo, 25 <br />
                Vila Fatima <br />
                Cachoeirinha - RS
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Minimalista */}
        <div className="border-y border-zinc-100 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tighter">
            Quer saber mais sobre a gente?
          </h3>
          <a 
            href="https://wa.me/5551998183573" 
            className="bg-zinc-900 text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-black hover:bg-zinc-800 transition-all flex items-center gap-3"
          >
            Falar no WhatsApp <MessageCircle size={14} />
          </a>
        </div>

        {/* Direitos Autorais */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
            {"© 2026 Igreja Batista Amor e Graça"}
          </p>
          <div className="flex gap-8">
             <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Cachoeirinha // RS</span>
             <motion.div 
               animate={{ opacity: [0.4, 1, 0.4] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-1 h-1 bg-zinc-300 rounded-full"
             />
          </div>
        </div>
      </div>
    </footer>
  );
}