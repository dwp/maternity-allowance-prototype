
module.exports = router => {

// Add your routes here - above the module.exports line

// Iteration 1

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-1/');
});

router.post('/alpha/iteration-1/', function (req, res) {
  res.redirect('/alpha/iteration-1/dates');
});

router.post('/alpha/iteration-1/dates', function (req, res) {
  res.redirect('/alpha/iteration-1/claim-summary');
});

// Iteration 2

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-2/');
});

router.post('/alpha/iteration-2/', function (req, res) {
  res.redirect('/alpha/iteration-2/dates');
});

router.post('/alpha/iteration-2/dates', function (req, res) {
  res.redirect('/alpha/iteration-2/claim-summary');
});

// Iteration 3

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-3/');
});

router.post('/alpha/iteration-3/', function (req, res) {
  res.redirect('/alpha/iteration-3/claim-date');
});

router.post('/alpha/iteration-3/claim-date', function (req, res) {
  res.redirect('/alpha/iteration-3/dates');
});

router.post('/alpha/iteration-3/dates', function (req, res) {
  res.redirect('/alpha/iteration-3/chosen-map-date');
});

router.post('/alpha/iteration-3/chosen-map-date', function (req, res) {
  res.redirect('/alpha/iteration-3/claim-summary');
});

// Iteration 4 - Scenario 1

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-4/scenario-1/');
});

router.post('/alpha/iteration-4/scenario-1/', function (req, res) {
  res.redirect('/alpha/iteration-4/scenario-1/claim-date');
});

router.post('/alpha/iteration-4/scenario-1/claim-date', function (req, res) {
  res.redirect('/alpha/iteration-4/scenario-1/about-the-baby');
});

router.post('/alpha/iteration-4/scenario-1/about-the-baby', function (req, res) {
  res.redirect('/alpha/iteration-4/scenario-1/date-last-worked');
});

router.post('/alpha/iteration-4/scenario-1/date-last-worked', function (req, res) {
  res.redirect('/alpha/iteration-4/scenario-1/chosen-map-date');
});

router.post('/alpha/iteration-4/scenario-1/chosen-map-date', function (req, res) {
  res.redirect('/alpha/iteration-4/scenario-1/summary');
});

// Iteration 4 - Scenario 2

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-4/scenario-2/');
});

router.post('/alpha/iteration-4/scenario-2/', function (req, res) {
  res.redirect('/alpha/iteration-4/scenario-2/claim-date');
});

router.post('/alpha/iteration-4/scenario-2/claim-date', function (req, res) {
  res.redirect('/alpha/iteration-4/scenario-2/about-the-baby');
});

router.post('/alpha/iteration-4/scenario-2/about-the-baby', function (req, res) {
  res.redirect('/alpha/iteration-4/scenario-2/date-last-worked');
});

router.post('/alpha/iteration-4/scenario-2/date-last-worked', function (req, res) {
  res.redirect('/alpha/iteration-4/scenario-2/summary');
});

// Iteration 5

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-5/');
});

router.post('/alpha/iteration-5/', function (req, res) {
  res.redirect('/alpha/iteration-5/claim-date');
});

router.post('/alpha/iteration-5/claim-date', function (req, res) {
  res.redirect('/alpha/iteration-5/about-the-baby');
});

router.post('/alpha/iteration-5/about-the-baby', function (req, res) {
  res.redirect('/alpha/iteration-5/date-last-worked');
});

router.post('/alpha/iteration-5/date-last-worked', function (req, res) {
  res.redirect('/alpha/iteration-5/chosen-map-date');
});

router.post('/alpha/iteration-5/chosen-map-date', function (req, res) {
  res.redirect('/alpha/iteration-5/summary');
});

// Iteration 6 - Scenario 1

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-6/scenario-1/');
});

router.post('/alpha/iteration-6/scenario-1/', function (req, res) {
  res.redirect('/alpha/iteration-6/scenario-1/claim-date');
});

router.post('/alpha/iteration-6/scenario-1/claim-date', function (req, res) {
  res.redirect('/alpha/iteration-6/scenario-1/about-the-baby');
});

router.post('/alpha/iteration-6/scenario-1/about-the-baby', function (req, res) {
  res.redirect('/alpha/iteration-6/scenario-1/date-last-worked');
});

router.post('/alpha/iteration-6/scenario-1/date-last-worked', function (req, res) {
  res.redirect('/alpha/iteration-6/scenario-1/chosen-map-date');
});

router.post('/alpha/iteration-6/scenario-1/chosen-map-date', function (req, res) {
  res.redirect('/alpha/iteration-6/scenario-1/summary');
});

