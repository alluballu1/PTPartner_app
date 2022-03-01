import { Box } from "@mui/material";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import AppBar from "./Components/AppBar";
import MyProgress from "./screens/MyProgress";

export default function Home() {
  return (
    <>
      <MyProgress/>
    </>
  );
}
