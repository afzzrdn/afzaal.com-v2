'use client';
import { useEffect, useRef } from 'react';
import { Fullstack } from '@/utils/Tech';
import Image from 'next/image';
import { gsap } from 'gsap';

const Tech: React.FC = () => {
  // Nilai posisi acak untuk left dan top
  const leftPositions = [50, 170, 50, 350, 350, 250, 350];
  const topPositions = [20, 150, 300, 70, 200, 260, 450];

  // Gunakan useRef untuk mereferensikan elemen gambar dengan tipe yang benar
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // GSAP untuk animasi masuk menyebar
    gsap.fromTo(
      imageRefs.current,
      { scale: 0, opacity: 0, x: 200 }, // Mulai dari tengah dengan skala kecil
      {
        scale: 1,
        opacity: 1,
        x: 0,
        duration: 1.5,
        stagger: 0.2, // Animasi berurutan
        ease: 'back.out(1.7)', // Animasi keluar dengan elastisitas
      }
    );

    // GSAP untuk animasi melayang setelah animasi masuk selesai
    imageRefs.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: '+=10', // Gerak ke bawah
          yoyo: true, // Kembali ke posisi awal
          repeat: -1, // Ulangi tanpa batas
          duration: 1 + index * 0.2, // Variasi durasi animasi
          ease: 'power1.inOut', // Ease untuk animasi
        });
      }
    });
  }, []);

  return (
    <div className="w-[500px] h-[500px] -rotate-[10deg] hidden sm:flex xl:scale-100 scale-50 flex-col gap-7 absolute top-[70px] -right-[50px] xl:right-[50px]">
      {Fullstack.map((tech, index) => (
        <div
          key={tech.id}
          className="absolute"
          ref={(el) => {
            imageRefs.current[index] = el; // Menyimpan referensi elemen
          }}
          style={{
            left: `${leftPositions[index]}px`,
            top: `${topPositions[index]}px`,
          }}
        >
          <Image
            src={tech.link}
            alt={`icon-${tech.title.toLowerCase()}`}
            width={50}
            height={50}
            className="w-[50px] text-white"
          />
        </div>
      ))}
    </div>
  );
};

export default Tech;
