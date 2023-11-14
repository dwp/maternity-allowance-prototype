
module.exports = router => {

  // Add your routes here - above the module.exports line
  
  router.post('/beta-private/iteration-19/', function (req, res) {
  
    // clear data
    req.session.data['change'] = null;
    req.session.data['baby-born'] = null;
    req.session.data['stopped-work'] = null;
    req.session.data['ma-date-requested'] = null;
    req.session.data['ma-claim-two-creation-date'] = '14 January 2024';
  
    // SCENARIO 1 - RTI ---------------------------------------------------------------------------------- SCENARIO 1 ---/
    // ------------------------------------------------------------------------------------------------------------------/
  
    if (req.session.data['scenario'] == 'scenario-1') {
  
      // Claimant information
      req.session.data['claimant-name'] = 'Annika Martin';
      req.session.data['claimant-nino'] = 'XX123456X';
      req.session.data['claimant-dob'] = '18 December 1988';
      req.session.data['claimant-postcode'] = 'BR8 9WF';
      req.session.data['claimant-address'] = null;
      req.session.data['claimant-contact-number'] = '07847 171740';

      // Bank details
      req.session.data['name-on-account'] = 'Annika Martin';
      req.session.data['sort-code'] = '04-00-16';
      req.session.data['account-number'] = '*****745';
      req.session.data['building-society'] = '654987640';
      req.session.data['payment-frequency'] = 'Every 4 weeks';

  
      // Decision
      req.session.data['ma-decision'] = 'Allowed';
      req.session.data['ma-claim-creation-date'] = '16 April 2023';
      req.session.data['ma-claim-decision-date'] = '20 May 2023';
      req.session.data['ma-rate'] = 'Standard rate at £172.48 per week';
      req.session.data['ma-map-start'] = '27 May 2023';
      req.session.data['ma-map-end'] = '23 February 2024';
  
      // Test period dates
      req.session.data['ma-baby-due-date'] = '3 July 2023';
      req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
      req.session.data['ma-test-period-first-day'] = '27 March 2022';
      req.session.data['ma-test-period-last-day'] = '1 July 2023';
      req.session.data['ma-test-period-week-fifteen'] = '15 March 2023';
  
      // Maternity Allowance period dates
      req.session.data['ma-map-claim-date-received'] = '16 April 2023';
      req.session.data['ma-map-expected-week-of-confinement'] = '2 July 2023';
      req.session.data['ma-week-eleventh'] = '26 March 2023';
      req.session.data['ma-week-fourth'] = '4 June 2023';
      req.session.data['ma-start-date-requested'] = '17 April 2023';
      req.session.data['ma-start-date-requested-status'] = 'Declined';
      req.session.data['ma-map-rule'] = 'Flexible Maternity Allowance Period';
  
      // Date Last Worked
      req.session.data['ma-map-claimant-stopped-work-date-last-worked'] = '26 May 2023';
      req.session.data['ma-map-claimant-stopped-work-reason'] = 'Maternity Leave';
      req.session.data['ma-map-claimant-stopped-work-pregnancy-related'] = null; //// ******
      req.session.data['ma-map-claimant-stopped-work-allowance-type'] = 'None';
      req.session.data['ma-map-claimant-stopped-work-allowance-start-date'] = null;
      req.session.data['ma-map-claimant-stopped-work-allowance-end-date'] = null;
  
      // Employment and earnings
      req.session.data['ma-employment-type'] = 'Employed';
      req.session.data['ma-employment-agency-test-period'] = null;
      req.session.data['ma-employment-agency-employment-start-date'] = null;
      req.session.data['ma-employment-agency-status'] = null;
      req.session.data['ma-employment-test'] = 'Met';
      req.session.data['ma-employer-1'] = 'ASDA LTD';
      req.session.data['ma-employer-2'] = 'ARGOS';
      req.session.data['ma-earnings-test'] = 'Met';
      //req.session.data['ma-average-earnings'] = '£112.31'; 
  
      // Highest earning weeks
      req.session.data['ma-week-1'] = '17 March 2022';
      req.session.data['ma-week-2'] = '3 April 2022';
      req.session.data['ma-week-3'] = '10 April 2022';
      req.session.data['ma-week-4'] = '17 April 2022';
      req.session.data['ma-week-5'] = '24 April 2022';
      req.session.data['ma-week-6'] = '1 May 2022';
      req.session.data['ma-week-7'] = '8 May 2022';
      req.session.data['ma-week-8'] = '15 May 2022';
      req.session.data['ma-week-9'] = '22 May 2022';
      req.session.data['ma-week-10'] = '29 May 2022';
      req.session.data['ma-week-11'] = '5 June 2022';
      req.session.data['ma-week-12'] = '12 June 2022';
      req.session.data['ma-week-13'] = '19 June 2022';
  
      req.session.data['ma-week-1-employer-1-amount'] = 65.00;
      req.session.data['ma-week-2-employer-1-amount'] = 65.00;
      req.session.data['ma-week-3-employer-1-amount'] = 65.00;
      req.session.data['ma-week-4-employer-1-amount'] = 65.00;
      req.session.data['ma-week-5-employer-1-amount'] = 40.00;
      req.session.data['ma-week-6-employer-1-amount'] = 65.00;
      req.session.data['ma-week-7-employer-1-amount'] = 50.00;
      req.session.data['ma-week-8-employer-1-amount'] = 50.00;
      req.session.data['ma-week-9-employer-1-amount'] = 65.00;
      req.session.data['ma-week-10-employer-1-amount'] = 450.00;
      req.session.data['ma-week-11-employer-1-amount'] = 450.00;
      req.session.data['ma-week-12-employer-1-amount'] = 450.00;
      req.session.data['ma-week-13-employer-1-amount'] = 450.00;
  
      req.session.data['ma-week-1-employer-2-amount'] = 52.50;
      req.session.data['ma-week-2-employer-2-amount'] = 52.50;
      req.session.data['ma-week-3-employer-2-amount'] = 52.50;
      req.session.data['ma-week-4-employer-2-amount'] = 52.50;
      req.session.data['ma-week-5-employer-2-amount'] = 60.00;
      req.session.data['ma-week-6-employer-2-amount'] = 52.50;
      req.session.data['ma-week-7-employer-2-amount'] = 55.00;
      req.session.data['ma-week-8-employer-2-amount'] = 55.00;
      req.session.data['ma-week-9-employer-2-amount'] = 52.50;
      req.session.data['ma-week-10-employer-2-amount'] = 52.50;
      req.session.data['ma-week-11-employer-2-amount'] = 52.50;
      req.session.data['ma-week-12-employer-2-amount'] = 55.00;
      req.session.data['ma-week-13-employer-2-amount'] = 55.00;
  
      req.session.data['ma-week-1-total-amount'] = req.session.data['ma-week-1-employer-1-amount'] + req.session.data['ma-week-1-employer-2-amount'];
      req.session.data['ma-week-2-total-amount'] = req.session.data['ma-week-2-employer-1-amount'] + req.session.data['ma-week-2-employer-2-amount'];
      req.session.data['ma-week-3-total-amount'] = req.session.data['ma-week-3-employer-1-amount'] + req.session.data['ma-week-3-employer-2-amount'];
      req.session.data['ma-week-4-total-amount'] = req.session.data['ma-week-4-employer-1-amount'] + req.session.data['ma-week-4-employer-2-amount'];
      req.session.data['ma-week-5-total-amount'] = req.session.data['ma-week-5-employer-1-amount'] + req.session.data['ma-week-5-employer-2-amount'];
      req.session.data['ma-week-6-total-amount'] = req.session.data['ma-week-6-employer-1-amount'] + req.session.data['ma-week-6-employer-2-amount'];
      req.session.data['ma-week-7-total-amount'] = req.session.data['ma-week-7-employer-1-amount'] + req.session.data['ma-week-7-employer-2-amount'];
      req.session.data['ma-week-8-total-amount'] = req.session.data['ma-week-8-employer-1-amount'] + req.session.data['ma-week-8-employer-2-amount'];
      req.session.data['ma-week-9-total-amount'] = req.session.data['ma-week-9-employer-1-amount'] + req.session.data['ma-week-9-employer-2-amount'];
      req.session.data['ma-week-10-total-amount'] = req.session.data['ma-week-10-employer-1-amount'] + req.session.data['ma-week-10-employer-2-amount'];
      req.session.data['ma-week-11-total-amount'] = req.session.data['ma-week-11-employer-1-amount'] + req.session.data['ma-week-11-employer-2-amount'];
      req.session.data['ma-week-12-total-amount'] = req.session.data['ma-week-12-employer-1-amount'] + req.session.data['ma-week-12-employer-2-amount'];
      req.session.data['ma-week-13-total-amount'] = req.session.data['ma-week-13-employer-1-amount'] + req.session.data['ma-week-13-employer-2-amount'];
  
      req.session.data['ma-total-earnings'] = req.session.data['ma-week-1-total-amount'] + req.session.data['ma-week-2-total-amount'] + req.session.data['ma-week-3-total-amount'] + req.session.data['ma-week-4-total-amount'] + req.session.data['ma-week-5-total-amount'] + req.session.data['ma-week-6-total-amount'] + req.session.data['ma-week-7-total-amount'] + req.session.data['ma-week-8-total-amount'] + req.session.data['ma-week-9-total-amount'] + req.session.data['ma-week-10-total-amount'] + req.session.data['ma-week-11-total-amount'] + req.session.data['ma-week-12-total-amount'] + req.session.data['ma-week-13-total-amount'];
      
      req.session.data['ma-average-earnings'] = req.session.data['ma-total-earnings'] / 13; // total earnings for E1 + E2 per week = week total - add up all weeks / 13 to get average weekly earnings
  
      req.session.data['ma-week-1-employer-1-source'] = 'RTI';
      req.session.data['ma-week-2-employer-1-source'] = 'RTI';
      req.session.data['ma-week-3-employer-1-source'] = 'RTI';
      req.session.data['ma-week-4-employer-1-source'] = 'RTI';
      req.session.data['ma-week-5-employer-1-source'] = 'RTI';
      req.session.data['ma-week-6-employer-1-source'] = 'RTI';
      req.session.data['ma-week-7-employer-1-source'] = 'RTI';
      req.session.data['ma-week-8-employer-1-source'] = 'RTI';
      req.session.data['ma-week-9-employer-1-source'] = 'RTI';
      req.session.data['ma-week-10-employer-1-source'] = 'Payslip';
      req.session.data['ma-week-11-employer-1-source'] = 'Payslip';
      req.session.data['ma-week-12-employer-1-source'] = 'Payslip';
      req.session.data['ma-week-13-employer-1-source'] = 'Payslip';
  
      req.session.data['ma-week-1-employer-2-source'] = 'RTI';
      req.session.data['ma-week-2-employer-2-source'] = 'RTI';
      req.session.data['ma-week-3-employer-2-source'] = 'RTI';
      req.session.data['ma-week-4-employer-2-source'] = 'RTI';
      req.session.data['ma-week-5-employer-2-source'] = 'RTI';
      req.session.data['ma-week-6-employer-2-source'] = 'RTI';
      req.session.data['ma-week-7-employer-2-source'] = 'RTI';
      req.session.data['ma-week-8-employer-2-source'] = 'RTI';
      req.session.data['ma-week-9-employer-2-source'] = 'RTI';
      req.session.data['ma-week-10-employer-2-source'] = 'RTI';
      req.session.data['ma-week-11-employer-2-source'] = 'RTI';
      req.session.data['ma-week-12-employer-2-source'] = 'RTI';
      req.session.data['ma-week-13-employer-2-source'] = 'RTI';
  
    }
  
    // SCENARIO 2 - Agency ---------------------------------------------------------------------------------- SCENARIO 2 ---/
    // ---------------------------------------------------------------------------------------------------------------------/
  
    else {
  
      // Claimant information
      req.session.data['claimant-name'] = 'Morgan Jenson';
      req.session.data['claimant-nino'] = 'ZZ123456Z';
      req.session.data['claimant-dob'] = '5 November 1995';
      req.session.data['claimant-postcode'] = 'NH9 7DL';
      req.session.data['claimant-address'] = '86 Pear Tree Grove';
      req.session.data['claimant-contact-number'] = '07847 171740';
  
      // Bank details
      req.session.data['name-on-account'] = ' ';
      req.session.data['sort-code'] = ' ';
      req.session.data['account-number'] = ' ';
      req.session.data['building-society'] = ' ';
      req.session.data['payment-frequency'] = ' ';

      // Decision
      req.session.data['ma-decision'] = 'Allowed';
      req.session.data['ma-claim-creation-date'] = '22 March 2023';
      req.session.data['ma-claim-decision-date'] = '22 March 2023';
      req.session.data['ma-rate'] = 'Standard rate at £172.48 per week';
      req.session.data['ma-map-start'] = '24 April 2023';
      req.session.data['ma-map-end'] = '22 January 2024';
  
      // Test period dates
      req.session.data['ma-baby-due-date'] = '3 June 2023';
      req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
      req.session.data['ma-test-period-first-day'] = '20 February 2022';
      req.session.data['ma-test-period-last-day'] = '27 March 2023';
      req.session.data['ma-test-period-week-fifteen'] = '12 February 2023';
  
      // Maternity Allowance period dates
      req.session.data['ma-map-claim-date-received'] = '1 March 2023';
      req.session.data['ma-map-expected-week-of-confinement'] = '28 May 2023';
      req.session.data['ma-week-eleventh'] = '12 March 2023';
      req.session.data['ma-week-fourth'] = '30 April 2023';
      req.session.data['ma-start-date-requested'] = '25 April 2023';
      req.session.data['ma-start-date-requested-status'] = 'Allowed';
      req.session.data['ma-map-rule'] = 'Flexible Maternity Allowance Period';
  
      // Date Last Worked
      req.session.data['ma-map-claimant-stopped-work-date-last-worked'] = '18 April 2023';
      req.session.data['ma-map-claimant-stopped-work-reason'] = 'Maternity leave';
      req.session.data['ma-map-claimant-stopped-work-pregnancy-related'] = null;
      req.session.data['ma-map-claimant-stopped-work-allowance-type'] = null;
      req.session.data['ma-map-claimant-stopped-work-allowance-start-date'] = null;
      req.session.data['ma-map-claimant-stopped-work-allowance-end-date'] = null;
  
      // Employment and earnings
      req.session.data['ma-employment-type'] = 'Agency worker';
      req.session.data['ma-employment-agency-test-period'] = 'Employed during Test Period';
      req.session.data['ma-employment-agency-employment-start-date'] = '15 January 2022';
      req.session.data['ma-employment-agency-status'] = 'Still employed by agency';
      req.session.data['ma-employment-test'] = 'Met';
      req.session.data['ma-employer-1'] = 'ROBSONS CARE FORUM';
      req.session.data['ma-earnings-test'] = 'Met';
      req.session.data['ma-average-earnings'] = '£250';
  
      // Highest earning weeks
      req.session.data['ma-week-1'] = '20 February 2022';
      req.session.data['ma-week-2'] = '27 February 2022';
      req.session.data['ma-week-3'] = '6 March 2022';
      req.session.data['ma-week-4'] = '13 March 2022';
      req.session.data['ma-week-5'] = '20 March 2022';
      req.session.data['ma-week-6'] = '27 March 2022';
      req.session.data['ma-week-7'] = '3 April 2022';
      req.session.data['ma-week-8'] = '10 April 2022';
      req.session.data['ma-week-9'] = '17 April 2022';
      req.session.data['ma-week-10'] = '24 April 2022';
      req.session.data['ma-week-11'] = '1 May 2022';
      req.session.data['ma-week-12'] = '8 May 2022';
      req.session.data['ma-week-13'] = '15 May 2022';
      req.session.data['ma-week-1-employer-1-amount'] = '£250.00';
      req.session.data['ma-week-2-employer-1-amount'] = '£250.00';
      req.session.data['ma-week-3-employer-1-amount'] = '£250.00';
      req.session.data['ma-week-4-employer-1-amount'] = '£250.00';
      req.session.data['ma-week-5-employer-1-amount'] = '£250.00';
      req.session.data['ma-week-6-employer-1-amount'] = '£250.00';
      req.session.data['ma-week-7-employer-1-amount'] = '£250.00';
      req.session.data['ma-week-8-employer-1-amount'] = '£250.00';
      req.session.data['ma-week-9-employer-1-amount'] = '£250.00';
      req.session.data['ma-week-10-employer-1-amount'] = '£250.00';
      req.session.data['ma-week-11-employer-1-amount'] = '£250.00';
      req.session.data['ma-week-12-employer-1-amount'] = '£250.00';
      req.session.data['ma-week-13-employer-1-amount'] = '£250.00';
    }
  
    res.redirect('/beta-private/iteration-19/landing'); 
  });
  
  // Payslip start claim
  router.post('/beta-private/iteration-19/start-a-claim/employers/add-employer', function (req, res) {
    res.redirect('/beta-private/iteration-19/start-a-claim/payslip/frequency');
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/payslip/frequency', function (req, res) {
    res.redirect('/beta-private/iteration-19/start-a-claim/payslip/add');
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/payslip/add', function (req, res) {
    res.redirect('/beta-private/iteration-19/start-a-claim/payslip/summary');
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/payslip/summary', function (req, res) {
    if (req.session.data['ma-payslip-details-conf'] == 'yes') {
      res.redirect('/beta-private/iteration-19/start-a-claim/payslip/add');
    } else {
      res.redirect('/beta-private/iteration-19/start-a-claim/summary/2-2-employers-employment-and-earnings.html');
    }
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/summary/2-bank-details-and-payments', function (req, res) {
    res.redirect('/beta-private/iteration-19/payments/');
  });
  
  
  // *** Scenario 1 ***************************************************************************************************************** //
  
  router.post('/beta-private/iteration-19/start-a-claim/', function (req, res) {
    res.redirect('/beta-private/iteration-19/start-a-claim/claimant-confirm');
  });

  router.post('/beta-private/iteration-19/find-a-claim/summary/1-bank-details-and-payments', function (req, res) {
    res.redirect('/beta-private/iteration-19/payments/prepopulated-account-details');
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/claimant-confirm', function (req, res) {
    
    if (req.session.data['claimant-confirm'] == 'yes') {
      res.redirect('/beta-private/iteration-19/start-a-claim/claim-date');
    }
    else {
      res.redirect('/beta-private/iteration-19/start-a-claim/more-claimant-information');
    }
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/more-claimant-information', function (req, res) {
    // Has a match been made, in this scenario?
    var match = true;
  
    if (match == false) {
      var match = null;
      res.redirect('/beta-private/iteration-19/start-a-claim/no-match-found');
    }
    else {
      res.redirect('/beta-private/iteration-19/start-a-claim/claim-date');
    }
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/claim-date', function (req, res) {
  
    if (req.session.data['change'] == null) { // no 'change' clicked, therefore, going through the journey for the first time.
      req.session.data['change'] = false;
    } else {
      req.session.data['change'] = true;
    }
  
    if (req.session.data['change'] == true ) {
      // Change journey
      req.session.data['change'] = null;
  
      // Changes listed here
      req.session.data['ma-map-claim-date-received'] = '2 January 2023';
  
      res.redirect('/beta-private/iteration-19/start-a-claim/summary/'); // Goes back to summary
    }
    else {
      // Regular journey
      req.session.data['change'] = null;
      res.redirect('/beta-private/iteration-19/start-a-claim/baby-due-date'); // Goes to next screen in the journey
    }
  
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/baby-due-date', function (req, res) {
    res.redirect('/beta-private/iteration-19/start-a-claim/baby-born');
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/baby-born', function (req, res) {
  
    if (req.session.data['change'] == null) {
      req.session.data['change'] = false;
    } else {
      req.session.data['change'] = true;
    }
  
    if (req.session.data['baby-born'] == 'yes') {
      res.redirect('/beta-private/iteration-19/start-a-claim/baby-birth-date');
    }
    else {
  
      if (req.session.data['change'] == true ) {
        req.session.data['change'] = null;
        // No change
        res.redirect('/beta-private/iteration-19/start-a-claim/summary/'); // Goes back to unchanged summary
      }
      else {
        req.session.data['change'] = null;
        res.redirect('/beta-private/iteration-19/start-a-claim/employment/');
      }
  
    }
  
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/baby-birth-date', function (req, res) {
    if (req.session.data['change'] == true ) {
      req.session.data['change'] = null;
      // Change made - GO TO CHANGED SUMMARY
  
      // Changes listed here
      req.session.data['ma-baby-birth-date'] = '1 October 2022';
      req.session.data['ma-map-start'] = '2 October 2022';
      req.session.data['ma-map-end'] = '1 July 2023';
  
      res.redirect('/beta-private/iteration-19/start-a-claim/summary/change-baby-birth-date'); // NEEDS TO BE CHANGED TO CHANGED SUMMARY
    }
    else {
      res.redirect('/beta-private/iteration-19/start-a-claim/employment/');
    }
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/employment/', function (req, res) {
    if (req.session.data['employment-type'] == 'agency') {
      res.redirect('/beta-private/iteration-19/start-a-claim/employment/agency-employment-date');
    }
    else {
      res.redirect('/beta-private/iteration-19/start-a-claim/stopped-work/');
    }
  });
  
  // router.post('/beta-private/iteration-19/start-a-claim/employment/test-period-agency', function (req, res) {
  //  if (req.session.data['test-period-agency'] == 'yes') {
  //    res.redirect('/beta-private/iteration-19/start-a-claim/employment/agency-employment-date');
  //  }
  //  else {
  //    res.redirect('/beta-private/iteration-19/start-a-claim/stopped-work/');
  //  }
  // });
  
  router.post('/beta-private/iteration-19/start-a-claim/employment/agency-employment-date', function (req, res) {
    res.redirect('/beta-private/iteration-19/start-a-claim/employment/agency-employed');
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/employment/agency-employed', function (req, res) {
    if (req.session.data['agency-employed'] == 'no') {
      res.redirect('/beta-private/iteration-19/start-a-claim/employment/agency-employment-end-date');
    }
    else {
      res.redirect('/beta-private/iteration-19/start-a-claim/stopped-work');
    }
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/employment/agency-employment-end-date', function (req, res) {
    res.redirect('/beta-private/iteration-19/start-a-claim/chosen-map-date');
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/stopped-work/', function (req, res) {
    if (req.session.data['stopped-work'] == 'yes') {
      res.redirect('/beta-private/iteration-19/start-a-claim/stopped-work/reason');
    }
    else {
      // For Private Beta testing for Iteration 4, we will set the change scenario
      // session data to 'true' as they say 'no' to, if they've started work
      // so that when they click change on the summary, the next time they run through this screen
      // it will return directly to summary after they enter the date on the next screen 'dlw-date'.
      // req.session.data['change'] = true;
      res.redirect('/beta-private/iteration-19/start-a-claim/chosen-map-date');
    }
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/stopped-work/reason', function (req, res) {
    if (req.session.data['stopped-work-reason'] == 'sick') {
      res.redirect('/beta-private/iteration-19/start-a-claim/stopped-work/sickness/allowance-type');
    } else {
      res.redirect('/beta-private/iteration-19/start-a-claim/stopped-work/date-last-worked');
    }
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/stopped-work/sickness/allowance-type', function (req, res) {
    if (req.session.data['allowance-type'] == 'employment-and-support-allowance') {
      res.redirect('/beta-private/iteration-19/start-a-claim/stopped-work/sickness/benefit-start-date');
    }
    else {
      res.redirect('/beta-private/iteration-19/start-a-claim/stopped-work/sickness/pregnancy-related');    
    }
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/stopped-work/sickness/pregnancy-related', function (req, res) {
    if (req.session.data['allowance-type'] == 'statutory-sick-pay') {
      res.redirect('/beta-private/iteration-19/start-a-claim/stopped-work/sickness/benefit-end-date');
    }
    else {
      res.redirect('/beta-private/iteration-19/start-a-claim/stopped-work/date-last-worked');    
    }
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/stopped-work/sickness/benefit-end-date', function (req, res) {
    res.redirect('/beta-private/iteration-19/start-a-claim/stopped-work/date-last-worked');
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/stopped-work/sickness/benefit-start-date', function (req, res) {
      res.redirect('/beta-private/iteration-19/start-a-claim/stopped-work/date-last-worked');
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/stopped-work/date-last-worked', function (req, res) {
      res.redirect('/beta-private/iteration-19/start-a-claim/chosen-map-date');
  });
  
  // Removed maternity leave question
  // router.post('/beta-private/iteration-19/start-a-claim/ma-start-date-provided', function (req, res) {
  //  if (req.session.data['ma-start-date-provided'] == 'yes') {
  //    res.redirect('/beta-private/iteration-19/start-a-claim/planned-dlw-date');
  //  }
  //  else {
  //    res.redirect('/beta-private/iteration-19/start-a-claim/chosen-map-date');
  //  }
  // });
  
  router.post('/beta-private/iteration-19/start-a-claim/planned-dlw-date', function (req, res) {
    res.redirect('/beta-private/iteration-19/start-a-claim/chosen-map-date');
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/chosen-map-date', function (req, res) {
    if (req.session.data['ma-date-requested'] == 'yes') {
      res.redirect('/beta-private/iteration-19/start-a-claim/requested-start-date');
    }
    else {
      res.redirect('/beta-private/iteration-19/start-a-claim/summary/');
    }
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/requested-start-date', function (req, res) {
    res.redirect('/beta-private/iteration-19/start-a-claim/summary/');
  });
  
  router.get('/beta-private/iteration-19/start-a-claim/summary/', function (req, res) {
    if (req.session.data['scenario'] == 'scenario-1') {
      res.redirect('/beta-private/iteration-19/start-a-claim/summary/1');
    } else if (req.session.data['scenario'] == 'scenario-2') {
      res.redirect('/beta-private/iteration-19/start-a-claim/summary/2');
    } else {
      res.redirect('/beta-private/iteration-19/start-a-claim/summary/3');
    }
  });
  
  // *** Find a claim *** //
  
  router.post('/beta-private/iteration-19/find-a-claim/', function (req, res) {
    res.redirect('/beta-private/iteration-19/find-a-claim/summary');
  });
  
  router.post('/beta-private/iteration-19/find-a-claim/select-claim', function (req, res) {
      res.redirect('/beta-private/iteration-19/find-a-claim/summary/');
  });
  
  router.get('/beta-private/iteration-19/find-a-claim/summary/', function (req, res) {
    if (req.session.data['scenario'] == 'scenario-1') {
      res.redirect('/beta-private/iteration-19/find-a-claim/summary/1');
    } else if (req.session.data['scenario'] == 'scenario-2') {
      res.redirect('/beta-private/iteration-19/start-a-claim/summary/2');
    } else {
      res.redirect('/beta-private/iteration-19/find-a-claim/summary/3');
    }
  });
  
  router.post('/beta-private/iteration-19/find-a-claim/rti/change', function (req, res) {
  
    // Make data changes here
    req.session.data['ma-claim-decision-date'] = '22 February 2023';
    req.session.data['ma-rate'] = 'Standard rate at £156.66 per week';
    req.session.data['ma-week-5-employer-1-amount'] = 400.00;
    req.session.data['ma-week-5-employer-2-amount'] = 600.00;
    req.session.data['ma-week-5-employer-1-source'] = 'Payslip';
    req.session.data['ma-week-5-employer-2-source'] = 'Payslip';
    req.session.data['ma-week-5-total-amount'] = req.session.data['ma-week-5-employer-1-amount'] + req.session.data['ma-week-5-employer-2-amount'];
    req.session.data['ma-total-earnings'] = req.session.data['ma-week-1-total-amount'] + req.session.data['ma-week-2-total-amount'] + req.session.data['ma-week-3-total-amount'] + req.session.data['ma-week-4-total-amount'] + req.session.data['ma-week-5-total-amount'] + req.session.data['ma-week-6-total-amount'] + req.session.data['ma-week-7-total-amount'] + req.session.data['ma-week-8-total-amount'] + req.session.data['ma-week-9-total-amount'] + req.session.data['ma-week-10-total-amount'] + req.session.data['ma-week-11-total-amount'] + req.session.data['ma-week-12-total-amount'] + req.session.data['ma-week-13-total-amount'];
    req.session.data['ma-average-earnings'] = req.session.data['ma-total-earnings'] / 13; 
  
    res.redirect('/beta-private/iteration-19/find-a-claim/summary/1-employment-and-earnings');
  });
  

  router.post('/beta-private/iteration-19/payments/prepopulated-account-details', function (req, res) {
  
    // Make data changes here
    req.session.data['ma-claim-decision-date'] = '22 February 2023';
    req.session.data['ma-rate'] = 'Standard rate at £156.66 per week';
    req.session.data['ma-week-5-employer-1-amount'] = 400.00;
    req.session.data['ma-week-5-employer-2-amount'] = 600.00;
    req.session.data['ma-week-5-employer-1-source'] = 'Payslip';
    req.session.data['ma-week-5-employer-2-source'] = 'Payslip';
    req.session.data['ma-week-5-total-amount'] = req.session.data['ma-week-5-employer-1-amount'] + req.session.data['ma-week-5-employer-2-amount'];
    req.session.data['ma-total-earnings'] = req.session.data['ma-week-1-total-amount'] + req.session.data['ma-week-2-total-amount'] + req.session.data['ma-week-3-total-amount'] + req.session.data['ma-week-4-total-amount'] + req.session.data['ma-week-5-total-amount'] + req.session.data['ma-week-6-total-amount'] + req.session.data['ma-week-7-total-amount'] + req.session.data['ma-week-8-total-amount'] + req.session.data['ma-week-9-total-amount'] + req.session.data['ma-week-10-total-amount'] + req.session.data['ma-week-11-total-amount'] + req.session.data['ma-week-12-total-amount'] + req.session.data['ma-week-13-total-amount'];
    req.session.data['ma-average-earnings'] = req.session.data['ma-total-earnings'] / 13; 
  
    res.redirect('/beta-private/iteration-19/find-a-claim/summary/');
  });

  
  router.post('/beta-private/iteration-19/find-a-claim/employers/change-employer-1', function (req, res) {
    req.session.data['ma-employer-1'] = 'CHANGE EMP 1 LTD';
    res.redirect('/beta-private/iteration-19/find-a-claim/summary/');
  });
  
  router.post('/beta-private/iteration-19/find-a-claim/employers/change-employer-2', function (req, res) {
    req.session.data['ma-employer-2'] = 'CHANGE EMP 2 LTD';
    res.redirect('/beta-private/iteration-19/find-a-claim/summary/');
  });
  
  router.post('/beta-private/iteration-19/find-a-claim/employers/change-employer-3', function (req, res) {
    req.session.data['ma-employer-3'] = 'CHANGE EMP 3 LTD';
    res.redirect('/beta-private/iteration-19/find-a-claim/summary/1-three-employers');
  });
  
  // Payslip
  // Payslip find claim
  
  router.post('/beta-private/iteration-19/find-a-claim/employers/add-employer', function (req, res) {
  
  
    // Change decision date
  
    req.session.data['ma-claim-decision-date'] = '22 March 2023';
    req.session.data['ma-rate'] = 'Standard rate at £156.66 per week';
  
    // Add 3rd employer data
  
    req.session.data['ma-employer-3'] = 'B&Q LTD';
    req.session.data['ma-employer-3-pay-frequency'] = 'Every 4 weeks';
  
    // Payslips
    req.session.data['ma-payslip-1-date'] = '28 February 2022';
    req.session.data['ma-payslip-1-amount'] = 2000.00;
  
    req.session.data['ma-week-1-employer-3-amount'] = 00;
    req.session.data['ma-week-2-employer-3-amount'] = 500;
    req.session.data['ma-week-3-employer-3-amount'] = 500;
    req.session.data['ma-week-4-employer-3-amount'] = 500;
    req.session.data['ma-week-5-employer-3-amount'] = 500;
    req.session.data['ma-week-6-employer-3-amount'] = 00;
    req.session.data['ma-week-7-employer-3-amount'] = 00;
    req.session.data['ma-week-8-employer-3-amount'] = 00;
    req.session.data['ma-week-9-employer-3-amount'] = 00;
    req.session.data['ma-week-10-employer-3-amount'] = 00;
    req.session.data['ma-week-11-employer-3-amount'] = 00;
    req.session.data['ma-week-12-employer-3-amount'] = 00;
    req.session.data['ma-week-13-employer-3-amount'] = 00;
  
    req.session.data['ma-week-1-employer-3-source'] = ' ';
    req.session.data['ma-week-2-employer-3-source'] = 'Payslip';
    req.session.data['ma-week-3-employer-3-source'] = 'Payslip';
    req.session.data['ma-week-4-employer-3-source'] = 'Payslip';
    req.session.data['ma-week-5-employer-3-source'] = 'Payslip';
    req.session.data['ma-week-6-employer-3-source'] = ' ';
    req.session.data['ma-week-7-employer-3-source'] = ' ';
    req.session.data['ma-week-8-employer-3-source'] = ' ';
    req.session.data['ma-week-9-employer-3-source'] = ' ';
    req.session.data['ma-week-10-employer-3-source'] = ' ';
    req.session.data['ma-week-11-employer-3-source'] = ' ';
    req.session.data['ma-week-12-employer-3-source'] = ' ';
    req.session.data['ma-week-13-employer-3-source'] = ' ';
  
    req.session.data['ma-week-1-total-amount'] = req.session.data['ma-week-1-employer-1-amount'] + req.session.data['ma-week-1-employer-2-amount'] + req.session.data['ma-week-1-employer-3-amount'];
    req.session.data['ma-week-2-total-amount'] = req.session.data['ma-week-2-employer-1-amount'] + req.session.data['ma-week-2-employer-2-amount'] + req.session.data['ma-week-2-employer-3-amount'];
    req.session.data['ma-week-3-total-amount'] = req.session.data['ma-week-3-employer-1-amount'] + req.session.data['ma-week-3-employer-2-amount'] + req.session.data['ma-week-3-employer-3-amount'];
    req.session.data['ma-week-4-total-amount'] = req.session.data['ma-week-4-employer-1-amount'] + req.session.data['ma-week-4-employer-2-amount'] + req.session.data['ma-week-4-employer-3-amount'];
    req.session.data['ma-week-5-total-amount'] = req.session.data['ma-week-5-employer-1-amount'] + req.session.data['ma-week-5-employer-2-amount'] + req.session.data['ma-week-5-employer-3-amount'];
    req.session.data['ma-week-6-total-amount'] = req.session.data['ma-week-6-employer-1-amount'] + req.session.data['ma-week-6-employer-2-amount'] + req.session.data['ma-week-6-employer-3-amount'];
    req.session.data['ma-week-7-total-amount'] = req.session.data['ma-week-7-employer-1-amount'] + req.session.data['ma-week-7-employer-2-amount'] + req.session.data['ma-week-7-employer-3-amount'];
    req.session.data['ma-week-8-total-amount'] = req.session.data['ma-week-8-employer-1-amount'] + req.session.data['ma-week-8-employer-2-amount'] + req.session.data['ma-week-8-employer-3-amount'];
    req.session.data['ma-week-9-total-amount'] = req.session.data['ma-week-9-employer-1-amount'] + req.session.data['ma-week-9-employer-2-amount'] + req.session.data['ma-week-9-employer-3-amount'];
    req.session.data['ma-week-10-total-amount'] = req.session.data['ma-week-10-employer-1-amount'] + req.session.data['ma-week-10-employer-2-amount'] + req.session.data['ma-week-10-employer-3-amount'];
    req.session.data['ma-week-11-total-amount'] = req.session.data['ma-week-11-employer-1-amount'] + req.session.data['ma-week-11-employer-2-amount'] + req.session.data['ma-week-11-employer-3-amount'];
    req.session.data['ma-week-12-total-amount'] = req.session.data['ma-week-12-employer-1-amount'] + req.session.data['ma-week-12-employer-2-amount'] + req.session.data['ma-week-12-employer-3-amount'];
    req.session.data['ma-week-13-total-amount'] = req.session.data['ma-week-13-employer-1-amount'] + req.session.data['ma-week-13-employer-2-amount'] + req.session.data['ma-week-13-employer-3-amount'];
  
    req.session.data['ma-total-earnings'] = req.session.data['ma-week-1-total-amount'] + req.session.data['ma-week-2-total-amount'] + req.session.data['ma-week-3-total-amount'] + req.session.data['ma-week-4-total-amount'] + req.session.data['ma-week-5-total-amount'] + req.session.data['ma-week-6-total-amount'] + req.session.data['ma-week-7-total-amount'] + req.session.data['ma-week-8-total-amount'] + req.session.data['ma-week-9-total-amount'] + req.session.data['ma-week-10-total-amount'] + req.session.data['ma-week-11-total-amount'] + req.session.data['ma-week-12-total-amount'] + req.session.data['ma-week-13-total-amount'];
    
    req.session.data['ma-average-earnings'] = req.session.data['ma-total-earnings'] / 13; // total earnings for E1 + E2 per week = week total - add up all weeks / 13 to get average weekly earnings
  
    res.redirect('/beta-private/iteration-19/find-a-claim/payslip/frequency');
  });
  
  router.post('/beta-private/iteration-19/find-a-claim/payslip/frequency', function (req, res) {
    res.redirect('/beta-private/iteration-19/find-a-claim/payslip/add');
  });
  
  router.post('/beta-private/iteration-19/find-a-claim/payslip/add', function (req, res) {
    res.redirect('/beta-private/iteration-19/find-a-claim/payslip/summary');
  });
  
  router.post('/beta-private/iteration-19/find-a-claim/payslip/summary', function (req, res) {
    if (req.session.data['ma-payslip-details-conf'] == 'yes') {
      res.redirect('/beta-private/iteration-19/find-a-claim/payslip/add');
    } else {
      res.redirect('/beta-private/iteration-19/find-a-claim/summary/1-three-employers');
    }
  });
  
  router.post('/beta-private/iteration-19/find-a-claim/employers/remove-employer-3', function (req, res) {
    if (req.session.data['remove-employer-3'] == 'yes') {
      res.redirect('/beta-private/iteration-19/find-a-claim/summary/1');
    } else {
      res.redirect('/beta-private/iteration-19/find-a-claim/summary/1-three-employers');
    }
  });
  
  // Payments
  
  router.post('/beta-private/iteration-19/start-a-claim/summary/2', function (req, res) {
    res.redirect('/beta-private/iteration-19/payments/');
  });
  
  router.post('/beta-private/iteration-19/payments/', function (req, res) {
    res.redirect('/beta-private/iteration-19/payments/summary');
  });
  
  router.post('/beta-private/iteration-19/payments/payment-frequency', function (req, res) {
    if (req.session.data['payment-frequency'] == '2-weeks') {
      req.session.data['payment-frequency'] = 'Every 2 weeks';
    } else {
      req.session.data['payment-frequency'] = 'Every 4 weeks';
    }
    res.redirect('/beta-private/iteration-19/start-a-claim/summary/2-bank-details-and-payments');
  });
  
  router.post('/beta-private/iteration-19/payments/summary', function (req, res) {
    if (req.session.data['ma-payment-details-conf'] == 'yes') {
      res.redirect('/beta-private/iteration-19/start-a-claim/summary/2-bank-details-and-payments');
    } else {
      res.redirect('/beta-private/iteration-19/payments/prepopulated-account-details');
    }
  });
  
  router.post('/beta-private/iteration-19/payments/prepopulated-account-details', function (req, res) {
    res.redirect('/beta-private/iteration-19/payments/prepopulated-payment-frequency');
  });
  
  router.post('/beta-private/iteration-19/payments/prepopulated-payment-frequency', function (req, res) {
    if (req.session.data['payment-frequency'] == '2-weeks') {
      req.session.data['payment-frequency'] = 'Every 2 weeks';
    } else {
      req.session.data['payment-frequency'] = 'Every 4 weeks';
    }
    res.redirect('/beta-private/iteration-19/start-a-claim/summary/2-bank-details-and-payments');
  });
  
  router.post('/beta-private/iteration-19/start-a-claim/summary/2-rti-changed', function (req, res) {
    res.redirect('/beta-private/iteration-19/payments');
  });
  
  }