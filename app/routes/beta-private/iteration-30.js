
module.exports = router => {

  // Add your routes here - above the module.exports line

  router.post('/beta-private/iteration-30/', function (req, res) {

    // clear data
    req.session.data['change'] = null;
    req.session.data['baby-born'] = null;
    req.session.data['stopped-work'] = null;
    req.session.data['ma-date-requested'] = null;
    req.session.data['ma-claim-two-creation-date'] = '14 January 2024';

    // SCENARIO 1 - RTI ---------------------------------------------------------------------------------- SCENARIO 1 ---/
    // ------------------------------------------------------------------------------------------------------------------/

    if (req.session.data['scenario'] == 'scenario-1') {

       // Mat & SMP1
       req.session.data['mat-provided'] = 'Yes';
       req.session.data['mat-date-signed'] = '25 February 2024';
       req.session.data['mat-certificate-number'] = '5658710';
       req.session.data['mat-midwife-pin'] = '1987621';
       req.session.data['mat-date-verified'] = '22 April 2024';
       req.session.data['mat-verified-by'] = 'Jean Grey';
       req.session.data['smp1-provided'] = 'Yes';
       req.session.data['smp1-employer'] = 'ASDA LTD';
       req.session.data['smp1-date-signed'] = '15 June 2023';
       req.session.data['smp1-verified-by'] = 'Jean Grey';
       req.session.data['smp1-date-verified'] = '22 April 2024';




      // Claimant information
      req.session.data['claimant-name'] = 'Amira Radcliff';
      req.session.data['claimant-nino'] = 'XY123456Y';
      req.session.data['claimant-dob'] = '15 September 1996';
      req.session.data['claimant-postcode'] = 'SW7 3CP';
      req.session.data['claimant-address'] = '34 Fairburn Way';
      req.session.data['claimant-address2'] = 'Chelsea';
      req.session.data['claimant-address3'] = 'London';
      req.session.data['claimant-contact-number'] = '07895467510';
      req.session.data['claimant-email'] = 'a.radcliff26@gmail.com';

      // Bank details
      req.session.data['name-on-account'] = 'Lucinda Davies';
      req.session.data['sort-code'] = '11-11-11';
      req.session.data['account-number'] = '*****5678';
      req.session.data['building-society'] = '';
      req.session.data['payment-frequency'] = 'Every 4 weeks';


      // Decision
      req.session.data['ma-decision'] = 'Allowed';
      req.session.data['ma-claim-creation-date'] = '5 July 2023';
      req.session.data['ma-claim-decision-date'] = '5 July 2023';
      req.session.data['ma-rate'] = 'Standard rate at £172.48 per week';
      req.session.data['ma-map-start'] = '3 April 2024';
      req.session.data['ma-map-end'] = '31 December 2024';

      // Test period dates
      req.session.data['ma-baby-due-date'] = '10 May 2024';
      req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
      req.session.data['ma-test-period-first-day'] = '29 January 2023';
      req.session.data['ma-test-period-last-day'] = '4 May 2024';
      req.session.data['ma-test-period-week-fifteen'] = '21 January 2024';

      // Maternity Allowance period dates
      req.session.data['ma-map-claim-date-received'] = '3 April 2024';
      req.session.data['ma-map-expected-week-of-confinement'] = '5 May 2024';
      req.session.data['ma-week-eleventh'] = '18 February 2024';
      req.session.data['ma-week-fourth'] = '7 April 2024';
      req.session.data['ma-start-date-requested'] = '3 April 2024';
      req.session.data['ma-start-date-requested-status'] = 'Allowed';
      req.session.data['ma-map-rule'] = 'Flexible Maternity Allowance Period';

      // Date Last Worked
      req.session.data['ma-map-claimant-stopped-work-date-last-worked'] = '2 April 2024';
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
      req.session.data['ma-employer-1'] = 'ARGOS';
      req.session.data['ma-employer-1-start'] = '21 March 2022';
      req.session.data['ma-employer-1-end'] = 'Ongoing';
      req.session.data['ma-employer-1-end-update'] = '16 November 2022';
      req.session.data['ma-employer-2'] = 'ARGOS';
      req.session.data['ma-employer-2-start'] = '14 September 2022';
      req.session.data['ma-employer-2-end'] = 'Ongoing';
      req.session.data['ma-earnings-test'] = 'Met';
      //req.session.data['ma-average-earnings'] = '£112.31';

      // Highest earning weeks
      req.session.data['ma-week-1'] = '27 March 2022';
      req.session.data['ma-week-2'] = '3 April 2022';
      req.session.data['ma-week-3'] = '10 April 2022';
      req.session.data['ma-week-4'] = '29 January 2023';
      req.session.data['ma-week-5'] = '5 February 2023';
      req.session.data['ma-week-6'] = '12 February 2023';
      req.session.data['ma-week-7'] = '19 February 2023';
      req.session.data['ma-week-8'] = '26 February 2023';
      req.session.data['ma-week-9'] = '5 March 2023';
      req.session.data['ma-week-10'] = '12 March 2023';
      req.session.data['ma-week-11'] = '19 March 2023';
      req.session.data['ma-week-12'] = '26 March 2023';
      req.session.data['ma-week-13'] = '2 April 2023';
      req.session.data['ma-week-14v2'] = '9 April 2023';
      req.session.data['ma-week-15v2'] = '16 April 2023';
      req.session.data['ma-week-16v2'] = '23 April 2023';


            // Highest earning weeks - iteration 29
            req.session.data['ma-week-1'] = '27 March 2022';
            req.session.data['ma-week-2'] = '3 April 2022';
            req.session.data['ma-week-3'] = '10 April 2022';
            req.session.data['ma-week-4-2'] = '8 January 2023';
            req.session.data['ma-week-5-2'] = '15 January 2023';
            req.session.data['ma-week-6-2'] = '22 January 2023';
            req.session.data['ma-week-7-2'] = '29 January 2023';
            req.session.data['ma-week-8-2'] = '5 February 2023';
            req.session.data['ma-week-9-2'] = '12 February 2023';
            req.session.data['ma-week-10-2'] = '19 February 2023';
            req.session.data['ma-week-11-2'] = '26 February 2023';
            req.session.data['ma-week-12-2'] = '5 March 2023';
            req.session.data['ma-week-13-2'] = '12 March 2023';
            req.session.data['ma-week-14-2'] = '19 March 2023';
            req.session.data['ma-week-15-2'] = '26 March 2023';
            req.session.data['ma-week-16-2'] = '9 April 2023';

      req.session.data['ma-week-1-employer-1-amount'] = 315.00;
      req.session.data['ma-week-2-employer-1-amount'] = 315.00;
      req.session.data['ma-week-3-employer-1-amount'] = 315.00;
      req.session.data['ma-week-4-employer-1-amount'] = 315.00;
      req.session.data['ma-week-5-employer-1-amount'] = 315.00;
      req.session.data['ma-week-6-employer-1-amount'] = 315.00;
      req.session.data['ma-week-7-employer-1-amount'] = 315.00;
      req.session.data['ma-week-8-employer-1-amount'] = 315.00;
      req.session.data['ma-week-9-employer-1-amount'] = 315.00;
      req.session.data['ma-week-10-employer-1-amount'] = 315.00;
      req.session.data['ma-week-11-employer-1-amount'] = 315.00;
      req.session.data['ma-week-12-employer-1-amount'] = 315.00;
      req.session.data['ma-week-13-employer-1-amount'] = 315.00;

      req.session.data['ma-week-1-employer-2-amount'] = 0;
      req.session.data['ma-week-2-employer-2-amount'] = 0;
      req.session.data['ma-week-3-employer-2-amount'] = 0;
      req.session.data['ma-week-4-employer-2-amount'] = 0;
      req.session.data['ma-week-5-employer-2-amount'] = 0;
      req.session.data['ma-week-6-employer-2-amount'] = 0;
      req.session.data['ma-week-7-employer-2-amount'] = 0;
      req.session.data['ma-week-8-employer-2-amount'] = 0;
      req.session.data['ma-week-9-employer-2-amount'] = 0;
      req.session.data['ma-week-10-employer-2-amount'] = 0;
      req.session.data['ma-week-11-employer-2-amount'] = 0;
      req.session.data['ma-week-12-employer-2-amount'] = 0;
      req.session.data['ma-week-13-employer-2-amount'] = 0;

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
      req.session.data['claimant-name'] = 'Keira Ash';
      req.session.data['claimant-nino'] = 'ZZ123456Z';
      req.session.data['claimant-dob'] = '16 September 2000';
      req.session.data['claimant-postcode'] = 'NE7 9RS';
      req.session.data['claimant-address'] = '86 Pear Tree Grove';
      req.session.data['claimant-contact-number'] = '07847 171740';

      // Bank details
      req.session.data['name-on-account'] = 'Keira Ash';
      req.session.data['sort-code'] = '11-11-11';
      req.session.data['account-number'] = '12345678';
      req.session.data['building-society'] = ' ';
      req.session.data['payment-frequency'] = 'Every 4 weeks';


       // Mat & SMP1
       req.session.data['mat-provided'] = 'No';
       req.session.data['mat-date-signed'] = '15 April 2023';
       req.session.data['mat-certificate-number'] = '5658710';
       req.session.data['mat-midwife-pin'] = '1987621';
       req.session.data['mat-verified-by'] = 'Serena van der Woodsen';
       req.session.data['mat-date-verified'] = '1 July 2023';
       req.session.data['smp1-provided'] = 'No';
       req.session.data['smp1-employer-1'] = 'ROBSONS CARE FORUM';
       req.session.data['smp1-employer-2'] = 'ARGOS';
       req.session.data['smp1-date-signed'] = '18 June 2023';
       req.session.data['smp1-date-signed-2'] = '15 June 2023';
       req.session.data['smp1-verified-by'] = 'Serena van der Woodsen';
       req.session.data['smp1-date-verified'] = '1 July 2023';




      // Decision
      req.session.data['ma-decision'] = 'Allowed';
      req.session.data['ma-claim-creation-date'] = '11 October 2023';
      req.session.data['ma-claim-decision-date'] = '11 October 2023';
      req.session.data['ma-rate'] = 'Standard rate at £172.48 per week';
      req.session.data['ma-rate-2'] = 'Standard rate at £172.48 per week';
      req.session.data['ma-map-start'] = '3 April 2024';
      req.session.data['ma-map-end'] = '31 December 2024';
      req.session.data['ma-map-end-summary'] = '21 March 2024';

      // Test period dates
      req.session.data['ma-baby-due-date'] = '25 July 2023';
      req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
      req.session.data['ma-test-period-first-day'] = '17 April 2022';
      req.session.data['ma-test-period-last-day'] = '22 July 2023';
      req.session.data['ma-test-period-week-fifteen'] = '9 April 2023';

      // Maternity Allowance period dates
      req.session.data['ma-map-claim-date-received'] = '10 October 2023';
      req.session.data['ma-map-expected-week-of-confinement'] = '23 July 2023';
      req.session.data['ma-week-eleventh'] = '7 May 2023';
      req.session.data['ma-week-fourth'] = '25 June 2023';
      req.session.data['ma-start-date-requested'] = '23 June 2023';
      req.session.data['ma-start-date-requested-status'] = 'Allowed';
      req.session.data['ma-map-rule'] = 'Flexible Maternity Allowance Period';

      // Date Last Worked
      req.session.data['ma-map-claimant-stopped-work-date-last-worked'] = '20 June 2023';
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
      req.session.data['ma-employer-1-start'] = '12 January 2023';
      req.session.data['ma-employer-1-end'] = '16 September 2023';
      req.session.data['ma-employer-1-end-update'] = '16 November 2022';
      req.session.data['ma-employer-2'] = 'ARGOS';
      req.session.data['ma-employer-2-start'] = '14 September 2022';
      req.session.data['ma-employer-2-end'] = 'Ongoing';
      req.session.data['ma-earnings-test'] = 'Met';
      req.session.data['ma-average-earnings'] = '£250';

      // Highest earning weeks
      req.session.data['ma-week-1'] = '27 March 2022';
      req.session.data['ma-week-2'] = '3 April 2022';
      req.session.data['ma-week-3'] = '10 April 2022';
      req.session.data['ma-week-4'] = '17 April 2022';
      req.session.data['ma-week-5'] = '24 April 2022';
      req.session.data['ma-week-6'] = '1 May 2022';
      req.session.data['ma-week-7'] = '8 May 2022';
      req.session.data['ma-week-8'] = '15 May 2022';
      req.session.data['ma-week-9'] = '22 May 2022';
      req.session.data['ma-week-10'] = '29 May 2022';
      req.session.data['ma-week-11'] = '26 June 2022';
      req.session.data['ma-week-12'] = '3 July 2022';
      req.session.data['ma-week-13'] = '10 July 2022';

                // Highest earning weeks - iteration 29
                req.session.data['ma-week-1'] = '27 March 2022';
                req.session.data['ma-week-2'] = '3 April 2022';
                req.session.data['ma-week-3'] = '10 April 2022';
                req.session.data['ma-week-4-2'] = '8 January 2023';
                req.session.data['ma-week-5-2'] = '15 January 2023';
                req.session.data['ma-week-6-2'] = '22 January 2023';
                req.session.data['ma-week-7-2'] = '29 January 2023';
                req.session.data['ma-week-8-2'] = '5 February 2023';
                req.session.data['ma-week-9-2'] = '12 February 2023';
                req.session.data['ma-week-10-2'] = '19 February 2023';
                req.session.data['ma-week-11-2'] = '26 February 2023';
                req.session.data['ma-week-12-2'] = '5 March 2023';
                req.session.data['ma-week-13-2'] = '12 March 2023';
                req.session.data['ma-week-14-2'] = '19 March 2023';
                req.session.data['ma-week-15-2'] = '26 March 2023';
                req.session.data['ma-week-16-2'] = '23 April 2023';

      req.session.data['ma-week-1-employer-1-amount'] = 296.15;
      req.session.data['ma-week-2-employer-1-amount'] = 296.15;
      req.session.data['ma-week-3-employer-1-amount'] = 296.15;
      req.session.data['ma-week-4-employer-1-amount'] = 296.15;
      req.session.data['ma-week-5-employer-1-amount'] = 296.15;
      req.session.data['ma-week-6-employer-1-amount'] = 296.15;
      req.session.data['ma-week-7-employer-1-amount'] = 296.15;
      req.session.data['ma-week-8-employer-1-amount'] = 296.15;
      req.session.data['ma-week-9-employer-1-amount'] = 296.15;
      req.session.data['ma-week-10-employer-1-amount'] = 296.15;
      req.session.data['ma-week-11-employer-1-amount'] = 296.15;
      req.session.data['ma-week-12-employer-1-amount'] = 296.15;
      req.session.data['ma-week-13-employer-1-amount'] = 296.15;

      req.session.data['ma-week-1-employer-2-amount'] = 00;
      req.session.data['ma-week-2-employer-2-amount'] = 00;
      req.session.data['ma-week-3-employer-2-amount'] = 00;
      req.session.data['ma-week-4-employer-2-amount'] = 00;
      req.session.data['ma-week-5-employer-2-amount'] = 00;
      req.session.data['ma-week-6-employer-2-amount'] = 00;
      req.session.data['ma-week-7-employer-2-amount'] = 00;
      req.session.data['ma-week-8-employer-2-amount'] = 00;
      req.session.data['ma-week-9-employer-2-amount'] = 00;
      req.session.data['ma-week-10-employer-2-amount'] = 00;
      req.session.data['ma-week-11-employer-2-amount'] = 00;
      req.session.data['ma-week-12-employer-2-amount'] = 00;
      req.session.data['ma-week-13-employer-2-amount'] = 00;

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

    res.redirect('/beta-private/iteration-30/landing');
  });


  router.post('/beta-private/iteration-30/find-a-claim/matb1-details-add', function (req, res) {

    // Make data changes here
    req.session.data['mat-provided'] = 'Yes';
    req.session.data['mat-date-signed'] = '19 March 2023';
    req.session.data['mat-certificate-number'] = '1520156';
    req.session.data['mat-midwife-pin'] = '163002';
    req.session.data['mat-verified-by'] = 'Serena van der Woodsen';
    req.session.data['mat-date-verified'] = '05 July 2023';

    res.redirect('/beta-private/iteration-30/find-a-claim/summary/1-evidence-matb1');
  });




  router.post('/beta-private/iteration-30/find-a-claim/smp1-details-add', function (req, res) {
    res.redirect('/beta-private/iteration-30/find-a-claim/smp1-details-add-2');
  });


  router.post('/beta-private/iteration-30/find-a-claim/smp1-details-add-2', function (req, res) {

    // Make data changes here
    req.session.data['smp1-provided'] = 'Yes';
    req.session.data['smp1-employer-1'] = 'ROBSONS CARE FORUM';
    req.session.data['smp1-date-signed'] = '18 June 2023';
    req.session.data['smp1-employer-2'] = 'ARGOS';
    req.session.data['smp1-date-signed-2'] = '15 June 2023';
    req.session.data['smp1-verified-by'] = 'Serena van der Woodsen';
    req.session.data['smp1-date-verified'] = '05 July 2023';
    req.session.data['ma-decision'] = 'Allowed';

    res.redirect('/beta-private/iteration-30/find-a-claim/summary/1-evidence-2-employers');
  });


  // Payslip start claim
  router.post('/beta-private/iteration-30/start-a-claim/employers/add-employer', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/payslip/frequency');
  });

  router.post('/beta-private/iteration-30/start-a-claim/more-claimant-information', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/confirm-contact-details');
  });

  router.post('/beta-private/iteration-30/start-a-claim/smp1-dispute', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/employment');
  });

  router.post('/beta-private/iteration-30/find-a-claim/smp1-add-resolution', function (req, res) {
    res.redirect('/beta-private/iteration-30/find-a-claim/smp1-details-add-resolution');
  });

  router.post('/beta-private/iteration-30/find-a-claim/smp1-details-add-resolution', function (req, res) {
    res.redirect('/beta-private/iteration-30/find-a-claim/summary/smp-resolution/1');
  });

  router.post('/beta-private/iteration-30/find-a-claim/mat-add', function (req, res) {
    res.redirect('/beta-private/iteration-30/find-a-claim/matb1-details-add');
  });

  router.post('/beta-private/iteration-30/find-a-claim/smp1-add', function (req, res) {
    res.redirect('/beta-private/iteration-30/find-a-claim/smp1-details-add');
  });

  router.post('/beta-private/iteration-30/start-a-claim/payslip/frequency', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/payslip/add');
  });

  router.post('/beta-private/iteration-30/start-a-claim/payslip/add', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/payslip/summary');
  });

  router.post('/beta-private/iteration-30/start-a-claim/payslip/summary', function (req, res) {
    if (req.session.data['ma-payslip-details-conf'] == 'yes') {
      res.redirect('/beta-private/iteration-30/start-a-claim/payslip/add');
    } else {
      res.redirect('/beta-private/iteration-30/start-a-claim/summary/2-2-employers-employment-and-earnings.html');
    }
  });

  router.post('/beta-private/iteration-30/start-a-claim/summary/2-bank-details-and-payments', function (req, res) {
    res.redirect('/beta-private/iteration-30/payments/');
  });

