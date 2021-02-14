import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { css } from "@emotion/css";

const Toggle = (props) => {
  const [on, setOn] = useState(Boolean(props.on));
  const [animateX, setAnimateX] = useState(0);

  const toggle = () => {
    setOn(!on);
  };

  useEffect(() => {
    setOn(Boolean(props.on));
  }, [props.on]);

  useEffect(() => {
    setAnimateX(on ? 40 : 0);
  }, [on]);

  return (
    <motion.span
      onClick={toggle}
      className={css`
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        padding: 2px;
        height: 50px;
        border-radius: 40px;
        width: 90px;
        background-color: gainsboro;
        transition: background-color 0.25s;
        ${on && "background-color: rgb(52, 199, 89);"}
      `}
    >
      <motion.span
        animate={{ x: animateX }}
        transition={{ duration: 0.3, type: "spring" }}
        className={css`
          box-sizing: border-box;
          background-color: #ffffff;
          display: flex;
          height: 46px;
          width: 46px;
          border-radius: 50%;
          transition: box-shadow 0.25s;
          ${on && "box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);"}
        `}
      />
    </motion.span>
  );
};

export default Toggle;
