import React, {useState, useEffect} from 'react';
import ChannelItem from "./ChannelItem";
import {useSelector} from 'react-redux'
import ModalEdit from "./ModalEdit";
import {TextInput} from './blocks/ModalStyleBlocks'
import Loader from './Loader';
import CategoryChooser from './CategoryChooser'
import {AddChannel, GridChannels} from './blocks/GridStyleBlocks'
import {useDispatch} from 'react-redux'
import {axiosEditChannel, axiosChannel, axiosAddChannel} from '../storage/channelSlice'

const GridItems = () => {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("");
    const [isEdit, setEdit] = useState([])
    const [form, setForm] = useState({name: '', img: '', description: '', type: ''})
    const dispatch = useDispatch()
    const channelArray = useSelector(state => state.channel.channels)
    const loading = useSelector(state => state.channel.status)
    useEffect(()=>{
        dispatch(axiosChannel())
    },[dispatch])

    const handlerOpen = () =>{
        setOpen(true)
    }
    const addTelegram = () => {
        const newOBJ = {name: form.name, favorite: false, img: form.img, description: form.description, type: form.type ||'programing'}
        dispatch(axiosAddChannel(newOBJ))
        setOpen(false)
    }    
    const setEditChannel = (el) =>{
        setEdit(el)
        setForm({name: el.name, img: el.img, description: el.description, type: el.type}
    )}
    const editChannel = () =>{
        dispatch(axiosEditChannel({isEdit: isEdit, form: form}))
        setOpen(false)
    }
    
    const handleSearch= ()=>{
        return channelArray.filter( (channel)=>
            channel.name.toLowerCase().includes(search)
        )
    }
    if(loading === 'resolved'){
        return (
            <div style={{margin: '50px auto', width: '90%', display: 'flex', justifyContent: 'space-between'}}>
                <div style={{width: '15%'}}>
                    <CategoryChooser/>
                </div>
                <div style={{width: '80%'}}>
                    <TextInput type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Пошук..."/>
                    <GridChannels>
                    {handleSearch().map((current, idx)=>(
                        <div key={idx}>
                            <ChannelItem handlerOpen={handlerOpen}
                                        setEditChannel={setEditChannel}
                                        el={current}
                            />
                        </div>
                        ))}
                        <AddChannel onClick={()=>{
                            setForm({name: '', img: '', description: '', type: ''})
                            setEdit(null)
                            handlerOpen()
                        }}>
                            <img alt={'add'} src={'add.png'} width={'150px'}/>
                        </AddChannel>
                    </GridChannels>
                    <ModalEdit
                        open={open} isEdit={isEdit} setOpen={setOpen}
                        form={form} setForm={setForm} addTelegram={addTelegram}
                        editChannel={editChannel}
                        />
                </div>
            </div>
        );
    }else{
        return (
            <div style={{margin: '50px auto', width: '90%', display: 'flex', justifyContent: 'space-between'}}>
                <div style={{width: '15%'}}>
                    <CategoryChooser/>
                </div>
                <div style={{width: '80%'}}>
                    <Loader/>    
                </div>
            </div>
        );
    }
};

export default GridItems;