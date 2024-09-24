export function formatDateTime(epochDate: number) {
  const date = new Date(epochDate);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleString(undefined, options);
}

export function replaceUnderscoresWithSpaces(input: string) {
  return input.replace(/_/g, " ");
}

export function convertToTitleCase(input: string): string {
  return input
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
