import React , {useState} from 'react';
import styled from 'styled-components';

const CategoryChooser = ({handlerChooser}) => {
  const [isActive, setActive] = useState('1')

    return (
        <ConainerCategories>
            <CategoryItem style={{
                    backgroundColor : isActive === '1'? "#0d66e7" : "",
                    color : isActive === '1'? "#f8f8f8" : ""
                }} onClick={()=>{
                    setActive('1')
                    handlerChooser('all')
                }}>Всі</CategoryItem>
            <CategoryItem style={{
                backgroundColor : isActive === '2'? "#0d66e7" : "",
                color : isActive === '2'? "#f8f8f8" : ""
            }} onClick={()=>{
                setActive('2')
                handlerChooser('game')
            }}>Ігри</CategoryItem>
            <CategoryItem style={{
                backgroundColor : isActive === '3'? "#0d66e7" : "",
                color : isActive === '3'? "#f8f8f8" : ""
            }} onClick={()=>{
                setActive('3')
                handlerChooser('programing')
            }}>Програмування</CategoryItem>
            <CategoryItem style={{
                backgroundColor : isActive === '4'? "#0d66e7" : "",
                color : isActive === '4'? "#f8f8f8" : ""
            }} onClick={()=>{
                setActive('4')
                handlerChooser('music')
            }}>Музика</CategoryItem>
            <CategoryItem style={{
                backgroundColor : isActive === '5'? "#0d66e7" : "",
                color : isActive === '5'? "#f8f8f8" : ""
            }} onClick={()=>{
                setActive('5')
                handlerChooser('random')
            }}>Випадковий канал</CategoryItem>
        </ConainerCategories>
    );
};

const ConainerCategories = styled.div`
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
export default CategoryChooser;