// *** Change of Circs ************************************************************************************************************** //

router.post('/beta-private/iteration-30/find-a-claim/change-of-circ/change-select', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/change-of-circ/change-select-define');
});

router.post('/beta-private/iteration-30/find-a-claim/change-of-circ/change-select-define', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/change-of-circ/change-MA-end-date');
});

router.post('/beta-private/iteration-30/find-a-claim/change-of-circ/change-MA-end-date', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/change-of-circ/change-confirm-answers');
});

router.post('/beta-private/iteration-30/find-a-claim/change-of-circ/change-confirm-answers', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/summary/1-change-summary');
});


router.post('/beta-private/iteration-30/find-a-claim/change-of-circ/change-select-radio', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/change-of-circ/change-select-define-radio');
});

router.post('/beta-private/iteration-30/find-a-claim/change-of-circ/change-select-define-radio-v2', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/change-of-circ/change-MA-end-date');
});

router.post('/beta-private/iteration-30/find-a-claim/change-of-circ/change-fraud-entire-claim', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/change-of-circ/change-fraud-confirm-answers');
});

router.post('/beta-private/iteration-30/find-a-claim/change-of-circ/change-fraud-confirm-answers', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/summary/1-change-summary-fraud');
});

router.post('/beta-private/iteration-30/find-a-claim/change-of-circ/change-select-define-radio-resume', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/change-of-circ/change-MA-end-date-resume');
});

