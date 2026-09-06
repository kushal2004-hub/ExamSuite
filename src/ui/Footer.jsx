import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-grey-0);
  border-top: 1px solid var(--color-grey-100);
  padding: 2rem 4.8rem;
  grid-column: 2 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Credits = styled.div`
  font-size: 1.2rem;
  color: var(--color-grey-500);
  & p:first-child {
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-grey-700);
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Credits>
        <p>
          Developed by 2022–2026 ISE Branch Students of MITM
        </p>
        <p>Copyright &copy; 2025 MITM. All rights reserved.</p>
      </Credits>
    </StyledFooter>
  );
}

export default Footer;