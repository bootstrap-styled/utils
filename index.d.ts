declare module '@bootstrap-styled/utils' {
  export function getTetherAttachments(
    placement: string
  ): {
    attachment: string;
    targetAttachment: string;
  };

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
    'left bottom'
  ];

  export function getScrollbarWidth(): number;
  export function setScrollbarWidth(padding: number): void;
  export function isBodyOverflowing(): boolean;
  export function getOriginalBodyPadding(): number;
  export function conditionallyUpdateScrollbar(): void;
  export function toHashCode(str: srting): string;
  export function createChainedFunction(...funcs: function[]): function;
  export function pick(obj: object, keys: string[]): object;

  export const parseTransition: (
    transitions: string[]
  ) => ({
    property: string;
    duration: string;
    timingFunction: string;
    delay: string;
  })[];

  export class UnitUtils {
    public UNIT: {
      EM: 'em';
      REM: 'rem';
      PX: 'px';
      PERCENT: '%';
    };

    public math: {
      addition: (a: string, b: string) => string;
      subtract: (a: string, b: string) => string;
      multiply: (a: string, b: string) => string;
      divide: (a: string, b: string) => string;
    };

    public detectUnit: (value: string) => string;

    public rmUnit: (value: string, unit?: string) => number;

    public toPercent: (
      value: number,
      total?: number,
      decimal?: number
    ) => string;
  }

  export const unitUtils: UnitUtils;
}
