import { format, formatDistanceToNow, parseISO } from "date-fns";
import { vi } from "date-fns/locale";

export const formatDate = (date, formatString = "dd/MM/yyyy") => {
  if (!date) return "";

  const dateObj = typeof date === "string" ? parseISO(date) : date;
  return format(dateObj, formatString, { locale: vi });
};

export const formatDateLong = (date) => {
  return formatDate(date, "dd MMMM yyyy");
};

export const formatRelativeTime = (date) => {
  if (!date) return "";

  const dateObj = typeof date === "string" ? parseISO(date) : date;
  return formatDistanceToNow(dateObj, {
    addSuffix: true,
    locale: vi,
  });
};

export const formatReadingTime = (content) => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);

  return readingTime === 1 ? "1 phút đọc" : `${readingTime} phút đọc`;
};

export const formatViewCount = (count) => {
  if (count < 1000) return count.toString();
  if (count < 1000000) return `${(count / 1000).toFixed(1)}K`;
  return `${(count / 1000000).toFixed(1)}M`;
};

export const capitalizeFirst = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatCurrency = (amount, currency = "VND") => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: currency,
  }).format(amount);
};
