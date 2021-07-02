let deerminepage = function(){

    let loginform = element(by.id("getLoginForm"));

    let loginusername = element(by.id("username"));
    let loginpassword = element(by.id("password"));
    let loginsubmit = element(by.id("submit"));

    let projectselect = element(by.xpath('//*[@id="project-jump"]/span'));
    let projectsearch = element(by.xpath('//*[@id="projects-quick-search"]'));
    let projectword = element(by.xpath('//*[@id="project-jump"]/div/div[2]/a'));

    let newissue = element(by.xpath('//*[@id="new-object"]'));
    let selectnewissue = element(by.xpath('//*[@id="main-menu"]/ul/li[1]/ul/li/a'));

    let issuesubject = element(by.xpath('//*[@id="issue_subject"]'));
    let issuedescription = element(by.xpath('//*[@id="issue_description"]'));
    let selectassignedto = element(by.xpath('//*[@id="issue_assigned_to_id"]'));
    let assignedtoid = element(by.xpath('//*[@id="issue_assigned_to_id"]/option[151]'))
    let issueduedate = element(By.id('issue_due_date'));
    let watchersoptions = element(by.xpath('//*[@id="watchers_form"]/span[2]/a'));
    let selectwatchers = element(by.xpath('//*[@id="users_for_watcher"]/label[120]'));
    let addwatchers = element(by.xpath('//*[@id="new-watcher-form"]/p[2]/input'));
    let createdeermine = element(by.xpath('//*[@id="issue-form"]/input[3]'));

    let deermineid = element(by.xpath('//*[@id="flash_notice"]/a'));

   
    this.firstofall = function(){
        browser.waitForAngularEnabled(false);
    }

    this.geturl = function(url){
        browser.get(url);
        browser.sleep(2000);
    }

    this.maximizewindow = function(){
        browser.manage().window().maximize();
        browser.sleep(100);
    }

      
    this.loginsection = function(){
        loginform.click();
        browser.sleep(500);
    }


    this.setusername = function(username){
        loginusername.sendKeys(username);
    }

    this.setpassword = function(password){
        loginpassword.sendKeys(password);
    }

    this.clicksubmit = function(){
        loginsubmit.click();
        browser.sleep(1000);
    }


    this.selectproject = function(){
        projectselect.click();
        browser.sleep(100);
    }

    this.setproject = function(projectname){
        projectsearch.sendKeys(projectname);
        browser.sleep(1000);
    }

    this.verifyproject = function(){
        projectword.click();
        browser.sleep(1000); 
    }

    
    this.selectissue = function(){
        newissue.click();
        browser.sleep(100);
    }

    this.setissue = function(){
        selectnewissue.click();
        browser.sleep(1000); 
    }


    this.setsubject = function(subject){
        issuesubject.sendKeys(subject);
    }

    this.setdescription = function(description){
        issuedescription.sendKeys(description);
        browser.sleep(100);
    }

    this.assignedto = function(){
        selectassignedto.click();
        browser.sleep(100);
    }

    this.setassignedto = function(){
        assignedtoid.click();
        browser.sleep(1000);
    }

    this.setissueduedate = function(duedate){
        issueduedate.sendKeys(duedate);
        browser.sleep(100);
    }

    this.clickwatchers = function(){
        watchersoptions.click();
        browser.sleep(3000);
    }

    this.addwatchers = function(){
        selectwatchers.click();
    }

    this.setwatchers = function(){
        addwatchers.click();
        browser.sleep(5000);
    }


    this.submitform = function(){
        createdeermine.click();
        browser.sleep(5000);
    }

    this.validatedeermine = function(){
        browser.sleep(3000);    
            deermineid.getText().then(function(text) {
            console.log("\n \nDeermine created under: " +text);
          });
        browser.sleep(5000);                 
    }

};

module.exports = new deerminepage();
