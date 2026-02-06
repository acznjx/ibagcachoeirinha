"use client";
import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";

const instagramPosts = [
  { 
    id: 1, 
    url: "https://www.instagram.com/p/DTKsjkJDkNb/", 
    img: "https://i.imgur.com/b85vh9c.png" 
  },
  { 
    id: 2, 
    url: "https://www.instagram.com/p/DTTNXt1jsYm/", 
    img: "https://i.imgur.com/80DoEy1.png" 
  },
  { 
    id: 3, 
    url: "https://www.instagram.com/p/DT2_lywjoXI/", 
    img: "https://i.imgur.com/oGuOqz3.png" 
  },  
];

export function ProfileHeader() {
  return (
    <section className="bg-white pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO */}
        <div className="relative mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[2px] bg-[#FF4122]" />
            <span className="text-zinc-400 font-black text-[10px] uppercase tracking-[0.4em]">IBAG Cachoeirinha // RS</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[18vw] lg:text-[12rem] font-black leading-[0.75] tracking-tighter text-zinc-900 uppercase"
          >
            IBAG <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #FF4122' }}>
              CHURCH
            </span>
          </motion.h1>

          <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <h2 className="text-2xl md:text-4xl font-black text-zinc-900 uppercase tracking-tight max-w-md">
              Amor e Graça: <span className="text-[#FF4122]">o seu recomeço</span> acontece aqui.
            </h2>
            
            <a 
              href="https://www.instagram.com/ibagcachoeirinha/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-zinc-900 text-white px-10 py-5 rounded-full hover:bg-[#FF4122] transition-all group w-full md:w-auto"
            >
              <Instagram size={20} />
              <span className="font-bold text-xs uppercase tracking-[0.2em]">Siga nosso Insta</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* GRID ESTILO FEED INSTAGRAM (PROPORÇÃO 4:5 - RETRATO) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.99 }}
              className="relative block w-full aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-zinc-50 group border border-zinc-100 shadow-sm"
            >
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              
              <img 
                src={post.img} 
                alt="Post Instagram IBAG" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              
              <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/90 backdrop-blur-md p-2.5 rounded-full text-[#FF4122] shadow-xl">
                  <Instagram size={20} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}