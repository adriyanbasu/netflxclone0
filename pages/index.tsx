import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <menu>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="https://pfgw64-3000.csb.app/">home</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </menu>
    </div>
  );
};

export default Home;
