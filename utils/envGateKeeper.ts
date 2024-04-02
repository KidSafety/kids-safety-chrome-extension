// should exactly match the value in .env config
export type EnvironmentType = "local" | "dev" | "int" | "prod"

export function isIntOrProdEnvironment(): boolean {
  return ["int", "prod"].includes(process.env.PLASMO_PUBLIC_GATHER_ENV || "")
}

export function isIntEnvironment(): boolean {
  return process.env.PLASMO_PUBLIC_GATHER_ENV === "int"
}

export function isProdEnvironment(): boolean {
  return process.env.PLASMO_PUBLIC_GATHER_ENV === "prod"
}

/**
 * DO NOT commit code with this call unless you have a solid reason
 */
export function isLocalEnvironment(): boolean {
  return process.env.PLASMO_PUBLIC_GATHER_ENV === "local"
}

export function isDevEnvironment(): boolean {
  return isIntEnvironment() || isLocalEnvironment()
}
