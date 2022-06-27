import React, {useState, useEffect} from 'react';
import ChanelItem from "./ChanelItem";
import styled from 'styled-components';
import ModalEdit from "./ModalEdit";
import axios from 'axios';

const GridItems = () => {
    const [open, setOpen] = useState(false)
    const [chanelArray, setChanel] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/chanel').then((res)=>{
            setChanel(res.data)
        })
    },[])
    
    const [isEdit, setEdit] = useState([])
    const [form, setForm] = useState({
        name: '', img: '', description: ''
    })
    const handlerOpen = () =>{setOpen(true)}
    const setEditChanel = (el) =>{
        setEdit(el)
        setForm({name: el.name, img: el.img, description: el.description}
    )}
    const deleteChanel = (el) =>{
        const arr = chanelArray.filter((item) => item !== el);
        setChanel(arr);
        axios.delete(`http://localhost:5000/chanel/${el.id}`)
    }
    const editChanel = () =>{
        chanelArray[chanelArray.indexOf(isEdit)] = form
        axios.patch(`http://localhost:5000/chanel/${isEdit.id}`,
            {id: Date.now(), name: form.name, img: form.img, description: form.description})
        setOpen(false)
    }
    const addChanel = () =>{
        const newOBJ = {
            id: Date.now(),
            name: form.name,
            favorite: false,
            img: form.img,
            description: form.description
        }
        const newItems = [...chanelArray, newOBJ]
        setChanel(newItems)
        axios.post('http://localhost:5000/chanel',newOBJ)
        setOpen(false)
    }
    return (
        <>
            <GridChanels>
                {chanelArray.map((current, idx)=>(
                    <div key={idx}>
                        <ChanelItem handlerOpen={handlerOpen}
                                    deleteChanel={deleteChanel}
                                    setEditChanel={setEditChanel}
                                    el={current}
                        />
                    </div>
                    ))}
                <AddChanel onClick={()=>{
                    setForm({name: '', img: '', description: ''})
                    setEdit(null)
                    handlerOpen()
                }}>
                    <img alt={'add'} src={'add.png'} width={'150px'}/>
                </AddChanel>
            </GridChanels>
            <ModalEdit
                open={open} isEdit={isEdit} addChanel={addChanel} setOpen={setOpen}
                form={form} setForm={setForm} editChanel={editChanel}/>
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
const AddChanel = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #625f5f;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(65, 62, 62, 0.11);
  }
`
export default GridItems;