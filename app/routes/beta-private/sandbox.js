
module.exports = router => {

// --- Sandbox ---------------------------------------------------------------------------------- //

router.post('/beta-private/sandbox/', function (req, res) {

  if (req.session.data['sandbox'] == 'add-employer') {
    
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
    req.session.data['ma-employer-3'] = 'B&Q LTD';
    req.session.data['ma-earnings-test'] = 'Met';
    //req.session.data['ma-average-earnings'] = '£112.31'; 

    // Highest earning weeks
    req.session.data['ma-he-week-1'] = '30 January 2022';
    req.session.data['ma-he-week-2'] = '6 February 2022';
    req.session.data['ma-he-week-3'] = '13 February 2022';
    req.session.data['ma-he-week-4'] = '20 February 2022';
    req.session.data['ma-he-week-5'] = '27 February 2022';
    req.session.data['ma-he-week-6'] = '6 March 2022';
    req.session.data['ma-he-week-7'] = '13 March 2022';
    req.session.data['ma-he-week-8'] = '20 March 2022';
    req.session.data['ma-he-week-9'] = '27 March 2022';
    req.session.data['ma-he-week-10'] = '3 April 2022';
    req.session.data['ma-he-week-11'] = '10 April 2022';
    req.session.data['ma-he-week-12'] = '17 April 2022';
    req.session.data['ma-he-week-13'] = '24 April 2022';

    req.session.data['ma-week-1'] = '14 Nov';
    req.session.data['ma-week-2'] = '21 Nov';
    req.session.data['ma-week-3'] = '28 Nov';
    req.session.data['ma-week-4'] = '5 Dec';
    req.session.data['ma-week-5'] = '12 Dec';
    req.session.data['ma-week-6'] = '19 Dec';
    req.session.data['ma-week-7'] = '26 Dec';
    req.session.data['ma-week-8'] = '2 Jan';
    req.session.data['ma-week-9'] = '9 Jan';
    req.session.data['ma-week-10'] = '16 Jan';
    req.session.data['ma-week-11'] = '23 Jan';
    req.session.data['ma-week-12'] = '30 Jan';
    req.session.data['ma-week-13'] = '6 Feb';
    req.session.data['ma-week-14'] = '13 Feb';
    req.session.data['ma-week-15'] = '20 Feb';
    req.session.data['ma-week-16'] = '27 Feb';
    req.session.data['ma-week-16'] = '6 Mar';
    req.session.data['ma-week-17'] = '13 Mar';
    req.session.data['ma-week-18'] = '20 Mar';
    req.session.data['ma-week-19'] = '27 Mar';
    req.session.data['ma-week-20'] = '3 Apr';
    req.session.data['ma-week-21'] = '10 Apr';
    req.session.data['ma-week-22'] = '17 Apr';
    req.session.data['ma-week-23'] = '24 Apr';
    req.session.data['ma-week-24'] = '1 May';
    req.session.data['ma-week-25'] = '8 May';
    req.session.data['ma-week-26'] = '15 May';
    req.session.data['ma-week-26'] = '22 May';
    req.session.data['ma-week-27'] = '29 May';
    req.session.data['ma-week-28'] = '5 Jun';
    req.session.data['ma-week-29'] = '12 Jun';
    req.session.data['ma-week-30'] = '19 Jun';
    req.session.data['ma-week-31'] = '26 Jun';
    req.session.data['ma-week-32'] = '3 Jul';
    req.session.data['ma-week-33'] = '10 Jul';
    req.session.data['ma-week-34'] = '17 Jul';
    req.session.data['ma-week-35'] = '24 Jul';
    req.session.data['ma-week-36'] = '31 Jul';
    req.session.data['ma-week-36'] = '7 Aug';
    req.session.data['ma-week-37'] = '14 Aug';
    req.session.data['ma-week-38'] = '21 Aug';
    req.session.data['ma-week-39'] = '28 Aug';
    req.session.data['ma-week-40'] = '4 Sep';
    req.session.data['ma-week-41'] = '11 Sep';
    req.session.data['ma-week-42'] = '18 Sep';
    req.session.data['ma-week-43'] = '25 Sep';
    req.session.data['ma-week-44'] = '2 Oct';
    req.session.data['ma-week-45'] = '9 Oct';
    req.session.data['ma-week-46'] = '16 Oct';
    req.session.data['ma-week-46'] = '23 Oct';
    req.session.data['ma-week-47'] = '30 Oct';
    req.session.data['ma-week-48'] = '6 Nov';
    req.session.data['ma-week-49'] = '13 Nov';
    req.session.data['ma-week-50'] = '20 Nov';
    req.session.data['ma-week-51'] = '27 Nov';
    req.session.data['ma-week-52'] = '4 Dec';
    req.session.data['ma-week-53'] = '11 Dec';
    req.session.data['ma-week-54'] = '18 Dec';
    req.session.data['ma-week-55'] = '25 Dec';
    req.session.data['ma-week-56'] = '1 Jan';
    req.session.data['ma-week-56'] = '8 Jan';
    req.session.data['ma-week-57'] = '15 Jan';
    req.session.data['ma-week-58'] = '22 Jan';
    req.session.data['ma-week-59'] = '29 Jan';
    req.session.data['ma-week-60'] = '5 Feb';
    req.session.data['ma-week-61'] = '12 Feb';
    req.session.data['ma-week-62'] = '19 Feb';
    req.session.data['ma-week-63'] = '26 Feb';
    req.session.data['ma-week-64'] = '5 Mar';
    req.session.data['ma-week-65'] = '12 Mar';
    req.session.data['ma-week-66'] = '19 Mar';


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
    req.session.data['ma-week-14-employer-1-amount'] = 65.00;
    req.session.data['ma-week-15-employer-1-amount'] = 65.00;
    req.session.data['ma-week-16-employer-1-amount'] = 50.00;
    req.session.data['ma-week-17-employer-1-amount'] = 50.00;
    req.session.data['ma-week-18-employer-1-amount'] = 65.00;
    req.session.data['ma-week-19-employer-1-amount'] = 50.00;
    req.session.data['ma-week-20-employer-1-amount'] = 50.00;
    req.session.data['ma-week-21-employer-1-amount'] = 65.00;
    req.session.data['ma-week-22-employer-1-amount'] = 50.00;
    req.session.data['ma-week-23-employer-1-amount'] = 50.00;
    req.session.data['ma-week-24-employer-1-amount'] = 65.00;
    req.session.data['ma-week-25-employer-1-amount'] = 65.00;
    req.session.data['ma-week-26-employer-1-amount'] = 50.00;
    req.session.data['ma-week-27-employer-1-amount'] = 50.00;
    req.session.data['ma-week-28-employer-1-amount'] = 65.00;
    req.session.data['ma-week-29-employer-1-amount'] = 50.00;
    req.session.data['ma-week-30-employer-1-amount'] = 50.00;
    req.session.data['ma-week-31-employer-1-amount'] = 65.00;
    req.session.data['ma-week-32-employer-1-amount'] = 50.00;
    req.session.data['ma-week-33-employer-1-amount'] = 50.00;
    req.session.data['ma-week-34-employer-1-amount'] = 65.00;
    req.session.data['ma-week-35-employer-1-amount'] = 65.00;
    req.session.data['ma-week-36-employer-1-amount'] = 50.00;
    req.session.data['ma-week-37-employer-1-amount'] = 50.00;
    req.session.data['ma-week-38-employer-1-amount'] = 65.00;
    req.session.data['ma-week-39-employer-1-amount'] = 50.00;
    req.session.data['ma-week-40-employer-1-amount'] = 50.00;
    req.session.data['ma-week-41-employer-1-amount'] = 65.00;
    req.session.data['ma-week-42-employer-1-amount'] = 50.00;
    req.session.data['ma-week-43-employer-1-amount'] = 50.00;
    req.session.data['ma-week-44-employer-1-amount'] = 65.00;
    req.session.data['ma-week-45-employer-1-amount'] = 65.00;
    req.session.data['ma-week-46-employer-1-amount'] = 50.00;
    req.session.data['ma-week-47-employer-1-amount'] = 50.00;
    req.session.data['ma-week-48-employer-1-amount'] = 65.00;
    req.session.data['ma-week-49-employer-1-amount'] = 50.00;
    req.session.data['ma-week-50-employer-1-amount'] = 50.00;
    req.session.data['ma-week-51-employer-1-amount'] = 65.00;
    req.session.data['ma-week-52-employer-1-amount'] = 50.00;
    req.session.data['ma-week-53-employer-1-amount'] = 50.00;
    req.session.data['ma-week-54-employer-1-amount'] = 65.00;
    req.session.data['ma-week-55-employer-1-amount'] = 65.00;
    req.session.data['ma-week-56-employer-1-amount'] = 50.00;
    req.session.data['ma-week-57-employer-1-amount'] = 50.00;
    req.session.data['ma-week-58-employer-1-amount'] = 65.00;
    req.session.data['ma-week-59-employer-1-amount'] = 50.00;
    req.session.data['ma-week-60-employer-1-amount'] = 50.00;
    req.session.data['ma-week-61-employer-1-amount'] = 65.00;
    req.session.data['ma-week-62-employer-1-amount'] = 50.00;
    req.session.data['ma-week-63-employer-1-amount'] = 50.00;
    req.session.data['ma-week-64-employer-1-amount'] = 65.00;
    req.session.data['ma-week-65-employer-1-amount'] = 65.00;
    req.session.data['ma-week-66-employer-1-amount'] = 50.00;

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
    req.session.data['ma-week-14-employer-2-amount'] = 65.00;
    req.session.data['ma-week-15-employer-2-amount'] = 65.00;
    req.session.data['ma-week-16-employer-2-amount'] = 50.00;
    req.session.data['ma-week-17-employer-2-amount'] = 50.00;
    req.session.data['ma-week-18-employer-2-amount'] = 65.00;
    req.session.data['ma-week-19-employer-2-amount'] = 50.00;
    req.session.data['ma-week-20-employer-2-amount'] = 50.00;
    req.session.data['ma-week-21-employer-2-amount'] = 65.00;
    req.session.data['ma-week-22-employer-2-amount'] = 50.00;
    req.session.data['ma-week-23-employer-2-amount'] = 50.00;
    req.session.data['ma-week-24-employer-2-amount'] = 65.00;
    req.session.data['ma-week-25-employer-2-amount'] = 65.00;
    req.session.data['ma-week-26-employer-2-amount'] = 50.00;
    req.session.data['ma-week-27-employer-2-amount'] = 50.00;
    req.session.data['ma-week-28-employer-2-amount'] = 65.00;
    req.session.data['ma-week-29-employer-2-amount'] = 50.00;
    req.session.data['ma-week-30-employer-2-amount'] = 50.00;
    req.session.data['ma-week-31-employer-2-amount'] = 65.00;
    req.session.data['ma-week-32-employer-2-amount'] = 50.00;
    req.session.data['ma-week-33-employer-2-amount'] = 50.00;
    req.session.data['ma-week-34-employer-2-amount'] = 65.00;
    req.session.data['ma-week-35-employer-2-amount'] = 65.00;
    req.session.data['ma-week-36-employer-2-amount'] = 50.00;
    req.session.data['ma-week-37-employer-2-amount'] = 50.00;
    req.session.data['ma-week-38-employer-2-amount'] = 65.00;
    req.session.data['ma-week-39-employer-2-amount'] = 50.00;
    req.session.data['ma-week-40-employer-2-amount'] = 50.00;
    req.session.data['ma-week-41-employer-2-amount'] = 65.00;
    req.session.data['ma-week-42-employer-2-amount'] = 50.00;
    req.session.data['ma-week-43-employer-2-amount'] = 50.00;
    req.session.data['ma-week-44-employer-2-amount'] = 65.00;
    req.session.data['ma-week-45-employer-2-amount'] = 65.00;
    req.session.data['ma-week-46-employer-2-amount'] = 50.00;
    req.session.data['ma-week-47-employer-2-amount'] = 50.00;
    req.session.data['ma-week-48-employer-2-amount'] = 65.00;
    req.session.data['ma-week-49-employer-2-amount'] = 50.00;
    req.session.data['ma-week-50-employer-2-amount'] = 50.00;
    req.session.data['ma-week-51-employer-2-amount'] = 65.00;
    req.session.data['ma-week-52-employer-2-amount'] = 50.00;
    req.session.data['ma-week-53-employer-2-amount'] = 50.00;
    req.session.data['ma-week-54-employer-2-amount'] = 65.00;
    req.session.data['ma-week-55-employer-2-amount'] = 65.00;
    req.session.data['ma-week-56-employer-2-amount'] = 50.00;
    req.session.data['ma-week-57-employer-2-amount'] = 50.00;
    req.session.data['ma-week-58-employer-2-amount'] = 65.00;
    req.session.data['ma-week-59-employer-2-amount'] = 50.00;
    req.session.data['ma-week-60-employer-2-amount'] = 50.00;
    req.session.data['ma-week-61-employer-2-amount'] = 65.00;
    req.session.data['ma-week-62-employer-2-amount'] = 50.00;
    req.session.data['ma-week-63-employer-2-amount'] = 50.00;
    req.session.data['ma-week-64-employer-2-amount'] = 65.00;
    req.session.data['ma-week-65-employer-2-amount'] = 65.00;
    req.session.data['ma-week-66-employer-2-amount'] = 50.00;

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
    req.session.data['ma-week-14-total-amount'] = req.session.data['ma-week-14-employer-1-amount'] + req.session.data['ma-week-14-employer-2-amount'];
    req.session.data['ma-week-15-total-amount'] = req.session.data['ma-week-15-employer-1-amount'] + req.session.data['ma-week-15-employer-2-amount'];
    req.session.data['ma-week-16-total-amount'] = req.session.data['ma-week-16-employer-1-amount'] + req.session.data['ma-week-16-employer-2-amount'];
    req.session.data['ma-week-17-total-amount'] = req.session.data['ma-week-17-employer-1-amount'] + req.session.data['ma-week-17-employer-2-amount'];
    req.session.data['ma-week-18-total-amount'] = req.session.data['ma-week-18-employer-1-amount'] + req.session.data['ma-week-18-employer-2-amount'];
    req.session.data['ma-week-19-total-amount'] = req.session.data['ma-week-19-employer-1-amount'] + req.session.data['ma-week-19-employer-2-amount'];
    req.session.data['ma-week-20-total-amount'] = req.session.data['ma-week-20-employer-1-amount'] + req.session.data['ma-week-20-employer-2-amount'];
    req.session.data['ma-week-21-total-amount'] = req.session.data['ma-week-21-employer-1-amount'] + req.session.data['ma-week-21-employer-2-amount'];
    req.session.data['ma-week-22-total-amount'] = req.session.data['ma-week-22-employer-1-amount'] + req.session.data['ma-week-22-employer-2-amount'];
    req.session.data['ma-week-23-total-amount'] = req.session.data['ma-week-23-employer-1-amount'] + req.session.data['ma-week-23-employer-2-amount'];
    req.session.data['ma-week-24-total-amount'] = req.session.data['ma-week-24-employer-1-amount'] + req.session.data['ma-week-24-employer-2-amount'];
    req.session.data['ma-week-25-total-amount'] = req.session.data['ma-week-25-employer-1-amount'] + req.session.data['ma-week-25-employer-2-amount'];
    req.session.data['ma-week-26-total-amount'] = req.session.data['ma-week-26-employer-1-amount'] + req.session.data['ma-week-26-employer-2-amount'];
    req.session.data['ma-week-27-total-amount'] = req.session.data['ma-week-27-employer-1-amount'] + req.session.data['ma-week-27-employer-2-amount'];
    req.session.data['ma-week-28-total-amount'] = req.session.data['ma-week-28-employer-1-amount'] + req.session.data['ma-week-28-employer-2-amount'];
    req.session.data['ma-week-29-total-amount'] = req.session.data['ma-week-29-employer-1-amount'] + req.session.data['ma-week-29-employer-2-amount'];
    req.session.data['ma-week-30-total-amount'] = req.session.data['ma-week-30-employer-1-amount'] + req.session.data['ma-week-30-employer-2-amount'];
    req.session.data['ma-week-31-total-amount'] = req.session.data['ma-week-31-employer-1-amount'] + req.session.data['ma-week-31-employer-2-amount'];
    req.session.data['ma-week-32-total-amount'] = req.session.data['ma-week-32-employer-1-amount'] + req.session.data['ma-week-32-employer-2-amount'];
    req.session.data['ma-week-33-total-amount'] = req.session.data['ma-week-33-employer-1-amount'] + req.session.data['ma-week-33-employer-2-amount'];
    req.session.data['ma-week-34-total-amount'] = req.session.data['ma-week-34-employer-1-amount'] + req.session.data['ma-week-34-employer-2-amount'];
    req.session.data['ma-week-35-total-amount'] = req.session.data['ma-week-35-employer-1-amount'] + req.session.data['ma-week-35-employer-2-amount'];
    req.session.data['ma-week-36-total-amount'] = req.session.data['ma-week-36-employer-1-amount'] + req.session.data['ma-week-36-employer-2-amount'];
    req.session.data['ma-week-37-total-amount'] = req.session.data['ma-week-37-employer-1-amount'] + req.session.data['ma-week-37-employer-2-amount'];
    req.session.data['ma-week-38-total-amount'] = req.session.data['ma-week-38-employer-1-amount'] + req.session.data['ma-week-38-employer-2-amount'];
    req.session.data['ma-week-39-total-amount'] = req.session.data['ma-week-39-employer-1-amount'] + req.session.data['ma-week-39-employer-2-amount'];
    req.session.data['ma-week-40-total-amount'] = req.session.data['ma-week-40-employer-1-amount'] + req.session.data['ma-week-40-employer-2-amount'];
    req.session.data['ma-week-41-total-amount'] = req.session.data['ma-week-41-employer-1-amount'] + req.session.data['ma-week-41-employer-2-amount'];
    req.session.data['ma-week-42-total-amount'] = req.session.data['ma-week-42-employer-1-amount'] + req.session.data['ma-week-42-employer-2-amount'];
    req.session.data['ma-week-43-total-amount'] = req.session.data['ma-week-43-employer-1-amount'] + req.session.data['ma-week-43-employer-2-amount'];
    req.session.data['ma-week-44-total-amount'] = req.session.data['ma-week-44-employer-1-amount'] + req.session.data['ma-week-44-employer-2-amount'];
    req.session.data['ma-week-45-total-amount'] = req.session.data['ma-week-45-employer-1-amount'] + req.session.data['ma-week-45-employer-2-amount'];
    req.session.data['ma-week-46-total-amount'] = req.session.data['ma-week-46-employer-1-amount'] + req.session.data['ma-week-46-employer-2-amount'];
    req.session.data['ma-week-47-total-amount'] = req.session.data['ma-week-47-employer-1-amount'] + req.session.data['ma-week-47-employer-2-amount'];
    req.session.data['ma-week-48-total-amount'] = req.session.data['ma-week-48-employer-1-amount'] + req.session.data['ma-week-48-employer-2-amount'];
    req.session.data['ma-week-49-total-amount'] = req.session.data['ma-week-49-employer-1-amount'] + req.session.data['ma-week-49-employer-2-amount'];
    req.session.data['ma-week-50-total-amount'] = req.session.data['ma-week-50-employer-1-amount'] + req.session.data['ma-week-50-employer-2-amount'];
    req.session.data['ma-week-51-total-amount'] = req.session.data['ma-week-51-employer-1-amount'] + req.session.data['ma-week-51-employer-2-amount'];
    req.session.data['ma-week-52-total-amount'] = req.session.data['ma-week-52-employer-1-amount'] + req.session.data['ma-week-52-employer-2-amount'];
    req.session.data['ma-week-53-total-amount'] = req.session.data['ma-week-53-employer-1-amount'] + req.session.data['ma-week-53-employer-2-amount'];
    req.session.data['ma-week-54-total-amount'] = req.session.data['ma-week-54-employer-1-amount'] + req.session.data['ma-week-54-employer-2-amount'];
    req.session.data['ma-week-55-total-amount'] = req.session.data['ma-week-55-employer-1-amount'] + req.session.data['ma-week-55-employer-2-amount'];
    req.session.data['ma-week-56-total-amount'] = req.session.data['ma-week-56-employer-1-amount'] + req.session.data['ma-week-56-employer-2-amount'];
    req.session.data['ma-week-57-total-amount'] = req.session.data['ma-week-57-employer-1-amount'] + req.session.data['ma-week-57-employer-2-amount'];
    req.session.data['ma-week-58-total-amount'] = req.session.data['ma-week-58-employer-1-amount'] + req.session.data['ma-week-58-employer-2-amount'];
    req.session.data['ma-week-59-total-amount'] = req.session.data['ma-week-59-employer-1-amount'] + req.session.data['ma-week-59-employer-2-amount'];
    req.session.data['ma-week-60-total-amount'] = req.session.data['ma-week-60-employer-1-amount'] + req.session.data['ma-week-60-employer-2-amount'];
    req.session.data['ma-week-61-total-amount'] = req.session.data['ma-week-61-employer-1-amount'] + req.session.data['ma-week-61-employer-2-amount'];
    req.session.data['ma-week-62-total-amount'] = req.session.data['ma-week-62-employer-1-amount'] + req.session.data['ma-week-62-employer-2-amount'];
    req.session.data['ma-week-63-total-amount'] = req.session.data['ma-week-63-employer-1-amount'] + req.session.data['ma-week-63-employer-2-amount'];
    req.session.data['ma-week-64-total-amount'] = req.session.data['ma-week-64-employer-1-amount'] + req.session.data['ma-week-64-employer-2-amount'];
    req.session.data['ma-week-65-total-amount'] = req.session.data['ma-week-65-employer-1-amount'] + req.session.data['ma-week-65-employer-2-amount'];
    req.session.data['ma-week-66-total-amount'] = req.session.data['ma-week-66-employer-1-amount'] + req.session.data['ma-week-66-employer-2-amount'];

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
    req.session.data['ma-week-14-employer-1-source'] = 'RTI';
    req.session.data['ma-week-15-employer-1-source'] = 'RTI';
    req.session.data['ma-week-16-employer-1-source'] = 'RTI';
    req.session.data['ma-week-17-employer-1-source'] = 'RTI';
    req.session.data['ma-week-18-employer-1-source'] = 'RTI';
    req.session.data['ma-week-19-employer-1-source'] = 'RTI';
    req.session.data['ma-week-20-employer-1-source'] = 'RTI';
    req.session.data['ma-week-21-employer-1-source'] = 'RTI';
    req.session.data['ma-week-22-employer-1-source'] = 'RTI';
    req.session.data['ma-week-23-employer-1-source'] = 'RTI';
    req.session.data['ma-week-24-employer-1-source'] = 'RTI';
    req.session.data['ma-week-25-employer-1-source'] = 'RTI';
    req.session.data['ma-week-26-employer-1-source'] = 'RTI';
    req.session.data['ma-week-27-employer-1-source'] = 'RTI';
    req.session.data['ma-week-28-employer-1-source'] = 'RTI';
    req.session.data['ma-week-29-employer-1-source'] = 'RTI';
    req.session.data['ma-week-30-employer-1-source'] = 'RTI';
    req.session.data['ma-week-30-employer-1-source'] = 'RTI';
    req.session.data['ma-week-31-employer-1-source'] = 'RTI';
    req.session.data['ma-week-32-employer-1-source'] = 'RTI';
    req.session.data['ma-week-33-employer-1-source'] = 'RTI';
    req.session.data['ma-week-34-employer-1-source'] = 'RTI';
    req.session.data['ma-week-35-employer-1-source'] = 'RTI';
    req.session.data['ma-week-36-employer-1-source'] = 'RTI';
    req.session.data['ma-week-37-employer-1-source'] = 'RTI';
    req.session.data['ma-week-38-employer-1-source'] = 'RTI';
    req.session.data['ma-week-39-employer-1-source'] = 'RTI';
    req.session.data['ma-week-40-employer-1-source'] = 'RTI';
    req.session.data['ma-week-41-employer-1-source'] = 'RTI';
    req.session.data['ma-week-42-employer-1-source'] = 'RTI';
    req.session.data['ma-week-43-employer-1-source'] = 'RTI';
    req.session.data['ma-week-44-employer-1-source'] = 'RTI';
    req.session.data['ma-week-45-employer-1-source'] = 'RTI';
    req.session.data['ma-week-46-employer-1-source'] = 'RTI';
    req.session.data['ma-week-47-employer-1-source'] = 'RTI';
    req.session.data['ma-week-48-employer-1-source'] = 'RTI';
    req.session.data['ma-week-49-employer-1-source'] = 'RTI';
    req.session.data['ma-week-50-employer-1-source'] = 'RTI';
    req.session.data['ma-week-51-employer-1-source'] = 'RTI';
    req.session.data['ma-week-52-employer-1-source'] = 'RTI';
    req.session.data['ma-week-53-employer-1-source'] = 'RTI';
    req.session.data['ma-week-54-employer-1-source'] = 'RTI';
    req.session.data['ma-week-55-employer-1-source'] = 'RTI';
    req.session.data['ma-week-56-employer-1-source'] = 'RTI';
    req.session.data['ma-week-57-employer-1-source'] = 'RTI';
    req.session.data['ma-week-58-employer-1-source'] = 'RTI';
    req.session.data['ma-week-59-employer-1-source'] = 'RTI';
    req.session.data['ma-week-60-employer-1-source'] = 'RTI';
    req.session.data['ma-week-61-employer-1-source'] = 'RTI';
    req.session.data['ma-week-62-employer-1-source'] = 'RTI';
    req.session.data['ma-week-63-employer-1-source'] = 'RTI';
    req.session.data['ma-week-64-employer-1-source'] = 'RTI';
    req.session.data['ma-week-65-employer-1-source'] = 'RTI';
    req.session.data['ma-week-66-employer-1-source'] = 'RTI';

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
    req.session.data['ma-week-14-employer-2-source'] = 'RTI';
    req.session.data['ma-week-15-employer-2-source'] = 'RTI';
    req.session.data['ma-week-16-employer-2-source'] = 'RTI';
    req.session.data['ma-week-17-employer-2-source'] = 'RTI';
    req.session.data['ma-week-18-employer-2-source'] = 'RTI';
    req.session.data['ma-week-19-employer-2-source'] = 'RTI';
    req.session.data['ma-week-20-employer-2-source'] = 'RTI';
    req.session.data['ma-week-21-employer-2-source'] = 'RTI';
    req.session.data['ma-week-22-employer-2-source'] = 'RTI';
    req.session.data['ma-week-23-employer-2-source'] = 'RTI';
    req.session.data['ma-week-24-employer-2-source'] = 'RTI';
    req.session.data['ma-week-25-employer-2-source'] = 'RTI';
    req.session.data['ma-week-26-employer-2-source'] = 'RTI';
    req.session.data['ma-week-27-employer-2-source'] = 'RTI';
    req.session.data['ma-week-28-employer-2-source'] = 'RTI';
    req.session.data['ma-week-29-employer-2-source'] = 'RTI';
    req.session.data['ma-week-30-employer-2-source'] = 'RTI';
    req.session.data['ma-week-30-employer-2-source'] = 'RTI';
    req.session.data['ma-week-31-employer-2-source'] = 'RTI';
    req.session.data['ma-week-32-employer-2-source'] = 'RTI';
    req.session.data['ma-week-33-employer-2-source'] = 'RTI';
    req.session.data['ma-week-34-employer-2-source'] = 'RTI';
    req.session.data['ma-week-35-employer-2-source'] = 'RTI';
    req.session.data['ma-week-36-employer-2-source'] = 'RTI';
    req.session.data['ma-week-37-employer-2-source'] = 'RTI';
    req.session.data['ma-week-38-employer-2-source'] = 'RTI';
    req.session.data['ma-week-39-employer-2-source'] = 'RTI';
    req.session.data['ma-week-40-employer-2-source'] = 'RTI';
    req.session.data['ma-week-41-employer-2-source'] = 'RTI';
    req.session.data['ma-week-42-employer-2-source'] = 'RTI';
    req.session.data['ma-week-43-employer-2-source'] = 'RTI';
    req.session.data['ma-week-44-employer-2-source'] = 'RTI';
    req.session.data['ma-week-45-employer-2-source'] = 'RTI';
    req.session.data['ma-week-46-employer-2-source'] = 'RTI';
    req.session.data['ma-week-47-employer-2-source'] = 'RTI';
    req.session.data['ma-week-48-employer-2-source'] = 'RTI';
    req.session.data['ma-week-49-employer-2-source'] = 'RTI';
    req.session.data['ma-week-50-employer-2-source'] = 'RTI';
    req.session.data['ma-week-51-employer-2-source'] = 'RTI';
    req.session.data['ma-week-52-employer-2-source'] = 'RTI';
    req.session.data['ma-week-53-employer-2-source'] = 'RTI';
    req.session.data['ma-week-54-employer-2-source'] = 'RTI';
    req.session.data['ma-week-55-employer-2-source'] = 'RTI';
    req.session.data['ma-week-56-employer-2-source'] = 'RTI';
    req.session.data['ma-week-57-employer-2-source'] = 'RTI';
    req.session.data['ma-week-58-employer-2-source'] = 'RTI';
    req.session.data['ma-week-59-employer-2-source'] = 'RTI';
    req.session.data['ma-week-60-employer-2-source'] = 'RTI';
    req.session.data['ma-week-61-employer-2-source'] = 'RTI';
    req.session.data['ma-week-62-employer-2-source'] = 'RTI';
    req.session.data['ma-week-63-employer-2-source'] = 'RTI';
    req.session.data['ma-week-64-employer-2-source'] = 'RTI';
    req.session.data['ma-week-65-employer-2-source'] = 'RTI';
    req.session.data['ma-week-66-employer-2-source'] = 'RTI';

    res.redirect('/beta-private/sandbox/summary-add-employer'); 
  } else {
    res.redirect('/beta-private/sandbox/copy-button-summary');
  }

});

router.post('/beta-private/sandbox/employers/summary-2-employers', function (req, res) {
  if (req.session.data['add-another-employer'] == 'yes') {
    res.redirect('/beta-private/sandbox/employers/');
  }
  else {
    res.redirect('/beta-private/sandbox/summary-add-employer');
  }
});

router.post('/beta-private/sandbox/employers/', function (req, res) {
  res.redirect('/beta-private/sandbox/employers/summary-3-employers');
});

router.post('/beta-private/sandbox/employers/change-employer-2', function (req, res) {
  req.session.data['ma-employer-2'] = 'ANYTHING LTD';
  res.redirect('/beta-private/sandbox/employers/summary-2-employers');
});

router.post('/beta-private/sandbox/rti/change', function (req, res) {

  // Make data changes here
  req.session.data['ma-rate'] = 'Standard rate at £156.66 per week';
  req.session.data['ma-week-5-employer-1-amount'] = 400.00;
  req.session.data['ma-week-5-employer-2-amount'] = 600.00;
  req.session.data['ma-week-5-employer-1-source'] = 'Payslip';
  req.session.data['ma-week-5-employer-2-source'] = 'Payslip';
  req.session.data['ma-week-5-total-amount'] = req.session.data['ma-week-5-employer-1-amount'] + req.session.data['ma-week-5-employer-2-amount'];
  req.session.data['ma-total-earnings'] = req.session.data['ma-week-1-total-amount'] + req.session.data['ma-week-2-total-amount'] + req.session.data['ma-week-3-total-amount'] + req.session.data['ma-week-4-total-amount'] + req.session.data['ma-week-5-total-amount'] + req.session.data['ma-week-6-total-amount'] + req.session.data['ma-week-7-total-amount'] + req.session.data['ma-week-8-total-amount'] + req.session.data['ma-week-9-total-amount'] + req.session.data['ma-week-10-total-amount'] + req.session.data['ma-week-11-total-amount'] + req.session.data['ma-week-12-total-amount'] + req.session.data['ma-week-13-total-amount'];
  req.session.data['ma-average-earnings'] = req.session.data['ma-total-earnings'] / 13; 

  res.redirect('/beta-private/sandbox/summary-add-employer');
});

}