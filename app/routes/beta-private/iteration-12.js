
module.exports = router => {

// Add your routes here - above the module.exports line

router.post('/beta-private/iteration-12/', function (req, res) {

  // clear data
  req.session.data['baby-born'] = null;
  req.session.data['stopped-work'] = null;
  req.session.data['ma-date-requested'] = null;
  req.session.data['ma-claim-two-creation-date'] = '14 January 2024';

  // SCENARIO 1 ---------------------------------------------------------------------------------- SCENARIO 1 ---/
  // ------------------------------------------------------------------------------------------------------------/
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
    req.session.data['ma-claim-creation-date'] = '6 December 2022';
    req.session.data['ma-claim-decision-date'] = '6 December 2022';
    req.session.data['ma-rate'] = 'Standard rate at £156.66 per week';
    req.session.data['ma-map-start'] = '18 November 2022';
    req.session.data['ma-map-end'] = '17 August 2023';

    // Test period dates
    req.session.data['ma-baby-due-date'] = '20 December 2022';
    req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
    req.session.data['ma-test-period-first-day'] = '12 September 2021';
    req.session.data['ma-test-period-last-day'] = '17 December 2022';
    req.session.data['ma-test-period-week-fifteen'] = '4 September 2022';

    // Maternity Allowance period dates
    req.session.data['ma-map-claim-date-received'] = '15 October 2022';
    req.session.data['ma-map-expected-week-of-confinement'] = '18 December 2022';
    req.session.data['ma-week-eleventh'] = '2 October 2022';
    req.session.data['ma-week-fourth'] = '20 November 2022';
    req.session.data['ma-start-date-requested'] = '18 November 2022';
    req.session.data['ma-start-date-requested-status'] = 'Allowed';
    req.session.data['ma-map-rule'] = 'Flexible Maternity Allowance Period';

    // Date Last Worked
    req.session.data['ma-map-claimant-stopped-work-date-last-worked'] = '20 October 2022';
    req.session.data['ma-map-claimant-stopped-work-reason'] = 'Sick leave';
    req.session.data['ma-map-claimant-stopped-work-pregnancy-related'] = 'Yes';
    req.session.data['ma-map-claimant-stopped-work-allowance-type'] = 'None';
    req.session.data['ma-map-claimant-stopped-work-allowance-start-date'] = null;
    req.session.data['ma-map-claimant-stopped-work-allowance-end-date'] = null;

    // Employment and earnings
    req.session.data['ma-employment-type'] = 'Employed';
    req.session.data['ma-employment-agency-test-period'] = null;
    req.session.data['ma-employment-agency-employment-start-date'] = null;
    req.session.data['ma-employment-agency-status'] = null;
    req.session.data['ma-employment-test'] = 'Met';
    req.session.data['ma-employer-1'] = 'B&Q';
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
  // SCENARIO 2 ---------------------------------------------------------------------------------- SCENARIO 2 ---/
  // ------------------------------------------------------------------------------------------------------------/
  else if (req.session.data['scenario'] == 'scenario-2') {

    // Claimant information
    req.session.data['claimant-name'] = 'Sophia Armstrong';
    req.session.data['claimant-nino'] = 'XX123456Z';
    req.session.data['claimant-dob'] = '16 March 1992';
    req.session.data['claimant-postcode'] = 'SR2 9RQ';
    req.session.data['claimant-address'] = null;
    req.session.data['claimant-contact-number'] = '07847 171740';

    // Decision
    req.session.data['ma-decision'] = 'Allowed';
    req.session.data['ma-claim-creation-date'] = '6 December 2022';
    req.session.data['ma-claim-decision-date'] = '6 December 2022';
    req.session.data['ma-rate'] = 'Standard rate at £156.66 per week';
    req.session.data['ma-map-start'] = '11 October 2022';
    req.session.data['ma-map-end'] = '10 July 2023';

    // Test period dates
    req.session.data['ma-baby-due-date'] = '15 November 2022';
    req.session.data['ma-baby-birth-date'] = '10 October 2022';
    req.session.data['ma-test-period-first-day'] = '8 August 2021';
    req.session.data['ma-test-period-last-day'] = '12 November 2022';
    req.session.data['ma-test-period-week-fifteen'] = '31 July 2022';

    // Maternity Allowance period dates
    req.session.data['ma-map-claim-date-received'] = '12 November 2022';
    req.session.data['ma-map-expected-week-of-confinement'] = '13 November 2022';
    req.session.data['ma-week-eleventh'] = '28 August 2022';
    req.session.data['ma-week-fourth'] = '16 October 2022';
    req.session.data['ma-start-date-requested'] = '14 November 2022';
    req.session.data['ma-start-date-requested-status'] = 'Declined';
    req.session.data['ma-map-rule'] = 'Non-flexible Maternity Allowance Period';

    // Date Last Worked
    req.session.data['ma-map-claimant-stopped-work-date-last-worked'] = '1 October 2022';
    req.session.data['ma-map-claimant-stopped-work-reason'] = 'Maternity leave';
    req.session.data['ma-map-claimant-stopped-work-pregnancy-related'] = null;
    req.session.data['ma-map-claimant-stopped-work-allowance-type'] = null;
    req.session.data['ma-map-claimant-stopped-work-allowance-start-date'] = null;
    req.session.data['ma-map-claimant-stopped-work-allowance-end-date'] = null;

    // Employment and earnings
    req.session.data['ma-employment-type'] = 'Employed';
    req.session.data['ma-employment-agency-test-period'] = null;
    req.session.data['ma-employment-agency-employment-start-date'] = null;
    req.session.data['ma-employment-agency-status'] = null;
    req.session.data['ma-employment-test'] = 'Met';
    req.session.data['ma-employer-1'] = 'ARGOS';
    req.session.data['ma-earnings-test'] = 'Met';
    req.session.data['ma-average-earnings'] = '£215.46';

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
    req.session.data['ma-week-1-employer-1-amount'] = '£236.00';
    req.session.data['ma-week-2-employer-1-amount'] = '£150.00';
    req.session.data['ma-week-3-employer-1-amount'] = '£240.00';
    req.session.data['ma-week-4-employer-1-amount'] = '£190.00';
    req.session.data['ma-week-5-employer-1-amount'] = '£255.00';
    req.session.data['ma-week-6-employer-1-amount'] = '£275.00';
    req.session.data['ma-week-7-employer-1-amount'] = '£190.00';
    req.session.data['ma-week-8-employer-1-amount'] = '£260.00';
    req.session.data['ma-week-9-employer-1-amount'] = '£180.00';
    req.session.data['ma-week-10-employer-1-amount'] = '£200.00';
    req.session.data['ma-week-11-employer-1-amount'] = '£230.00';
    req.session.data['ma-week-12-employer-1-amount'] = '£195.00';
    req.session.data['ma-week-13-employer-1-amount'] = '£200.00';
    
  }
  // SCENARIO 3 ---------------------------------------------------------------------------------- SCENARIO 3 ---/
  // ------------------------------------------------------------------------------------------------------------/
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
    req.session.data['ma-claim-creation-date'] = '6 December 2022';
    req.session.data['ma-claim-decision-date'] = '6 December 2022';
    req.session.data['ma-rate'] = 'Standard rate at £156.66 per week';
    req.session.data['ma-map-start'] = '17 December 2022';
    req.session.data['ma-map-end'] = '15 September 2023';

    // Test period dates
    req.session.data['ma-baby-due-date'] = '3 January 2021';
    req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
    req.session.data['ma-test-period-first-day'] = '26 September 2021';
    req.session.data['ma-test-period-last-day'] = '31 December 2023';
    req.session.data['ma-test-period-week-fifteen'] = '18 September 2022';

    // Maternity Allowance period dates
    req.session.data['ma-map-claim-date-received'] = '16 November 2022';
    req.session.data['ma-map-expected-week-of-confinement'] = '1 January 2023';
    req.session.data['ma-week-eleventh'] = '16 October 2022';
    req.session.data['ma-week-fourth'] = '4 December 2022';
    req.session.data['ma-start-date-requested'] = '2 January 2023';
    req.session.data['ma-start-date-requested-status'] = 'Declined';
    req.session.data['ma-map-rule'] = 'Non-flexible Maternity Allowance Period';

    // Date Last Worked
    req.session.data['ma-map-claimant-stopped-work-date-last-worked'] = '15 December 2022';
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

  res.redirect('/beta-private/iteration-12/scenario/');
});

// *** Scenario 1 ***************************************************************************************************************** //

router.post('/beta-private/iteration-12/scenario/start-a-claim/', function (req, res) {

  // Is more claimant information needed, in this scenario?
  var matchMoreInformationNeeded = false;

  if (matchMoreInformationNeeded == true) {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/more-claimant-information');
  }
  else {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/claim-date');
  }
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/more-claimant-information', function (req, res) {
  // Has a match been made, in this scenario?
  var match = true;

  if (match == false) {
    var match = null;
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/no-match-found');
  }
  else {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/claim-date');
  }
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/claim-date', function (req, res) {
  res.redirect('/beta-private/iteration-12/scenario/start-a-claim/baby-due-date');
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/baby-due-date', function (req, res) {
  res.redirect('/beta-private/iteration-12/scenario/start-a-claim/baby-born');
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/baby-born', function (req, res) {

  if (req.session.data['change'] == null) {
    req.session.data['change'] = false;
  } else {
    req.session.data['change'] = true;
  }

  if (req.session.data['baby-born'] == 'yes') {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/baby-birth-date');
  }
  else {

    if (req.session.data['change'] == true ) {
      req.session.data['change'] = null;
      // No change
      res.redirect('/beta-private/iteration-12/scenario/start-a-claim/summary/'); // Goes back to unchanged summary
    }
    else {
      req.session.data['change'] = null;
      res.redirect('/beta-private/iteration-12/scenario/start-a-claim/employment/');
    }

  }

});

router.post('/beta-private/iteration-12/scenario/start-a-claim/baby-birth-date', function (req, res) {
  if (req.session.data['change'] == true ) {
    req.session.data['change'] = null;
    // Change made - GO TO CHANGED SUMMARY

    // Changes listed here
    req.session.data['ma-baby-birth-date'] = '1 October 2022';
    req.session.data['ma-map-start'] = '2 October 2022';
    req.session.data['ma-map-end'] = '1 July 2023';

    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/summary/change-baby-birth-date'); // NEEDS TO BE CHANGED TO CHANGED SUMMARY
  }
  else {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/employment/');
  }
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/employment/', function (req, res) {
  if (req.session.data['employment-type'] == 'agency') {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/employment/test-period-agency');
  }
  else {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/');
  }
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/employment/test-period-agency', function (req, res) {
  if (req.session.data['test-period-agency'] == 'yes') {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/employment/agency-employment-date');
  }
  else {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/');
  }
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/employment/agency-employment-date', function (req, res) {
  res.redirect('/beta-private/iteration-12/scenario/start-a-claim/employment/agency-employed');
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/employment/agency-employed', function (req, res) {
  res.redirect('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/');
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/', function (req, res) {
  if (req.session.data['stopped-work'] == 'yes') {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/reason');
  }
  else {
    // For Private Beta testing for Iteration 4, we will set the change scenario
    // session data to 'true' as they say 'no' to, if they've started work
    // so that when they click change on the summary, the next time they run through this screen
    // it will return directly to summary after they enter the date on the next screen 'dlw-date'.
    // req.session.data['change'] = true;
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/chosen-map-date');
  }
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/reason', function (req, res) {
  if (req.session.data['stopped-work-reason'] == 'sick') {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/sickness/allowance-type');
  }
  else {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/date-last-worked');
  }
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/sickness/allowance-type', function (req, res) {
  if (req.session.data['allowance-type'] == 'employment-and-support-allowance') {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/sickness/benefit-start-date');
  }
  else {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/sickness/pregnancy-related');    
  }
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/sickness/pregnancy-related', function (req, res) {
  if (req.session.data['allowance-type'] == 'statutory-sick-pay') {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/sickness/benefit-end-date');
  }
  else {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/date-last-worked');    
  }
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/sickness/benefit-end-date', function (req, res) {
  res.redirect('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/date-last-worked');
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/sickness/benefit-start-date', function (req, res) {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/date-last-worked');
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/stopped-work/date-last-worked', function (req, res) {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/chosen-map-date');
});

