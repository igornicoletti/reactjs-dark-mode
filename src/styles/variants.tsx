import { tv } from 'tailwind-variants'

export const variantsRoot = tv({
  slots: {
    base: 'relative w-full h-full min-h-screen grid content-center overflow-x-hidden',
    container: 'w-full max-w-screen-2xl mx-auto px-6',
    content: 'flex flex-col items-center text-center gap-8 py-16',
    title: 'text-5xl font-medium uppercase dark:text-dracula-line',
    action: 'text-xl',
  }
})
