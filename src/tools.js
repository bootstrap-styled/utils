export function getTetherAttachments(placement) {
  switch (placement) {
    case 'top':
    case 'top center':
      return {
        attachment: 'bottom center',
        targetAttachment: 'top center',
      };
    case 'bottom':
    case 'bottom center':
      return {
        attachment: 'top center',
        targetAttachment: 'bottom center',
      };
    case 'left':
    case 'left center':
      return {
        attachment: 'middle right',
        targetAttachment: 'middle left',
      };
    case 'right':
    case 'right center':
      return {
        attachment: 'middle left',
        targetAttachment: 'middle right',
      };
    case 'top left':
      return {
        attachment: 'bottom left',
        targetAttachment: 'top left',
      };
    case 'top right':
      return {
        attachment: 'bottom right',
        targetAttachment: 'top right',
      };
    case 'bottom left':
      return {
        attachment: 'top left',
        targetAttachment: 'bottom left',
      };
    case 'bottom right':
      return {
        attachment: 'top right',
        targetAttachment: 'bottom right',
      };
    case 'right top':
      return {
        attachment: 'top left',
        targetAttachment: 'top right',
      };
    case 'right bottom':
      return {
        attachment: 'bottom left',
        targetAttachment: 'bottom right',
      };
    case 'left top':
      return {
        attachment: 'top right',
        targetAttachment: 'top left',
      };
    case 'left bottom':
      return {
        attachment: 'bottom right',
        targetAttachment: 'bottom left',
      };
    default:
      return {
        attachment: 'top center',
        targetAttachment: 'bottom center',
      };
  }
}

export const tetherAttachements = [
  'top',
  'bottom',
  'left',
  'right',
  'top left',
  'top center',
  'top right',
  'right top',
  'right middle',
  'right bottom',
  'bottom right',
  'bottom center',
  'bottom left',
  'left top',
  'left middle',
  'left bottom',
];

// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443
export function getScrollbarWidth() {
  const scrollDiv = document.createElement('div');
  // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

export function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? `${padding}px` : null;
}

export function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}

export function getOriginalBodyPadding() {
  return parseInt(
    window.getComputedStyle(document.body, null).getPropertyValue('padding-right') || 0,
    10
  );
}

export function conditionallyUpdateScrollbar() {
  const scrollbarWidth = getScrollbarWidth();
  // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L420
  const fixedContent = document.querySelectorAll('.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed')[0];
  const bodyPadding = fixedContent ? parseInt(
    fixedContent.style.paddingRight || 0,
    10
  ) : 0;
  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}

/**
 * http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 * generate a hash from a string
 * @param str
 * @returns {number}
 */
export function toHashCode(str) {
  let hash = 0;
  if (str.length === 0) {
    return hash;
  }
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char; // eslint-disable-line no-bitwise
    hash = hash & hash; // eslint-disable-line no-bitwise, operator-assignment
  }
  return hash;
}

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 */

export function createChainedFunction(...funcs) {
  return funcs.filter((func) => func != null).reduce(
    (acc, func) => {
      console.warn(
        typeof func === 'function',
        'Material-UI: invalid Argument Type, must only provide functions, undefined, or null.',
      );
      return function chainedFunction(...args) {
        acc.apply(this, args);
        func.apply(this, args);
      };
    },
    () => {},
  );
}

/**
 * Returns a filtered copy of an object with only the specified keys.
 */
export function pick(obj, keys) {
  const pickKeys = Array.isArray(keys) ? keys : [keys];
  let { length } = pickKeys;
  let key;
  const result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }
  return result;
}
