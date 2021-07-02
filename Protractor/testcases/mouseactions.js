describe("mysuite", function(){

    it("validate login", function(){

        browser.waitForAngularEnabled(false);
        browser.get('https://deermine.qc.deerwalk.com/');
        browser.sleep(2000);
        browser.manage().window().maximize();
                // expect(browser.getCurrentUrl()).toBe('https://deermine.qc.deerwalk.com/');     
        element(by.id("getLoginForm")).click();
        browser.sleep(1000);
        element(by.id("username")).sendKeys("aakash.bashyal@cedargate.com");
        element(by.id("password")).sendKeys("V@mp1r330");
        element(by.id("submit")).click();
        browser.sleep(1000);
        
    })

    it("mousehoveraction", function(){

        browser.waitForAngularEnabled(false);
        var home = element(by.xpath('//*[@id="top-menu"]/ul/li[1]/a'));
        var mypage = element(by.xpath('//*[@id="top-menu"]/ul/li[2]/a'));
        var projects = element(by.xpath('//*[@id="top-menu"]/ul/li[3]/a'));
        var help = element(by.xpath('//*[@id="top-menu"]/ul/li[4]/a'));
        browser.actions().mouseMove(home).mouseMove(mypage).mouseMove(projects).mouseMove(help).click().perform();
        browser.actions().mouseMove(home).doubleClick().perform();
        browser.sleep(5000)
    })

    it("mousedoubleclickaction", function(){

        browser.waitForAngularEnabled(false);
        var home = element(by.xpath('//*[@id="top-menu"]/ul/li[1]/a'));
        browser.actions().mouseMove(home).doubleClick().perform();
        browser.sleep(5000)
    })

    it("mouserightclickaction", function(){
        
        browser.waitForAngularEnabled(false);
        var mypage = element(by.xpath('//*[@id="top-menu"]/ul/li[2]/a'));
        browser.actions().click(mypage,protractor.Button.RIGHT).perform();
        browser.sleep(5000);
    })

    
    it("mousedraganddropaction", function(){

        browser.waitForAngularEnabled(false);
        var source_ele = element(by.xpath('//*[@id="top-menu"]/ul/li[1]/a'));
        var target_ele = element(by.xpath('//*[@id="top-menu"]/ul/li[2]/a'));
        browser.actions().dragAndDrop(source_ele,target_ele).perform();
        browser.sleep(5000);
    })

})