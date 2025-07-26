const sizesMap = {
  ssss: '8px',
  xxxxs: '12px',
  sss: '16px',
  xxxs: '18px',
  ss: '20px',
  xxs: '24px',
  xs: '32px',
  s: '48px',
  m: '64px',
  l: '80px',
  xl: '112px'
} as const;

export const getSize = (size: string = 'xxs') => {
  return sizesMap[size as keyof typeof sizesMap] || size;
};
