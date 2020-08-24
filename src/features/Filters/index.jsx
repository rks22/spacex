import React from "react";
import { Badge } from "../../ComponentLibrary/Badge";
import styles from "./filters.module.css";

export const FilterCategory = ({ filter = [], onClick }) => {
  return (
    <div>
      <div className={styles.title}>
        <span className={styles.text}>{filter.title}</span>
      </div>
      <div className={styles.filters}>
        {filter.values.length > 0 &&
          filter.values.map((value) => {
            const selected = filter.selected === value;
            return (
              <span
                key={value}
                onClick={() =>
                  !selected && onClick && onClick({ [filter.id]: value })
                }
                className={`${styles.filter}`}
              >
                <Badge
                  className={styles.badge}
                  type={selected ? "secondary" : "primary"}
                  value={value}
                />
              </span>
            );
          })}
      </div>
    </div>
  );
};

export const Filters = ({ filters, requestLaunches }) => {
  return (
    <div className={styles.filterContent}>
      <h3>Filters</h3>
      <section className={styles.filterCategories}>
        {filters.length > 0 &&
          filters.map((filter) => {
            return (
              <FilterCategory
                onClick={requestLaunches}
                key={filter.id}
                filter={filter}
              />
            );
          })}
      </section>
    </div>
  );
};
