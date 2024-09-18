type Environment = "production" | "preview" | "development";

export function getEnvironment(): Environment {
  if (process.env.VERCEL_ENV === "production") {
    return "production";
  }

  if (process.env.VERCEL_ENV === "preview") {
    return "preview";
  }

  return "development";
}
