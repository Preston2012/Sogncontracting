import { categories } from "@/config/projects";
import type { CategoryId } from "@/config/projects";
import styles from "./FilterBar.module.css";

interface FilterBarProps {
  active: CategoryId;
  onChange: (id: CategoryId) => void;
}

export function FilterBar({ active, onChange }: FilterBarProps): JSX.Element {
  return (
    <div className={styles.bar} role="group" aria-label="Filter projects by category">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`${styles.chip} ${active === cat.id ? styles.active : ""}`}
          onClick={() => onChange(cat.id)}
          aria-pressed={active === cat.id}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
