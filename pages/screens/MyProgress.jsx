import { Box } from "@mui/material";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import ProgressBar from "../Components/ProgressBar";

const MyProgress = () => {
  const secondTempData = [{
    type:"goal",
    goal: 100,
    current: 50,
    title: "Learn 100 new Spanish words"
    
  }, {
    type:"no-goal",
    goal: 100,
    current: 52,
    title: "Learn 100 new Finnish words"
    
  },{
    goal: 100,
    current: 10,
    title: "Learn 100 new Swedish words"
    
  },]
  return (
    <div className={styles.container}>
      <Box
        sx={{ background: "rgb(0,0,0, 0.2)", height: "fit-content", width: "100%" }}
      >
        <div
          id={styles.goalBoxContainer}
        >
          {secondTempData.map((element, index) => {
            return <div id={styles.goalBox} key={index}><div>{element.title}</div> <ProgressBar/> {element.current}/{element.goal} </div>;
          })}
        </div>
      </Box>
    </div>
  );
};
export default MyProgress;
