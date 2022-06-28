import React, {useState, useEffect} from 'react';
import ChanelItem from "./ChanelItem";
import styled from 'styled-components';
import ModalEdit from "./ModalEdit";
import axios from 'axios';
import TextInput from './elements/TextInput'
import CategoryChooser from './CategoryChooser'
let elementsCounter = 0

const GridItems = () => {
    const [open, setOpen] = useState(false)
    const [chanelArray, setChanel] = useState([])
    const [search, setSearch] = useState("");
    useEffect(()=>{
        axios.get(process.env.REACT_APP_API_URL).then((res)=>{
            setChanel(res.data)
            elementsCounter = res.data.length
        })
    },[])
    
    const [isEdit, setEdit] = useState([])
    const [form, setForm] = useState({
        name: '', img: '', description: '', type: ''
    })
    const handlerOpen = () =>{setOpen(true)}
    const setEditChanel = (el) =>{
        setEdit(el)
        setForm({name: el.name, img: el.img, description: el.description, type: el.type}
    )}
    const deleteChanel = (el) =>{
        const arr = chanelArray.filter((item) => item !== el);
        setChanel(arr);
        elementsCounter = arr.length
        axios.delete(`${process.env.REACT_APP_API_URL}/${el.id}`)
    }
    const editChanel = () =>{
        chanelArray[chanelArray.indexOf(isEdit)] = form
        axios.patch(`${process.env.REACT_APP_API_URL}/${isEdit.id}`,
            {id: Date.now(), name: form.name, img: form.img, description: form.description, type: form.type})
        setOpen(false)
    }
    const handlerChooser = (category) => {
        if(category === 'all') return axios.get('http://localhost:5000/chanel').then((res)=>{setChanel(res.data)})
        if(category === 'random'){
            let random = Math.floor(Math.random() * elementsCounter+1)
            return axios.get(`${process.env.REACT_APP_API_URL}?id=${random}`).then((res)=>{
                setChanel(res.data)
            })
        }
        return axios.get(`${process.env.REACT_APP_API_URL}?type=${category}`).then((res)=>{setChanel(res.data)})
    }
    const handlesearch= ()=>{
        return chanelArray.filter( (chanel)=>
            chanel.name.toLowerCase().includes(search)
        )
    }
    const addChanel = () =>{
        const newOBJ = {
            id: elementsCounter+1,
            name: form.name,
            favorite: false,
            img: form.img,
            description: form.description,
            type: form.type||'programing'
        }
        const newItems = [...chanelArray, newOBJ]
        setChanel(newItems)
        elementsCounter = chanelArray.length
        axios.post(process.env.REACT_APP_API_URL,newOBJ)
        setOpen(false)
    }
    return (
        <div style={{margin: '50px auto', width: '90%', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: '15%'}}>
                <CategoryChooser handlerChooser={handlerChooser}/>
            </div>
            <div style={{width: '80%'}}>
                <TextInput type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Пошук..."/>
                <GridChanels>
                {handlesearch().map((current, idx)=>(
                    <div key={idx}>
                        <ChanelItem handlerOpen={handlerOpen}
                                    deleteChanel={deleteChanel}
                                    setEditChanel={setEditChanel}
                                    el={current}
                        />
                    </div>
                    ))}
                    <AddChanel onClick={()=>{
                        setForm({name: '', img: '', description: '', type: ''})
                        setEdit(null)
                        handlerOpen()
                    }}>
                        <img alt={'add'} src={'add.png'} width={'150px'}/>
                    </AddChanel>
                </GridChanels>
                <ModalEdit
                    open={open} isEdit={isEdit} addChanel={addChanel} setOpen={setOpen}
                    form={form} setForm={setForm} editChanel={editChanel}/>
            </div>
        </div>
    );
};

const GridChanels = styled.div`
  width: 100%;
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