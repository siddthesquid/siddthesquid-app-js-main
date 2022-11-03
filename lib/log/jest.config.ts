import type { Config } from "jest"

const config: Config = {
  testMatch: ["./src/**/*.test.{ts,tsx,js,jsx}", "./test/**/*.{ts,tsx,js,jsx}"],
  testPathIgnorePatterns: ["node_modules", "dist"],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  testTimeout: 60000,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}"],
  coveragePathIgnorePatterns: ["node_modules", "dist"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "json", "html", "cobertura", "text"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}

export default config
