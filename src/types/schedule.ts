export interface Class {
  id: string;
  subject: string;
  teacher: string;
  room: string;
  startTime: string;
  endTime: string;
  dayOfWeek: number; // 1-5, where 1 is Monday
  color?: string;
  course?: string;
}

export type WeekSchedule = Class[];
