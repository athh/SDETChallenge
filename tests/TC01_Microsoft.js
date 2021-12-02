module.exports = {
  before: function (browser) {
      //Declaring Global Timeout
      browser
          .globals.waitForConditionTimeout = 7000
  },
  'Main': function (browser) {
      var main = browser.page.main()
      main
        .navigate()
        .waitForElementVisible('@menu_bar', 10000)

        .assert.visible('@office_menu')
        .assert.visible('@windows_menu')
        .assert.visible('@surface_menu')
        .assert.visible('@xbox_menu')
        .click('@overflow_menu')
        .assert.visible('@deals_menu')          
        .assert.visible('@support_menu')

        .click('@windows_menu')
  },
  'Windows': function (browser) {
      var windows = browser.page.windows()
      windows
        .waitForElementVisible('@menu_bar')
        .click('@windowsOS_menu')
        .click('@windows10_menu')
        .click('@windows10_menu')             
        .useXpath()
        .getAttribute('//*[@id="uhf-g-nav"]/ul/li[2]/div/ul/li[1]/ul', 'textContent', function(result){
          console.log("Dropdown: ", result.value);
        })

        .useCss()
        .click('@search_button')
        .waitForElementVisible('@search_input')
        .setValue('@search_input', 'Visual Studio')
        .waitForElementVisible('@search_results')
        .click('@first_result')
   
        .pause(1000)


  },
  'Visual Studio': function (browser) {
    var price1 = 0
    browser

      .useXpath()
      browser.isVisible('//*[@id="geo-selector-modal"]/div/div/div[3]/div/div[1]/div[1]/button[1]', function(result) {
        if (result.value) {
          browser.click('//*[@id="geo-selector-modal"]/div/div/div[1]/button[1]')
        }
      })

      .pause(500)

      browser.isVisible('//*[@id="emailSup-modal"]/div/div/div[1]/button', function(result) {          
        if (result.value) {
          browser.click('//*[@id="emailSup-modal"]/div/div/div[1]/button')
        } 
      })
      
      .useXpath().waitForElementVisible('//*[@id="rootContainer_BuyBox"]/section/div[1]/div[3]/div/p/span') 
      browser.getAttribute('//*[@id="rootContainer_BuyBox"]/section/div[1]/div[3]/div/p/span', 'innerHTML', function(r) { 
        price1 = r.value
      })

      browser.waitForElementVisible('//*[@id="rootContainer_BuyBox"]/section/div[1]/div[3]/div/div/div/a')
      .click('//*[@id="rootContainer_BuyBox"]/section/div[1]/div[3]/div/div/div/a')
      
  },
  'Checkout': function (browser) {
    var price1 = 0
    browser
  
      browser.useXpath().getAttribute('//*[@id="store-cart-root"]/div/div/div/section[1]/div/div/div/div/div/div[2]/div[2]/div[2]/div/span/span[1]', 'innerHTML', function(r) { 
        price1 = r.value
      })

      browser.getAttribute('//*[@id="store-cart-root"]/div/div/div/section[2]/div/div/div[1]/div/span[1]/span[2]/div/span/span[2]/span', 'innerHTML', function(r) { 
        browser.assert.equal(r.value, price1) 
      })
      browser.getAttribute('//*[@id="store-cart-root"]/div/div/div/section[2]/div/div/div[2]/div/span/span[2]/strong/span', 'innerHTML', function(r) { 
        browser.assert.equal(r.value, price1) 
      })
    
      browser.useXpath().click('//*[@id="store-cart-root"]/div/div/div/section[1]/div/div/div/div/div/div[2]/div[2]/div[1]/select')
      browser.useXpath().click('//*[@id="store-cart-root"]/div/div/div/section[1]/div/div/div/div/div/div[2]/div[2]/div[1]/select/option[20]')
      
      .pause(1000)
      browser.getAttribute('//*[@id="store-cart-root"]/div/div/div/section[2]/div/div/div[2]/div/span/span[2]/strong/span', 'innerHTML', function(r) { 
        browser.assert.equal(r.value, '$23,980.00') 
      })
      

      browser.saveScreenshot('./screenshots/final_microsoft.png')

    },

  after: function (browser) {
      browser.end();
  }
}
