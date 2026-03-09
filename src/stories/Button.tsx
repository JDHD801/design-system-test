import React from 'react';

export type ButtonVariant = 'filled' | 'outlined' | 'subtle';
export type ButtonColor = 'primary' | 'destructive' | 'neutral' | 'disabled';
export type ButtonSize = 'regular' | 'compact';

export interface ButtonProps {
  /** Visual style of the button */
  variant?: ButtonVariant;
  /** Color scheme */
  color?: ButtonColor;
  /** Size / density */
  size?: ButtonSize;
  /** Button label */
  label: string;
  /** Optional leading icon element */
  leadingIcon?: React.ReactNode;
  /** Show icon only, no label */
  iconOnly?: boolean;
  /** Click handler */
  onClick?: () => void;
}

const colorStyles: Record<ButtonVariant, Record<ButtonColor, string>> = {
  filled: {
    primary:     'bg-[#5095EE] text-white hover:bg-[#2073DF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1961BE]',
    destructive: 'bg-[#C94D4D] text-white hover:bg-[#a83b3b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a2f2f]',
    neutral:     'bg-[#373C43] text-white hover:bg-[#22262b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22262b]',
    disabled:    'bg-[#F0F2F5] text-[#798393] cursor-not-allowed',
  },
  outlined: {
    primary:     'border border-[#5095EE] text-[#5095EE] hover:bg-[#5095EE]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1961BE]',
    destructive: 'border border-[#C94D4D] text-[#C94D4D] hover:bg-[#C94D4D]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a2f2f]',
    neutral:     'border border-[#515967] text-[#121417] hover:bg-[#515967]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#515967]',
    disabled:    'border border-[#CBD0D8] text-[#798393] cursor-not-allowed',
  },
  subtle: {
    primary:     'text-[#5095EE] hover:bg-[#5095EE]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1961BE]',
    destructive: 'text-[#C94D4D] hover:bg-[#C94D4D]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a2f2f]',
    neutral:     'text-[#121417] hover:bg-[#515967]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#515967]',
    disabled:    'text-[#798393] cursor-not-allowed',
  },
};

const sizeStyles: Record<ButtonSize, string> = {
  regular: 'h-11 py-3 px-4 rounded-lg gap-2 text-sm',
  compact: 'h-[26px] py-1 px-2 rounded gap-2 text-sm',
};

export const Button = ({
  variant = 'filled',
  color = 'primary',
  size = 'regular',
  label,
  leadingIcon,
  iconOnly = false,
  onClick,
}: ButtonProps) => {
  const isDisabled = color === 'disabled';

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      className={[
        'inline-flex items-center justify-center font-normal cursor-pointer transition-colors duration-150 outline-none',
        'font-[ABeeZee,system-ui,sans-serif]',
        sizeStyles[size],
        colorStyles[variant][color],
        iconOnly ? 'aspect-square px-0' : '',
      ].filter(Boolean).join(' ')}
    >
      {leadingIcon && (
        <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center">
          {leadingIcon}
        </span>
      )}
      {!iconOnly && label}
    </button>
  );
};