router.post('/beta-private/iteration-30/find-a-claim/change-of-circ/change-MA-end-date-resume', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/change-of-circ/change-confirm-answers-resume');
});

router.post('/beta-private/iteration-30/find-a-claim/change-of-circ/change-confirm-answers-resume', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/summary/1-change-summary-resume');
});



// *** Unallocated earnings ************************************************************************************************************** //

router.post('/beta-private/iteration-30/find-a-claim/unallocated/unallocated-start', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/unallocated/unallocated-end');
});

router.post('/beta-private/iteration-30/find-a-claim/unallocated/unallocated-end', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/unallocated/unallocated-confirm-answers');
});

router.post('/beta-private/iteration-30/find-a-claim/unallocated/unallocated-confirm-answers', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/summary/allocated/1');
});

router.post('/beta-private/iteration-30/find-a-claim/summary/allocated/reassigned-start', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/summary/allocated/reassigned-end');
});

router.post('/beta-private/iteration-30/find-a-claim/summary/allocated/reassigned-end', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/summary/allocated/reassigned-confirm-answers');
});

router.post('/beta-private/iteration-30/find-a-claim/summary/allocated/reassigned-confirm-answers', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/summary/allocated/1');
});

router.post('/beta-private/iteration-30/find-a-claim/summary/reallocated/reassigned-start', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/summary/reallocated/reassigned-end');
});

