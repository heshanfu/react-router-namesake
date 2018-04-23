module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/__tests__/setup.ts",
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
};
