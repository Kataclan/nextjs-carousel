module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](node_modules|.next)[/\\\\]',
    '<rootDir>/src/__tests__/__mocks__',
    '<rootDir>/src/__tests__/testUtils.ts',
    '<rootDir>/src/__tests__/setupTests.ts',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setupTests.ts'],
}
