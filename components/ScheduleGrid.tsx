"use client";
import { motion } from "framer-motion";
import { Clock, MapPin, Sparkles, Navigation2, Phone } from "lucide-react";

export function ScheduleGrid() {
  const events = [
    { 
      title: "Escola Bíblica", 
      time: "DOM // 09:30", 
      tag: "CONHECIMENTO", 
      desc: "Fundamentos sólidos para uma vida com propósito e clareza."
    },
    { 
      title: "Celebração", 
      time: "DOM // 17:00 • 19:30", 
      tag: "COMUNIDADE", 
      desc: "Nossa família reunida para adoração e renovo espiritual."
    },
    { 
      title: "Quinta da Resposta", 
      time: "QUI // 20:00", 
      tag: "EXPERIÊNCIA", 
      desc: "Uma noite dedicada à oração intensa e busca por direção."
    },
  ];

  return (
    <section id="horarios" className="bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-zinc-200">
          <div className="lg:col-span-7 p-10 lg:p-24 bg-white border-r border-zinc-200">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-zinc-900 font-black text-[10px] tracking-[0.5em] uppercase mb-6 block">
                Agenda & Presença
              </span>
              <h2 className="text-6xl lg:text-8xl font-black text-zinc-900 uppercase tracking-tighter leading-[0.8] mb-10">
                Onde a vida <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px #27272a' }}>se renova.</span>
              </h2>
              <p className="text-zinc-500 font-medium max-w-sm text-sm leading-relaxed">
                Um lugar de **NOVAS VIDAS**. Nossas celebrações são o ponto de partida para o seu recomeço em Cachoeirinha.
              </p>
            </motion.div>
          </div>
          <div className="lg:col-span-5 bg-zinc-50 p-10 flex flex-col justify-end relative overflow-hidden">
            <Sparkles size={120} className="absolute -top-10 -right-10 text-zinc-200 rotate-12" />
            <div className="relative z-10">
              <p className="text-zinc-400 font-mono text-[10px] uppercase mb-4 tracking-widest">
                {"// venha como você está"}
              </p>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-1 bg-zinc-900" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lista de Eventos */}
        <div className="flex flex-col">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 p-10 lg:p-16 border-b border-zinc-200 hover:bg-zinc-50 transition-all duration-500 cursor-default"
            >
              <div className="lg:col-span-2 text-zinc-400 font-black text-[10px] tracking-[0.4em] uppercase pt-2">
                {event.tag}
              </div>
              
              <div className="lg:col-span-6">
                <h3 className="text-4xl lg:text-5xl font-black text-zinc-900 uppercase tracking-tighter leading-none mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {event.title}
                </h3>
                <p className="text-zinc-500 text-xs font-medium max-w-sm uppercase tracking-widest">
                  {event.desc}
                </p>
              </div>

              <div className="lg:col-span-4 flex items-end justify-end">
                <div className="text-right">
                  <div className="flex items-center gap-2 justify-end mb-1">
                    <Clock size={12} className="text-zinc-400" />
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Horário</span>
                  </div>
                  <span className="font-black text-3xl lg:text-4xl tracking-tighter text-zinc-900">{event.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Seção de Mapa e Endereço Oficial */}
        <div id="localizacao" className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 lg:p-20 bg-zinc-900 text-white border-r border-zinc-800 flex flex-col justify-between min-h-125">
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-10 h-px bg-zinc-500"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">Localização</span>
              </div>
              <h4 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Vila <br /> Fátima.
              </h4>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin className="text-white mt-1 shrink-0" size={20} />
                  <p className="text-zinc-400 font-medium text-lg leading-snug">
                    R. Espírito Santo, 25 - Vila Fatima <br />
                    Cachoeirinha - RS, 94965-140
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-white shrink-0" size={20} />
                  <p className="text-zinc-400 font-medium text-lg">(51) 99818-3573</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://www.google.com/maps/dir//R.+Esp%C3%ADrito+Santo,+25+-+Vila+Fatima,+Cachoeirinha+-+RS,+94965-140" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group border-t border-zinc-800 pt-8 hover:text-white transition-colors"
            >
              <span className="font-black uppercase tracking-[0.2em] text-xs">Traçar Rota no GPS</span>
              <div className="w-12 h-12 bg-white text-zinc-900 flex items-center justify-center rounded-full group-hover:scale-110 transition-all">
                <Navigation2 size={20} fill="currentColor" />
              </div>
            </a>
          </div>

          <div className="min-h-125 bg-zinc-200 grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700 overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.843644061559!2d-51.1026049!3d-29.9551326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951973f08d270397%3A0x6a0a7e671239638c!2sR.%20Esp%C3%ADrito%20Santo%2C%2025%20-%20Vila%20Fatima%2C%20Cachoeirinha%20-%20RS%2C%2094965-140!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}