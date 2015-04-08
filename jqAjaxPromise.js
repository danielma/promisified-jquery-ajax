import R from 'ramda'

export default function jqAjaxPromise(options = {}) {
  let url = ''
  if ('string' === typeof options) {
    url     = options
    options = {}
  }
  return new Promise((resolve, reject) => {
    const defaults = {
      success:  resolve,
      error:    reject,
      dataType: 'json',
      url:      url
    }
    jQuery.ajax(R.merge(defaults, options))
  })
}
