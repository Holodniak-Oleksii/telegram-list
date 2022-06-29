import styled from 'styled-components';

const ContainerCategories = styled.div`
  width: 100%;
  border-top-right-radius: 20px;
  overflow: hidden;
`
const CategoryItem = styled.div`
  cursor: pointer;
  font-style: italic;
  padding: 10px 5px;
  color: #222225;
  background-color: #f7f7f7;

  &:hover {
    color: #f8f8f8;
    background-color: #649bec;
  }
`
export  {ContainerCategories, CategoryItem}