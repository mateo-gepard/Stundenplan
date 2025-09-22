import type { WeekSchedule } from '../types/schedule';
import { Container, DayColumn, DayHeader, EmptyState, Header, ScheduleGrid, TimeColumn, TimeSlot, Title } from './styles';
import ClassBlock from './ClassBlock';

interface ScheduleProps {
  schedule: WeekSchedule;
}

const Schedule = ({ schedule }: ScheduleProps) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = Array.from({ length: 11 }, (_, i) => `${i + 8}:00`);

  return (
    <Container>
      <Header>
        <Title>Class Schedule</Title>
      </Header>
      
      <ScheduleGrid>
        <TimeColumn>
          <DayHeader></DayHeader>
          {timeSlots.map(time => (
            <TimeSlot key={time}>{time}</TimeSlot>
          ))}
        </TimeColumn>

        {days.map((day, index) => (
          <DayColumn key={day}>
            <DayHeader>{day}</DayHeader>
            {schedule
              .filter(classItem => classItem.dayOfWeek === index + 1)
              .map(classItem => (
                <ClassBlock key={classItem.id} class={classItem} />
              ))}
          </DayColumn>
        ))}
      </ScheduleGrid>
      
      {schedule.length === 0 && (
        <EmptyState>
          No classes scheduled. Add some classes to get started.
        </EmptyState>
      )}
    </Container>
  );
};

export default Schedule;
