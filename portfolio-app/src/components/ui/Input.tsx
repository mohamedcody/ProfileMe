import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, className, ...props }: InputProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
      {label && <label style={{ fontSize: 'var(--text-sm)', color: 'var(--text-medium)' }}>{label}</label>}
      <input
        className={clsx("ui-input", className)}
        style={{
          width: '100%',
          padding: '16px 24px',
          backgroundColor: 'var(--bg-base)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--text-high)',
          fontSize: 'var(--text-body)',
          transition: 'all var(--transition-fast)',
          outline: 'none',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--accent-primary)';
          e.target.style.boxShadow = '0 0 0 1px var(--accent-primary)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'var(--border-subtle)';
          e.target.style.boxShadow = 'none';
        }}
        {...props}
      />
    </div>
  );
};

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = ({ label, className, ...props }: TextareaProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
      {label && <label style={{ fontSize: 'var(--text-sm)', color: 'var(--text-medium)' }}>{label}</label>}
      <textarea
        className={clsx("ui-input", className)}
        style={{
          width: '100%',
          padding: '16px 24px',
          backgroundColor: 'var(--bg-base)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--text-high)',
          fontSize: 'var(--text-body)',
          transition: 'all var(--transition-fast)',
          outline: 'none',
          minHeight: '150px',
          resize: 'vertical'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--accent-primary)';
          e.target.style.boxShadow = '0 0 0 1px var(--accent-primary)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'var(--border-subtle)';
          e.target.style.boxShadow = 'none';
        }}
        {...props}
      />
    </div>
  );
};
