
module.exports = router => {

// Add your routes here - above the module.exports line

// (Used Alpha Iteration 10)
// **************** ITERATION 4 ******************** /
// **************** START A CLAIM ****************** /

// *** Scenario 1 ***************************************************************************************************************** //

router.post('/beta-private/iteration-4/scenario-1/start-a-claim/', function (req, res) {

  // Claimant information
  req.session.data['claimant-name'] = 'Helen Ashfield';
  req.session.data['claimant-nino'] = 'XX112233X';
  req.session.data['claimant-dob'] = '16 September 1987';
  req.session.data['claimant-postcode'] = 'DH5 9YR';
  req.session.data['claimant-contact-number'] = '07847 171740';
  // Decision
  req.session.data['ma-decision'] = 'Incomplete';
  req.session.data['ma-claim-creation-date'] = '14 June 2022';
  req.session.data['ma-claim-decision-date'] = null;
  req.session.data['ma-rate'] = 'Standard rate at £156.66 per week';
  req.session.data['ma-map-start'] = null;
  req.session.data['ma-map-end'] = null;
  // Test period dates
  req.session.data['ma-baby-due-date'] = '18 July 2022';
  req.session.data['ma-test-period-first-day'] = '11 April 2021';
  req.session.data['ma-test-period-last-day'] = '16 July 2022';
  req.session.data['ma-test-period-week-fifteen'] = '03 April 2022';
  // Maternity Allowance period dates
  req.session.data['ma-map-claim-date-received'] = '10 June 2022';
  req.session.data['ma-map-claimant-stopped-work'] = 'Claimant has not stopped work';
  req.session.data['ma-map-expected-week-of-confinement'] = '17 July 2022';
  req.session.data['ma-week-eleventh'] = '1 May 2022';
  req.session.data['ma-week-fourth'] = '19 June 2022';
  req.session.data['ma-start-date-requested'] = '12 June 2022';
  req.session.data['ma-map-rule'] = null;
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
    res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/more-claimant-information');
  }
  else {
    res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/claim-date');
  }
});

router.post('/beta-private/iteration-4/scenario-1/start-a-claim/more-claimant-information', function (req, res) {
  // Has a match been made, in this scenario?
  var match = true;

  if (match == false) {
    var match = null;
    res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/no-match-found');
  }
  else {
    res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/claim-date');
  }
});

router.post('/beta-private/iteration-4/scenario-1/start-a-claim/claim-date', function (req, res) {
  res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/about-the-baby');
});

router.post('/beta-private/iteration-4/scenario-1/start-a-claim/about-the-baby', function (req, res) {
  if (req.session.data['baby-born'] == 'yes') {
    res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/baby-birth-date');
  }
  else {
    res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/date-last-worked');
  }
});

router.post('/beta-private/iteration-4/scenario-1/start-a-claim/baby-birth-date', function (req, res) {
  res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/date-last-worked');
});

router.post('/beta-private/iteration-4/scenario-1/start-a-claim/date-last-worked', function (req, res) {
  if (req.session.data['stopped-work'] == 'yes') {
    res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/dlw-date');
  }
  else {
    // For Private Beta testing for Iteration 4, we will set the change scenario
    // session data to 'true' as they say 'no' to, if they've started work
    // so that when they click change on the summary, the next time they run through this screen
    // it will return directly to summary after they enter the date on the next screen 'dlw-date'.
    // req.session.data['change'] = true;
    res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/chosen-map-date');
  }
});

router.post('/beta-private/iteration-4/scenario-1/start-a-claim/dlw-date', function (req, res) {
  if (req.session.data['change'] == 'true') {
    // Add changed session data here for alternative summary screen

    req.session.data['ma-decision'] = 'Allowed';
    req.session.data['ma-claim-decision-date'] = '14 June 2022';
    req.session.data['ma-map-claimant-stopped-work'] = '9 June 2022';
    req.session.data['ma-map-start'] = '12 June 2022';
    req.session.data['ma-map-end'] = '12 March 2023';
    req.session.data['ma-map-rule'] = 'Flexible Maternity Allowance Period';
    // ------------------------------------------------------------
    // Return the session data to null so as to stop the routing taking place on the next journey through.
    req.session.data['change'] == null;
    res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/summary-change');
  }
  else {
    res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/chosen-map-date');
  }
});

