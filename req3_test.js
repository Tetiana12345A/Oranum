//test check searching for full text  

const assert = require('assert');

Feature('Searching for full text');

Scenario('test full search', async({ I }) => {
    I.amOnPage('/');
    I.click("$button-header-search");
    I.fillField('find psychics...', 'MattWarren');
    let result = await I.grabTextFrom("$search-result-list");
    assert.strictEqual('MattWarren', result);
    I.click('MattWarren');
    I.seeInCurrentUrl('/en/profile/MattWarren');
    I.seeElement('$influencer-name-text');   
});

