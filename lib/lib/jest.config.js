/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  // preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts", "src/**/*.tsx"],
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["/node_modules/", "dist"],
  coverageReporters: ["text", "json", "html", "cobertura"],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
