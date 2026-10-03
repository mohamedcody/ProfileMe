sed -i "s/import { ReactNode }/import type { ReactNode }/g" src/components/ui/Button.tsx
sed -i "s/import { motion, HTMLMotionProps }/import { motion }\nimport type { HTMLMotionProps }/g" src/components/ui/Button.tsx
sed -i '/const baseStyles =/d' src/components/ui/Button.tsx
sed -i '/const variants = {/,/};/d' src/components/ui/Button.tsx
sed -i '/const sizes = {/,/};/d' src/components/ui/Button.tsx

sed -i "s/import { ReactNode }/import type { ReactNode }/g" src/components/ui/Card.tsx
sed -i "s/import { motion, HTMLMotionProps }/import { motion }\nimport type { HTMLMotionProps }/g" src/components/ui/Card.tsx

sed -i "s/import { InputHTMLAttributes, TextareaHTMLAttributes }/import type { InputHTMLAttributes, TextareaHTMLAttributes }/g" src/components/ui/Input.tsx

sed -i "s/import { ReactNode }/import type { ReactNode }/g" src/components/ui/PageWrapper.tsx
