Different tools used for more specific cases or Components.


#### Placement
* getTetherAttachments() and tetherAttachements.

Switch method that combines placements and array of placements. Mainly used for `Tooltip`. 

```js static

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

```

#### Scrollbar
Used mainly for `Modal`.

* getScrollbarWidth().
* setScrollbarWidth().
* isBodyOverflowing().
* getOriginalBodyPadding().
* conditionallyUpdateScrollbar().

#### Misc
* toHashCode().
Generate a hash from a string.

* createChainedFunction().
Will only create a new function if needed,
otherwise will pass back existing functions or null.

* pick().
Returns a filtered copy of an object with only the specified keys.
