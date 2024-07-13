"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
describe('Main Test', () => {
    let originalConsoleLog;
    let capturedOutput;
    beforeEach(() => {
        // Capture console.log output
        capturedOutput = [];
        originalConsoleLog = console.log;
        console.log = (message) => {
            capturedOutput.push(message);
        };
    });
    afterEach(() => {
        // Restore console.log
        console.log = originalConsoleLog;
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
        (0, main_1.run)(mockArgs);
        // Assert
        expect(capturedOutput[0].trim()).toEqual(expectedParticipationResult); // Trim and compare
    });
});
