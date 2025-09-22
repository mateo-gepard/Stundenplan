import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0;
`;

export const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: 80px repeat(5, 1fr);
  gap: 1px;
  background: #e5e5e7;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  margin-top: 2rem;
`;

export const TimeColumn = styled.div`
  background: #f5f5f7;
  position: relative;
  z-index: 1;
`;

export const DayColumn = styled.div`
  background: #ffffff;
  height: 720px; // 12 hours * 60px per hour
  position: relative;
  border-left: 1px solid #e5e5e7;
`;

export const DayHeader = styled.div`
  background: #f5f5f7;
  padding: 0.75rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
  color: #1d1d1f;
  border-bottom: 1px solid #e5e5e7;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const TimeSlot = styled.div`
  height: 60px;
  padding: 0.5rem;
  text-align: right;
  color: #6e6e73;
  font-size: 0.875rem;
  border-top: 1px solid #e5e5e7;
  
  &:first-of-type {
    border-top: none;
  }
`;

export const ClassCard = styled.div<{ color?: string }>`
  position: absolute;
  left: 4px;
  right: 4px;
  padding: 0.75rem;
  background: ${props => props.color || '#ffffff'};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-size: 0.85rem;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    z-index: 2;
  }
  
  h3 {
    margin: 0 0 0.25rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: #1d1d1f;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  p {
    margin: 0 0 0.15rem;
    font-size: 0.75rem;
    color: #424245;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.3;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: #6e6e73;
  font-size: 0.9rem;
`;
