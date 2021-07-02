describe("testsuite", function(){

    it("framestest", function(){
    browser.waitForAnuglarEnabled(false);
    browser.manage().window().maximize();

    browser.switchTo().frame("packageListFrame"); //switch to 1st frame
    element(by.linkText('org.openqa.selenium')).click();
    browser.sleep(3000);
    broswer.switchTo().defaultContent();

    browser.switchTo().frame("packageFrame"); //switch to 2nd frame
    element(by.linkText('WebDriver')).click();
    browser.sleep(3000);
    broswer.switchTo().defaultContent();

    browser.switchTo().frame("classFrame"); //switch to 2nd frame
    element(by.xpath("//div[@class='topNav']//a[contaings(text(),'Index')]")).click();
    browser.sleep(3000);



    })
})