import React , {useState} from 'react';
import {useDispatch} from 'react-redux'
import {axiosFilterChannel} from '../storage/channelSlice'
import {useSelector} from 'react-redux'
import {ContainerCategories, CategoryItem} from './blocks/CategoryStyleBlocks'

const CategoryChooser = () => {

    const [isActive, setActive] = useState('1')
    const dispatch = useDispatch()
    const channelArray = useSelector(state => state.channel.channels)
    const handlerChooser = (category) => {
        dispatch(axiosFilterChannel({category: category, channelArrayLength: channelArray.length }))
    }
  
    return (
        <ContainerCategories>
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
        </ContainerCategories>
    );
};

export default CategoryChooser;