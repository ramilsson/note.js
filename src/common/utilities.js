export function getRandomId(length = 8) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
}

export function formatDate(str) {
  const date = new Date(str);
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  return formatter.format(date);
}