router.post('/beta-private/iteration-30/find-a-claim/summary/reallocated/reassigned-end', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/summary/reallocated/reassigned-confirm-answers');
});

router.post('/beta-private/iteration-30/find-a-claim/summary/reallocated/reassigned-confirm-answers', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/summary/reallocated/1');
});

// *** Payment Override ************************************************************************************************************** //

router.post('/beta-private/iteration-30/find-a-claim/payment-override/employment-start', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/payment-override/still-with-employer');
});

router.post('/beta-private/iteration-30/find-a-claim/payment-override/still-with-employer', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/payment-override/employment-end');
});

router.post('/beta-private/iteration-30/find-a-claim/payment-override/employment-end', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/payment-override/override-confirm-answers');
});

router.post('/beta-private/iteration-30/find-a-claim/payment-override/override-confirm-answers', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/payment-override/1-employment-and-earnings');
});

router.post('/beta-private/iteration-30/find-a-claim/payment-override/override-confirm-answers-employed', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/payment-override/1-employment-and-earnings');
});

router.post('/employer', function(request, response) {

  var employed = request.session.data['employed']
  if (employed == "yes"){
      response.redirect("beta-private/iteration-30/find-a-claim/payment-override/override-confirm-answers-employed")
  } 
 else {
      response.redirect("/beta-private/iteration-30/find-a-claim/payment-override/employment-end")
  }
})

