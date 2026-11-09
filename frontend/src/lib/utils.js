export function normalizeRepoName(value = "") {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function slugify(value = "") {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function formatDate(value) {
  if (!value) return "Recently updated";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Recently updated";
  return new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(date);
}

export function compactNumber(value = 0) {
  return new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}
