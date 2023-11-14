
module.exports = router => {

// Add your routes here - above the module.exports line

router.post('/beta-private/iteration-14/', function (req, res) {

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

    // Decision
    req.session.data['ma-decision'] = 'Allowed';
    req.session.data['ma-claim-creation-date'] = '10 January 2023';
    req.session.data['ma-claim-decision-date'] = '10 January 2023';
    req.session.data['ma-rate'] = 'Variable rate at £101.10 per week';
    req.session.data['ma-map-start'] = '23 January 2023';
    req.session.data['ma-map-end'] = '22 October 2023';

    // Test period dates
    req.session.data['ma-baby-due-date'] = '24 February 2023';
    req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
    req.session.data['ma-test-period-first-day'] = '14 November 2021';
    req.session.data['ma-test-period-last-day'] = '18 February 2023';
    req.session.data['ma-test-period-week-fifteen'] = '6 November 2022';

    // Maternity Allowance period dates
    req.session.data['ma-map-claim-date-received'] = '9 January 2023';
    req.session.data['ma-map-expected-week-of-confinement'] = '19 February 2023';
    req.session.data['ma-week-eleventh'] = '4 December 2022';
    req.session.data['ma-week-fourth'] = '22 January 2023';
    req.session.data['ma-start-date-requested'] = '10 February 2023';
    req.session.data['ma-start-date-requested-status'] = 'Declined';
    req.session.data['ma-map-rule'] = 'Flexible Maternity Allowance Period';

    // Date Last Worked
    req.session.data['ma-map-claimant-stopped-work-date-last-worked'] = '9 January 2023';
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
    req.session.data['ma-employer-2'] = 'GRAINGERS WHOLESALE LTD';
    req.session.data['ma-earnings-test'] = 'Met';
    //req.session.data['ma-average-earnings'] = '£112.31'; 

    // Highest earning weeks
    req.session.data['ma-week-1'] = '30 January 2022';
    req.session.data['ma-week-2'] = '6 February 2022';
    req.session.data['ma-week-3'] = '13 February 2022';
    req.session.data['ma-week-4'] = '20 February 2022';
    req.session.data['ma-week-5'] = '27 February 2022';
    req.session.data['ma-week-6'] = '6 March 2022';
    req.session.data['ma-week-7'] = '13 March 2022';
    req.session.data['ma-week-8'] = '20 March 2022';
    req.session.data['ma-week-9'] = '27 March 2022';
    req.session.data['ma-week-10'] = '3 April 2022';
    req.session.data['ma-week-11'] = '10 April 2022';
    req.session.data['ma-week-12'] = '17 April 2022';
    req.session.data['ma-week-13'] = '24 April 2022';

    req.session.data['ma-week-1-employer-1-amount'] = 65.00;
    req.session.data['ma-week-2-employer-1-amount'] = 65.00;
    req.session.data['ma-week-3-employer-1-amount'] = 65.00;
    req.session.data['ma-week-4-employer-1-amount'] = 65.00;
    req.session.data['ma-week-5-employer-1-amount'] = 40.00;
    req.session.data['ma-week-6-employer-1-amount'] = 65.00;
    req.session.data['ma-week-7-employer-1-amount'] = 50.00;
    req.session.data['ma-week-8-employer-1-amount'] = 50.00;
    req.session.data['ma-week-9-employer-1-amount'] = 65.00;
    req.session.data['ma-week-10-employer-1-amount'] = 65.00;
    req.session.data['ma-week-11-employer-1-amount'] = 65.00;
    req.session.data['ma-week-12-employer-1-amount'] = 50.00;
    req.session.data['ma-week-13-employer-1-amount'] = 50.00;

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
    req.session.data['ma-week-10-employer-1-source'] = 'RTI';
    req.session.data['ma-week-11-employer-1-source'] = 'RTI';
    req.session.data['ma-week-12-employer-1-source'] = 'RTI';
    req.session.data['ma-week-13-employer-1-source'] = 'RTI';

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
    req.session.data['claimant-address'] = null;
    req.session.data['claimant-contact-number'] = '07847 171740';

    // Decision
    req.session.data['ma-decision'] = 'Allowed';
    req.session.data['ma-claim-creation-date'] = '22 February 2023';
    req.session.data['ma-claim-decision-date'] = '22 February 2023';
    req.session.data['ma-rate'] = 'Standard rate at £156.66 per week';
    req.session.data['ma-map-start'] = '25 January 2023';
    req.session.data['ma-map-end'] = '24 October 2023';

    // Test period dates
    req.session.data['ma-baby-due-date'] = '2 March 2023';
    req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
    req.session.data['ma-test-period-first-day'] = '21 November 2021';
    req.session.data['ma-test-period-last-day'] = '25 February 2023';
    req.session.data['ma-test-period-week-fifteen'] = '13 November 2022';

    // Maternity Allowance period dates
    req.session.data['ma-map-claim-date-received'] = '10 January 2023';
    req.session.data['ma-map-expected-week-of-confinement'] = '26 February 2023';
    req.session.data['ma-week-eleventh'] = '11 December 2022';
    req.session.data['ma-week-fourth'] = '29 January 2023';
    req.session.data['ma-start-date-requested'] = '25 January 2023';
    req.session.data['ma-start-date-requested-status'] = 'Allowed';
    req.session.data['ma-map-rule'] = 'Flexible Maternity Allowance Period';

    // Date Last Worked
    req.session.data['ma-map-claimant-stopped-work-date-last-worked'] = '15 January 2023';
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
    req.session.data['ma-average-earnings'] = '£200';

    // Highest earning weeks
    req.session.data['ma-week-1'] = '30 January 2022';
    req.session.data['ma-week-2'] = '6 February 2022';
    req.session.data['ma-week-3'] = '13 February 2022';
    req.session.data['ma-week-4'] = '20 February 2022';
    req.session.data['ma-week-5'] = '27 February 2022';
    req.session.data['ma-week-6'] = '6 March 2022';
    req.session.data['ma-week-7'] = '13 March 2022';
    req.session.data['ma-week-8'] = '20 March 2022';
    req.session.data['ma-week-9'] = '27 March 2022';
    req.session.data['ma-week-10'] = '3 April 2022';
    req.session.data['ma-week-11'] = '10 April 2022';
    req.session.data['ma-week-12'] = '17 April 2022';
    req.session.data['ma-week-13'] = '24 April 2022';
    req.session.data['ma-week-1-employer-1-amount'] = '£200.00';
    req.session.data['ma-week-2-employer-1-amount'] = '£200.00';
    req.session.data['ma-week-3-employer-1-amount'] = '£200.00';
    req.session.data['ma-week-4-employer-1-amount'] = '£200.00';
    req.session.data['ma-week-5-employer-1-amount'] = '£200.00';
    req.session.data['ma-week-6-employer-1-amount'] = '£200.00';
    req.session.data['ma-week-7-employer-1-amount'] = '£200.00';
    req.session.data['ma-week-8-employer-1-amount'] = '£200.00';
    req.session.data['ma-week-9-employer-1-amount'] = '£200.00';
    req.session.data['ma-week-10-employer-1-amount'] = '£200.00';
    req.session.data['ma-week-11-employer-1-amount'] = '£200.00';
    req.session.data['ma-week-12-employer-1-amount'] = '£200.00';
    req.session.data['ma-week-13-employer-1-amount'] = '£200.00';
  }

  res.redirect('/beta-private/iteration-14/landing');
});

