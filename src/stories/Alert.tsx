import React from 'react';

export type AlertType =
  | 'primary' | 'secondary' | 'success' | 'danger'
  | 'warning' | 'info' | 'light' | 'dark';

export interface AlertProps {
  /** Bootstrap alert type */
  type?: AlertType;
  /** Alert message text */
  message: string;
  /** Show dismiss (×) button */
  dismissible?: boolean;
  /** Called when dismiss button is clicked */
  onDismiss?: () => void;
}

const alertStyles: Record<AlertType, string> = {
  primary:   'bg-[#cfe2ff] border-[#9ec5fe] text-[#052c65]',
  secondary: 'bg-[#e2e3e5] border-[#c4c8cb] text-[#2b2f32]',
  success:   'bg-[#d1e7dd] border-[#a3cfbb] text-[#0a3622]',
  danger:    'bg-[#f8d7da] border-[#f1aeb5] text-[#58151c]',
  warning:   'bg-[#fff3cd] border-[#ffe69c] text-[#664d03]',
  info:      'bg-[#cff4fc] border-[#9eeaf9] text-[#055160]',
  light:     'bg-[#fcfcfd] border-[#e9ecef] text-[#495057]',
  dark:      'bg-[#ced4da] border-[#adb5bd] text-[#495057]',
};

export const Alert = ({
  type = 'primary',
  message,
  dismissible = false,
  onDismiss,
}: AlertProps) => {
  return (
    <div
      role="alert"
      className={[
        'flex items-start justify-between gap-4 border rounded px-4 py-4',
        'font-[Roboto,system-ui,sans-serif] text-[16px] leading-6',
        alertStyles[type],
      ].join(' ')}
    >
      <span>{message}</span>
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Close"
          className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity text-inherit bg-transparent border-none cursor-pointer text-lg leading-none font-bold"
        >
          ×
        </button>
      )}
    </div>
  );
};
