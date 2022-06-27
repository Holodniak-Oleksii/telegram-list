import React, {useState} from 'react';
import chanels from "../json/telagas";
import ChanelItem from "./ChanelItem";
import styled from 'styled-components'
import ModalEdit from "./ModalEdit";
const GridItems = () => {
    const [open, setOpen] = useState(false)
    const handlerOpen = () =>{
        setOpen(true)
    }
    return (
        <>
            <GridChanels>
                {chanels.map((current, idx)=>(
                    <ChanelItem handlerOpen={handlerOpen}
                                key={idx}
                                path={current.img}
                                name={current.name}
                                description={current.description}
                    />
                    ))}
            </GridChanels>
            <ModalEdit open={open} setOpen={setOpen}/>
        </>
    );
};
const GridChanels = styled.div`
  width: 90%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-auto-rows: 320px;
  grid-row-gap: 30px;
`
export default GridItems;