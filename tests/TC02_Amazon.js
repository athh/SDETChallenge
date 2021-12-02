module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser
            .globals.waitForConditionTimeout = 7000
    },
    'Main': function (browser) {
        var main = browser.page.amazon_main()
        main
            .navigate()
            .waitForElementVisible('@menu_right')
            //.waitForElementVisible('.nav-signin-tt.nav-flyout')
            .useXpath().click('//*[@id="nav-signin-tooltip"]/div/a')
            
    },
    'Create account': function (browser) {
        var email
        var create = browser.page.create()
        create

            var apiUrl = 'http://dummy.restapiexample.com/api/v1/employee/1'

            browser.apiGet(apiUrl, function (response) {
                var data = JSON.parse(response.body)
                browser.assert.equal(response.statusCode, '200')

                email = data.data.employee_name.replace(" ",".") + '@fake.com'
                console.log(data.data.employee_name)
                console.log(email)

                browser.setValue('//*[@id="ap_customer_name"]', data.data.employee_name)
                browser.setValue('//*[@id="ap_email"]', email)
            })             

            .pause(1000)
            .useXpath().click('//*[@id="legalTextRow"]/a[1]')      
    },
    'Help & Customer Service': function (browser) {
        var help = browser.page.help()
        help
            
        .waitForElementVisible('//*[@id="helpsearch"]')
        browser.setValue('//*[@id="helpsearch"]', 'Echo')
        .keys(browser.Keys.RETURN)

        .pause(1000)
        .click('//*[@id="a-page"]/div[2]/div[2]/div[1]/div/div[3]/div/div/h2/a')
        
        .pause(1000)
        .assert.visible('//*[@id="GUID-F3356D96-7E55-4649-8654-A18335080314__SECTION_B6C000DA815847CEB544E06C4DC86DED"]/div[1]/h4')
        .assert.visible('//*[@id="GUID-F3356D96-7E55-4649-8654-A18335080314__SECTION_867772CE4A204CEEB7578645FF059E59"]/div[1]/h4')

        browser.saveScreenshot('./screenshots/final_amazon.png')

    },

    after: function (browser) {
        browser.end();
    }
}