// Iteration 6 - Scenario 2

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-6/scenario-2/');
});

router.post('/alpha/iteration-6/scenario-2/', function (req, res) {
  res.redirect('/alpha/iteration-6/scenario-2/claim-date');
});

router.post('/alpha/iteration-6/scenario-2/claim-date', function (req, res) {
  res.redirect('/alpha/iteration-6/scenario-2/about-the-baby');
});

router.post('/alpha/iteration-6/scenario-2/about-the-baby', function (req, res) {
  res.redirect('/alpha/iteration-6/scenario-2/date-last-worked');
});

router.post('/alpha/iteration-6/scenario-2/date-last-worked', function (req, res) {
  res.redirect('/alpha/iteration-6/scenario-2/chosen-map-date');
});

router.post('/alpha/iteration-6/scenario-2/chosen-map-date', function (req, res) {
  res.redirect('/alpha/iteration-6/scenario-2/summary');
});

// Iteration 7 - Scenario 1

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-7/scenario-1/');
});

router.post('/alpha/iteration-7/scenario-1/', function (req, res) {
  res.redirect('/alpha/iteration-7/scenario-1/summary');
});

// Iteration 7 - Scenario 2

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-6/scenario-2/');
});

router.post('/alpha/iteration-7/scenario-2/', function (req, res) {
  res.redirect('/alpha/iteration-7/scenario-2/claim-date');
});

router.post('/alpha/iteration-7/scenario-2/claim-date', function (req, res) {
  res.redirect('/alpha/iteration-7/scenario-2/about-the-baby');
});

router.post('/alpha/iteration-7/scenario-2/about-the-baby', function (req, res) {
  res.redirect('/alpha/iteration-7/scenario-2/date-last-worked');
});

router.post('/alpha/iteration-7/scenario-2/date-last-worked', function (req, res) {
  res.redirect('/alpha/iteration-7/scenario-2/chosen-map-date');
});

router.post('/alpha/iteration-7/scenario-2/chosen-map-date', function (req, res) {
  res.redirect('/alpha/iteration-7/scenario-2/summary');
});

// Iteration 8 - Scenario 1

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-8/scenario-1/');
});

router.post('/alpha/iteration-8/scenario-1/', function (req, res) {
  res.redirect('/alpha/iteration-8/scenario-1/summary');
});

// Iteration 8 - Scenario 2

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-8/scenario-2/');
});

router.post('/alpha/iteration-8/scenario-2/', function (req, res) {
  res.redirect('/alpha/iteration-8/scenario-2/claim-date');
});

router.post('/alpha/iteration-8/scenario-2/claim-date', function (req, res) {
  res.redirect('/alpha/iteration-8/scenario-2/about-the-baby');
});

router.post('/alpha/iteration-8/scenario-2/about-the-baby', function (req, res) {
  res.redirect('/alpha/iteration-8/scenario-2/date-last-worked');
});

router.post('/alpha/iteration-8/scenario-2/date-last-worked', function (req, res) {
  res.redirect('/alpha/iteration-8/scenario-2/chosen-map-date');
});

router.post('/alpha/iteration-8/scenario-2/chosen-map-date', function (req, res) {
  res.redirect('/alpha/iteration-8/scenario-2/summary');
});

// Iteration 9 - Scenario 1

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-9/scenario-1/');
});

router.post('/alpha/iteration-9/scenario-1/', function (req, res) {
  res.redirect('/alpha/iteration-9/scenario-1/claim-date');
});

router.post('/alpha/iteration-9/scenario-1/claim-date', function (req, res) {
  res.redirect('/alpha/iteration-9/scenario-1/about-the-baby');
});

router.post('/alpha/iteration-9/scenario-1/about-the-baby', function (req, res) {
  res.redirect('/alpha/iteration-9/scenario-1/date-last-worked');
});

router.post('/alpha/iteration-9/scenario-1/date-last-worked', function (req, res) {
  if (req.session.data['stopped-work'] == 'yes') {
    res.redirect('/alpha/iteration-9/scenario-1/dlw-date');
  }
  else {
    res.redirect('/alpha/iteration-9/scenario-1/ma-start-date-provided');
  }
});

router.post('/alpha/iteration-9/scenario-1/dlw-date', function (req, res) {
  res.redirect('/alpha/iteration-9/scenario-1/chosen-map-date');
});

router.post('/alpha/iteration-9/scenario-1/ma-start-date-provided', function (req, res) {
  if (req.session.data['ma-start-date-provided'] == 'yes') {
    res.redirect('/alpha/iteration-9/scenario-1/planned-dlw-date');
  }
  else {
    res.redirect('/alpha/iteration-9/scenario-1/chosen-map-date');
  }
});

