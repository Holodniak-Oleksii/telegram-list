import React from 'react';
import {TextInput, Select, ButtonChange, TextArea, FormModal} from './blocks/ModalStyleBlocks'

const ModalEdit = ({open, setOpen, form, setForm, editChannel, addTelegram, isEdit}) => {
    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    return (
        <div className={'modal'} style={{display: !open ? 'none': 'flex'}}
             onClick={(e)=>{
                 if(e.target.getAttribute('class') === 'modal'){
                     setOpen(false)
                 }
             }}
        >
            <FormModal>
                <TextInput type="text" name="name" value={form.name} onChange={changeHandler} placeholder="Введіть ім'я каналу" required/>
                <TextInput type="text" name="img" value={form.img} onChange={changeHandler} placeholder="Вкажіть URL до зображення" required/>
                <Select value={form.type} name="type" onChange={changeHandler}>
                    <option value="programing">Програмування</option>
                    <option value="music">Музика</option>
                    <option value="game">Ігри</option>
                </Select>
                <TextArea rows={5} name="description" value={form.description} onChange={changeHandler} placeholder="Введіть опис каналу" required/>
                <ButtonChange onClick={()=>{
                    if(isEdit !== null){
                        editChannel()
                    } else {
                        addTelegram()
                    }
                }}>{isEdit !== null ?"Змінити":"Додати"}</ButtonChange>
            </FormModal>
        </div>
    );
};

export default ModalEdit;