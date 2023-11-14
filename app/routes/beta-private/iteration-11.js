
module.exports = router => {

// Add your routes here - above the module.exports line

router.post('/beta-private/iteration-11/', function (req, res) {

  // clear data
  req.session.data['baby-born'] = null;
  req.session.data['stopped-work'] = null;
  req.session.data['ma-date-requested'] = null;

  // SCENARIO 1 ---------------------------------------------------------------------------------- SCENARIO 1 ---/
  // ------------------------------------------------------------------------------------------------------------/
  if (req.session.data['scenario'] == 'scenario-1') {

    // Claimant information
    req.session.data['claimant-name'] = 'Annika Martin';
    req.session.data['claimant-nino'] = 'XX123456X';
    req.session.data['claimant-dob'] = '18 December 1988';
    req.session.data['claimant-postcode'] = 'ER8 9WF';
    req.session.data['claimant-address'] = null;
    req.session.data['claimant-contact-number'] = '07847 171740';

    // Decision
    req.session.data['ma-decision'] = 'Allowed';
    req.session.data['ma-claim-creation-date'] = '3 November 2022';
    req.session.data['ma-claim-decision-date'] = '3 November 2022';
    req.session.data['ma-rate'] = 'Standard rate at £156.66 per week';
    req.session.data['ma-map-start'] = '10 October 2022';
    req.session.data['ma-map-end'] = '9 July 2023';

    // Test period dates
    req.session.data['ma-baby-due-date'] = '25 November 2022';
    req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
    req.session.data['ma-test-period-first-day'] = '15 August 2021';
    req.session.data['ma-test-period-last-day'] = '19 November 2022';
    req.session.data['ma-test-period-week-fifteen'] = '7 August 2022';

    // Maternity Allowance period dates
    req.session.data['ma-map-claim-date-received'] = '10 September 2022';
    req.session.data['ma-map-expected-week-of-confinement'] = '20 November 2022';
    req.session.data['ma-week-eleventh'] = '4 September 2022';
    req.session.data['ma-week-fourth'] = '23 October 2022';
    req.session.data['ma-start-date-requested'] = '10 October 2022';
    req.session.data['ma-start-date-requested-status'] = 'Allowed';
    req.session.data['ma-map-rule'] = 'Flexible Maternity Allowance Period';

    // Date Last Worked
    req.session.data['ma-map-claimant-stopped-work-date-last-worked'] = '25 September 2022';
    req.session.data['ma-map-claimant-stopped-work-reason'] = 'Sick leave';
    req.session.data['ma-map-claimant-stopped-work-pregnancy-related'] = 'No';
    req.session.data['ma-map-claimant-stopped-work-allowance-type'] = 'Employment and Support Allowance';
    req.session.data['ma-map-claimant-stopped-work-allowance-start-date'] = '26 September 2022';
    req.session.data['ma-map-claimant-stopped-work-allowance-end-date'] = null;

    // Employment and earnings
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
    req.session.data['ma-claim-creation-date'] = '3 November 2022';
    req.session.data['ma-claim-decision-date'] = '3 November 2022';
    req.session.data['ma-rate'] = 'Standard rate at £156.66 per week';
    req.session.data['ma-map-start'] = '2 November 2022';
    req.session.data['ma-map-end'] = '1 August 2023';

    // Test period dates
    req.session.data['ma-baby-due-date'] = '5 December 2022';
    req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
    req.session.data['ma-test-period-first-day'] = '29 August 2021';
    req.session.data['ma-test-period-last-day'] = '3 December 2022';
    req.session.data['ma-test-period-week-fifteen'] = '21 August 2022';

    // Maternity Allowance period dates
    req.session.data['ma-map-claim-date-received'] = '26 September 2022';
    req.session.data['ma-map-expected-week-of-confinement'] = '4 December 2022';
    req.session.data['ma-week-eleventh'] = '18 September 2022';
    req.session.data['ma-week-fourth'] = '6 November 2022';
    req.session.data['ma-start-date-requested'] = '2 November 2022';
    req.session.data['ma-start-date-requested-status'] = 'Allowed';
    req.session.data['ma-map-rule'] = 'Flexible Maternity Allowance Period';

    // Date Last Worked
    req.session.data['ma-map-claimant-stopped-work-date-last-worked'] = '10 October 2022';
    req.session.data['ma-map-claimant-stopped-work-reason'] = 'Maternity leave';
    req.session.data['ma-map-claimant-stopped-work-pregnancy-related'] = null;
    req.session.data['ma-map-claimant-stopped-work-allowance-type'] = null;
    req.session.data['ma-map-claimant-stopped-work-allowance-start-date'] = null;
    req.session.data['ma-map-claimant-stopped-work-allowance-end-date'] = null;

    // Employment and earnings
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
    req.session.data['ma-claim-creation-date'] = '3 November 2022';
    req.session.data['ma-claim-decision-date'] = '3 November 2022';
    req.session.data['ma-rate'] = 'Standard rate at £156.66 per week';
    req.session.data['ma-map-start'] = '15 December 2022';
    req.session.data['ma-map-end'] = '13 September 2023';

    // Test period dates
    req.session.data['ma-baby-due-date'] = '12 January 2021';
    req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
    req.session.data['ma-test-period-first-day'] = '3 October 2021';
    req.session.data['ma-test-period-last-day'] = '7 January 2023';
    req.session.data['ma-test-period-week-fifteen'] = '25 September 2022';

    // Maternity Allowance period dates
    req.session.data['ma-map-claim-date-received'] = '10 October 2022';
    req.session.data['ma-map-expected-week-of-confinement'] = '8 January 2023';
    req.session.data['ma-week-eleventh'] = '23 October 2022';
    req.session.data['ma-week-fourth'] = '11 December 2022';
    req.session.data['ma-start-date-requested'] = '15 December 2022';
    req.session.data['ma-start-date-requested-status'] = 'Allowed';
    req.session.data['ma-map-rule'] = 'Flexible Maternity Allowance Period';

    // Date Last Worked
    req.session.data['ma-map-claimant-stopped-work-date-last-worked'] = '20 October 2022';
    req.session.data['ma-map-claimant-stopped-work-reason'] = 'Non-pregnancy related absence';
    req.session.data['ma-map-claimant-stopped-work-pregnancy-related'] = null;
    req.session.data['ma-map-claimant-stopped-work-allowance-type'] = null;
    req.session.data['ma-map-claimant-stopped-work-allowance-start-date'] = null;
    req.session.data['ma-map-claimant-stopped-work-allowance-end-date'] = null;

    // Employment and earnings
    req.session.data['ma-employment-test'] = 'Met';
    req.session.data['ma-employer-1'] = 'ANGEL CARE LTD';
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

  res.redirect('/beta-private/iteration-11/scenario/');
});

// *** Scenario 1 ***************************************************************************************************************** //

router.post('/beta-private/iteration-11/scenario/start-a-claim/', function (req, res) {

  // Is more claimant information needed, in this scenario?
  var matchMoreInformationNeeded = false;

  if (matchMoreInformationNeeded == true) {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/more-claimant-information');
  }
  else {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/claim-date');
  }
});

router.post('/beta-private/iteration-11/scenario/start-a-claim/more-claimant-information', function (req, res) {
  // Has a match been made, in this scenario?
  var match = true;

  if (match == false) {
    var match = null;
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/no-match-found');
  }
  else {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/claim-date');
  }
});

router.post('/beta-private/iteration-11/scenario/start-a-claim/claim-date', function (req, res) {
  res.redirect('/beta-private/iteration-11/scenario/start-a-claim/about-the-baby');
});

router.post('/beta-private/iteration-11/scenario/start-a-claim/about-the-baby', function (req, res) {
  if (req.session.data['baby-born'] == 'yes') {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/baby-birth-date');
  }
  else {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/');
  }
});

router.post('/beta-private/iteration-11/scenario/start-a-claim/baby-birth-date', function (req, res) {
  res.redirect('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/');
});

router.post('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/', function (req, res) {
  if (req.session.data['stopped-work'] == 'yes') {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/reason');
  }
  else {
    // For Private Beta testing for Iteration 4, we will set the change scenario
    // session data to 'true' as they say 'no' to, if they've started work
    // so that when they click change on the summary, the next time they run through this screen
    // it will return directly to summary after they enter the date on the next screen 'dlw-date'.
    // req.session.data['change'] = true;
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/chosen-map-date');
  }
});

router.post('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/reason', function (req, res) {
  if (req.session.data['stopped-work-reason'] == 'sick') {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/sickness/allowance-type');
  }
  else {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/date-last-worked');
  }
});

router.post('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/sickness/allowance-type', function (req, res) {
  if (req.session.data['allowance-type'] == 'statutory-sick-pay') {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/sickness/pregnancy-related');    
  }
  else {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/sickness/benefit-start-date');
  }
});

router.post('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/sickness/pregnancy-related', function (req, res) {
  res.redirect('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/sickness/benefit-end-date');
});

router.post('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/sickness/benefit-end-date', function (req, res) {
  res.redirect('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/date-last-worked');
});

router.post('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/sickness/benefit-start-date', function (req, res) {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/date-last-worked');
});

router.post('/beta-private/iteration-11/scenario/start-a-claim/stopped-work/date-last-worked', function (req, res) {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/chosen-map-date');
});

// Removed maternity leave question
// router.post('/beta-private/iteration-11/scenario/start-a-claim/ma-start-date-provided', function (req, res) {
//  if (req.session.data['ma-start-date-provided'] == 'yes') {
//    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/planned-dlw-date');
//  }
//  else {
//    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/chosen-map-date');
//  }
// });

router.post('/beta-private/iteration-11/scenario/start-a-claim/planned-dlw-date', function (req, res) {
  res.redirect('/beta-private/iteration-11/scenario/start-a-claim/chosen-map-date');
});

router.post('/beta-private/iteration-11/scenario/start-a-claim/chosen-map-date', function (req, res) {
  if (req.session.data['ma-date-requested'] == 'yes') {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/requested-start-date');
  }
  else {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/summary/');
  }
});

router.post('/beta-private/iteration-11/scenario/start-a-claim/requested-start-date', function (req, res) {
  res.redirect('/beta-private/iteration-11/scenario/start-a-claim/summary/');
});

router.get('/beta-private/iteration-11/scenario/start-a-claim/summary/', function (req, res) {
  if (req.session.data['scenario'] == 'scenario-1') {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/summary/1');
  } else if (req.session.data['scenario'] == 'scenario-2') {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/summary/2');
  } else {
    res.redirect('/beta-private/iteration-11/scenario/start-a-claim/summary/3');
  }
});


}
