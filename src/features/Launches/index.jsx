import React, { useEffect } from "react";
import { Card } from "../../ComponentLibrary/Card";
import styles from "./launches.module.css";

export const FlightNumber = ({ numb }) => <>{numb && `#${numb}`}</>;

export const Title = ({ name }) => {
  return <span>{name} </span>;
};

export const Description = ({ desc = [] }) => {
  return (
    desc &&
    desc.length > 0 &&
    desc.map((eachDesc) => {
      return (
        <div key={eachDesc.title} className={styles.desc}>
          <span className={styles.descTitle}>{`${eachDesc.title}: `}</span>
          <span className={styles.descValue}>{eachDesc.value}</span>
        </div>
      );
    })
  );
};

export const Details = ({ launch }) => {
  return (
    <div className={styles.details}>
      <span className={styles.title}>
        <Title name={launch.name} />
        <FlightNumber numb={launch.num} />
      </span>
      <Description desc={launch.description} />
    </div>
  );
};

export const Launches = ({ launches = [], requestLaunches }) => {
  useEffect(() => {
    !launches && requestLaunches();
  }, [launches,requestLaunches]);
  return (
    <>
      {launches &&
        launches.length > 0 &&
        launches.map((launch) => {
          return (
            <Card
              key={launch.num}
              imageSrc={launch.images.src}
              imageSrcSet = {launch.images.srcset}
              sizes = {launch.images.sizes}
              className={styles.launchCard}
            >
              <Details launch={launch} />
            </Card>
          );
        })}
    </>
  );
};
