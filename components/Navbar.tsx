"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Horários", href: "#horarios" },
    { name: "Localização", href: "#localizacao" },
  ];

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-500 ${
      scrolled ? "bg-white/90 backdrop-blur-xl py-3 border-b border-zinc-100 shadow-sm" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative w-10 h-10 transition-transform group-hover:rotate-3">
            <Image 
              src="/Logo.png" 
              alt="IBAG Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-zinc-900 font-black text-sm uppercase tracking-wider">Cachoeirinha</span>
            <span className="text-[#FF4122] text-[10px] font-bold uppercase tracking-[0.2em]">Igreja Batista Amor e Graça</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[11px] uppercase tracking-[0.2em] font-black text-zinc-400 hover:text-zinc-900 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <a 
            href="https://wa.me/5551998183573" 
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-zinc-900 text-white px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-black hover:bg-zinc-800 transition-all active:scale-95 flex items-center gap-3 shadow-md"
          >
            Falar Conosco
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <button 
          className="md:hidden p-2 text-zinc-900 hover:bg-zinc-100 transition-colors" 
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={28} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }} 
            animate={{ x: 0 }} 
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-50 p-8 flex flex-col"
          >
            <div className="flex justify-between items-center border-b border-zinc-100 pb-8">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8">
                  <Image src="/Logo.png" alt="IBAG" fill className="object-contain" />
                </div>
                <span className="text-zinc-900 font-black tracking-tighter text-xl uppercase">Menu</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="bg-zinc-900 text-white p-2 rounded-full"
                aria-label="Fechar menu"
              >
                <X size={24}/>
              </button>
            </div>
            
            <div className="flex flex-col gap-10 mt-16">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-4xl font-black text-zinc-900 uppercase tracking-tighter active:text-zinc-400 flex items-center justify-between group"
                >
                  {link.name}
                  <ArrowRight size={24} className="opacity-0 group-active:opacity-100 text-zinc-300" />
                </motion.a>
              ))}
              
              <div className="h-px bg-zinc-100 w-full my-4" />
              
              <p className="text-[#FF4122] text-[10px] uppercase tracking-[0.3em] font-black">
                Cachoeirinha // RS
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}