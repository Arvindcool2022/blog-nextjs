import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

const formatDate = date => {
  let formattedDate;
  if (date.length <= 11) formattedDate = date;
  else {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];

    // Parse the input string to extract the date components
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const monthIndex = dateObj.getMonth();
    const year = dateObj.getFullYear();

    // Format the date components as desired
    formattedDate = `${day} ${months[monthIndex]} ${year}`;
  }

  return formattedDate;
};

export { cn, formatDate };
