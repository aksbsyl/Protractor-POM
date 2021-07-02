let deerminepage = require ('../pages/deerminepage')
describe("mysuite", function() {

    it("validate URL", function() {
        deerminepage.firstofall();
        deerminepage.geturl('https://deermine.qc.deerwalk.com/');
        deerminepage.maximizewindow();
        deerminepage.loginsection();
        deerminepage.setusername("aakash.bashyal@cedargate.com");
        deerminepage.setpassword("V@mp1r330");
        deerminepage.clicksubmit();        
    });

    it("validate dropdown", function() {
        deerminepage.firstofall();
        deerminepage.selectproject();        
        deerminepage.setproject("Item Requisition");
        deerminepage.verifyproject();             
    });

    it("validate new issue", function() {
        deerminepage.firstofall();
        deerminepage.selectissue();
        deerminepage.setissue();       
        deerminepage.setsubject("Request for requisition of a headphone");
        deerminepage.setdescription("Hello Manash Daa, \n"+"\n Could you please approve the request for requisition of a headphone.");
        deerminepage.assignedto();
        deerminepage.setassignedto();
        deerminepage.setissueduedate("12/19/2021");        
        deerminepage.clickwatchers();
        deerminepage.addwatchers();
        deerminepage.setwatchers();
        deerminepage.submitform();
    });

    it("validate created deermine", function() {
        deerminepage.firstofall();
        deerminepage.validatedeermine();    
    });

  
  });