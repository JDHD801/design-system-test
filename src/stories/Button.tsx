import React from 'react';

export type ButtonType =
  | 'primary' | 'secondary' | 'danger' | 'success'
  | 'warning' | 'info' | 'dark' | 'light' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  /** Bootstrap button type */
  type?: ButtonType;
  /** Outline variant */
  outline?: boolean;
  /** Button size */
  size?: ButtonSize;
  /** Button label */
  label: string;
  /** Disabled state */
  disabled?: boolean;
  /** Optional leading icon */
  leadingIcon?: React.ReactNode;
  /** Show icon only, no label */
  iconOnly?: boolean;
  /** Click handler */
  onClick?: () => void;
}

const solidStyles: Record<ButtonType, string> = {
  primary:   'bg-[#0d6efd] border-[#0d6efd] text-white hover:bg-[#0b5ed7] hover:border-[#0a58ca]',
  secondary: 'bg-[#6c757d] border-[#6c757d] text-white hover:bg-[#5c636a] hover:border-[#565e64]',
  danger:    'bg-[#dc3545] border-[#dc3545] text-white hover:bg-[#bb2d3b] hover:border-[#b02a37]',
  success:   'bg-[#198754] border-[#198754] text-white hover:bg-[#157347] hover:border-[#146c43]',
  warning:   'bg-[#ffc107] border-[#ffc107] text-black hover:bg-[#ffca2c] hover:border-[#ffcd39]',
  info:      'bg-[#0dcaf0] border-[#0dcaf0] text-black hover:bg-[#31d2f2] hover:border-[#3dd5f3]',
  dark:      'bg-[#212529] border-[#212529] text-white hover:bg-[#1c1f23] hover:border-[#1a1e21]',
  light:     'bg-[#f8f9fa] border-[#f8f9fa] text-black hover:bg-[#d3d4d5] hover:border-[#c6c7c8]',
  link:      'bg-transparent border-transparent text-[#0d6efd] hover:text-[#0a58ca] underline',
};

const outlineStyles: Record<ButtonType, string> = {
  primary:   'bg-white border-[#0d6efd] text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white',
  secondary: 'bg-white border-[#6c757d] text-[#6c757d] hover:bg-[#6c757d] hover:text-white',
  danger:    'bg-white border-[#dc3545] text-[#dc3545] hover:bg-[#dc3545] hover:text-white',
  success:   'bg-white border-[#198754] text-[#198754] hover:bg-[#198754] hover:text-white',
  warning:   'bg-white border-[#ffc107] text-[#ffc107] hover:bg-[#ffc107] hover:text-black',
  info:      'bg-white border-[#0dcaf0] text-[#0dcaf0] hover:bg-[#0dcaf0] hover:text-black',
  dark:      'bg-white border-[#212529] text-[#212529] hover:bg-[#212529] hover:text-white',
  light:     'bg-white border-[#f8f9fa] text-[#212529] hover:bg-[#f8f9fa] hover:text-black',
  link:      'bg-transparent border-transparent text-[#0d6efd] hover:text-[#0a58ca] underline',
};

const sizeStyles: Record<ButtonSize, string> = {
  small:  'text-[14px] leading-[21px] py-1 px-2 rounded',
  medium: 'text-[16px] leading-[24px] py-1.5 px-3 rounded-md',
  large:  'text-[20px] leading-[30px] py-2 px-4 rounded-lg',
};

export const Button = ({
  type = 'primary',
  outline = false,
  size = 'medium',
  label,
  disabled = false,
  leadingIcon,
  iconOnly = false,
  onClick,
}: ButtonProps) => {
  const colorClass = outline ? outlineStyles[type] : solidStyles[type];

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={[
        'inline-flex items-center justify-center gap-2 border transition-colors duration-150 outline-none',
        'font-[Roboto,system-ui,sans-serif] font-normal',
        'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0d6efd]',
        sizeStyles[size],
        colorClass,
        disabled ? 'opacity-65 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
        iconOnly ? 'aspect-square px-0 justify-center' : '',
      ].filter(Boolean).join(' ')}
    >
      {leadingIcon && (
        <span className="flex-shrink-0 flex items-center justify-center">
          {leadingIcon}
        </span>
      )}
      {!iconOnly && label}
    </button>
  );
};
