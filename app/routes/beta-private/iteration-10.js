
module.exports = router => {

// Add your routes here - above the module.exports line

// (Used Alpha Iteration 10)
// **************** ITERATION 4 ******************** /
// **************** START A CLAIM ****************** /

// *** Scenario 1 ***************************************************************************************************************** //

router.post('/beta-private/iteration-10/scenario-1/start-a-claim/', function (req, res) {
  // clear data
  req.session.data['baby-born'] = null;
  req.session.data['stopped-work'] = null;
  req.session.data['ma-date-requested'] = null;
  // Claimant information
  req.session.data['claimant-name'] = 'Priya Ashgarth';
  req.session.data['claimant-nino'] = 'ZZ123456Z';
  req.session.data['claimant-dob'] = '3 September 1991';
  req.session.data['claimant-postcode'] = 'MN9 3FJ';
  req.session.data['claimant-address'] = null;
  req.session.data['claimant-contact-number'] = '07847 172369';
  // Decision
  req.session.data['ma-decision'] = 'Allowed';
  req.session.data['ma-claim-creation-date'] = '19 August 2022';
  req.session.data['ma-claim-decision-date'] = '29 October 2022';
  req.session.data['ma-rate'] = 'Standard rate at £156.66 per week ';
  req.session.data['ma-map-start'] = '5 September 2022';
  req.session.data['ma-map-end'] = '4 June 2023';
  // Test period dates
  req.session.data['ma-baby-due-date'] = '10 October 2022';
  req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
  req.session.data['ma-test-period-first-day'] = '4 July 2021';
  req.session.data['ma-test-period-last-day'] = '8 October 2022';
  req.session.data['ma-test-period-week-fifteen'] = '26 June 2022';
  // Maternity Allowance period dates
  req.session.data['ma-map-claim-date-received'] = '19 August 2022';
  req.session.data['ma-map-claimant-stopped-work'] = '10 August 2022';
  req.session.data['ma-map-expected-week-of-confinement'] = '9 October 2022';
  req.session.data['ma-week-eleventh'] = '24 July 2022';
  req.session.data['ma-week-fourth'] = '11 September 2022';
  req.session.data['ma-start-date-requested'] = '5 September 2022';
  req.session.data['ma-start-date-requested-status'] = 'Allowed';
  req.session.data['ma-map-rule'] = 'Flexible Maternity Allowance Period';
  // Employment and earnings
  req.session.data['ma-employment-test'] = 'Met';
  req.session.data['ma-employer-1'] = 'ASDA LTD';
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

  // Is more claimant information needed, in this scenario?
  var matchMoreInformationNeeded = false;

  if (matchMoreInformationNeeded == true) {
    res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/more-claimant-information');
  }
  else {
    res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/claim-date');
  }
});

router.post('/beta-private/iteration-10/scenario-1/start-a-claim/more-claimant-information', function (req, res) {
  // Has a match been made, in this scenario?
  var match = true;

  if (match == false) {
    var match = null;
    res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/no-match-found');
  }
  else {
    res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/claim-date');
  }
});

router.post('/beta-private/iteration-10/scenario-1/start-a-claim/claim-date', function (req, res) {
  res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/about-the-baby');
});

router.post('/beta-private/iteration-10/scenario-1/start-a-claim/about-the-baby', function (req, res) {
  if (req.session.data['baby-born'] == 'yes') {
    res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/baby-birth-date');
  }
  else {
    res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/date-last-worked');
  }
});

router.post('/beta-private/iteration-10/scenario-1/start-a-claim/baby-birth-date', function (req, res) {
  res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/date-last-worked');
});

router.post('/beta-private/iteration-10/scenario-1/start-a-claim/date-last-worked', function (req, res) {
  if (req.session.data['stopped-work'] == 'yes') {
    res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/dlw-date');
  }
  else {
    // For Private Beta testing for Iteration 4, we will set the change scenario
    // session data to 'true' as they say 'no' to, if they've started work
    // so that when they click change on the summary, the next time they run through this screen
    // it will return directly to summary after they enter the date on the next screen 'dlw-date'.
    // req.session.data['change'] = true;
    res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/chosen-map-date');
  }
});

router.post('/beta-private/iteration-10/scenario-1/start-a-claim/dlw-date', function (req, res) {
    res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/chosen-map-date');
});

// Removed maternity leave question
// router.post('/beta-private/iteration-10/scenario-1/start-a-claim/ma-start-date-provided', function (req, res) {
//  if (req.session.data['ma-start-date-provided'] == 'yes') {
//    res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/planned-dlw-date');
//  }
//  else {
//    res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/chosen-map-date');
//  }
// });

router.post('/beta-private/iteration-10/scenario-1/start-a-claim/planned-dlw-date', function (req, res) {
  res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/chosen-map-date');
});

router.post('/beta-private/iteration-10/scenario-1/start-a-claim/chosen-map-date', function (req, res) {
  if (req.session.data['ma-date-requested'] == 'yes') {
    res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/requested-start-date');
  }
  else {
    res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/summary');
  }
});

router.post('/beta-private/iteration-10/scenario-1/start-a-claim/requested-start-date', function (req, res) {
  res.redirect('/beta-private/iteration-10/scenario-1/start-a-claim/summary');
});


// **************** Scenario 1 - FIND A CLAIM ****************** /

router.post('/beta-private/iteration-10/scenario-1/find-a-claim/', function (req, res) {
  // clear data
  req.session.data['baby-born'] = null;
  req.session.data['stopped-work'] = null;
  req.session.data['ma-date-requested'] = null;
  // Claimant information
  req.session.data['claimant-name'] = 'Priya Ashgarth';
  req.session.data['claimant-nino'] = 'ZZ123456Z';
  req.session.data['claimant-dob'] = '3 September 1991';
  req.session.data['claimant-postcode'] = 'MN9 3FJ';
  req.session.data['claimant-address'] = null;
  req.session.data['claimant-contact-number'] = '07847 172369';
  // Decision
  req.session.data['ma-decision'] = 'Allowed';
  req.session.data['ma-claim-creation-date'] = '19 August 2022';
  req.session.data['ma-claim-decision-date'] = '20 October 2022';
  req.session.data['ma-rate'] = 'Standard rate at £156.66 per week ';
  req.session.data['ma-map-start'] = '5 September 2022';
  req.session.data['ma-map-end'] = '4 June 2023';
  // Test period dates
  req.session.data['ma-baby-due-date'] = '10 October 2022';
  req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
  req.session.data['ma-test-period-first-day'] = '4 July 2021';
  req.session.data['ma-test-period-last-day'] = '8 October 2022';
  req.session.data['ma-test-period-week-fifteen'] = '26 June 2022';
  // Maternity Allowance period dates
  req.session.data['ma-map-claim-date-received'] = '19 August 2022';
  req.session.data['ma-map-claimant-stopped-work'] = '10 August 2022';
  req.session.data['ma-map-expected-week-of-confinement'] = '9 October 2022';
  req.session.data['ma-week-eleventh'] = '24 July 2022';
  req.session.data['ma-week-fourth'] = '11 September 2022';
  req.session.data['ma-start-date-requested'] = '5 September 2022';
  req.session.data['ma-start-date-requested-status'] = 'Allowed';
  req.session.data['ma-map-rule'] = 'Flexible Maternity Allowance Period';
  // Employment and earnings
  req.session.data['ma-employment-test'] = 'Met';
  req.session.data['ma-employer-1'] = 'ASDA LTD';
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

  res.redirect('/beta-private/iteration-10/scenario-1/find-a-claim/summary');
});

router.post('/beta-private/iteration-10/scenario-1/find-a-claim/about-the-baby', function (req, res) {
    res.redirect('/beta-private/iteration-10/scenario-1/find-a-claim/baby-birth-date');
});

router.post('/beta-private/iteration-10/scenario-1/find-a-claim/baby-birth-date', function (req, res) {
    // Add changed session data here for alternative summary screen

    req.session.data['ma-baby-birth-date'] = '8 September 2022';

    res.redirect('/beta-private/iteration-10/scenario-1/find-a-claim/summary-change');
});

// *** Scenario 2 ***************************************************************************************************************** //

router.post('/beta-private/iteration-10/scenario-2/start-a-claim/', function (req, res) {
  // clear data
  req.session.data['baby-born'] = null;
  req.session.data['stopped-work'] = null;
  req.session.data['ma-date-requested'] = null;
  // Claimant information
  req.session.data['claimant-name'] = 'Ashleigh Smithson';
  req.session.data['claimant-nino'] = 'XX123456X';
  req.session.data['claimant-dob'] = '25 October 1989';
  req.session.data['claimant-postcode'] = 'HR7 8RP';
  req.session.data['claimant-address'] = null;
  req.session.data['claimant-contact-number'] = '07847 171740';
  // Decision
  req.session.data['ma-decision'] = 'Allowed';
  req.session.data['ma-claim-creation-date'] = '20 October 2022';
  req.session.data['ma-claim-decision-date'] = '20 October 2022';
  req.session.data['ma-rate'] = 'Standard rate at £156.66 per week';
  req.session.data['ma-map-start'] = '12 August 2022';
  req.session.data['ma-map-end'] = '11 May 2023';
  // Test period dates
  req.session.data['ma-baby-due-date'] = '12 September 2022';
  req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
  req.session.data['ma-test-period-first-day'] = '6 June 2021';
  req.session.data['ma-test-period-last-day'] = '10 September 2022';
  req.session.data['ma-test-period-week-fifteen'] = '29 May 2022';
  // Maternity Allowance period dates
  req.session.data['ma-map-claim-date-received'] = '1 August 2022';
  req.session.data['ma-map-expected-week-of-confinement'] = '11 September 2022';
  req.session.data['ma-week-eleventh'] = '26 June 2022';
  req.session.data['ma-week-fourth'] = '14 August 2022';
  req.session.data['ma-start-date-requested'] = '12 August 2022';
  req.session.data['ma-start-date-requested-status'] = 'Allowed';
  req.session.data['ma-map-rule'] = 'Flexible Maternity Allowance Period';
  // Date Last Worked
  req.session.data['ma-map-claimant-stopped-work'] = '28 July 2022';
  req.session.data['ma-map-claimant-stopped-work-reason'] = 'Sick leave';
  req.session.data['ma-map-claimant-stopped-work-pregnancy-related'] = 'No';
  req.session.data['ma-map-claimant-stopped-work-allowance-type'] = 'Statutory Sick Pay';
  req.session.data['ma-map-claimant-stopped-work-end-date'] = '11 August 2022';
  // Employment and earnings
  req.session.data['ma-employment-test'] = 'Met';
  req.session.data['ma-employer-1'] = 'ASDA LTD';
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

  // Is more claimant information needed, in this scenario?
  var matchMoreInformationNeeded = false;

  if (matchMoreInformationNeeded == true) {
    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/more-claimant-information');
  }
  else {
    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/claim-date');
  }
});

router.post('/beta-private/iteration-10/scenario-2/start-a-claim/more-claimant-information', function (req, res) {
  // Has a match been made, in this scenario?
  var match = true;

  if (match == false) {
    var match = null;
    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/no-match-found');
  }
  else {
    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/claim-date');
  }
});

router.post('/beta-private/iteration-10/scenario-2/start-a-claim/claim-date', function (req, res) {
  res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/about-the-baby');
});

router.post('/beta-private/iteration-10/scenario-2/start-a-claim/about-the-baby', function (req, res) {
  if (req.session.data['baby-born'] == 'yes') {
    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/baby-birth-date');
  }
  else {
    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/stopped-work/');
  }
});

router.post('/beta-private/iteration-10/scenario-2/start-a-claim/baby-birth-date', function (req, res) {
  res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/stopped-work/');
});

router.post('/beta-private/iteration-10/scenario-2/start-a-claim/stopped-work/', function (req, res) {
  if (req.session.data['stopped-work'] == 'yes') {
    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/stopped-work/reason');
  }
  else {
    // For Private Beta testing for Iteration 4, we will set the change scenario
    // session data to 'true' as they say 'no' to, if they've started work
    // so that when they click change on the summary, the next time they run through this screen
    // it will return directly to summary after they enter the date on the next screen 'dlw-date'.
    // req.session.data['change'] = true;
    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/chosen-map-date');
  }
});

router.post('/beta-private/iteration-10/scenario-2/start-a-claim/stopped-work/reason', function (req, res) {
  if (req.session.data['stopped-work-reason'] == 'sick') {
    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/stopped-work/sickness/pregnancy-related');
  }
  else {
    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/stopped-work/date-last-worked');
  }
});

router.post('/beta-private/iteration-10/scenario-2/start-a-claim/stopped-work/sickness/pregnancy-related', function (req, res) {
    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/stopped-work/sickness/allowance-type');
});

router.post('/beta-private/iteration-10/scenario-2/start-a-claim/stopped-work/sickness/allowance-type', function (req, res) {
    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/stopped-work/sickness/benefit-end-date');
});

router.post('/beta-private/iteration-10/scenario-2/start-a-claim/stopped-work/sickness/benefit-end-date', function (req, res) {
    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/stopped-work/date-last-worked');
});

router.post('/beta-private/iteration-10/scenario-2/start-a-claim/stopped-work/date-last-worked', function (req, res) {
    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/chosen-map-date');
});

// Removed maternity leave question
// router.post('/beta-private/iteration-10/scenario-2/start-a-claim/ma-start-date-provided', function (req, res) {
//  if (req.session.data['ma-start-date-provided'] == 'yes') {
//    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/planned-dlw-date');
//  }
//  else {
//    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/chosen-map-date');
//  }
// });

router.post('/beta-private/iteration-10/scenario-2/start-a-claim/planned-dlw-date', function (req, res) {
  res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/chosen-map-date');
});

router.post('/beta-private/iteration-10/scenario-2/start-a-claim/chosen-map-date', function (req, res) {
  if (req.session.data['ma-date-requested'] == 'yes') {
    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/requested-start-date');
  }
  else {
    res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/summary');
  }
});

router.post('/beta-private/iteration-10/scenario-2/start-a-claim/requested-start-date', function (req, res) {
  res.redirect('/beta-private/iteration-10/scenario-2/start-a-claim/summary');
});

// **************** Scenario 3 - FIND A CLAIM (Change Requested Start Date) ****************** /

router.post('/beta-private/iteration-10/scenario-3/find-a-claim/', function (req, res) {
  // clear data
  req.session.data['baby-born'] = null;
  req.session.data['stopped-work'] = null;
  req.session.data['ma-date-requested'] = null;
  // Claimant information
  req.session.data['claimant-name'] = 'Lana Pietrov';
  req.session.data['claimant-nino'] = 'ZZ112233Z';
  req.session.data['claimant-dob'] = '4 December 1994';
  req.session.data['claimant-postcode'] = 'HR4 7GN';
  req.session.data['claimant-address'] = null;
  req.session.data['claimant-contact-number'] = '07525 252101';
  // Decision
  req.session.data['ma-decision'] = 'Allowed';
  req.session.data['ma-claim-creation-date'] = '10 October 2022';
  req.session.data['ma-claim-decision-date'] = '10 October 2022';
  req.session.data['ma-rate'] = 'Standard rate at £156.66 per week';
  req.session.data['ma-map-start'] = '14 October 2022';
  req.session.data['ma-map-end'] = '13 July 2023';
  // Test period dates
  req.session.data['ma-baby-due-date'] = '15 November 2022';
  req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
  req.session.data['ma-test-period-first-day'] = '8 August 2021';
  req.session.data['ma-test-period-last-day'] = '12 November 2022';
  req.session.data['ma-test-period-week-fifteen'] = '31 July 2022';
  // Maternity Allowance period dates
  req.session.data['ma-map-claim-date-received'] = '15 September 2022';
  req.session.data['ma-map-claimant-stopped-work'] = '5 October 2022';
  req.session.data['ma-map-expected-week-of-confinement'] = '13 November 2022';
  req.session.data['ma-week-eleventh'] = '28 August 2022';
  req.session.data['ma-week-fourth'] = '16 October 2022';
  req.session.data['ma-start-date-requested'] = '14 October 2022';
  req.session.data['ma-start-date-requested-status'] = 'Allowed';
  req.session.data['ma-map-rule'] = 'Flexible Maternity Allowance Period';
  // Employment and earnings
  req.session.data['ma-employment-test'] = 'Met';
  req.session.data['ma-employer-1'] = 'ASDA LTD';
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

  res.redirect('/beta-private/iteration-10/scenario-3/find-a-claim/summary');
});

router.post('/beta-private/iteration-10/scenario-3/find-a-claim/about-the-baby', function (req, res) {
  // Add changed session data here for alternative summary screen  // Decision
  req.session.data['ma-claim-decision-date'] = '20 October 2022';
  // Test period dates
  req.session.data['ma-baby-due-date'] = '15 December 2022';
  req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
  req.session.data['ma-test-period-first-day'] = '5 September 2021';
  req.session.data['ma-test-period-last-day'] = '10 December 2022';
  req.session.data['ma-test-period-week-fifteen'] = '28 August 2022';
  // Maternity Allowance period dates
  req.session.data['ma-map-expected-week-of-confinement'] = '11 December 2022';
  req.session.data['ma-week-eleventh'] = '25 September 2022';
  req.session.data['ma-week-fourth'] = '13 November 2022';
  
  res.redirect('/beta-private/iteration-10/scenario-3/find-a-claim/summary-change');
});

}
