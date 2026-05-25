import type { Metadata } from 'next'
import { TamunoSlides } from './TamunoSlides'

export const metadata: Metadata = {
  title: 'Tamuno: When Anger Cost a Future',
  description:
    'A story from the Niger Delta about a young man, frustration, and the future that skills and training could have built.',
}

export default function TamunoStoryPage() {
  return <TamunoSlides />
}
