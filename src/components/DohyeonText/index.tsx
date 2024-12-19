import { P } from "./style";

const DohyeonText = ({
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

export default DohyeonText;
