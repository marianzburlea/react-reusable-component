export const textAsList = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'span',
  'a',
] as const
export const boxAs = ['div', 'main', 'span', 'section', 'aside', 'nav'] as const

export type TTextAsType = (typeof textAsList)[number]
export type TBoxAsType = (typeof boxAs)[number]
