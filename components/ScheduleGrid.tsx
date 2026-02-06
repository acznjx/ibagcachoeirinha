"use client";
import { motion } from "framer-motion";
import { MapPin, Navigation2, Phone } from "lucide-react";

export function ScheduleGrid() {
  const events = [
    { title: "Culto de Domingo", time: "09:30", day: "Domingo" },
    { title: "Culto de Domingo", time: "17:00 • 19:30", day: "Domingo" },
    { title: "Culto de Quinta", time: "20:00", day: "Quinta-feira" },
  ];

  return (
    <section id="horarios" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-16">
          <span className="text-[#FF4122] font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">
            Programação
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-none">
            Agenda.
          </h2>
        </div>

        {/* LISTA DE HORÁRIOS - LIMPA E DIRETA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-zinc-100 pt-8"
            >
              <p className="text-[#FF4122] font-bold text-xs uppercase tracking-widest mb-2">
                {event.day}
              </p>
              <h3 className="text-3xl font-black text-zinc-900 uppercase tracking-tighter mb-1">
                {event.title}
              </h3>
              <p className="text-zinc-400 text-xl font-medium">{event.time}</p>
            </motion.div>
          ))}
        </div>

        {/* LOCALIZAÇÃO */}
        <div id="localizacao" className="bg-zinc-950 rounded-[2.5rem] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <div className="p-10 md:p-20 flex flex-col justify-between">
              <div className="space-y-12">
                <div>
                  <h4 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">
                    Localização.
                  </h4>
                  <div className="flex gap-6 items-start">
                    <MapPin className="text-[#FF4122] shrink-0 mt-1" size={24} />
                    <p className="text-zinc-300 font-medium text-lg leading-snug">
                      R. Espírito Santo, 25 - Vila Fatima <br />
                      Cachoeirinha - RS, 94965-140
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-center">
                  <Phone className="text-[#FF4122] shrink-0" size={24} />
                  <p className="text-zinc-300 font-medium text-lg">(51) 99818-3573</p>
                </div>
              </div>

              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=-29.936551,-51.087754" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-16 inline-flex items-center justify-center gap-4 bg-white text-zinc-900 px-8 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#FF4122] hover:text-white transition-all w-full md:w-fit"
              >
                Abrir no GPS
                <Navigation2 size={18} fill="currentColor" />
              </a>
            </div>

            <div className="h-[400px] lg:h-auto min-h-[500px] relative grayscale hover:grayscale-0 transition-all duration-1000">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.9189032731!2d-51.089942684887!3d-29.936546381921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951973f00a5d2a93%3A0x643c7b3e1f1c1f1f!2sR.%20Esp%C3%ADrito%20Santo%2C%2025%20-%20Vila%20F%C3%A1tima%2C%20Cachoeirinha%20-%20RS%2C%2094965-140!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}