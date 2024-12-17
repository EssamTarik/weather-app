const formatDateTime = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "long", // Full weekday name, e.g., "Sunday"
    hour: "2-digit", // 2-digit hour
    minute: "2-digit", // 2-digit minutes
    hour12: false, // Use 24-hour format
  });
}

export default formatDateTime;