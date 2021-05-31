// test check livestream of any psychic

Feature('Validate Livestream as unlogged user');

Scenario('check profile is live ', ({ I }) => {
    I.amOnPage('/');
    I.click("$button-header-search"); 
    I.click(locate('$filter-link').withText('Live'));
    I.click("$influencer-name"); 
    I.seeElement(locate("$live-status-box").withText('Live'));
    I.seeInCurrentUrl('/en/chat/');
});

Scenario('check surprise trigger a Sign up ', ({ I }) => {
    I.amOnPage('/en/search/Live');
    I.click("$influencer-name"); 
    I.click('10');
    I.see('Register an account to continue');
});

Scenario('check add to favorite trigger a Sign up ', ({ I }) => {
    I.amOnPage('/en/search/Live');
    I.click("$influencer-name"); 
    I.seeElement("$live-status-box");
    I.click("$favorite-button");
    I.see('Join now!');
}); 

Scenario('check quick buy trigger a Sign up ', ({ I }) => {
    I.amOnPage('/en/search/Live');
    I.click("$influencer-name"); 
    I.seeElement("$live-status-box");
    I.click("$quick-buy-button");
    I.see('Are You a Member?');
}); 

Scenario('check get credits trigger a Sign up ', ({ I }) => {
    I.amOnPage('/en/search/Live');
    I.click('$influencer-name'); 
    I.seeElement('$live-status-box');
    I.click({xpath: '//*[contains(text(), "Get 10,000")]'});
    I.see('Are You a Member?');
}); 
