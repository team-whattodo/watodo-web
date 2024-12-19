import { forwardRef } from "react";
import { Input } from "./style";

const StyledInput = forwardRef((props: any, ref) => {
  return (
    <Input {...props} ref={ref}>
      {props.children}
    </Input>
  );
});

export default StyledInput;