// Removed maternity leave question
// router.post('/beta-private/iteration-4/scenario-1/start-a-claim/ma-start-date-provided', function (req, res) {
//  if (req.session.data['ma-start-date-provided'] == 'yes') {
//    res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/planned-dlw-date');
//  }
//  else {
//    res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/chosen-map-date');
//  }
// });

router.post('/beta-private/iteration-4/scenario-1/start-a-claim/planned-dlw-date', function (req, res) {
  res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/chosen-map-date');
});

router.post('/beta-private/iteration-4/scenario-1/start-a-claim/chosen-map-date', function (req, res) {
  if (req.session.data['ma-date-requested'] == 'yes') {
    res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/requested-start-date');
  }
  else {
    res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/summary');
  }
});

router.post('/beta-private/iteration-4/scenario-1/start-a-claim/requested-start-date', function (req, res) {
  res.redirect('/beta-private/iteration-4/scenario-1/start-a-claim/summary');
});


// *** Scenario 2 ***************************************************************************************************************** //

router.post('/beta-private/iteration-4/scenario-2/start-a-claim/', function (req, res) {
  // Is more claimant information needed, in this scenario?
  var matchMoreInformationNeeded = true;

  if (matchMoreInformationNeeded == true) {
    res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/more-claimant-information');
  }
  else {
    res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/claim-date');
  }
});

router.post('/beta-private/iteration-4/scenario-2/start-a-claim/more-claimant-information', function (req, res) {
  // Has a match been made, in this scenario?
  var match = false;

  if (match == false) {
    var match = null;
    res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/no-match-found');
  }
  else {
    res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/claim-date');
  }
});

router.post('/beta-private/iteration-4/scenario-2/start-a-claim/claim-date', function (req, res) {
  res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/about-the-baby');
});

router.post('/beta-private/iteration-4/scenario-2/start-a-claim/about-the-baby', function (req, res) {
  if (req.session.data['baby-born'] == 'yes') {
    res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/baby-birth-date');
  }
  else {
    res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/date-last-worked');
  }
});

router.post('/beta-private/iteration-4/scenario-2/start-a-claim/baby-birth-date', function (req, res) {
  res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/date-last-worked');
});

router.post('/beta-private/iteration-4/scenario-2/start-a-claim/date-last-worked', function (req, res) {
  if (req.session.data['stopped-work'] == 'yes') {
    res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/dlw-date');
  }
  else {
    if (req.session.data['action'] == 'change') {
      req.session.data['action'] = null;
      res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/summary');
    }
    else {
      res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/chosen-map-date');
    }
  }
});

router.post('/beta-private/iteration-4/scenario-2/start-a-claim/dlw-date', function (req, res) {
  if (req.session.data['action'] == 'change') {
    req.session.data['action'] = null;
    res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/summary');
  }
  else {
    res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/chosen-map-date');
  }
});

// Removed maternity leave question
// router.post('/beta-private/iteration-4/scenario-2/start-a-claim/ma-start-date-provided', function (req, res) {
//  if (req.session.data['ma-start-date-provided'] == 'yes') {
//    res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/planned-dlw-date');
//  }
//  else {
//    res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/chosen-map-date');
//  }
// });

router.post('/beta-private/iteration-4/scenario-2/start-a-claim/planned-dlw-date', function (req, res) {
  res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/chosen-map-date');
});

router.post('/beta-private/iteration-4/scenario-2/start-a-claim/chosen-map-date', function (req, res) {
  if (req.session.data['ma-date-requested'] == 'yes') {
    res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/requested-start-date');
  }
  else {
    //res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/summary');
    res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/problem-with-service');
  }
});

router.post('/beta-private/iteration-4/scenario-2/start-a-claim/requested-start-date', function (req, res) {
  //res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/summary');
  res.redirect('/beta-private/iteration-4/scenario-2/start-a-claim/problem-with-service');
});

// **************** FIND A CLAIM ****************** /

router.post('/beta-private/', function (req, res) {
  res.redirect('/beta-private/iteration-4/find-a-claim/');
});

router.post('/beta-private/iteration-4/find-a-claim/', function (req, res) {
  res.redirect('/beta-private/iteration-4/find-a-claim/summary');
});

}
