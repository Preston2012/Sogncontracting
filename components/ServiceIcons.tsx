interface IconProps {
  size?: number;
  className?: string;
}

const defaultProps = {
  size: 64,
  className: "",
};

function IconWrapper({
  size = defaultProps.size,
  className = defaultProps.className,
  children,
  label,
}: IconProps & { children: React.ReactNode; label: string }): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={`${label} icon`}
    >
      {children}
    </svg>
  );
}

/** House with hammer — General Contracting */
export function IconContracting(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="General contracting">
      <path d="M10 34 L32 14 L54 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 30 L16 52 L48 52 L48 30" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="26" y="38" width="12" height="14" stroke="currentColor" strokeWidth="2" rx="1" />
      {/* Hammer — bold, clear */}
      <rect x="44" y="8" width="12" height="6" rx="1" fill="#72B725" />
      <line x1="48" y1="14" x2="48" y2="26" stroke="#72B725" strokeWidth="2.5" strokeLinecap="round" />
    </IconWrapper>
  );
}

/** Blueprint/floor plan — Custom Homes */
export function IconCustomHome(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Custom homes">
      {/* Blueprint sheet */}
      <rect x="10" y="10" width="34" height="44" rx="2" stroke="currentColor" strokeWidth="2.5" />
      {/* Floor plan lines inside */}
      <line x1="10" y1="28" x2="44" y2="28" stroke="currentColor" strokeWidth="2" />
      <line x1="28" y1="10" x2="28" y2="28" stroke="currentColor" strokeWidth="2" />
      <line x1="28" y1="38" x2="44" y2="38" stroke="currentColor" strokeWidth="2" />
      {/* Pencil — large diagonal */}
      <path d="M48 12 L54 12 L54 42 L51 48 L48 42 Z" stroke="#72B725" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <line x1="48" y1="38" x2="54" y2="38" stroke="#72B725" strokeWidth="2" />
    </IconWrapper>
  );
}

/** Paintbrush over house — Renovations */
export function IconRenovation(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Renovations">
      <path d="M8 36 L28 18 L48 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 32 L14 52 L42 52 L42 32" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Paintbrush — thick and readable */}
      <rect x="48" y="8" width="8" height="20" rx="2" stroke="#72B725" strokeWidth="2" fill="none" />
      <line x1="52" y1="28" x2="52" y2="38" stroke="#72B725" strokeWidth="3" strokeLinecap="round" />
      <line x1="48" y1="18" x2="56" y2="18" stroke="#72B725" strokeWidth="2" />
    </IconWrapper>
  );
}

/** House with bold plus — Additions */
export function IconAddition(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Additions">
      <path d="M8 34 L28 16 L48 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 30 L14 52 L42 52 L42 30" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="22" y="36" width="8" height="8" stroke="currentColor" strokeWidth="2" rx="1" />
      {/* Plus circle — large and bold */}
      <circle cx="50" cy="44" r="10" stroke="#72B725" strokeWidth="2.5" />
      <line x1="50" y1="38" x2="50" y2="50" stroke="#72B725" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="44" y1="44" x2="56" y2="44" stroke="#72B725" strokeWidth="2.5" strokeLinecap="round" />
    </IconWrapper>
  );
}

/** Bold roof with shingle pattern — Roofing */
export function IconRoofing(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Roofing">
      {/* Large bold roof */}
      <path d="M4 40 L32 10 L60 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Shingle row lines */}
      <line x1="14" y1="30" x2="50" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="35" x2="46" y2="35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* House walls */}
      <path d="M12 38 L12 56 L52 56 L52 38" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Bold chimney with cap */}
      <rect x="40" y="14" width="8" height="16" stroke="#72B725" strokeWidth="2.5" fill="none" />
      <line x1="38" y1="14" x2="50" y2="14" stroke="#72B725" strokeWidth="2.5" strokeLinecap="round" />
    </IconWrapper>
  );
}

