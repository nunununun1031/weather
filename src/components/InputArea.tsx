import React from "react";
import Typography from "@material-ui/core/Typography";
import styles from "./InputArea.module.scss";
import { Button, TextField } from "@material-ui/core";

const InputArea = () => {
  return (
    <div className={styles.root}>
      <div className={styles.input_left}>
        <Typography>都市名</Typography>
        <TextField
          className={styles.text_area}
          variant="outlined"
          size="small"
          placeholder="（例）東京"
        />
      </div>
      <div className={styles.input_right}>
        <Button
          className={styles.button}
          size="small"
          color="primary"
          variant="contained"
        >
          検索
        </Button>
      </div>
    </div>
  );
};

export default InputArea;
