import React from 'react';
import styled from 'styled-components'
import TextInput from './elements/TextInput'
const ModalEdit = ({open, setOpen, form, setForm, editChanel, isEdit, addChanel}) => {
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
                    <option value="programing">Programing</option>
                    <option value="music">Music</option>
                    <option value="game">Game</option>
                </Select>
                <TextArea rows={5} name="description" value={form.description} onChange={changeHandler} placeholder="Введіть опис каналу" required/>
                <ButtonChange onClick={()=>{
                    if(isEdit !== null){
                        editChanel()
                    } else {
                        addChanel()
                    }
                }}>{isEdit !== null ?"Змінити":"Додати"}</ButtonChange>
            </FormModal>
        </div>
    );
};

const FormModal = styled.div`
  width: 500px;
  background-color: white;
  border-radius: 20px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TextArea = styled.textarea`
  font-family: Arial, Sans-Serif, sans-serif;
  font-size: 18px;
  color: #383636;
  width: 100%;
  padding: 10px;
  outline: none;
  border: solid 1px #adadad;
  resize: none;
  border-radius: 8px;
  margin-bottom: 10px;
`
const ButtonChange = styled.button`
  padding: 10px 20px;
  background: linear-gradient(165deg, rgba(58,247,27,1) 0%, rgba(8,42,140,1) 100%);
  color: white;
  font-weight: 600;
  font-size: 16px;
  border-radius: 30px;
  border: 5px white solid;
  box-shadow: 0 0 3px 1px rgba(0,0,0,0.46);
  transition:  0.5s ease-out;
  &:hover{
    box-shadow: 0 0 8px 1px rgba(0,0,0,0.46);
    cursor: pointer;
  }
`
const Select = styled.select`
  font-family: Arial, Sans-Serif, sans-serif;
  font-size: 18px;
  margin-bottom: 10px;
  color: #383636;
  padding: 10px;
  width: 100%;
  outline:none;
  border: solid 1px #adadad;
  border-radius: 8px;
`

export default ModalEdit;