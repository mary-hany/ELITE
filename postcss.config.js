import tailwindPostcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

/**
 * Use the `@tailwindcss/postcss` bridge plugin with PostCSS.
 * This avoids the error about using `tailwindcss` directly as a PostCSS plugin.
 */
export default {
  plugins: [
    tailwindPostcss(),
    autoprefixer(),
  ],
}