// Removed maternity leave question
// router.post('/beta-private/iteration-12/scenario/start-a-claim/ma-start-date-provided', function (req, res) {
//  if (req.session.data['ma-start-date-provided'] == 'yes') {
//    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/planned-dlw-date');
//  }
//  else {
//    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/chosen-map-date');
//  }
// });

router.post('/beta-private/iteration-12/scenario/start-a-claim/planned-dlw-date', function (req, res) {
  res.redirect('/beta-private/iteration-12/scenario/start-a-claim/chosen-map-date');
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/chosen-map-date', function (req, res) {
  if (req.session.data['ma-date-requested'] == 'yes') {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/requested-start-date');
  }
  else {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/summary/');
  }
});

router.post('/beta-private/iteration-12/scenario/start-a-claim/requested-start-date', function (req, res) {
  res.redirect('/beta-private/iteration-12/scenario/start-a-claim/summary/');
});

router.get('/beta-private/iteration-12/scenario/start-a-claim/summary/', function (req, res) {
  if (req.session.data['scenario'] == 'scenario-1') {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/summary/1');
  } else if (req.session.data['scenario'] == 'scenario-2') {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/summary/2');
  } else {
    res.redirect('/beta-private/iteration-12/scenario/start-a-claim/summary/3');
  }
});

// *** Find a claim *** //

router.post('/beta-private/iteration-12/scenario/find-a-claim/', function (req, res) {
  res.redirect('/beta-private/iteration-12/scenario/find-a-claim/select-claim');
});

router.post('/beta-private/iteration-12/scenario/find-a-claim/select-claim', function (req, res) {
  res.redirect('/beta-private/iteration-12/scenario/find-a-claim/summary');
});

}
