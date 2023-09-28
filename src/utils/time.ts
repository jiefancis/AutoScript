import dayjs from 'dayjs';

export const formatTime = (timestamp: number | string) => {
  return dayjs(timestamp).format('YYYY/MM/DD HH:mm');
};
