"use client";
import { motion } from "framer-motion";
import { Instagram, ArrowRight } from "lucide-react";
import Image from "next/image";

const instagramPosts = [
  { id: 1, url: "https://www.instagram.com/p/DTKsjkJDkNb/", img: "https://i.imgur.com/b85vh9c.png" },
  { id: 2, url: "https://www.instagram.com/p/DTTNXt1jsYm/", img: "https://i.imgur.com/80DoEy1.png" },
  { id: 3, url: "https://www.instagram.com/p/DT2_lywjoXI/", img: "https://i.imgur.com/oGuOqz3.png" },  
];

export function ProfileHeader() {
  return (
    <section className="bg-white pt-32 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO */}
        <div className="relative mb-32 md:mb-48">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[20vw] lg:text-[14rem] font-black leading-[0.7] tracking-tighter text-zinc-900 uppercase italic"
          >
            IBAG <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #FF4122' }}>
              CHURCH
            </span>
          </motion.h1>

          {/* ÁREA DE RECEPÇÃO AMPLIADA - TEXTO ATUALIZADO */}
          <div className="mt-16 flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-t border-zinc-100 pt-12">
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-6xl md:text-8xl font-black text-zinc-900 uppercase tracking-tighter leading-none"
              >
                Bem-Vindo <br />
                <span className="text-[#FF4122]">à casa.</span>
              </motion.h2>
              <p className="mt-6 text-zinc-400 text-lg md:text-xl font-medium max-w-md">
                Venha nos conhecer.
              </p>
            </div>
            
            {/* BOTÃO INSTAGRAM */}
            <motion.a 
              href="https://www.instagram.com/ibagcachoeirinha/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 self-start lg:self-end"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-zinc-900 text-white rounded-full group-hover:bg-[#FF4122] transition-all duration-500 shadow-2xl">
                <Instagram size={32} />
              </div>
              <div className="hidden md:block text-left">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-1"></span>
                <span className="text-zinc-900 font-bold uppercase text-sm group-hover:text-[#FF4122] transition-colors flex items-center gap-2">
                  @ibagcachoeirinha <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          </div>
        </div>

        {/* GRID DE POSTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative block w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-zinc-50 group shadow-sm border border-zinc-50"
            >
              <Image 
                src={post.img} 
                alt="Post Instagram IBAG" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="absolute bottom-8 left-8 z-20 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                <div className="bg-white text-zinc-900 px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-xl italic">
                  Explorar <Instagram size={16} className="text-[#FF4122]" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}