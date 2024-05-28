import { ReactNode } from "react";

type FormWrapperProps = {
  children: ReactNode;
};

export default function FormWrapper({ children }: FormWrapperProps) {
  return (
    <form
      className="form-wrapper container"
      onSubmit={(e) => e.preventDefault()}
    >
      {children}
    </form>
  );
}
