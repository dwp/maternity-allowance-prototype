const moment = require("moment");


module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
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
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
