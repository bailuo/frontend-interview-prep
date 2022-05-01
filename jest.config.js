export default {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/**/__tests__/*.test.*'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testPathIgnorePatterns: ['/node_modules/'],
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: ['node_modules', 'src/database', 'src/test', 'src/types', 'dist'],
    reporters: ['default'],
    globals: {
        'ts-jest': {
            diagnostics: {
                warnOnly: true,
                ignoreCodes: [2571, 6031, 18003, 151001],
            },
        },
    },
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
};
