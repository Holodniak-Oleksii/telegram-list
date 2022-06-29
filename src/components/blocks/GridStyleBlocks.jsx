import styled from 'styled-components';

const GridChannels = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-auto-rows: 320px;
  grid-row-gap: 30px;
`

const AddChannel = styled.div`
  width: 90%;
  height: 300px;
  margin: auto;
  box-sizing: border-box;
  margin-top: 16px;
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
export {AddChannel, GridChannels}