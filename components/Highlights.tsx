"use client";
import { motion } from "framer-motion";
import { Baby, Heart, Sparkles, Clock } from "lucide-react";

const mainItems = [
  { 
    label: "Cultos", 
    icon: <Sparkles size={24} />, 
    desc: "Dom // 17h • 19h30",
    extra: "Qui // 20h (Experiência)" 
  },
  { 
    label: "Células", 
    icon: <Heart size={24} />, 
    desc: "Vida em Comunidade",
    extra: "Encontre a sua"
  },
  { 
    label: "IBAG Kids", 
    icon: <Baby size={24} />, 
    desc: "Ministério Infantil",
    extra: "Espaço para crianças"
  },
];

export function Highlights() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título Minimalista */}
        <div className="mb-12 flex items-center gap-4">
          <div className="w-1 h-8 bg-[#FF4122]" />
          <h2 className="text-zinc-900 font-black text-2xl uppercase tracking-tighter">
            Conecte-se
          </h2>
        </div>

        {/* Grade Simplificada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 p-6 border border-zinc-100 rounded-2xl hover:bg-zinc-50 transition-colors group"
            >
              {/* Ícone Laranja da Logo */}
              <div className="text-[#FF4122] shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <div className="flex flex-col">
                <h3 className="text-zinc-900 font-black text-lg uppercase tracking-tight">
                  {item.label}
                </h3>
                <div className="mt-2 space-y-1">
                  <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest">
                    {item.desc}
                  </p>
                  <p className="text-[#FF4122] text-[10px] font-black uppercase tracking-[0.15em]">
                    {item.extra}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}