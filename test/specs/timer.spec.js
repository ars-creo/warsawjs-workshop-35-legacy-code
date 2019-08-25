const Timer = require('../../src/Pomodoro-Clock/timer');

console.log('Timer', Timer);

describe('Timer', () => {
    let $item;
    beforeEach(() => {
        $item = document.createElement('ciasteczko');
        timer = new Timer();
    })
    describe('minusFunc', () => {
        it('should reduce value', () => {
            // Arrange
            $item.textContent = '76';
            // Act
            timer.decreaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('75');
            // Teardown
            $item = null;
        });
        it('should returns MINIMUM_CLOCK_VALUE when pass number out of range', () => {
            $item.textContent = '-1';
            timer.decreaseElementNumber($item);
            expect($item.textContent).toEqual('0');
        });
    });
    describe('plusFunc', () => {
        it('should increase value', () => {
            $item.textContent = '100';
            timer.increaseElementNumber($item);
            expect($item.textContent).toEqual('60');
        });
        it('should returns MAXIMUM_CLOCK_VALUE when pass number out of range', () => {
            $item.textContent = '100';
            timer.increaseElementNumber($item);
            expect($item.textContent).toEqual('60');
        });
    });
    describe('startTimer', () => {
        it('should call "timeCounter', () => {
            const $break = document.createElement('break');
            const $session = document.createElement('session');
            timer.timeCounter = jest.fn();
            jest.spyOn(timer, 'timeCounter');
            timer.startTimer($break, $session);
            expect(timer.timeCounter).toHaveBeenCalled();
        });
    });
});
