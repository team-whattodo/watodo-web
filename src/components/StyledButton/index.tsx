import { CancelButton, DeleteButton, SubmitButton } from "./style";

const StyledButton = ({
  disabled,
  onClick = () => {},
  type,
  children,
}: {
  disabled: boolean;
  onClick?: () => void;
  type: "DELETE" | "SUBMIT" | "CANCEL";
  children: string;
}) => {
  if (type === "SUBMIT")
    return (
      <SubmitButton onClick={onClick} disabled={disabled}>
        {children}
      </SubmitButton>
    );

  if (type === "CANCEL")
    return (
      <CancelButton onClick={onClick} disabled={disabled}>
        {children}
      </CancelButton>
    );

  if (type === "DELETE")
    return (
      <DeleteButton onClick={onClick} disabled={disabled}>
        {children}
      </DeleteButton>
    );
};

export default StyledButton;
