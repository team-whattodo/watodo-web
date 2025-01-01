import { CancelButton, DeleteButton, SubmitButton } from "./style";

const StyledButton = ({
  disabled,
  onClick = () => {},
  styleType,
  children,
  type,
}: {
  disabled: boolean;
  onClick?: () => void;
  styleType: "DELETE" | "SUBMIT" | "CANCEL";
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
}) => {
  if (styleType === "SUBMIT")
    return (
      <SubmitButton onClick={onClick} disabled={disabled} type={type}>
        {children}
      </SubmitButton>
    );

  if (styleType === "CANCEL")
    return (
      <CancelButton onClick={onClick} $disabled={disabled}>
        {children}
      </CancelButton>
    );

  if (styleType === "DELETE")
    return (
      <DeleteButton onClick={onClick} $disabled={disabled}>
        {children}
      </DeleteButton>
    );
};

export default StyledButton;