// *** Scenario 1 ***************************************************************************************************************** //

router.post('/beta-private/iteration-14/start-a-claim/', function (req, res) {
  res.redirect('/beta-private/iteration-14/start-a-claim/claimant-confirm');
});

router.post('/beta-private/iteration-14/start-a-claim/claimant-confirm', function (req, res) {
  if (req.session.data['claimant-confirm'] == 'yes') {
    res.redirect('/beta-private/iteration-14/start-a-claim/claim-date');
  }
  else {
    res.redirect('/beta-private/iteration-14/start-a-claim/more-claimant-information');
  }
});

router.post('/beta-private/iteration-14/start-a-claim/more-claimant-information', function (req, res) {
  // Has a match been made, in this scenario?
  var match = true;

  if (match == false) {
    var match = null;
    res.redirect('/beta-private/iteration-14/start-a-claim/no-match-found');
  }
  else {
    res.redirect('/beta-private/iteration-14/start-a-claim/claim-date');
  }
});

router.post('/beta-private/iteration-14/start-a-claim/claim-date', function (req, res) {

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

    res.redirect('/beta-private/iteration-14/start-a-claim/summary/'); // Goes back to summary
  }
  else {
    // Regular journey
    req.session.data['change'] = null;
    res.redirect('/beta-private/iteration-14/start-a-claim/baby-due-date'); // Goes to next screen in the journey
  }

});

router.post('/beta-private/iteration-14/start-a-claim/baby-due-date', function (req, res) {
  res.redirect('/beta-private/iteration-14/start-a-claim/baby-born');
});

