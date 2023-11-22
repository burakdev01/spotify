export function secondsToTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let timeString = "";

  if (hours > 0) {
    timeString += hours + ":";
  }

  timeString +=
    (hours > 0 ? String(minutes).padStart(2, "0") : minutes) +
    ":" +
    (remainingSeconds < 10 ? "0" : "") +
    remainingSeconds;

  return timeString;
}
