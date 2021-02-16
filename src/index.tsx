import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { css } from "@emotion/css";

type ToggleProps = {
  on?: boolean 
}

const Toggle: React.FC<ToggleProps> = (props) => {
  const [on, setOn] = useState(props.on);
  const [animateX, setAnimateX] = useState(0);

  const toggle = () => {
    setOn(!on);
  };

  useEffect(() => {
    setOn(props.on);
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
        transition: background-color 0.3s;
        background-color: ${on ? "rgb(52, 199, 89)" : "gainsboro"};
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
          transition: box-shadow 0.3s;
          ${on && "box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);"}
        `}
      />
    </motion.span>
  );
};

Toggle.defaultProps = { on: false }

export default Toggle;
