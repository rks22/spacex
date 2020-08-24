import React from "react";

import styles from "./LaunchesView.module.css";
import  {LaunchesContainer} from '../features/Launches/Container';
import  {FiltersContainer} from '../features/Filters/Container';

export const View = () => {
  
  return (
    <div className={`contentSpace ${styles.content}`}>
      <header>
        <h3 className={styles.title}>Spacex Lauch Programs</h3>
      </header>
      <section className={styles.view}>
        <aside className={styles.filters}>
          <FiltersContainer/>
        </aside>
        <main className={styles.launches}>
            <LaunchesContainer/>
        </main>
      </section>
      <footer className={styles.footer}>
        <p>
          <span className={styles.developedBy}>Developed by:</span>
          <span>Raghavendra ks</span>
        </p>
      </footer>
    </div>
  );
};
