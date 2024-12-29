import { ReactNode } from "react";
import { P } from "./style";

const DohyeonText = ({
  fontSize,
  color,
  children,
}: {
  fontSize: string;
  color: string;
  children: string | ReactNode;
}) => {
  return (
    <P $color={color} $fontSize={fontSize}>
      {children}
    </P>
  );
};

export default DohyeonText;
