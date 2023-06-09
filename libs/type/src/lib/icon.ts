// icon.ts
export const iconMap = {
  home: '\\e900',
  pencil7: '\\e914',
  image: '\\e93b',
  album: '\\e950',
  'clapboard-play': '\\e959',
  'file-plus2': '\\e9a2',
  'file-download2': '\\e9a6',
  location3: '\\ea3a',
  clock4: '\\ea50',
  fire: '\\ebe8',
  briefcase3: '\\ec04',
  airplane: '\\ec05',
  target: '\\ec2b',
  power: '\\ec48',
  'eye-blocked3': '\\ecb5',
  eye4: '\\ecb6',
  heart5: '\\ecec',
  wondering2: '\\ed1f',
  frustrated2: '\\ed23',
  plus2: '\\ed5b',
  minus2: '\\ed5c',
  play4: '\\ed85',
  stop2: '\\ed87',
  'arrow-right': '\\edbb',
  'arrow-up6': '\\edcc',
} as const

export const iconSizeMap = {
  xxs: 8,
  xs: 12,
  s: 16,
  m: 20,
  l: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const

export type TIconType = keyof typeof iconMap
export type TIconSizeType = keyof typeof iconSizeMap