router.post('/alpha/iteration-9/scenario-1/planned-dlw-date', function (req, res) {
  res.redirect('/alpha/iteration-9/scenario-1/chosen-map-date');
});

router.post('/alpha/iteration-9/scenario-1/chosen-map-date', function (req, res) {
  res.redirect('/alpha/iteration-9/scenario-1/summary');
});

// Iteration 9 - Scenario 2

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-9/scenario-2/');
});

router.post('/alpha/iteration-9/scenario-2/', function (req, res) {
  res.redirect('/alpha/iteration-9/scenario-2/summary');
});

// Iteration 10 - Scenario 1

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-10/scenario-1/');
});

router.post('/alpha/iteration-10/scenario-1/', function (req, res) {
  res.redirect('/alpha/iteration-10/scenario-1/claim-date');
});

router.post('/alpha/iteration-10/scenario-1/claim-date', function (req, res) {
  res.redirect('/alpha/iteration-10/scenario-1/about-the-baby');
});

router.post('/alpha/iteration-10/scenario-1/about-the-baby', function (req, res) {
  if (req.session.data['baby-born'] == 'yes') {
    res.redirect('/alpha/iteration-10/scenario-1/baby-birth-date');
  }
  else {
    res.redirect('/alpha/iteration-10/scenario-1/date-last-worked');
  }
});

router.post('/alpha/iteration-10/scenario-1/baby-birth-date', function (req, res) {
  res.redirect('/alpha/iteration-10/scenario-1/date-last-worked');
});

router.post('/alpha/iteration-10/scenario-1/date-last-worked', function (req, res) {
  if (req.session.data['stopped-work'] == 'yes') {
    res.redirect('/alpha/iteration-10/scenario-1/dlw-date');
  }
  else {
    if (req.session.data['action'] == 'change') {
      req.session.data['action'] = null;
      res.redirect('/alpha/iteration-10/scenario-1/summary');
    }
    else {
      res.redirect('/alpha/iteration-10/scenario-1/ma-start-date-provided');
    }
  }
});

router.post('/alpha/iteration-10/scenario-1/dlw-date', function (req, res) {
  if (req.session.data['action'] == 'change') {
    req.session.data['action'] = null;
    res.redirect('/alpha/iteration-10/scenario-1/summary');
  }
  else {
    res.redirect('/alpha/iteration-10/scenario-1/chosen-map-date');
  }
});

router.post('/alpha/iteration-10/scenario-1/ma-start-date-provided', function (req, res) {
  if (req.session.data['ma-start-date-provided'] == 'yes') {
    res.redirect('/alpha/iteration-10/scenario-1/planned-dlw-date');
  }
  else {
    res.redirect('/alpha/iteration-10/scenario-1/chosen-map-date');
  }
});

router.post('/alpha/iteration-10/scenario-1/planned-dlw-date', function (req, res) {
  res.redirect('/alpha/iteration-10/scenario-1/chosen-map-date');
});

router.post('/alpha/iteration-10/scenario-1/chosen-map-date', function (req, res) {
  if (req.session.data['ma-date-requested'] == 'yes') {
    res.redirect('/alpha/iteration-10/scenario-1/requested-start-date');
  }
  else {
    res.redirect('/alpha/iteration-10/scenario-1/summary');
  }
});

router.post('/alpha/iteration-10/scenario-1/requested-start-date', function (req, res) {
  res.redirect('/alpha/iteration-10/scenario-1/summary');
});

// Iteration 10 - Scenario 2

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-10/scenario-2/');
});

router.post('/alpha/iteration-10/scenario-2/', function (req, res) {
  res.redirect('/alpha/iteration-10/scenario-2/summary');
});

// Alt

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-alt/');
});

router.post('/alpha/iteration-alt/', function (req, res) {
  res.redirect('/alpha/iteration-alt/dates');
});

router.post('/alpha/iteration-alt/dates', function (req, res) {
  res.redirect('/alpha/iteration-alt/award-decision');
});


// Tabs

router.post('/alpha/', function (req, res) {
  res.redirect('/alpha/iteration-alt-tabs/');
});

router.post('/alpha/iteration-alt-tabs/', function (req, res) {
  res.redirect('/alpha/iteration-alt-tabs/dates');
});

router.post('/alpha/iteration-alt-tabs/dates', function (req, res) {
  res.redirect('/alpha/iteration-alt-tabs/award-decision');
});

}
