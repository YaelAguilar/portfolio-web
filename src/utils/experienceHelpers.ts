export function getTagStyle(accent: string): string {
  switch (accent) {
    case 'cyan':
      return 'border-cyan-500/20 text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-500/5';
    case 'violet':
      return 'border-violet-500/20 text-violet-600 dark:text-violet-400 bg-violet-500/10 dark:bg-violet-500/5';
    case 'amber':
      return 'border-amber-500/20 text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-500/5';
    default:
      return 'border-gray-300 dark:border-white/10 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-white/5';
  }
}

export function getBorderHover(accent: string): string {
  switch (accent) {
    case 'cyan':
      return 'hover:border-cyan-500/30';
    case 'violet':
      return 'hover:border-violet-500/30';
    case 'amber':
      return 'hover:border-amber-500/30';
    default:
      return 'hover:border-gray-300 dark:hover:border-white/20';
  }
}
