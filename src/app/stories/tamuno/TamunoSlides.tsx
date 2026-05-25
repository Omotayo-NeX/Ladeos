'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Slide = {
  kicker?: string
  title: string
  body: string[]
  image: string
  imageLabel: string
  imageAlt: string
}

const slides: Slide[] = [
  {
    kicker: 'A story from the Niger Delta',
    title: 'Tamuno: When Anger Cost a Future',
    body: [
      'A short story about a young man, a struggling community, and the future that skills and training could have built.',
    ],
    image: '/Tamuno/01-cover.jpg',
    imageLabel: 'Cover image — gas flare lighting the night sky over a creek village',
    imageAlt: 'Cover image for the story',
  },
  {
    kicker: 'Slide 1 · Meet Tamuno',
    title: 'Twenty-two, but older inside',
    body: [
      'Tamuno was 22, but most days he felt much older.',
      'He lived in a small oil-producing community along the creeks of the Niger Delta, where the air carried the faint smell of crude and gas flares lit the night sky like a second, restless sun.',
    ],
    image: '/Tamuno/02-tamuno-portrait.jpg',
    imageLabel: 'Portrait of Tamuno standing by the creek at dusk',
    imageAlt: 'Tamuno standing by the creek',
  },
  {
    kicker: 'Slide 2 · The village',
    title: 'A childhood promise that faded',
    body: [
      'As a boy, he used to watch the flames and think they were a sign of progress — proof that something valuable was happening in his land.',
      'But as he grew, that belief faded.',
    ],
    image: '/Tamuno/03-village-flares.jpg',
    imageLabel: 'Wide shot of the village at night with gas flares burning in the distance',
    imageAlt: 'Niger Delta village at night with gas flares',
  },
  {
    kicker: 'Slide 3 · A struggling family',
    title: 'Empty rivers, shrinking markets',
    body: [
      'His father, once a fisherman, struggled to bring home enough catch. The rivers had changed — oil slicks floated on the surface, and the fish were fewer.',
      'His mother sold garri in the market, her profits shrinking every year.',
      'Tamuno had finished secondary school. But there was nothing after that — no job, no training, no direction.',
    ],
    image: '/Tamuno/04-family.jpg',
    imageLabel: 'Father pulling in an empty fishing net / mother at her garri stall in the market',
    imageAlt: 'A fisherman and a market trader',
  },
  {
    kicker: 'Slide 4 · Under the mango tree',
    title: '"They take everything, leave us nothing"',
    body: [
      'Each morning, the same question pressed on his chest: What next?',
      'He would sit with other young men under a mango tree near the community square. They watched trucks from oil companies drive past, carrying workers in clean uniforms and safety helmets. None of those men were from their village.',
      '"See our land," his friend Ebi would say bitterly. "They take everything, leave us nothing."',
    ],
    image: '/Tamuno/05-mango-tree.jpg',
    imageLabel: 'Young men sitting under a mango tree watching a company truck drive past',
    imageAlt: 'Young men gathered under a mango tree',
  },
  {
    kicker: 'Slide 5 · The meetings',
    title: 'A sense of belonging — and purpose',
    body: [
      'Older youths — louder, more confident — started gathering the younger ones.',
      'They spoke about injustice, about a community ignored for too long. They said protests were the only language the companies understood.',
      'For the first time in a long while, Tamuno felt a sense of belonging… of purpose.',
    ],
    image: '/Tamuno/06-meeting.jpg',
    imageLabel: 'Group meeting at night, lit by lantern, older youths addressing younger ones',
    imageAlt: 'A community meeting at night',
  },
  {
    kicker: 'Slide 6 · The protests',
    title: 'Promises that never lasted',
    body: [
      'They blocked access roads, chanted slogans, and forced company operations to shut down.',
      'At first, it felt powerful. Meetings were called. Promises were made.',
      'But the promises never lasted. Frustration grew sharper. The protests became more aggressive.',
    ],
    image: '/Tamuno/07-protest.jpg',
    imageLabel: 'Youths blocking a road with banners, oil company trucks halted in the background',
    imageAlt: 'Protest blocking a road',
  },
  {
    kicker: "Slide 7 · A mother's warning",
    title: '"Anger does not build a future"',
    body: [
      'Tamuno stopped going home early. His mother worried, but he brushed her off.',
      '"This is for us," he told her one evening. "For our future."',
      'She looked at him quietly, fear in her eyes. "My son, anger does not build a future," she said softly.',
      'But he didn\'t listen.',
    ],
    image: '/Tamuno/08-mother-warning.jpg',
    imageLabel: 'Quiet moment between Tamuno and his mother at the doorway of their home',
    imageAlt: "Tamuno and his mother at the doorway",
  },
  {
    kicker: 'Slide 8 · The day everything changed',
    title: 'A major shutdown',
    body: [
      'The youths planned a major shutdown of a flow station — their biggest action yet.',
      'Hundreds gathered early that morning. The air was thick with tension and determination.',
      'Tamuno stood among them, his heart pounding, his mind racing with a mix of fear and excitement.',
    ],
    image: '/Tamuno/09-shutdown-day.jpg',
    imageLabel: 'Large crowd of youths marching toward a flow station at dawn',
    imageAlt: 'A crowd marching at dawn',
  },
  {
    kicker: 'Slide 9 · The chaos',
    title: 'A stone. Tear gas. A shot.',
    body: [
      'Security forces arrived. There were warnings. Shouting. Pushing.',
      'Someone threw a stone. Everything spiraled.',
      'Tear gas filled the air. People ran in different directions. In the chaos, a shot rang out. Then another.',
      'Moments later, Tamuno lay on the ground, unmoving.',
    ],
    image: '/Tamuno/10-chaos.jpg',
    imageLabel: 'Silhouettes scattering through smoke — chaotic, unfocused, deliberately unclear',
    imageAlt: 'Silhouettes scattering through smoke',
  },
  {
    kicker: 'Slide 10 · The aftermath',
    title: 'Silence under the mango tree',
    body: [
      'His mother collapsed when she heard. His father stood silently, his face hardened by shock.',
      'The same young men who had once sat under the mango tree now sat in silence, unable to meet each other\'s eyes.',
      'The protests stopped. The roads were cleared. The oil company resumed operations.',
      'And Tamuno was gone.',
    ],
    image: '/Tamuno/11-aftermath.jpg',
    imageLabel: 'Empty mango tree spot — abandoned seats, fading evening light',
    imageAlt: 'The empty gathering spot under the mango tree',
  },
  {
    kicker: "Slide 11 · The elder's words",
    title: '"What we need is not more fighting"',
    body: [
      '"We have lost too many of our sons," the elder said. "Anger has taken more from us than it has given."',
      '"Our children are not useless. They are untrained. They are unguided. What we need is not more fighting — we need skills. We need knowledge. We need to prepare our youths for the opportunities around them."',
    ],
    image: '/Tamuno/12-elder.jpg',
    imageLabel: 'An elder addressing a gathered crowd at a burial, pointing toward a distant flare',
    imageAlt: 'An elder speaking to the community',
  },
  {
    kicker: 'Slide 12 · The lesson',
    title: 'Skills build futures. Anger does not.',
    body: [
      "Tamuno's story did not end with change for him.",
      'But it became a lesson for others — a painful reminder that violence and unrest only deepen the wounds of already struggling communities.',
      'Skills, education, and vocational training offer a real chance at dignity, employment, and a better future.',
      'And slowly, in that same village, some youths began to choose differently.',
    ],
    image: '/Tamuno/13-training.jpg',
    imageLabel: 'Young people in a training workshop — hands on equipment, focused, hopeful',
    imageAlt: 'Young people in vocational training',
  },
]

