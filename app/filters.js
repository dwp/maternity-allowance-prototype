//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here


const moment = require("moment");


  var filters = {}


  /*
    ====================================================================
    todayGovuk
    --------------------------------------------------------------------
    Today's date GOV.UK formatted
    ====================================================================

    Usage:

      {{ "" | todayGovuk }}

    = 19 March 2020

  */

  filters.todayGovuk = () => {
    return moment().format('D MMMM YYYY')
  }

  filters.yesterdayGovuk = () => {
    return moment().subtract(1, 'days').format('D MMMM YYYY')
  }


  /*
  ====================================================================
  govukDate
  --------------------------------------------------------------------
  Process a date and return it in GOV.UK format
  Accepts arrays (as provided by design system date inputs) as
  well as javascript dates
  ====================================================================

  Usage:

    {{ [1,1,1970] | govukDate }}

  = 1 January 1970

*/

filters.govukDate = (date, format) => {
  if (Array.isArray(date)){
    return filters.arrayToGovukDate(date, format)
  }
  else return filters.dateToGovukDate(date, format)
}

/*
  ====================================================================
  arrayToGovukDate
  --------------------------------------------------------------------
  Convert array to govuk date
  ====================================================================

  Usage:

  {{ [1, 2, 2020] | arrayToGovukDate }}

  = 1 February 2020

*/

filters.arrayToGovukDate = (array, format) => {
  let dateObject = filters.arrayToDateObject(array)
  let govukDate = filters.dateToGovukDate(dateObject, format)
  return govukDate
}

/*
  ====================================================================
  dateToGovukDate
  --------------------------------------------------------------------
  Convert date object to govuk date (1 February 2020)
  ====================================================================

  Usage:

  {{ date | dateToGovukDate }}

  = 1 February 2020

*/

filters.dateToGovukDate = (date, format=false) => {
  if (date){
    let theDate = moment(date)
    if (theDate.isValid()){
      return theDate.format(format || 'D MMMM YYYY')
    }
  }
  return ''
}


  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */

// Add the filters using the addFilter function
Object.entries(filters).forEach(([name, fn]) => addFilter(name, fn))
