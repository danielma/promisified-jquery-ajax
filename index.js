module.exports = function jqAjaxPromise(options) {
  if (!options) { options = {}; }
  var url = '';
  if ('string' === typeof options) {
    url     = options;
    options = {};
  }
  return new Promise(function(resolve, reject) {
    var defaults = {
      success:  resolve,
      error:    reject,
      dataType: 'json',
      url:      url
    };
    jQuery.ajax(jQuery.extend(defaults, options));
  })
};
