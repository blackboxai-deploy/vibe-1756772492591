export const beeColors = {
  // Primary bee-themed colors
  golden: '#FFD700',
  amber: '#FFA500',
  honey: '#FFBF00',
  deepBlack: '#1A1A1A',
  softCream: '#FFF8DC',
  
  // Additional hive colors
  darkAmber: '#CC8400',
  lightGold: '#FFF44F',
  bronzeGold: '#CD7F32',
  charcoal: '#36454F',
  ivory: '#FFFFF0',
  
  // Gradient stops
  sunlightGradient: [
    '#FFF8DC', // Light cream
    '#FFBF00', // Warm honey  
    '#FFA500', // Rich amber
    '#CC8400'  // Dark amber
  ],
  
  // Shadow and depth colors
  shadowColor: 'rgba(26, 26, 26, 0.3)',
  glowColor: 'rgba(255, 215, 0, 0.6)',
  highlightColor: 'rgba(255, 255, 255, 0.8)'
} as const;

export const beeGradients = {
  sunlightFilter: `linear-gradient(135deg, ${beeColors.softCream} 0%, ${beeColors.honey} 50%, ${beeColors.amber} 100%)`,
  honeycombDepth: `radial-gradient(circle, ${beeColors.golden} 0%, ${beeColors.darkAmber} 70%, ${beeColors.charcoal} 100%)`,
  backgroundHive: `linear-gradient(180deg, ${beeColors.ivory} 0%, ${beeColors.softCream} 30%, ${beeColors.honey} 100%)`,
  beeGlow: `radial-gradient(circle, ${beeColors.glowColor} 0%, transparent 70%)`
} as const;

export const threejsColors = {
  golden: 0xFFD700,
  amber: 0xFFA500,
  honey: 0xFFBF00,
  deepBlack: 0x1A1A1A,
  softCream: 0xFFF8DC,
  darkAmber: 0xCC8400,
  lightGold: 0xFFF44F,
  bronzeGold: 0xCD7F32,
  charcoal: 0x36454F,
  ivory: 0xFFFFF0
} as const;