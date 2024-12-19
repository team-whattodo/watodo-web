import { P } from "./style";

const JuaText = ({
  fontSize,
  color,
  children,
}: {
  fontSize: string;
  color: string;
  children: string;
}) => {
  return (
    <P $color={color} $fontSize={fontSize}>
      {children}
    </P>
  );
};

export default JuaText;
