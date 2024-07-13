import { run } from "./main";

describe('Main Test', () => {
    let consoleLogSpy: jest.SpyInstance;
    let capturedOutput: string[];

    beforeEach(() => {
        // Replace console.log with a spy to capture all logs
        capturedOutput = [];
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation((message) => {
            capturedOutput.push(message) // Capture each log with a newline
        });
    });

    afterEach(() => {
        // Restore original console.log implementation after each test
        consoleLogSpy.mockRestore();
    });

    it('should call run function with valid argument', () => {
        // Arrange
        const mockArgs = ['node', 'main.js', 'example-data/survey.csv'];
        const expectedParticipationResult = `
    Participation

    Participants: 6
    Submitted: 5 (83.3%)

    I like the kind of work I do. 4.6
    In general, I have the resources (e.g., business tools, information, facilities, IT or functional support) I need to be effective. 5.0
    We are working at the right pace to meet our goals. 5.0
    I feel empowered to get the work done for which I am responsible. 3.6
    I am appropriately involved in decisions that affect my work. 3.6
    `.trim();

        // Act
        run(mockArgs);

        // Assert
        //console.log output include a \n at the end of each log statement
        expect(capturedOutput.join('\n').trim()).toEqual(expectedParticipationResult); // Trim and compare
    });
});
