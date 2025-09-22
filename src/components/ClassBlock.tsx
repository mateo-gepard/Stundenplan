import type { Class } from '../types/schedule';
import { formatTime } from '../utils/helpers';
import { ClassCard } from './styles';

interface ClassBlockProps {
  class: Class;
}

const ClassBlock = ({ class: classItem }: ClassBlockProps) => {
  // Calculate position and height based on time
  const getPosition = () => {
    const [startHour, startMinute] = classItem.startTime.split(':').map(Number);
    const [endHour, endMinute] = classItem.endTime.split(':').map(Number);
    
    const startPosition = (startHour - 8) * 60 + startMinute;
    const duration = (endHour - startHour) * 60 + (endMinute - startMinute);
    
    return {
      top: `${startPosition}px`,
      height: `${duration}px`
    };
  };

  const { top, height } = getPosition();

  return (
    <ClassCard
      style={{ top, height }}
      color={classItem.color}
    >
      <h3>{classItem.subject}</h3>
      <p>{formatTime(classItem.startTime)} - {formatTime(classItem.endTime)}</p>
      <p>{classItem.teacher} {classItem.course ? `(${classItem.course})` : ''}</p>
      <p>Room {classItem.room}</p>
    </ClassCard>
  );
};

export default ClassBlock;
