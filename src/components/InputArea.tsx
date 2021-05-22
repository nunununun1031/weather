import React from "react";
import Typography from "@material-ui/core/Typography";
import styles from "./InputArea.module.scss";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";

type PROPS = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  buttonClick: () => any; //   型分からないからany使ってます
};

const InputArea: React.FC<PROPS> = ({ input, setInput, buttonClick }) => {
  const onHandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.input_left}>
        <Typography>都市名</Typography>
        <TextField
          className={styles.text_area}
          variant="outlined"
          size="small"
          placeholder="（例）東京"
          value={input}
          onChange={onHandleInput}
        />
      </div>
      <div className={styles.input_right}>
        <Button
          className={styles.button}
          size="small"
          color="primary"
          variant="contained"
          onClick={buttonClick}
        >
          検索
        </Button>
      </div>
    </div>
  );
};

export default InputArea;
