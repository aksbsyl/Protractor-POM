describe("mysuite", function(){
        
    it("validate login", function(){
        
        browser.get("http://cafetownsend-angular-rails.herokuapp.com/login");
        browser.sleep(3000);
        browser.manage().window().maximize();

        expect(browser.getTitle()).toBe("CafeTownSend-AngularJS-Rails");

        Element(by.model("user.name")).sendkeys("Luke");
        Element(by.model("user.password")).sendkeys("skywalker");
        Element(by.buttonText("Login")).click();

        browser.sleep(3000);

        var greetmsg = element(by.id("greetings"));
        expect(greetmsg.getText()).toBe("Hello Luke");

        var logout = element(by.css('[ng-click="logout()"]'));
        expect(logout.isPresent()).toBe(true);

        logout.click();




        })
})