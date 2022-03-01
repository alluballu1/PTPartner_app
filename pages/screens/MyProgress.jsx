import { Box } from "@mui/material";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const MyProgress = () => {
  return (
    <div className={styles.container} >
      <Box
        sx={{ background: "rgb(0,0,0, 0.2)", height: "100vh", width: "100%" }}
      >
        <div style={{paddingTop:60}}>
                  <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/hello-world">
              <a>Blog Post</a>
            </Link>
          </li>
        </ul>
        </div>

      </Box>
    </div>
  );
};
export default MyProgress;