// *** Reasonable Adjustment ************************************************************************************************************** //

router.post('/require-RA-30', function(request, response) {

  var ReasonableAdjustment = request.session.data['ReasonableAdjustment']
  if (ReasonableAdjustment == "Yes"){
      response.redirect("/beta-private/iteration-30/start-a-claim/reasonable-adjustment-type")
  } else {
      response.redirect("/beta-private/iteration-30/start-a-claim/claim-date")
  }
})

router.post('/beta-private/iteration-30/start-a-claim/reasonable-adjustment-type', function (req, res) {
  res.redirect('/beta-private/iteration-30/start-a-claim/reasonable-adjustment-written-type');
});

router.post('/beta-private/iteration-30/start-a-claim/reasonable-adjustment-written-type', function (req, res) {
  res.redirect('/beta-private/iteration-30/start-a-claim/reasonable-adjustment-font-size');
});

router.post('/beta-private/iteration-30/start-a-claim/reasonable-adjustment-font-size', function (req, res) {
  res.redirect('/beta-private/iteration-30/start-a-claim/reasonable-adjustment-2');
});

router.post('/beta-private/iteration-30/start-a-claim/reasonable-adjustment-2', function (req, res) {
  res.redirect('/beta-private/iteration-30/start-a-claim/claim-date');
});

// *** Preferences ************************************************************************************************************** //

router.post('/beta-private/iteration-30/find-a-claim/preferences/claimant-details', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/preferences/claimant-details-confirm');
});

router.post('/beta-private/iteration-30/find-a-claim/preferences/claimant-details-confirm', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/preferences/1-preferences');
});

router.post('/beta-private/iteration-30/find-a-claim/preferences/contact-options', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/preferences/font-size');
});

router.post('/beta-private/iteration-30/find-a-claim/preferences/font-size', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/preferences/font-confirm-answers');
});

router.post('/beta-private/iteration-30/find-a-claim/preferences/font-confirm-answers', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/preferences/1-preferences-adjustment');
});

router.post('/beta-private/iteration-30/find-a-claim/preferences/claimant-details-type', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/preferences/claimant-details');
});

