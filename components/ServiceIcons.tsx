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

/** House frame with wrench + hammer, green tool accents */
export function IconContracting(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="General contracting">
      {/* House frame */}
      <path
        d="M8 36 L8 26 L32 8 L56 26 L56 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 30 L14 54 L50 54 L50 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Hammer (green accent) */}
      <line x1="26" y1="36" x2="26" y2="50" stroke="#72B725" strokeWidth="2" strokeLinecap="round" />
      <rect x="22" y="33" width="8" height="5" rx="1" stroke="#72B725" strokeWidth="1.5" fill="none" />
      {/* Wrench */}
      <line x1="38" y1="36" x2="38" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="38" cy="34" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </IconWrapper>
  );
}

/** House outline with pencil/drafting element, green window */
export function IconCustomHome(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Custom homes">
      {/* House */}
      <path
        d="M6 30 L32 8 L58 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 26 L12 56 L52 56 L52 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Green window */}
      <rect x="22" y="34" width="10" height="10" stroke="#72B725" strokeWidth="1.5" fill="none" />
      <line x1="27" y1="34" x2="27" y2="44" stroke="#72B725" strokeWidth="1" />
      <line x1="22" y1="39" x2="32" y2="39" stroke="#72B725" strokeWidth="1" />
      {/* Door */}
      <rect x="36" y="40" width="8" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="42" cy="49" r="1" fill="currentColor" />
      {/* Pencil/drafting accent */}
      <line x1="50" y1="10" x2="56" y2="4" stroke="#72B725" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="48" y1="12" x2="54" y2="6" stroke="#72B725" strokeWidth="1.5" strokeLinecap="round" />
    </IconWrapper>
  );
}

/** Paint roller + trowel over house shape, green accent */
export function IconRenovation(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Renovations">
      {/* Simplified house silhouette */}
      <path
        d="M10 56 L10 28 L32 12 L54 28 L54 56"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Paint roller (green) */}
      <rect x="20" y="30" width="14" height="8" rx="2" stroke="#72B725" strokeWidth="2" fill="none" />
      <line x1="27" y1="38" x2="27" y2="46" stroke="#72B725" strokeWidth="2" strokeLinecap="round" />
      <line x1="27" y1="26" x2="27" y2="30" stroke="#72B725" strokeWidth="1.5" strokeLinecap="round" />
      {/* Trowel */}
      <line x1="40" y1="32" x2="40" y2="48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M36 30 L40 26 L44 30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </IconWrapper>
  );
}

/** House with green "+" circle */
export function IconAddition(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Additions">
      {/* House */}
      <path
        d="M6 32 L30 12 L54 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 28 L12 56 L48 56 L48 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Window */}
      <rect x="20" y="36" width="10" height="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Green plus circle */}
      <circle cx="48" cy="18" r="10" stroke="#72B725" strokeWidth="2" fill="none" />
      <line x1="48" y1="13" x2="48" y2="23" stroke="#72B725" strokeWidth="2" strokeLinecap="round" />
      <line x1="43" y1="18" x2="53" y2="18" stroke="#72B725" strokeWidth="2" strokeLinecap="round" />
    </IconWrapper>
  );
}

/** Roofline with shingle detail, green accent line */
export function IconRoofing(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Roofing">
      {/* Main roofline */}
      <path
        d="M4 36 L32 10 L60 36"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Shingle rows */}
      <path d="M12 32 L32 16 L52 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 28 L32 18 L46 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      {/* House walls */}
      <line x1="10" y1="36" x2="10" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="54" y1="36" x2="54" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="56" x2="54" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Green accent line along roof edge */}
      <path d="M8 38 L32 14 L56 38" stroke="#72B725" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </IconWrapper>
  );
}

/** Deck/pergola outline, green nature element */
export function IconDeck(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Decks and outdoor living">
      {/* Pergola top beams */}
      <line x1="6" y1="16" x2="58" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="20" x2="58" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Pergola posts */}
      <line x1="12" y1="16" x2="12" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="52" y1="16" x2="52" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Deck boards */}
      <line x1="6" y1="44" x2="58" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="48" x2="58" y2="48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="52" x2="58" y2="52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Deck supports */}
      <line x1="8" y1="44" x2="8" y2="58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="56" y1="44" x2="56" y2="58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Green nature element (leaf/plant) */}
      <path
        d="M32 30 Q36 22 44 24 Q42 32 34 34 Q32 34 32 30Z"
        stroke="#72B725"
        strokeWidth="1.5"
        fill="none"
      />
      <line x1="32" y1="30" x2="32" y2="42" stroke="#72B725" strokeWidth="1.5" strokeLinecap="round" />
    </IconWrapper>
  );
}

/** Multi-story building outline, green window accents */
export function IconCommercial(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Commercial construction">
      {/* Building outline */}
      <rect x="10" y="12" width="34" height="44" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Entrance */}
      <rect x="22" y="44" width="10" height="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Windows row 1 (green) */}
      <rect x="16" y="18" width="6" height="6" stroke="#72B725" strokeWidth="1.5" fill="none" />
      <rect x="26" y="18" width="6" height="6" stroke="#72B725" strokeWidth="1.5" fill="none" />
      <rect x="36" y="18" width="6" height="6" stroke="#72B725" strokeWidth="1.5" fill="none" />
      {/* Windows row 2 */}
      <rect x="16" y="30" width="6" height="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="26" y="30" width="6" height="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="36" y="30" width="6" height="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Side wing */}
      <rect x="44" y="28" width="14" height="28" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="48" y="34" width="6" height="6" stroke="#72B725" strokeWidth="1.5" fill="none" />
      <rect x="48" y="44" width="6" height="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </IconWrapper>
  );
}

/** Foundation/slab with trowel, green accent */
export function IconConcrete(props: IconProps): JSX.Element {
  return (
    <IconWrapper {...props} label="Site work and concrete">
      {/* Concrete slab (perspective) */}
      <path
        d="M4 38 L20 26 L60 26 L44 38 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Slab depth */}
      <path
        d="M4 38 L4 44 L44 44 L44 38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <line x1="44" y1="44" x2="60" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="60" y1="26" x2="60" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Surface texture lines */}
      <line x1="16" y1="30" x2="40" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="12" y1="34" x2="42" y2="34" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {/* Trowel (green) */}
      <line x1="30" y1="14" x2="30" y2="24" stroke="#72B725" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M24 12 L36 12 L34 16 L26 16 Z"
        stroke="#72B725"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </IconWrapper>
  );
}

/** Map icon ID to component */
const iconMap: Record<string, (props: IconProps) => JSX.Element> = {
  contracting: IconContracting,
  "custom-home": IconCustomHome,
  renovation: IconRenovation,
  addition: IconAddition,
  roofing: IconRoofing,
  deck: IconDeck,
  commercial: IconCommercial,
  concrete: IconConcrete,
};

interface ServiceIconProps extends IconProps {
  name: string;
}

export function ServiceIcon({
  name,
  size = 64,
  className = "",
}: ServiceIconProps): JSX.Element | null {
  const Component = iconMap[name];
  if (!Component) return null;
  return <Component size={size} className={className} />;
}
