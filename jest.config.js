module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/next/'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.tsx',
        'src/**/*.ts'
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};
