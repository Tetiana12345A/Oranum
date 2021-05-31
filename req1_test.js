//did not find Show More button , so check duplicates for new psychics when scroll 

const assert = require('assert');

Feature('show more');

Scenario('check unique influencers when scroll', async ({ I }) => {
    I.amOnPage('/en/search/Love');
    I.seeNumberOfVisibleElements('$influencer-name', 20);
    I.scrollPageToBottom();

    I.seeNumberOfVisibleElements('$influencer-name', 40);
    const influencers = await I.grabTextFromAll('$influencer-name');
    
    const hasDubliates = influencers.filter((influencer, index) => {
        return influencers.indexOf(influencer) !== index;
    });

    assert.strictEqual(hasDubliates.length, 0);
});
