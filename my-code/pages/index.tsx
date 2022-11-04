import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "./api/Header";
import Login from "./api/Login";
export default function Home() {
  return (
    <>
      <Header />
      <Login />
    </>
  );
}
