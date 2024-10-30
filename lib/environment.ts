type Environment = "production" | "development";

export function getEnvironment(): Environment {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }

  return "development";
}