export function TamunoSlides() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [failed, setFailed] = useState<Record<number, boolean>>({})

  const total = slides.length
  const slide = slides[index]
  const imageFailed = failed[index]

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next))
      setDirection(clamped > index ? 1 : -1)
      setIndex(clamped)
    },
    [index, total],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const progress = ((index + 1) / total) * 100

  return (
    <div className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 lg:py-16">
        {/* Top bar: title + progress */}
        <div className="mb-6 flex flex-col gap-3 md:mb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-industrial-orange-500">
              Ladeos Stories
            </p>
            <h1 className="font-display text-2xl font-bold md:text-3xl">
              Tamuno: When Anger Cost a Future
            </h1>
          </div>
          <div className="text-sm text-gray-400">
            Slide <span className="text-white">{index + 1}</span> of {total}
          </div>
        </div>

        <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-gray-800 md:mb-8">
          <div
            className="h-full bg-industrial-orange-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Slide stage */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 gap-0 md:grid-cols-2"
            >
              {/* Image (with placeholder fallback) */}
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-800 to-gray-950 md:aspect-auto md:min-h-[520px]">
                {imageFailed ? (
                  <div className="m-6 flex h-full w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-700 p-6 text-center">
                    <svg
                      className="mb-4 h-12 w-12 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Image placeholder
                    </p>
                    <p className="mb-2 max-w-xs text-sm text-gray-400">{slide.imageLabel}</p>
                    <p className="font-mono text-[10px] text-gray-600">{slide.image}</p>
                  </div>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    className="h-full w-full object-cover"
                    onError={() => setFailed((f) => ({ ...f, [index]: true }))}
                  />
                )}
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                {slide.kicker && (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-industrial-orange-500">
                    {slide.kicker}
                  </p>
                )}
                <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                  {slide.title}
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-gray-200 md:text-lg">
                  {slide.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between gap-4 md:mt-8">
          <button
            onClick={prev}
            disabled={index === 0}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:border-industrial-orange-500 hover:text-industrial-orange-500 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-gray-700 disabled:hover:text-white md:px-6 md:py-3 md:text-base"
            aria-label="Previous slide"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          {/* Dots */}
          <div className="hidden items-center gap-2 sm:flex">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? 'w-8 bg-industrial-orange-500'
                    : 'w-2 bg-gray-700 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={index === total - 1}
            className="inline-flex items-center gap-2 rounded-lg bg-industrial-orange-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-industrial-orange-600 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-industrial-orange-500 md:px-6 md:py-3 md:text-base"
            aria-label="Next slide"
          >
            Next
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          Tip: use the ← and → arrow keys to navigate.
        </p>
      </div>
    </div>
  )
}
