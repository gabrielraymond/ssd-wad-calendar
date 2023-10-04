export function cleanUpParams(params = {}, excludeEmptyValue = true) {
  const result = {};

  Object.entries(params).forEach((param) => {
    if (excludeEmptyValue) {
      if (param[1]) result[param[0]] = param[1];
    } else {
      result[param[0]] = param[1];
    }
  });

  return result;
}

export function paramsToString(
  params = {},
  excludeEmptyValue = true,
  sort = true
) {
  const cleanParams = cleanUpParams(params, excludeEmptyValue);
  const paramsArray = [];

  Object.entries(cleanParams).forEach((param) => {
    paramsArray.push(`${param[0]}=${param[1]}`);
  });

  if (sort) paramsArray.sort();

  return paramsArray.length ? `?${paramsArray.join("&")}` : "";
}

export function getRandomColor() {
  // Generate random values for red, green, and blue components
  const r = Math.floor(Math.random() * 256); // 0 to 255
  const g = Math.floor(Math.random() * 256); // 0 to 255
  const b = Math.floor(Math.random() * 256); // 0 to 255

  // Construct the CSS color string
  const color = `rgb(${r},${g},${b})`;

  return color;
}

const tailwindColors = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
];

export function getRandomTailwindColor() {
  const randomIndex = Math.floor(Math.random() * tailwindColors.length);
  return tailwindColors[randomIndex];
}

export function convertTo12HourFormat(time24) {
  // Split the time string into hours and minutes
  const [hours, minutes] = time24.split(":").map(Number);

  // Determine if it's AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  let hours12 = hours % 12;
  hours12 = hours12 === 0 ? 12 : hours12; // Handle midnight (00:00) as 12 AM

  // Create the formatted time string
  const time12 = `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;

  return time12;
}
