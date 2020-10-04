import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div``;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${(props) => props.theme.colors.white};

    margin: 0 10px;

    transition: opacity 0.3s;
    opacity: 0.4;

    &:hover {
      opacity: 0.8;
    }
  }

  .tag-filter-recurrent::after {
    content: "";
    width: 55px;
    display: block;
    margin: 0 auto;
    border-bottom: 10px solid ${(props) => props.theme.colors.success};
  }

  .tag-filter-eventual::after {
    content: "";
    width: 55px;
    display: block;
    margin: 0 auto;
    border-bottom: 10px solid ${(props) => props.theme.colors.warning};
  }

  .tag-actived {
    opacity: 1;
  }
`;