router.post('/beta-private/iteration-14/start-a-claim/baby-born', function (req, res) {

  if (req.session.data['change'] == null) {
    req.session.data['change'] = false;
  } else {
    req.session.data['change'] = true;
  }

  if (req.session.data['baby-born'] == 'yes') {
    res.redirect('/beta-private/iteration-14/start-a-claim/baby-birth-date');
  }
  else {

    if (req.session.data['change'] == true ) {
      req.session.data['change'] = null;
      // No change
      res.redirect('/beta-private/iteration-14/start-a-claim/summary/'); // Goes back to unchanged summary
    }
    else {
      req.session.data['change'] = null;
      res.redirect('/beta-private/iteration-14/start-a-claim/employment/');
    }

  }

});

router.post('/beta-private/iteration-14/start-a-claim/baby-birth-date', function (req, res) {
  if (req.session.data['change'] == true ) {
    req.session.data['change'] = null;
    // Change made - GO TO CHANGED SUMMARY

    // Changes listed here
    req.session.data['ma-baby-birth-date'] = '1 October 2022';
    req.session.data['ma-map-start'] = '2 October 2022';
    req.session.data['ma-map-end'] = '1 July 2023';

    res.redirect('/beta-private/iteration-14/start-a-claim/summary/change-baby-birth-date'); // NEEDS TO BE CHANGED TO CHANGED SUMMARY
  }
  else {
    res.redirect('/beta-private/iteration-14/start-a-claim/employment/');
  }
});

router.post('/beta-private/iteration-14/start-a-claim/employment/', function (req, res) {
  if (req.session.data['employment-type'] == 'agency') {
    res.redirect('/beta-private/iteration-14/start-a-claim/employment/agency-employment-date');
  }
  else {
    res.redirect('/beta-private/iteration-14/start-a-claim/stopped-work/');
  }
});

// router.post('/beta-private/iteration-14/start-a-claim/employment/test-period-agency', function (req, res) {
//  if (req.session.data['test-period-agency'] == 'yes') {
//    res.redirect('/beta-private/iteration-14/start-a-claim/employment/agency-employment-date');
//  }
//  else {
//    res.redirect('/beta-private/iteration-14/start-a-claim/stopped-work/');
//  }
// });

router.post('/beta-private/iteration-14/start-a-claim/employment/agency-employment-date', function (req, res) {
  res.redirect('/beta-private/iteration-14/start-a-claim/employment/agency-employed');
});

router.post('/beta-private/iteration-14/start-a-claim/employment/agency-employed', function (req, res) {
  if (req.session.data['agency-employed'] == 'no') {
    res.redirect('/beta-private/iteration-14/start-a-claim/employment/agency-employment-end-date');
  }
  else {
    res.redirect('/beta-private/iteration-14/start-a-claim/stopped-work');
  }
});

router.post('/beta-private/iteration-14/start-a-claim/employment/agency-employment-end-date', function (req, res) {
  res.redirect('/beta-private/iteration-14/start-a-claim/chosen-map-date');
});

router.post('/beta-private/iteration-14/start-a-claim/stopped-work/', function (req, res) {
  if (req.session.data['stopped-work'] == 'yes') {
    res.redirect('/beta-private/iteration-14/start-a-claim/stopped-work/reason');
  }
  else {
    // For Private Beta testing for Iteration 4, we will set the change scenario
    // session data to 'true' as they say 'no' to, if they've started work
    // so that when they click change on the summary, the next time they run through this screen
    // it will return directly to summary after they enter the date on the next screen 'dlw-date'.
    // req.session.data['change'] = true;
    res.redirect('/beta-private/iteration-14/start-a-claim/chosen-map-date');
  }
});

router.post('/beta-private/iteration-14/start-a-claim/stopped-work/reason', function (req, res) {
  if (req.session.data['stopped-work-reason'] == 'sick') {
    res.redirect('/beta-private/iteration-14/start-a-claim/stopped-work/sickness/allowance-type');
  } else {
    res.redirect('/beta-private/iteration-14/start-a-claim/stopped-work/date-last-worked');
  }
});

router.post('/beta-private/iteration-14/start-a-claim/stopped-work/sickness/allowance-type', function (req, res) {
  if (req.session.data['allowance-type'] == 'employment-and-support-allowance') {
    res.redirect('/beta-private/iteration-14/start-a-claim/stopped-work/sickness/benefit-start-date');
  }
  else {
    res.redirect('/beta-private/iteration-14/start-a-claim/stopped-work/sickness/pregnancy-related');    
  }
});

router.post('/beta-private/iteration-14/start-a-claim/stopped-work/sickness/pregnancy-related', function (req, res) {
  if (req.session.data['allowance-type'] == 'statutory-sick-pay') {
    res.redirect('/beta-private/iteration-14/start-a-claim/stopped-work/sickness/benefit-end-date');
  }
  else {
    res.redirect('/beta-private/iteration-14/start-a-claim/stopped-work/date-last-worked');    
  }
});

