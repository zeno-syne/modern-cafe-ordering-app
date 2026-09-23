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
    statusLabel: 'Buka Sekarang',
    detailLabel: 'Tutup jam 01.00 WIB',
    currentTimeWIB: '',
  });

  useEffect(() => {
    const calculateStatus = () => {
      // Get current date/time converted to Asia/Jakarta (WIB)
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
      let statusLabel = 'Sedang Istirahat';
      let detailLabel = 'Buka jam 09.00 WIB';

      if (hour >= 9) {
        // Evening / night of current day
        isOpen = true;
        const closingHour = isWeekendDay ? '02.00' : '01.00';
        statusLabel = 'Buka Sekarang';
        detailLabel = `Tutup jam ${closingHour} WIB`;
      } else {
        // Early morning hours (00:00 - 08:59)
        // Check if yesterday's session is still active
        // If yesterday was Friday or Saturday, close is 02:00, otherwise 01:00
        const isLateWeekendSession = weekdayStr === 'Sat' || weekdayStr === 'Sun';
        const lateClosingHour = isLateWeekendSession ? 2 : 1;

        if (hour < lateClosingHour) {
          isOpen = true;
          statusLabel = 'Buka Sekarang';
          detailLabel = `Tutup jam 0${lateClosingHour}.00 WIB`;
        } else {
          isOpen = false;
          statusLabel = 'Sedang Istirahat';
          detailLabel = 'Buka kembali jam 09.00 WIB';
        }
      }

      const timeFormatted = `${hourStr.padStart(2, '0')}:${minuteStr.padStart(2, '0')} WIB`;

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
