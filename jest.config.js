module.exports = {
  // Use the basic Node environment so tests run without needing jsdom
  testEnvironment: 'node',
  setupFiles: ['./test-setup.js'],
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { presets: ['next/babel'] }]
  },
  moduleNameMapper: {
    '\\.(svg|png|jpg|jpeg|gif|webp)$': '<rootDir>/test-file-stub.js'
  }
};
