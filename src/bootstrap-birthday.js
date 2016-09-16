(function ($) {
  'use strict';

  /**
   * Default settings.
   */
  var defaults = {

    /**
     * The maxAge setting determines the oldest year you can pick for a birthday.
     * So if you set the maxAge to 100 and the current year is 2010, then the
     * oldest year you can pick will be 1910.
     */
    maxAge: 120,

    /**
     * The opposite of maxAge. If current year is 2010 and minAge is set to 18,
     * the earliest year that can be picked is 1992.
     */
    minAge: 0,

    /**
     * The futureDates setting determines whether birthdays in the future can be
     * selected. Unless you need to support entering birthdays of unborn babies,
     * this should generally be false.
     */
    futureDates: false,

    /**
     * The maxYear setting allows you to set the maximum year that can be chosen,
     * counting up from 0. If you pass in a year (such as 1980) then it uses that
     * year. If you pass in a number under 1000 (such as 5) then it adds it to
     * the current year, so if the year was 2010 then the maxYear would become
     * 2015.
     *
     * If you want the maxYear to be in the future, you must set futureDates to
     * true.
     * If you want the maxYear in the past, you can pass in a negative number or
     * a past year (if its over 1000).
     */
    maxYear: 0,

    /**
     * The dateFormat setting determines the order of the select fields in the
     * markup and supports the following three values:
     * - middleEndian: Month, Day, Year
     * - littleEndian: Day, Month, Year
     * - bigEndian: Year, Month, Day
     */
    dateFormat: 'middleEndian',

    /**
     * The monthFormat setting determines the text displayed in the month select
     * box. It can be either short, or long. i.e. Jan or January
     */
    monthFormat: 'short',

    /**
     * The placeholder adds a default option to each select list just like
     * Facebook does on their sign-up page.
     * The default option just says Month, Day, or Year with a colon after it.
     * If you keep this set to true, you will need to add logic, preferably on
     * the client and server, to ensure this option isn't chosen. The value for
     * these options is 0.
     */
    placeholder: true,

    // CALLBACKS.
    onChangeYear: function() {},
    onChangeMonth: function() {},
    onChangeDay: function() {}
  };

  $.fn.bootstrapBirthday = function(options) {
    // Create namespace.
    var bsBD = {};

    var init = function () {
      // Merge options.
      bsBD.settings = $.extend({}, defaults, options);


    };

    // Run init.
    init();
  };

})(jQuery);
