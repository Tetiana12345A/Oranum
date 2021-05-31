// test check that selecting different topics display matching psychics

const assert = require('assert');

Feature('topics match psychics');

const compare = async (I, tagName) => {
    I.amOnPage('/');
    I.click("$button-header-search");

    I.click(locate('$filter-link').withText(tagName));
    I.seeInCurrentUrl('/en/search/' + tagName);
    
    const response = await I.waitForResponse((resp) => {
        return resp.url().includes('https://api-gateway.docleradn.com/v1/guest/story/items/recommended') && resp.status() === 200;
    });

    const data = (await response.json()).data;

    I.seeNumberOfVisibleElements('$influencer-name', data.length);
    const influencers = await I.grabTextFromAll('$influencer-name');


    const hasTagsAndEqual = data.every((item, i) => {
        const hasTag = item.item.tags.some((tag) => tag.name === tagName);
        return hasTag && (item.performer.displayName === influencers[i]);
    });   

    return hasTagsAndEqual;
}

Scenario('check phisics match topics love', async ({ I }) => {
    const areEqual = await compare(I,  'Love');
    assert.strictEqual(areEqual, true);
});

Scenario('check phisics match topics tarot', async ({ I }) => {
    const areEqual = await compare(I,  'Tarot');
    assert.strictEqual(areEqual, true);
});


Scenario('check phisics match topics dreams', async ({ I }) => {
    const areEqual = await compare(I,  'Dreams');
    assert.strictEqual(areEqual, true);
});
