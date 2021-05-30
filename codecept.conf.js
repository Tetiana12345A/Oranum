const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://oranum.com',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'domcontentloaded',
      waitForTimeout: 10000,
      getPageTimeout: 20000,
      windowSize: '1200x800',
      chromium: {
        devtools: false,
        args: [
          '--disable-gpu',
          '--start-maximized',
          '--disable-dev-shm-usage',
          '--disable-setuid-sandbox',
          '--no-sandbox',
          '--incognito',
        ],
      },
    },
    REST: {
      timeout: 25000,
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Oranum',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure:{
      enabled: true
    },
    customLocator:{
      enabled: true,
      attribute: 'data-testid'
    }
  }
}