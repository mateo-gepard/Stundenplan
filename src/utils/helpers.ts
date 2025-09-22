import { format, parse } from 'date-fns';

export const formatTime = (time: string): string => {
  const date = parse(time, 'HH:mm', new Date());
  return format(date, 'h:mm a');
};

export const getRandomColor = (): string => {
  const colors = [
    '#FF6B6B', // Apple-inspired Red
    '#4ECDC4', // Teal
    '#45B7D1', // Light Blue
    '#96CEB4', // Sage Green
    '#FFEEAD', // Soft Yellow
    '#D4A5A5', // Dusty Rose
    '#9EA1D4', // Lavender
    '#A8E6CF', // Mint
    '#FFD3B6', // Peach
    '#FF8B94', // Coral
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
