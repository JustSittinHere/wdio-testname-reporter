describe('Test Suite 1', () => {
    it('should pass', () => {
        browser.url('');
        expect(browser.getTitle()).not.toBeUndefined();
    });

    it('should fail', () => {
        browser.url('');
        expect(browser.getTitle()).toBeUndefined();
    });

    xit('should skip', () => {
    });
})