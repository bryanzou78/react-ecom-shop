module.exports = {
    testEnvironment: 'jsdom', 
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    setupFiles: ['./src/jest.setup.js'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest', 
    },
}