router.post('/beta-private/iteration-14/start-a-claim/stopped-work/sickness/benefit-end-date', function (req, res) {
  res.redirect('/beta-private/iteration-14/start-a-claim/stopped-work/date-last-worked');
});

router.post('/beta-private/iteration-14/start-a-claim/stopped-work/sickness/benefit-start-date', function (req, res) {
    res.redirect('/beta-private/iteration-14/start-a-claim/stopped-work/date-last-worked');
});

router.post('/beta-private/iteration-14/start-a-claim/stopped-work/date-last-worked', function (req, res) {
    res.redirect('/beta-private/iteration-14/start-a-claim/chosen-map-date');
});

// Removed maternity leave question
// router.post('/beta-private/iteration-14/start-a-claim/ma-start-date-provided', function (req, res) {
//  if (req.session.data['ma-start-date-provided'] == 'yes') {
//    res.redirect('/beta-private/iteration-14/start-a-claim/planned-dlw-date');
//  }
//  else {
//    res.redirect('/beta-private/iteration-14/start-a-claim/chosen-map-date');
//  }
// });

router.post('/beta-private/iteration-14/start-a-claim/planned-dlw-date', function (req, res) {
  res.redirect('/beta-private/iteration-14/start-a-claim/chosen-map-date');
});

router.post('/beta-private/iteration-14/start-a-claim/chosen-map-date', function (req, res) {
  if (req.session.data['ma-date-requested'] == 'yes') {
    res.redirect('/beta-private/iteration-14/start-a-claim/requested-start-date');
  }
  else {
    res.redirect('/beta-private/iteration-14/start-a-claim/summary/');
  }
});

router.post('/beta-private/iteration-14/start-a-claim/requested-start-date', function (req, res) {
  res.redirect('/beta-private/iteration-14/start-a-claim/summary/');
});

router.get('/beta-private/iteration-14/start-a-claim/summary/', function (req, res) {
  if (req.session.data['scenario'] == 'scenario-1') {
    res.redirect('/beta-private/iteration-14/start-a-claim/summary/1');
  } else if (req.session.data['scenario'] == 'scenario-2') {
    res.redirect('/beta-private/iteration-14/start-a-claim/summary/2');
  } else {
    res.redirect('/beta-private/iteration-14/start-a-claim/summary/3');
  }
});

// *** Find a claim *** //

router.post('/beta-private/iteration-14/find-a-claim/', function (req, res) {
  res.redirect('/beta-private/iteration-14/find-a-claim/summary');
});

router.post('/beta-private/iteration-14/find-a-claim/select-claim', function (req, res) {
    res.redirect('/beta-private/iteration-14/find-a-claim/summary/');
});

router.get('/beta-private/iteration-14/find-a-claim/summary/', function (req, res) {
  if (req.session.data['scenario'] == 'scenario-1') {
    res.redirect('/beta-private/iteration-14/find-a-claim/summary/1');
  } else if (req.session.data['scenario'] == 'scenario-2') {
    res.redirect('/beta-private/iteration-14/find-a-claim/summary/2');
  } else {
    res.redirect('/beta-private/iteration-14/find-a-claim/summary/3');
  }
});

router.post('/beta-private/iteration-14/find-a-claim/rti/change', function (req, res) {

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

  res.redirect('/beta-private/iteration-14/find-a-claim/summary/');
});

router.post('/beta-private/iteration-14/find-a-claim/employers/change-employer-1', function (req, res) {
  req.session.data['ma-employer-1'] = 'CHANGE EMP 1 LTD';
  res.redirect('/beta-private/iteration-14/find-a-claim/summary/');
});

router.post('/beta-private/iteration-14/find-a-claim/employers/change-employer-2', function (req, res) {
  req.session.data['ma-employer-2'] = 'CHANGE EMP 2 LTD';
  res.redirect('/beta-private/iteration-14/find-a-claim/summary/');
});

router.post('/beta-private/iteration-14/find-a-claim/employers/change-employer-3', function (req, res) {
  req.session.data['ma-employer-3'] = 'CHANGE EMP 3 LTD';
  res.redirect('/beta-private/iteration-14/find-a-claim/summary/1-three-employers');
});

router.post('/beta-private/iteration-14/find-a-claim/employers/add-employer', function (req, res) {
  req.session.data['ma-employer-3'] = 'B&Q LTD';
  res.redirect('/beta-private/iteration-14/find-a-claim/summary/1-three-employers');
});

router.post('/beta-private/iteration-14/find-a-claim/employers/remove-employer-3', function (req, res) {
  if (req.session.data['remove-employer-3'] == 'yes') {
    res.redirect('/beta-private/iteration-14/find-a-claim/summary/1');
  } else {
    res.redirect('/beta-private/iteration-14/find-a-claim/summary/1-three-employers');
  }
});

}