/** Deck with railing — simplified and bold */
export function IconDeck(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Decks and outdoor living">
      {/* Top railing */}
      <line x1="6" y1="18" x2="58" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Railing posts */}
      <line x1="10" y1="18" x2="10" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="18" x2="32" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="54" y1="18" x2="54" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Deck platform */}
      <rect x="6" y="32" width="52" height="6" rx="1" stroke="currentColor" strokeWidth="2.5" />
      {/* Support legs */}
      <line x1="14" y1="38" x2="14" y2="54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="38" x2="50" y2="54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Deck boards */}
      <line x1="6" y1="44" x2="58" y2="44" stroke="currentColor" strokeWidth="2" />
      <line x1="6" y1="50" x2="58" y2="50" stroke="currentColor" strokeWidth="2" />
      {/* Green tree/leaf accent */}
      <circle cx="46" cy="10" r="5" fill="#72B725" opacity="0.8" />
      <line x1="46" y1="15" x2="46" y2="18" stroke="#72B725" strokeWidth="2" />
    </IconWrapper>
  );
}

/** Multi-story building — Commercial */
export function IconCommercial(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Commercial construction">
      {/* Main building */}
      <rect x="10" y="10" width="30" height="44" rx="1" stroke="currentColor" strokeWidth="2.5" />
      {/* Windows — 6x6, larger and clearer */}
      <rect x="16" y="16" width="6" height="6" fill="#72B725" rx="1" />
      <rect x="28" y="16" width="6" height="6" fill="#72B725" rx="1" />
      <rect x="16" y="28" width="6" height="6" fill="#72B725" rx="1" />
      <rect x="28" y="28" width="6" height="6" fill="#72B725" rx="1" />
      <rect x="16" y="40" width="6" height="6" fill="#72B725" rx="1" />
      <rect x="28" y="40" width="6" height="6" fill="#72B725" rx="1" />
      {/* Door */}
      <rect x="22" y="48" width="6" height="6" stroke="currentColor" strokeWidth="2" rx="1" />
      {/* Side wing */}
      <rect x="40" y="24" width="16" height="30" rx="1" stroke="currentColor" strokeWidth="2.5" />
      <rect x="44" y="30" width="6" height="6" fill="#72B725" rx="1" />
      <rect x="44" y="42" width="6" height="6" fill="#72B725" rx="1" />
    </IconWrapper>
  );
}

/** Concrete slab with trowel — bold version */
export function IconConcrete(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Site work and concrete">
      {/* 3D concrete slab */}
      <path d="M6 36 L18 26 L58 26 L58 46 L46 56 L6 56 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="58" y1="26" x2="46" y2="36" stroke="currentColor" strokeWidth="2" />
      <line x1="46" y1="36" x2="46" y2="56" stroke="currentColor" strokeWidth="2" />
      <line x1="6" y1="36" x2="46" y2="36" stroke="currentColor" strokeWidth="2" />
      {/* Trowel — larger, bolder */}
      <path d="M24 14 L38 8 L42 16 L28 22 Z" fill="#72B725" />
      <line x1="26" y1="18" x2="18" y2="28" stroke="#72B725" strokeWidth="3" strokeLinecap="round" />
    </IconWrapper>
  );
}

/** Toolbox with wrench — Repairs */
export function IconRepairs(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Repairs and maintenance">
      {/* Toolbox body */}
      <rect x="8" y="26" width="48" height="26" rx="2" stroke="currentColor" strokeWidth="2.5" />
      {/* Lid line */}
      <line x1="8" y1="36" x2="56" y2="36" stroke="currentColor" strokeWidth="2" />
      {/* Handle */}
      <path d="M22 26 L22 18 L42 18 L42 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Latch — centered, bold */}
      <rect x="27" y="30" width="10" height="10" rx="2" fill="#72B725" />
      {/* Wrench — repositioned inside viewbox */}
      <line x1="44" y1="14" x2="50" y2="8" stroke="#72B725" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="50" cy="8" r="4" stroke="#72B725" strokeWidth="2" fill="none" />
    </IconWrapper>
  );
}

/** Icon selector component */
export function ServiceIcon({
  name,
  size = 64,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}): JSX.Element {
  const props = { size, className };

  switch (name) {
    case "contracting":
      return <IconContracting {...props} />;
    case "custom-home":
      return <IconCustomHome {...props} />;
    case "renovation":
      return <IconRenovation {...props} />;
    case "addition":
      return <IconAddition {...props} />;
    case "roofing":
      return <IconRoofing {...props} />;
    case "deck":
      return <IconDeck {...props} />;
    case "commercial":
      return <IconCommercial {...props} />;
    case "concrete":
      return <IconConcrete {...props} />;
    case "repairs":
      return <IconRepairs {...props} />;
    default:
      return <IconContracting {...props} />;
  }
}
