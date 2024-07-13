module.exports = {
  preset: 'ts-jest', // Use ts-jest preset
  testEnvironment: 'node', // Use Node.js environment for testing
  moduleFileExtensions: ['ts', 'js'], // Look for TypeScript and JavaScript files
  testMatch: ['**/*.test.ts'], // Look for test files ending in .test.ts
  transform: {
    '^.+\\.ts$': 'ts-jest', // Use ts-jest for TypeScript files
  },
};