router.post('/beta-private/iteration-30/find-a-claim/preferences/contact-options-type', function (req, res) {
  res.redirect('/beta-private/iteration-30/find-a-claim/preferences/contact-options');
});

  // *** Scenario 1 ***************************************************************************************************************** //

  router.post('/beta-private/iteration-30/start-a-claim/index', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/claimant-confirm');
  });

  router.post('/beta-private/iteration-30/find-a-claim/summary/1-bank-details-and-payments', function (req, res) {
    res.redirect('/beta-private/iteration-30/payments/prepopulated-account-details');
  });

  router.post('/beta-private/iteration-30/start-a-claim/more-claimant-information', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/confirm-contact-details');
  });

  router.post('/beta-private/iteration-30/start-a-claim/claimant-confirm', function (req, res) {

    if (req.session.data['claimant-confirm'] == 'yes') {
      res.redirect('/beta-private/iteration-30/start-a-claim/claimant-preferences');
    }
    else {
      res.redirect('/beta-private/iteration-30/start-a-claim/more-claimant-information');
    }
  });

  router.post('/beta-private/iteration-30/start-a-claim/more-claimant-information', function (req, res) {
    // Has a match been made, in this scenario?
    var match = true;

    if (match == false) {
      var match = null;
      res.redirect('/beta-private/iteration-30/start-a-claim/no-match-found');
    }
    else {
      res.redirect('/beta-private/iteration-30/start-a-claim/claim-date');
    }
  });

  router.post('/beta-private/iteration-30/start-a-claim/claim-date', function (req, res) {

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

      res.redirect('/beta-private/iteration-30/start-a-claim/summary/'); // Goes back to summary
    }
    else {
      // Regular journey
      req.session.data['change'] = null;
      res.redirect('/beta-private/iteration-30/start-a-claim/baby-due-date'); // Goes to next screen in the journey
    }

  });

  router.post('/beta-private/iteration-30/start-a-claim/baby-due-date', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/baby-born');
  });

  router.post('/beta-private/iteration-30/start-a-claim/baby-born', function (req, res) {

    if (req.session.data['change'] == null) {
      req.session.data['change'] = false;
    } else {
      req.session.data['change'] = true;
    }

    if (req.session.data['baby-born'] == 'yes') {
      res.redirect('/beta-private/iteration-30/start-a-claim/baby-birth-date');
    }
    else {

      if (req.session.data['change'] == true ) {
        req.session.data['change'] = null;
        // No change
        res.redirect('/beta-private/iteration-30/start-a-claim/summary/'); // Goes back to unchanged summary
      }
      else {
        req.session.data['change'] = null;
        res.redirect('/beta-private/iteration-30/start-a-claim/mat');
      }

    }

  });


  router.post('/beta-private/iteration-30/start-a-claim/mat', function (req, res) {

    if (req.session.data['change'] == null) {
      req.session.data['change'] = false;
    } else {
      req.session.data['change'] = true;
    }

    if (req.session.data['mat'] == 'yes') {
      res.redirect('/beta-private/iteration-30/start-a-claim/matb1-details');
    }
    else {

      if (req.session.data['change'] == true ) {
        req.session.data['change'] = null;
        // No change
        res.redirect('/beta-private/iteration-30/start-a-claim/summary/'); // Goes back to unchanged summary
      }
      else {
        req.session.data['change'] = null;
        res.redirect('/beta-private/iteration-30/start-a-claim/employment');
      }

    }

  });

  router.post('/beta-private/iteration-30/start-a-claim/matb1-details', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/smp1');
  });


  router.post('/beta-private/iteration-30/start-a-claim/smp1', function (req, res) {

    if (req.session.data['change'] == null) {
      req.session.data['change'] = false;
    } else {
      req.session.data['change'] = true;
    }

    if (req.session.data['mat'] == 'yes') {
      res.redirect('/beta-private/iteration-30/start-a-claim/smp1-details');
    }
    else {

      if (req.session.data['change'] == true ) {
        req.session.data['change'] = null;
        // No change
        res.redirect('/beta-private/iteration-30/start-a-claim/smp1-dispute'); // Goes back to unchanged summary
      }
      else {
        req.session.data['change'] = null;
        res.redirect('/beta-private/iteration-30/start-a-claim/smp1-dispute');
      }

    }

  });




  router.post('/beta-private/iteration-30/start-a-claim/smp1-details', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/employment');
  });

  router.post('/beta-private/iteration-30/start-a-claim/baby-birth-date', function (req, res) {
    if (req.session.data['change'] == true ) {
      req.session.data['change'] = null;
      // Change made - GO TO CHANGED SUMMARY

      // Changes listed here
      req.session.data['ma-baby-birth-date'] = '1 October 2022';
      req.session.data['ma-map-start'] = '2 October 2022';
      req.session.data['ma-map-end'] = '1 July 2023';

      res.redirect('/beta-private/iteration-30/start-a-claim/summary/change-baby-birth-date'); // NEEDS TO BE CHANGED TO CHANGED SUMMARY
    }
    else {
      res.redirect('/beta-private/iteration-30/start-a-claim/mat');
    }
  });

  router.post('/beta-private/iteration-30/start-a-claim/employment/', function (req, res) {
    if (req.session.data['employment-type'] == 'agency') {
      res.redirect('/beta-private/iteration-30/start-a-claim/employment/agency-employment-date');
    }
    else {
      res.redirect('/beta-private/iteration-30/start-a-claim/stopped-work/');
    }
  });

  // router.post('/beta-private/iteration-30/start-a-claim/employment/test-period-agency', function (req, res) {
  //  if (req.session.data['test-period-agency'] == 'yes') {
  //    res.redirect('/beta-private/iteration-30/start-a-claim/employment/agency-employment-date');
  //  }
  //  else {
  //    res.redirect('/beta-private/iteration-30/start-a-claim/stopped-work/');
  //  }
  // });

  router.post('/beta-private/iteration-30/start-a-claim/employment/agency-employment-date', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/employment/agency-employed');
  });

  router.post('/beta-private/iteration-30/start-a-claim/employment/agency-employed', function (req, res) {
    if (req.session.data['agency-employed'] == 'no') {
      res.redirect('/beta-private/iteration-30/start-a-claim/employment/agency-employment-end-date');
    }
    else {
      res.redirect('/beta-private/iteration-30/start-a-claim/stopped-work');
    }
  });

  router.post('/beta-private/iteration-30/start-a-claim/employment/agency-employment-end-date', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/chosen-map-date');
  });

  router.post('/beta-private/iteration-30/start-a-claim/stopped-work/', function (req, res) {
    if (req.session.data['stopped-work'] == 'yes') {
      res.redirect('/beta-private/iteration-30/start-a-claim/stopped-work/reason');
    }
    else {
      // For Private Beta testing for Iteration 4, we will set the change scenario
      // session data to 'true' as they say 'no' to, if they've started work
      // so that when they click change on the summary, the next time they run through this screen
      // it will return directly to summary after they enter the date on the next screen 'dlw-date'.
      // req.session.data['change'] = true;
      res.redirect('/beta-private/iteration-30/start-a-claim/chosen-map-date');
    }
  });

  router.post('/beta-private/iteration-30/start-a-claim/stopped-work/reason', function (req, res) {
    if (req.session.data['stopped-work-reason'] == 'sick') {
      res.redirect('/beta-private/iteration-30/start-a-claim/stopped-work/sickness/allowance-type');
    } else {
      res.redirect('/beta-private/iteration-30/start-a-claim/stopped-work/date-last-worked');
    }
  });

  router.post('/beta-private/iteration-30/start-a-claim/stopped-work/sickness/allowance-type', function (req, res) {
    if (req.session.data['allowance-type'] == 'employment-and-support-allowance') {
      res.redirect('/beta-private/iteration-30/start-a-claim/stopped-work/sickness/benefit-start-date');
    }
    else {
      res.redirect('/beta-private/iteration-30/start-a-claim/stopped-work/sickness/pregnancy-related');
    }
  });

  router.post('/beta-private/iteration-30/start-a-claim/stopped-work/sickness/pregnancy-related', function (req, res) {
    if (req.session.data['allowance-type'] == 'statutory-sick-pay') {
      res.redirect('/beta-private/iteration-30/start-a-claim/stopped-work/sickness/benefit-end-date');
    }
    else {
      res.redirect('/beta-private/iteration-30/start-a-claim/stopped-work/date-last-worked');
    }
  });

  router.post('/beta-private/iteration-30/start-a-claim/stopped-work/sickness/benefit-end-date', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/stopped-work/date-last-worked');
  });

  router.post('/beta-private/iteration-30/start-a-claim/stopped-work/sickness/benefit-start-date', function (req, res) {
      res.redirect('/beta-private/iteration-30/start-a-claim/stopped-work/date-last-worked');
  });

  router.post('/beta-private/iteration-30/start-a-claim/stopped-work/date-last-worked', function (req, res) {
      res.redirect('/beta-private/iteration-30/start-a-claim/chosen-map-date');
  });

  // Removed maternity leave question
  // router.post('/beta-private/iteration-30/start-a-claim/ma-start-date-provided', function (req, res) {
  //  if (req.session.data['ma-start-date-provided'] == 'yes') {
  //    res.redirect('/beta-private/iteration-30/start-a-claim/planned-dlw-date');
  //  }
  //  else {
  //    res.redirect('/beta-private/iteration-30/start-a-claim/chosen-map-date');
  //  }
  // });

  router.post('/beta-private/iteration-30/start-a-claim/planned-dlw-date', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/chosen-map-date');
  });

  router.post('/beta-private/iteration-30/start-a-claim/chosen-map-date', function (req, res) {
    if (req.session.data['ma-date-requested'] == 'yes') {
      res.redirect('/beta-private/iteration-30/start-a-claim/requested-start-date');
    }
    else {
      res.redirect('/beta-private/iteration-30/start-a-claim/summary/');
    }
  });

  router.post('/beta-private/iteration-30/start-a-claim/confirm-contact-details-none', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/claimant-preferences');
  });

  router.post('/beta-private/iteration-30/start-a-claim/requested-start-date', function (req, res) {
    res.redirect('/beta-private/iteration-30/find-a-claim/summary/1');
  });

    router.post('/beta-private/iteration-30/start-a-claim/claimant-preferences', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/confirm-contact-details');
  });

  router.post('/beta-private/iteration-30/start-a-claim/confirm-contact-details/', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/reasonable-adjustment');
  });

  router.post('/beta-private/iteration-30/start-a-claim/reasonable-adjustment-new', function (req, res) {
    res.redirect('/beta-private/iteration-30/start-a-claim/claim-date');
  });

  router.get('/beta-private/iteration-30/start-a-claim/summary/', function (req, res) {
    if (req.session.data['scenario'] == 'scenario-1') {
      res.redirect('/beta-private/iteration-30/start-a-claim/summary/2');
    } else if (req.session.data['scenario'] == 'scenario-2') {
      res.redirect('/beta-private/iteration-30/find-a-claim/summary/1');
    } else {
      res.redirect('/beta-private/iteration-30/find-a-claim/summary/1');
    }
  });

  // *** Find a claim *** //

  router.post('/beta-private/iteration-30/find-a-claim/', function (req, res) {
    res.redirect('/beta-private/iteration-30/find-a-claim/summary');
  });

  router.post('/beta-private/iteration-30/find-a-claim/select-claim', function (req, res) {
      res.redirect('/beta-private/iteration-30/find-a-claim/summary/');
  });

  router.get('/beta-private/iteration-30/find-a-claim/summary/', function (req, res) {
    if (req.session.data['scenario'] == 'scenario-1') {
      res.redirect('/beta-private/iteration-30/find-a-claim/summary/1');
    } else if (req.session.data['scenario'] == 'scenario-2') {
      res.redirect('/beta-private/iteration-30/find-a-claim/summary/1');
    } else {
      res.redirect('/beta-private/iteration-30/find-a-claim/summary/1');
    }
  });

  router.post('/beta-private/iteration-30/find-a-claim/rti/change', function (req, res) {

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

    res.redirect('/beta-private/iteration-30/find-a-claim/summary/1-employment-and-earnings');
  });


  router.post('/beta-private/iteration-30/payments/prepopulated-account-details', function (req, res) {

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

    res.redirect('/beta-private/iteration-30/find-a-claim/summary/');
  });


  router.post('/beta-private/iteration-30/find-a-claim/employers/change-employer-1', function (req, res) {
    req.session.data['ma-employer-1'] = 'CHANGE EMP 1 LTD';
    res.redirect('/beta-private/iteration-30/find-a-claim/summary/');
  });

  router.post('/beta-private/iteration-30/find-a-claim/employers/change-employer-2', function (req, res) {
    req.session.data['ma-employer-2'] = 'CHANGE EMP 2 LTD';
    res.redirect('/beta-private/iteration-30/find-a-claim/summary/');
  });

  router.post('/beta-private/iteration-30/find-a-claim/employers/change-employer-3', function (req, res) {
    req.session.data['ma-employer-3'] = 'CHANGE EMP 3 LTD';
    res.redirect('/beta-private/iteration-30/find-a-claim/summary/1-three-employers');
  });

  // Payslip
  // Payslip find claim

  router.post('/beta-private/iteration-30/find-a-claim/employers/add-employer', function (req, res) {


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

    res.redirect('/beta-private/iteration-30/find-a-claim/payslip/frequency');
  });

  router.post('/beta-private/iteration-30/find-a-claim/payslip/frequency', function (req, res) {
    res.redirect('/beta-private/iteration-30/find-a-claim/payslip/add');
  });

  router.post('/beta-private/iteration-30/find-a-claim/payslip/add', function (req, res) {
    res.redirect('/beta-private/iteration-30/find-a-claim/payslip/summary');
  });

  router.post('/beta-private/iteration-30/find-a-claim/payslip/summary', function (req, res) {
    if (req.session.data['ma-payslip-details-conf'] == 'yes') {
      res.redirect('/beta-private/iteration-30/find-a-claim/payslip/add');
    } else {
      res.redirect('/beta-private/iteration-30/find-a-claim/summary/1-three-employers');
    }
  });

  router.post('/beta-private/iteration-30/find-a-claim/employers/remove-employer-3', function (req, res) {
    if (req.session.data['remove-employer-3'] == 'yes') {
      res.redirect('/beta-private/iteration-30/find-a-claim/summary/1');
    } else {
      res.redirect('/beta-private/iteration-30/find-a-claim/summary/1-three-employers');
    }
  });

  // Payments

  router.post('/beta-private/iteration-30/start-a-claim/summary/2', function (req, res) {
    res.redirect('/beta-private/iteration-30/payments/');
  });

  router.post('/beta-private/iteration-30/payments/', function (req, res) {
    res.redirect('/beta-private/iteration-30/payments/summary');
  });

  router.post('/beta-private/iteration-30/payments/payment-frequency', function (req, res) {
    if (req.session.data['payment-frequency'] == '2-weeks') {
      req.session.data['payment-frequency'] = 'Every 2 weeks';
    } else {
      req.session.data['payment-frequency'] = 'Every 4 weeks';
    }
    res.redirect('/beta-private/iteration-30/start-a-claim/summary/2-bank-details-and-payments');
  });

  router.post('/beta-private/iteration-30/payments/summary', function (req, res) {
    if (req.session.data['ma-payment-details-conf'] == 'yes') {
      res.redirect('/beta-private/iteration-30/start-a-claim/summary/2-bank-details-and-payments');
    } else {
      res.redirect('/beta-private/iteration-30/payments/prepopulated-account-details');
    }
  });

  router.post('/beta-private/iteration-30/payments/prepopulated-account-details', function (req, res) {
    res.redirect('/beta-private/iteration-30/payments/prepopulated-payment-frequency');
  });

  router.post('/beta-private/iteration-30/payments/prepopulated-payment-frequency', function (req, res) {
    if (req.session.data['payment-frequency'] == '2-weeks') {
      req.session.data['payment-frequency'] = 'Every 2 weeks';
    } else {
      req.session.data['payment-frequency'] = 'Every 4 weeks';
    }
    res.redirect('/beta-private/iteration-30/start-a-claim/summary/2-bank-details-and-payments');
  });

  router.post('/beta-private/iteration-30/start-a-claim/summary/2-rti-changed', function (req, res) {
    res.redirect('/beta-private/iteration-30/payments');
  });

  }
