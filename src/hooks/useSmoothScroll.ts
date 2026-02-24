/**
 * Hook para manejar scroll suave a secciones
 * Encapsula la lógica de scroll con mejor manejo de errores
 */
export function useSmoothScroll() {
  const scrollToSection = (href: string, options: { offset?: number } = {}) => {
    const { offset = 0 } = options;
    
    try {
      const element = document.querySelector(href);
      
      if (!element) {
        console.warn(`Element not found: ${href}`);
        return;
      }

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Disparar un evento personalizado para notificar que se hizo scroll programático
      // Esto ayuda a que useScrollSpy se actualice correctamente
      setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
      }, 100);
    } catch (error) {
      console.error('Error scrolling to section:', error);
    }
  };

  return { scrollToSection };
}
