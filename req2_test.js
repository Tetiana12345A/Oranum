
const assert = require('assert');

Feature('Searching for partial text');

Scenario('test partial search', async({ I }) => {
    I.amOnPage('/');
    I.click("$button-header-search");
    I.fillField('find psychics...', 'Matt');
    I.waitForElement("$search-result-list", 20);
    const results = await I.grabTextFromAll('$search-result-list');
    
    results[0].split('\n').forEach((item) => {
        assert.match(item, /matt/i); 
    });
});



