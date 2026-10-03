import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button = ({ children, variant = 'primary', size = 'md', className, ...props }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(
        "btn-core",
        `btn-${variant}`,
        `btn-size-${size}`,
        className
      )}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 500,
        borderRadius: 'var(--radius-full)',
        cursor: 'pointer',
        transition: 'all var(--transition-fast)',
        fontFamily: 'inherit',
        border: '1px solid transparent',
        ...props.style
      }}
      {...props}
    >
      <style>{`
        .btn-primary {
          background-color: var(--accent-primary);
          color: #fff;
          box-shadow: var(--shadow-btn);
        }
        .btn-primary:hover {
          background-color: #00d4ff;
          box-shadow: 0 6px 25px rgba(0, 180, 216, 0.6);
        }
        .btn-outline {
          background-color: transparent;
          color: var(--text-high);
          border-color: var(--border-subtle);
        }
        .btn-outline:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
        }
        .btn-ghost {
          background-color: transparent;
          color: var(--text-medium);
        }
        .btn-ghost:hover {
          color: var(--text-high);
          background-color: var(--surface-1);
        }
        .btn-size-sm { padding: 8px 16px; font-size: var(--text-sm); }
        .btn-size-md { padding: 12px 24px; font-size: var(--text-body); }
        .btn-size-lg { padding: 16px 32px; font-size: var(--text-body-lg); }
      `}</style>
      {children}
    </motion.button>
  );
};
