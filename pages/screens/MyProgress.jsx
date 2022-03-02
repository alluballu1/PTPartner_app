import { Box } from "@mui/material";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const MyProgress = () => {
  const tempData = [1, 2, 3, 4, 5];
  return (
    <div className={styles.container}>
      <Box
        sx={{ background: "rgb(0,0,0, 0.2)", height: "fit-content", width: "100%" }}
      >
        <div
          id={styles.goalBoxContainer}
        >
          {tempData.map((element, index) => {
            return <div id={styles.goalBox} key={index}>{element}</div>;
          })}
        </div>
      </Box>
    </div>
  );
};
export default MyProgress;
