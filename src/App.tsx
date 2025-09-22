import { useEffect, useState } from 'react';
import Schedule from './components/Schedule';
import type { Class, WeekSchedule } from './types/schedule';
import { getRandomColor } from './utils/helpers';
import { parseCSV } from './utils/csvParser';

import { parseCSV, readScheduleFile } from './utils/csvParser';

function App() {
  const [schedule, setSchedule] = useState<WeekSchedule>([]);

  useEffect(() => {
    const loadSchedule = async () => {
      try {
        const response = await fetch('/Abgeglichener_Stundenplan__vorl_ufig_.csv');
        const text = await response.text();
        
        const parsedSchedule = parseCSV(text);
        const scheduleWithColors = parsedSchedule.map((classItem) => ({
          ...classItem,
          color: getRandomColor()
        }));
        
        setSchedule(scheduleWithColors);
      } catch (error) {
        console.error('Error loading schedule:', error);
      }
    };

    loadSchedule();
  }, []);

  return (
    <Schedule schedule={schedule} />
  );
}

export default App;
