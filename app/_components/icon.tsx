type IconProps = {
  /** Material Symbols name, e.g. "arrow_forward". Must be listed in `iconNames` in app/layout.tsx. */
  name: string;
  filled?: boolean;
  className?: string;
};

export function Icon({ name, filled = false, className = "" }: IconProps) {
  return (
    <span aria-hidden className={`icon ${filled ? "icon-filled" : ""} ${className}`}>
      {name}
    </span>
  );
}
