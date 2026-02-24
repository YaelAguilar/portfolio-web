import { useState, useEffect } from 'react';

/**
 * Hook para detectar si el usuario ha scrolleado más allá de un umbral
 * Útil para cambiar estilos del navbar cuando el usuario hace scroll
 * 
 * @param threshold - Umbral en píxeles desde el top (default: 50)
 * @returns boolean indicando si se ha scrolleado más allá del umbral
 */
export function useScroll(threshold: number = 50): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Verificar estado inicial
    handleScroll();

    // Agregar listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrolled;
}
