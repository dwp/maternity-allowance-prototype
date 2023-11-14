
module.exports = router => {

// Add your routes here - above the module.exports line

// (Used Alpha Iteration 10)
// **************** ITERATION 1 ******************** /
// **************** START A CLAIM ****************** /

// *** Scenario 1 ***************************************************************************************************************** //

router.post('/beta-private/iteration-3/scenario-1/start-a-claim/', function (req, res) {

  // Claimant information
  req.session.data['claimant-name'] = 'Helen Ashfield';
  req.session.data['claimant-nino'] = 'XX112233X';
  req.session.data['claimant-dob'] = '16 September 1987';
  req.session.data['claimant-postcode'] = 'DH5 9YR';
  req.session.data['claimant-contact-number'] = '07847 171740';
  // Decision
  req.session.data['ma-decision'] = 'Incomplete';
  req.session.data['ma-claim-creation-date'] = '26 May 2022';
  req.session.data['ma-rate'] = null;
  req.session.data['ma-map-start'] = null;
  req.session.data['ma-map-end'] = null;
  // Test period dates
  req.session.data['ma-baby-due-date'] = '18 May 2022';
  req.session.data['ma-test-period-first-day'] = '7 February 2021';
  req.session.data['ma-test-period-last-day'] = '14 May 2022';
  req.session.data['ma-test-period-week-fifteen'] = '30 January 2022';
  // Maternity Allowance period dates
  req.session.data['ma-map-claim-date-received'] = '20 April 2022';
  req.session.data['ma-map-claimant-stopped-work'] = '8 April 2022';
  req.session.data['ma-map-expected-week-of-confinement'] = '15 May 2022';
  req.session.data['ma-week-eleventh'] = '27 February 2022';
  req.session.data['ma-week-fourth'] = '17 April 2022';
  req.session.data['ma-start-date-requested'] = '12 April 2022';
  req.session.data['ma-map-rule'] = null;
  // Employment and earnings
  req.session.data['ma-employment-test'] = '10 weeks employment provided by Real Time Information';
  req.session.data['ma-employer-1'] = 'DIRECT HOME CARE LTD';
  req.session.data['ma-earnings-test'] = '10 weeks earnings provided by Real Time Information';
  req.session.data['ma-average-earnings'] = null;
  // Highest earning weeks
  req.session.data['ma-week-1'] = '14 November 2021';
  req.session.data['ma-week-2'] = '21 November 2021';
  req.session.data['ma-week-3'] = '28 November 2021';
  req.session.data['ma-week-4'] = '5 December 2021';
  req.session.data['ma-week-5'] = '12 December 2021';
  req.session.data['ma-week-6'] = '19 December 2021';
  req.session.data['ma-week-7'] = '30 January 2021';
  req.session.data['ma-week-8'] = '6 February 2021';
  req.session.data['ma-week-9'] = '13 February 2021';
  req.session.data['ma-week-10'] = '20 February 2021';
  req.session.data['ma-week-11'] = null;
  req.session.data['ma-week-12'] = null;
  req.session.data['ma-week-13'] = null;
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
  req.session.data['ma-week-11-employer-1-amount'] = null;
  req.session.data['ma-week-12-employer-1-amount'] = null;
  req.session.data['ma-week-13-employer-1-amount'] = null;

  // has a match been made, in this scenario?
  var match = "yes";

  if (match == 'no') {
    var match = null;
    res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/more-claimant-information');
  }
  else {
    res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/claim-date');
  }
});

router.post('/beta-private/iteration-3/scenario-1/start-a-claim/more-claimant-information', function (req, res) {
  res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/claim-date');
});

router.post('/beta-private/iteration-3/scenario-1/start-a-claim/claim-date', function (req, res) {
  res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/about-the-baby');
});

router.post('/beta-private/iteration-3/scenario-1/start-a-claim/about-the-baby', function (req, res) {
  if (req.session.data['baby-born'] == 'yes') {
    res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/baby-birth-date');
  }
  else {
    res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/date-last-worked');
  }
});

router.post('/beta-private/iteration-3/scenario-1/start-a-claim/baby-birth-date', function (req, res) {
  res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/date-last-worked');
});

router.post('/beta-private/iteration-3/scenario-1/start-a-claim/date-last-worked', function (req, res) {
  if (req.session.data['stopped-work'] == 'yes') {
    res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/dlw-date');
  }
  else {
    if (req.session.data['action'] == 'change') {
      req.session.data['action'] = null;
      res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/summary');
    }
    else {
      res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/ma-start-date-provided');
    }
  }
});

router.post('/beta-private/iteration-3/scenario-1/start-a-claim/dlw-date', function (req, res) {
  if (req.session.data['action'] == 'change') {
    req.session.data['action'] = null;
    res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/summary');
  }
  else {
    res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/chosen-map-date');
  }
});

router.post('/beta-private/iteration-3/scenario-1/start-a-claim/ma-start-date-provided', function (req, res) {
  if (req.session.data['ma-start-date-provided'] == 'yes') {
    res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/planned-dlw-date');
  }
  else {
    res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/chosen-map-date');
  }
});

router.post('/beta-private/iteration-3/scenario-1/start-a-claim/planned-dlw-date', function (req, res) {
  res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/chosen-map-date');
});

router.post('/beta-private/iteration-3/scenario-1/start-a-claim/chosen-map-date', function (req, res) {
  if (req.session.data['ma-date-requested'] == 'yes') {
    res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/requested-start-date');
  }
  else {
    res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/summary');
  }
});

router.post('/beta-private/iteration-3/scenario-1/start-a-claim/requested-start-date', function (req, res) {
  res.redirect('/beta-private/iteration-3/scenario-1/start-a-claim/summary');
});


// *** Scenario 2 ***************************************************************************************************************** //

router.post('/beta-private/iteration-3/scenario-2/start-a-claim/', function (req, res) {
  // has a match been made, in this scenario?
  var match = "yes";

  if (match == 'no') {
    var match = null;
    res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/more-claimant-information');
  }
  else {
    res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/claim-date');
  }
});

router.post('/beta-private/iteration-3/scenario-2/start-a-claim/more-claimant-information', function (req, res) {
  res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/claim-date');
});

router.post('/beta-private/iteration-3/scenario-2/start-a-claim/claim-date', function (req, res) {
  res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/about-the-baby');
});

router.post('/beta-private/iteration-3/scenario-2/start-a-claim/about-the-baby', function (req, res) {
  if (req.session.data['baby-born'] == 'yes') {
    res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/baby-birth-date');
  }
  else {
    res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/date-last-worked');
  }
});

router.post('/beta-private/iteration-3/scenario-2/start-a-claim/baby-birth-date', function (req, res) {
  res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/date-last-worked');
});

router.post('/beta-private/iteration-3/scenario-2/start-a-claim/date-last-worked', function (req, res) {
  if (req.session.data['stopped-work'] == 'yes') {
    res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/dlw-date');
  }
  else {
    if (req.session.data['action'] == 'change') {
      req.session.data['action'] = null;
      res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/summary');
    }
    else {
      res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/ma-start-date-provided');
    }
  }
});

router.post('/beta-private/iteration-3/scenario-2/start-a-claim/dlw-date', function (req, res) {
  if (req.session.data['action'] == 'change') {
    req.session.data['action'] = null;
    res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/summary');
  }
  else {
    res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/chosen-map-date');
  }
});

router.post('/beta-private/iteration-3/scenario-2/start-a-claim/ma-start-date-provided', function (req, res) {
  if (req.session.data['ma-start-date-provided'] == 'yes') {
    res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/planned-dlw-date');
  }
  else {
    res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/chosen-map-date');
  }
});

router.post('/beta-private/iteration-3/scenario-2/start-a-claim/planned-dlw-date', function (req, res) {
  res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/chosen-map-date');
});

router.post('/beta-private/iteration-3/scenario-2/start-a-claim/chosen-map-date', function (req, res) {
  if (req.session.data['ma-date-requested'] == 'yes') {
    res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/requested-start-date');
  }
  else {
    //res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/summary');
    res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/problem-with-service');
  }
});

router.post('/beta-private/iteration-3/scenario-2/start-a-claim/requested-start-date', function (req, res) {
  //res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/summary');
  res.redirect('/beta-private/iteration-3/scenario-2/start-a-claim/problem-with-service');
});

// **************** FIND A CLAIM ****************** /

router.post('/beta-private/', function (req, res) {
  res.redirect('/beta-private/iteration-3/find-a-claim/');
});

router.post('/beta-private/iteration-3/find-a-claim/', function (req, res) {
  res.redirect('/beta-private/iteration-3/find-a-claim/summary');
});

}
