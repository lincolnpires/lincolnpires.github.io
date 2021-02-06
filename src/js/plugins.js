/* eslint-disable no-plusplus,func-names */
/**
 * Avoid `console` errors in browsers that lack a console.
 */
(function () {
  const methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn',
  ];
  let { length } = methods;
  const console = window.console || {};

  const noop = () => {};
  while (length--) {
    const method = methods[length]; // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
