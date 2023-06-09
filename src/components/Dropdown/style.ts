import styled from "styled-components";

export const getCustomStyles = (errorMessage?: string) => {
  return {
    control: (provided: any, state: any) => ({
      ...provided,
      background: "var(--color-secondary)",
      outline: "none",
      border: "1px solid var(--color-black)",
      boxShadow: "none",
      fontSize: "0.875rem",
      height: "3rem",
      minHeight: "3rem",
      borderRadius: "4px",
      padding: "0.5rem 0.25rem 0.5rem 0.5rem",
    }),
    loadingIndicator: (provided: any) => ({
      ...provided,
    }),
    menu: (provided: any) => ({
      ...provided,
      background: "transparent",
      border: "1px solid var(--dropdown-rest--border--color)",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.14)",
      borderRadius: "0.5rem",
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: 0,
      paddingRight: "0.5rem",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      whiteSpace: "break-spaces",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      cursor: "pointer",
      paddingTop: "0.75rem",
      paddingBottom: "0.75rem",
      fontWeight: 500,
      backgroundColor: "white",
      "&:hover": {
        color: "var(--link-rest--color)",
      },
    }),
    input: (provided: any) => ({
      ...provided,
      caretColor: "transparent",
    }),
  };
};

export const SField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
`;
