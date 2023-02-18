module.exports = {
    rootDir: '../',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/config/mocks/styleMock.js',
        '\\.(gif|ttf|eot|svg)$': '<rootDir>/config/mocks/fileMock.js',
    },
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js|jsx)',
        '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)',
    ],
    transformIgnorePatterns: ['node_modules', 'dist', 'build'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: './coverage/html-report',
                filename: 'report.html',
            },
        ],
    ],
    collectCoverageFrom: [
        'src/**/*.{js,ts,jsx,tsx}',
        '!src/types/*.{js,jsx,ts,tsx}',
        '!src/index.ts',
    ],
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],

    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
};
