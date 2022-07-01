import React from 'react';
import {axiosRemoveChannel, axiosFavoriteChannel} from '../storage/channelSlice'
import {useDispatch} from 'react-redux'
import {ChannelAction, ChannelDescription, ChannelName, ImgChannel, Channel} from './blocks/ChannelStyleBlocks'

const ChannelItem = ({ el, handlerOpen, setEditChannel}) => {
    const dispatch = useDispatch()
    return (
        <div style={{width: '100%', padding: '20px', position: 'relative'}}>
            <Channel>
                <ChannelAction>
                    <img alt={'delete'} src={'delete.png'} width={'40px'} onClick={()=>{dispatch(axiosRemoveChannel({id: el.id}))}}/>
                    <img alt={'edit'} src={'edit.webp'} width={'39px'}
                         onClick={()=>{
                            setEditChannel(el)
                            handlerOpen()
                         }}/>
                    <img alt={'like'}
                         onClick={()=>{dispatch(axiosFavoriteChannel(el))}}
                         style={{filter: !el.favorite ? 'grayscale(0.95)': 'grayscale(0)'}}
                         src={'love.png'} width={'40px'}/>
                </ChannelAction>
                <ImgChannel alt={'item'} src={el.img}/>
                <ChannelName>{el.name}</ChannelName>
                <ChannelDescription>
                    <p>{el.description}</p>
                </ChannelDescription>
            </Channel>
        </div>
    );
};

export default ChannelItem;