describe("mysuite", function() {
    it("validate URL", function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://deermine.qc.deerwalk.com/');
        browser.sleep(2000);
        browser.manage().window().maximize();
        // expect(browser.getCurrentUrl()).toBe('https://deermine.qc.deerwalk.com/');     
        element(by.id("getLoginForm")).click();
        browser.sleep(200);
        element(by.id("username")).sendKeys("aakash.bashyal@cedargate.com");
        element(by.id("password")).sendKeys("V@mp1r330");
        element(by.id("submit")).click();
        browser.sleep(1000);
    });

    it("validate dropdown", function() {
        browser.waitForAngularEnabled(false);
        browser.sleep(1000);
        element(by.xpath('//*[@id="project-jump"]/span')).click();
        browser.sleep(100);
        element(by.xpath('//*[@id="projects-quick-search"]')).sendKeys("Item Requisition");
        browser.sleep(1000);
        element(by.xpath('//*[@id="project-jump"]/div/div[2]/a')).click();
        browser.sleep(1000);       
    });

    it("validate new issue", function() {
        browser.waitForAngularEnabled(false);
        browser.sleep(1000);
        element(by.xpath('//*[@id="new-object"]')).click();
        browser.sleep(100);
        element(by.xpath('//*[@id="main-menu"]/ul/li[1]/ul/li/a')).click();
        browser.sleep(1000);    
        
        element(by.xpath('//*[@id="issue_subject"]')).sendKeys("Request for requisition of a headphone");
        browser.sleep(100);
        element(by.xpath('//*[@id="issue_description"]')).sendKeys("Hello Manash Daa, \n"+"\n Could you please approve the request for requisition of a headphone.");
        browser.sleep(1000);

        element(by.xpath('//*[@id="issue_assigned_to_id"]')).click();
        element(by.xpath('//*[@id="issue_assigned_to_id"]/option[151]')).click();
        browser.sleep(1000);
        element(By.id('issue_due_date')).sendKeys("12/20/2021");
        browser.sleep(100);
        element(by.xpath('//*[@id="watchers_form"]/span[2]/a')).click();
        browser.sleep(3000);
        element(by.xpath('//*[@id="users_for_watcher"]/label[120]')).click();
        element(by.xpath('//*[@id="new-watcher-form"]/p[2]/input')).click();
        browser.sleep(3000);

        element(by.xpath('//*[@id="issue-form"]/input[3]')).click();    
        browser.sleep(5000);
    });

    it("validate created deermine", function() {
        browser.waitForAngularEnabled(false);
        browser.sleep(1000);
        element(by.xpath('//*[@id="flash_notice"]/a')).getText().then(function(text) {
            console.log("Deermine created under: " +text);
          });
        browser.sleep(5000);     
    });



  });