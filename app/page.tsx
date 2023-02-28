"use client";

import { useEffect } from "react";
import { useAuthContext } from "./Store";
import styles from "./page.module.css";

export default function Home() {
  const { userId, setUserId } = useAuthContext();

  return <div className={styles.container}>Home Page userId: {userId}</div>;
}
