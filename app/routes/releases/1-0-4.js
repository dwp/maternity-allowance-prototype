
module.exports = router => {

  router.post('/releases/1-0-4/', function (req, res) {
    res.redirect('/releases/1-0-4/start-a-claim/');
  });

  router.post('/releases/1-0-4/start-a-claim/', function (req, res) {

    // Claimant information
    req.session.data['claimant-name'] = 'Morgan Jenson';
    req.session.data['claimant-nino'] = 'ZZ123456Z';
    req.session.data['claimant-dob'] = '5 November 1995';
    req.session.data['claimant-postcode'] = 'NH9 7DL';
    req.session.data['claimant-address'] = null;
    req.session.data['claimant-contact-number'] = '07847 171740';

    // Decision
    req.session.data['ma-decision'] = 'Allowed';
    req.session.data['ma-claim-creation-date'] = '15 February 2023';
    req.session.data['ma-claim-decision-date'] = '15 February 2023';
    req.session.data['ma-rate'] = 'Standard rate at £156.66 per week';
    req.session.data['ma-map-start'] = '16 January 2023';
    req.session.data['ma-map-end'] = '15 October 2023';

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
    req.session.data['ma-start-date-requested-status'] = 'Declined';
    req.session.data['ma-start-date-requested-status-colour'] = 'govuk-tag--red';
    req.session.data['ma-map-rule'] = 'Non-flexible Maternity Allowance Period';

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
    req.session.data['ma-employment-agency-status'] = 'Not employed by agency';
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
    req.session.data['ma-week-1-employer-1-total'] = '£200.00';
    req.session.data['ma-week-2-employer-1-total'] = '£200.00';
    req.session.data['ma-week-3-employer-1-total'] = '£200.00';
    req.session.data['ma-week-4-employer-1-total'] = '£200.00';
    req.session.data['ma-week-5-employer-1-total'] = '£200.00';
    req.session.data['ma-week-6-employer-1-total'] = '£200.00';
    req.session.data['ma-week-7-employer-1-total'] = '£200.00';
    req.session.data['ma-week-8-employer-1-total'] = '£200.00';
    req.session.data['ma-week-9-employer-1-total'] = '£200.00';
    req.session.data['ma-week-10-employer-1-total'] = '£200.00';
    req.session.data['ma-week-11-employer-1-total'] = '£200.00';
    req.session.data['ma-week-12-employer-1-total'] = '£200.00';
    req.session.data['ma-week-13-employer-1-total'] = '£200.00';
    res.redirect('/releases/1-0-4/start-a-claim/claimant-details');
  });

  router.post('/releases/1-0-4/start-a-claim/claimant-details', function (req, res) {
    res.redirect('/releases/1-0-4/start-a-claim/claim-date');
  });

  router.post('/releases/1-0-4/start-a-claim/claim-date', function (req, res) {
    res.redirect('/releases/1-0-4/start-a-claim/when-is-the-baby-due');
  });

  router.post('/releases/1-0-4/start-a-claim/when-is-the-baby-due', function (req, res) {
    if (req.query.change) {
      req.session.data['ma-baby-due-date'] = '28 January 2020';
      res.redirect('/releases/1-0-4/summary');
    } 
    res.redirect('/releases/1-0-4/start-a-claim/has-the-baby-been-born');
  });


  router.post('/releases/1-0-4/start-a-claim/has-the-baby-been-born', function (req, res) {
    if (req.session.data['babyBorn'] === 'yes'){
      if (req.query.change) {
        res.redirect('/releases/1-0-4/start-a-claim/when-was-the-baby-born?change=true');
      } 
      res.redirect('/releases/1-0-4/start-a-claim/when-was-the-baby-born');
    } else {
      if (req.query.change) {
        res.redirect('/releases/1-0-4/summary');
      } 
      res.redirect('/releases/1-0-4/start-a-claim/stopped-work');
    }
  });

  router.post('/releases/1-0-4/start-a-claim/when-was-the-baby-born', function (req, res) {
    if (req.query.change) {
      req.session.data['ma-baby-birth-date'] = '14 January 2020';
      res.redirect('/releases/1-0-4/summary');
    } 
      res.redirect('/releases/1-0-4/start-a-claim/stopped-work');
  });

  router.post('/releases/1-0-4/start-a-claim/stopped-work', function (req, res) {
    if (req.session.data['stopped-work'] === 'yes'){
      if (req.query.change) {
        res.redirect('/releases/1-0-4/start-a-claim/when-claimant-stopped-work?change=true');
      } 
      res.redirect('/releases/1-0-4/start-a-claim/why-claimant-stopped-work');
    } else {
      if (req.query.change) {
        res.redirect('/releases/1-0-4/summary');
      } 
      res.redirect('/releases/1-0-4/start-a-claim/chosen-map-date');
    }
  
  });

  router.post('/releases/1-0-4/start-a-claim/why-claimant-stopped-work', function (req, res) {
    if (req.session.data['whyStop'] === 'sick'){
      res.redirect('/releases/1-0-4/start-a-claim/ssp-or-esa');
    } else {
      res.redirect('/releases/1-0-4/start-a-claim/when-claimant-stopped-work');
    }
  });

  router.post('/releases/1-0-4/start-a-claim/ssp-or-esa', function (req, res) {
    if (req.session.data['sspOrEsa'] === 'ssp'){
      res.redirect('/releases/1-0-4/start-a-claim/is-sickness-pregnancy-related');
    } else {
      res.redirect('/releases/1-0-4/start-a-claim/when-sickness-benefit-start');
    }
  });

  router.post('/releases/1-0-4/start-a-claim/is-sickness-pregnancy-related', function (req, res) {
    res.redirect('/releases/1-0-4/start-a-claim/when-sickness-benefit-start');
  });


  router.post('/releases/1-0-4/start-a-claim/when-sickness-benefit-start', function (req, res) {
    res.redirect('/releases/1-0-4/start-a-claim/when-claimant-stopped-work');
  });


  router.post('/releases/1-0-4/start-a-claim/when-claimant-stopped-work', function (req, res) {
    if (req.query.change) {
      req.session.data['ma-map-claimant-stopped-work-date-last-worked'] = '20 January 2023';
      res.redirect('/releases/1-0-4/summary');
    } 
    res.redirect('/releases/1-0-4/start-a-claim/chosen-map-date');
  });

  router.post('/releases/1-0-4/start-a-claim/chosen-map-date', function (req, res) {
    if (req.session.data['ma-date-requested'] === 'yes'){
      if (req.query.change) {
        res.redirect('/releases/1-0-4/start-a-claim/requested-start-date?change=true');
      } 
      res.redirect('/releases/1-0-4/start-a-claim/requested-start-date');
    } else {
      res.redirect('/releases/1-0-4/summary/');
    }
  });

  router.post('/releases/1-0-4/start-a-claim/requested-start-date', function (req, res) {
    if (req.query.change) {
      req.session.data['ma-start-date-requested'] = '17 April 2023';
    } 
    res.redirect('/releases/1-0-4/summary/');
  });

  router.post('/releases/1-0-4/find-a-claim/', function (req, res) {
    
    // Claimant information
    req.session.data['claimant-name'] = 'Morgan Jenson';
    req.session.data['claimant-nino'] = 'ZZ123456Z';
    req.session.data['claimant-dob'] = '5 November 1995';
    req.session.data['claimant-postcode'] = 'NH9 7DL';
    req.session.data['claimant-address'] = null;
    req.session.data['claimant-contact-number'] = '07847 171740';

    // Decision
    req.session.data['ma-decision'] = 'Allowed';
    req.session.data['ma-claim-creation-date'] = '15 February 2023';
    req.session.data['ma-claim-decision-date'] = '15 February 2023';
    req.session.data['ma-rate'] = 'Standard rate at £156.66 per week';
    req.session.data['ma-map-start'] = '16 January 2023';
    req.session.data['ma-map-end'] = '15 October 2023';

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
    req.session.data['ma-start-date-requested-status'] = 'Declined';
    req.session.data['ma-start-date-requested-status-colour'] = 'govuk-tag--red';
    req.session.data['ma-map-rule'] = 'Non-flexible Maternity Allowance Period';

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
    req.session.data['ma-employment-agency-status'] = 'Not employed by agency';
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
    req.session.data['ma-week-1-employer-1-total'] = '£200.00';
    req.session.data['ma-week-2-employer-1-total'] = '£200.00';
    req.session.data['ma-week-3-employer-1-total'] = '£200.00';
    req.session.data['ma-week-4-employer-1-total'] = '£200.00';
    req.session.data['ma-week-5-employer-1-total'] = '£200.00';
    req.session.data['ma-week-6-employer-1-total'] = '£200.00';
    req.session.data['ma-week-7-employer-1-total'] = '£200.00';
    req.session.data['ma-week-8-employer-1-total'] = '£200.00';
    req.session.data['ma-week-9-employer-1-total'] = '£200.00';
    req.session.data['ma-week-10-employer-1-total'] = '£200.00';
    req.session.data['ma-week-11-employer-1-total'] = '£200.00';
    req.session.data['ma-week-12-employer-1-total'] = '£200.00';
    req.session.data['ma-week-13-employer-1-total'] = '£200.00';

    res.redirect('/releases/1-0-4/find-a-claim/which-claim');
  });

  router.post('/releases/1-0-4/find-a-claim/which-claim', function (req, res) {
    res.redirect('/releases/1-0-4/find-a-claim/summary/index1');
  });


}