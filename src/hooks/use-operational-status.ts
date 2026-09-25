'use client';

import { useState, useEffect } from 'react';

export interface OperationalStatus {
  isOpen: boolean;
  statusLabel: string;
  detailLabel: string;
  currentTimeWIB: string;
}

export function useOperationalStatus(): OperationalStatus {
  const [status, setStatus] = useState<OperationalStatus>({
    isOpen: true,
    statusLabel: 'Open for Dine-In & Takeaway',
    detailLabel: 'Closes at 1:00 AM (GMT+7)',
    currentTimeWIB: '',
  });

  useEffect(() => {
    const calculateStatus = () => {
      // Get current date/time converted to Asia/Jakarta (GMT+7)
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour12: false,
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
      };

      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(now);

      let weekdayStr = '';
      let hourStr = '0';
      let minuteStr = '0';

      for (const p of parts) {
        if (p.type === 'weekday') weekdayStr = p.value;
        if (p.type === 'hour') hourStr = p.value;
        if (p.type === 'minute') minuteStr = p.value;
      }

      const hour = parseInt(hourStr, 10);
      const minute = parseInt(minuteStr, 10);
      const isWeekendDay = weekdayStr === 'Sat' || weekdayStr === 'Sun';

      // Determine closing hour for today
      // Weekdays: 09:00 - 01:00 next morning
      // Weekends: 09:00 - 02:00 next morning
      let isOpen = false;
      let statusLabel = 'Closed • Resting';
      let detailLabel = 'Opens at 9:00 AM (GMT+7)';

      if (hour >= 9) {
        // Evening / night of current day
        isOpen = true;
        const closingHour = isWeekendDay ? '2:00 AM' : '1:00 AM';
        statusLabel = 'Open for Dine-In & Takeaway';
        detailLabel = `Closes at ${closingHour} (GMT+7)`;
      } else {
        // Early morning hours (00:00 - 08:59)
        // Check if yesterday's late-night session is still active
        const isLateWeekendSession = weekdayStr === 'Sat' || weekdayStr === 'Sun';
        const lateClosingHour = isLateWeekendSession ? 2 : 1;

        if (hour < lateClosingHour) {
          isOpen = true;
          statusLabel = 'Open for Dine-In & Takeaway';
          detailLabel = `Closes at ${lateClosingHour}:00 AM (GMT+7)`;
        } else {
          isOpen = false;
          statusLabel = 'Closed • Resting';
          detailLabel = 'Reopens at 9:00 AM (GMT+7)';
        }
      }

      const timeFormatted = `${hourStr.padStart(2, '0')}:${minuteStr.padStart(2, '0')} GMT+7`;

      setStatus({
        isOpen,
        statusLabel,
        detailLabel,
        currentTimeWIB: timeFormatted,
      });
    };

    calculateStatus();
    // Re-check status every 60 seconds
    const interval = setInterval(calculateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return status;
}
