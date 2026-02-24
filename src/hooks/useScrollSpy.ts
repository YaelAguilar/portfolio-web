import { useState, useEffect } from 'react';

/**
 * Hook para detectar qué sección está actualmente visible en el viewport
 * y resaltarla en la navegación.
 * 
 * @param sectionIds - Array de IDs de las secciones a observar (ej: ['#hero', '#experience'])
 * @param options - Opciones de configuración
 * @returns El ID de la sección activa (sin el #)
 */
export function useScrollSpy(
  sectionIds: string[],
  options: {
    offset?: number; // Offset desde el top para considerar una sección como "activa"
  } = {}
) {
  const { offset = 80 } = options;
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = sectionIds.map((id) => {
      const element = document.querySelector(id);
      return { id: id.replace('#', ''), element };
    }).filter(({ element }) => element !== null) as Array<{ id: string; element: Element }>;

    if (sections.length === 0) return;

    // Función para determinar qué sección está activa basado en scroll
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY;

      // Si estamos al fondo de la página, activar la última sección
      const atBottom = window.innerHeight + scrollPosition >= document.documentElement.scrollHeight - 50;
      if (atBottom) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      let currentSection = sections[0].id;

      // Iterar desde la última sección hacia la primera
      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, element } = sections[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPosition >= elementTop - offset - 50) {
            currentSection = id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Escuchar eventos de scroll
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // También actualizar después de scroll programático (scroll suave)
    let scrollEndTimeout: NodeJS.Timeout;
    const handleScrollEnd = () => {
      clearTimeout(scrollEndTimeout);
      scrollEndTimeout = setTimeout(() => {
        updateActiveSection();
      }, 400); // Esperar a que termine el scroll suave completamente
    };
    window.addEventListener('scroll', handleScrollEnd, { passive: true });

    // Inicializar al cargar
    updateActiveSection();
    
    // También actualizar después de un pequeño delay para asegurar que el DOM esté listo
    const initTimeout = setTimeout(() => {
      updateActiveSection();
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollEnd);
      clearTimeout(scrollEndTimeout);
      clearTimeout(initTimeout);
    };
  }, [sectionIds.join(','), offset]);

  return activeSection;
}
