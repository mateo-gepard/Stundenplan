const dayToNumber = (day: string): number => {
  const days: { [key: string]: number } = {
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5
  };
  return days[day] || 1;
};

import type { Class } from '../types/schedule';

export const parseCSV = (csvContent: string): Class[] => {
  const lines = csvContent.split('\n');
  
  return lines
    .slice(1) // Skip header
    .filter(line => line.trim()) // Skip empty lines
    .map((line, index) => {
      const [day, startTime, endTime, subject, teacher, course, room, notes] = line.split(',');
      
      // Skip entries marked as unsure or with question marks
      if (notes?.includes('UNSURE') || subject?.includes('?')) {
        return null;
      }

      const classItem: Class = {
        id: `class-${index + 1}`,
        subject: subject?.trim() || 'Unknown',
        teacher: teacher?.trim() || 'TBD',
        room: room?.trim() || 'TBD',
        startTime: startTime?.trim() || '00:00',
        endTime: endTime?.trim() || '00:00',
        dayOfWeek: dayToNumber(day?.trim()),
        course: course?.trim()
      };

      return classItem;
    })
    .filter((item): item is Class => item !== null); // Remove null entries
};

export const readScheduleFile = async (filePath: string): Promise<string> => {
  try {
    const response = await fetch(filePath);
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Error reading schedule file:', error);
    throw error;
  }
};
