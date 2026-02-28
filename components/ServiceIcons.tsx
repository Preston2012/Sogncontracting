interface IconProps {
  size?: number;
  className?: string;
}

function IconWrapper({
  size = 48,
  className = "",
  children,
  label,
}: IconProps & { children: React.ReactNode; label: string }): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={`${label} icon`}
      shapeRendering="crispEdges"
    >
      {children}
    </svg>
  );
}

/** House with hammer — General Contracting */
export function IconContracting(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="General contracting">
      <path d="M8 26 L24 12 L40 26" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 24 L12 40 L36 40 L36 24" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="20" y="30" width="8" height="10" stroke="currentColor" strokeWidth="2" />
      {/* Hammer */}
      <rect x="34" y="6" width="10" height="4" rx="1" fill="#72B725" />
      <line x1="38" y1="10" x2="38" y2="20" stroke="#72B725" strokeWidth="2" />
    </IconWrapper>
  );
}

/** Blueprint — Custom Homes */
export function IconCustomHome(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Custom homes">
      <rect x="6" y="6" width="26" height="36" stroke="currentColor" strokeWidth="2" />
      <line x1="6" y1="22" x2="32" y2="22" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="6" x2="20" y2="22" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="32" x2="32" y2="32" stroke="currentColor" strokeWidth="2" />
      {/* Pencil */}
      <rect x="36" y="8" width="6" height="26" stroke="#72B725" strokeWidth="2" fill="none" />
      <path d="M36 34 L38 40 L42 34" stroke="#72B725" strokeWidth="2" fill="none" />
      <line x1="36" y1="30" x2="42" y2="30" stroke="#72B725" strokeWidth="2" />
    </IconWrapper>
  );
}

/** Wrench + gear — Renovations */
export function IconRenovation(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Renovations">
      {/* Left hammer handle — bottom-left to upper-right */}
      <line x1="6" y1="42" x2="28" y2="12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      {/* Left hammer head */}
      <rect x="22" y="4" width="16" height="8" rx="2" fill="currentColor" />
      {/* Right pick handle — bottom-right to upper-left */}
      <line x1="42" y1="42" x2="20" y2="12" stroke="#72B725" strokeWidth="4" strokeLinecap="round" />
      {/* Right pick head */}
      <rect x="10" y="4" width="16" height="8" rx="2" fill="#72B725" />
    </IconWrapper>
  );
}

/** House with plus — Additions */
export function IconAddition(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Additions">
      <path d="M6 26 L22 12 L38 26" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M10 24 L10 40 L34 40 L34 24" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="18" y="30" width="6" height="6" stroke="currentColor" strokeWidth="2" />
      {/* Plus circle */}
      <circle cx="38" cy="34" r="8" stroke="#72B725" strokeWidth="2" fill="none" shapeRendering="geometricPrecision" />
      <line x1="38" y1="28" x2="38" y2="40" stroke="#72B725" strokeWidth="2" />
      <line x1="32" y1="34" x2="44" y2="34" stroke="#72B725" strokeWidth="2" />
    </IconWrapper>
  );
}

/** Roof with shield — Roofing */
export function IconRoofing(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Roofing">
      <path d="M4 30 L24 8 L44 30" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M10 28 L10 44 L38 44 L38 28" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="20" y="34" width="8" height="10" stroke="currentColor" strokeWidth="2" />
      {/* Shield */}
      <path d="M24 16 L30 18 L30 24 Q30 28 24 30 Q18 28 18 24 L18 18 Z" stroke="#72B725" strokeWidth="2" fill="none" shapeRendering="geometricPrecision" />
      <polyline points="20,22 22,26 28,20" stroke="#72B725" strokeWidth="2" fill="none" shapeRendering="geometricPrecision" />
    </IconWrapper>
  );
}

/** Deck with railing */
export function IconDeck(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Decks and outdoor living">
      <line x1="4" y1="14" x2="44" y2="14" stroke="currentColor" strokeWidth="2" />
      <line x1="8" y1="14" x2="8" y2="24" stroke="currentColor" strokeWidth="2" />
      <line x1="24" y1="14" x2="24" y2="24" stroke="currentColor" strokeWidth="2" />
      <line x1="40" y1="14" x2="40" y2="24" stroke="currentColor" strokeWidth="2" />
      <rect x="4" y="24" width="40" height="4" stroke="currentColor" strokeWidth="2" />
      <line x1="10" y1="28" x2="10" y2="42" stroke="currentColor" strokeWidth="2" />
      <line x1="38" y1="28" x2="38" y2="42" stroke="currentColor" strokeWidth="2" />
      <line x1="4" y1="34" x2="44" y2="34" stroke="currentColor" strokeWidth="2" />
      <line x1="4" y1="40" x2="44" y2="40" stroke="currentColor" strokeWidth="2" />
      {/* Tree */}
      <circle cx="36" cy="8" r="4" fill="#72B725" shapeRendering="geometricPrecision" />
      <line x1="36" y1="12" x2="36" y2="14" stroke="#72B725" strokeWidth="2" />
    </IconWrapper>
  );
}

/** Building — Commercial */
export function IconCommercial(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Commercial construction">
      <rect x="6" y="6" width="24" height="36" stroke="currentColor" strokeWidth="2" />
      <rect x="12" y="12" width="6" height="4" fill="#72B725" />
      <rect x="22" y="12" width="6" height="4" fill="#72B725" />
      <rect x="12" y="22" width="6" height="4" fill="#72B725" />
      <rect x="22" y="22" width="6" height="4" fill="#72B725" />
      <rect x="12" y="32" width="6" height="4" fill="#72B725" />
      <rect x="22" y="32" width="6" height="4" fill="#72B725" />
      <rect x="16" y="38" width="4" height="4" stroke="currentColor" strokeWidth="2" />
      <rect x="30" y="18" width="14" height="24" stroke="currentColor" strokeWidth="2" />
      <rect x="34" y="24" width="6" height="4" fill="#72B725" />
      <rect x="34" y="34" width="6" height="4" fill="#72B725" />
    </IconWrapper>
  );
}

/** Concrete slab */
export function IconConcrete(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Site work and concrete">
      <path d="M4 28 L14 20 L44 20 L44 36 L34 44 L4 44 Z" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="44" y1="20" x2="34" y2="28" stroke="currentColor" strokeWidth="2" />
      <line x1="34" y1="28" x2="34" y2="44" stroke="currentColor" strokeWidth="2" />
      <line x1="4" y1="28" x2="34" y2="28" stroke="currentColor" strokeWidth="2" />
      {/* Trowel */}
      <path d="M18 10 L30 6 L34 12 L22 16 Z" fill="#72B725" />
      <line x1="20" y1="14" x2="14" y2="22" stroke="#72B725" strokeWidth="2" />
    </IconWrapper>
  );
}

/** Toolbox — Repairs */
export function IconRepairs(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Repairs and maintenance">
      <rect x="4" y="20" width="40" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
      <line x1="4" y1="28" x2="44" y2="28" stroke="currentColor" strokeWidth="2" />
      <path d="M16 20 L16 14 L32 14 L32 20" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="20" y="24" width="8" height="8" rx="1" fill="#72B725" />
      {/* Wrench */}
      <line x1="34" y1="10" x2="40" y2="4" stroke="#72B725" strokeWidth="2" />
      <circle cx="40" cy="4" r="4" stroke="#72B725" strokeWidth="2" fill="none" shapeRendering="geometricPrecision" />
    </IconWrapper>
  );
}

/** Icon selector */
export function ServiceIcon({
  name,
  size = 48,
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
