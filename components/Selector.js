import { memo } from 'react';
import styles from '../styles/Selector.module.css'
//passport imports
import afghanistanPassport from '../public/afghanistan.jpg';
import albaniaPassport from '../public/albania.jpg'
import algeriaPassport from '../public/algeria.jpg';
import andorraPassport from '../public/andorra.jpg'
import angolaPassport from '../public/angola.jpg';
import anguillaPassport from '../public/anguilla.jpg'
//component imports
import SelectorButton from './SelectorButton';
import SelectorPassport from './SelectorPassport';

const Selector = ({ Drawer, openDrawer, setOpenDrawer, select, setSelect, selectArray, rerender, setRerender, setSelectArray }) => {
  return (
    <>
    <Drawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div className={styles.container} onClick={() => {
          setOpenDrawer(false)
          }}>
          <SelectorPassport setSelect={setSelect} select={select} image={afghanistanPassport} name={"afghanistan"} />
          <SelectorPassport setSelect={setSelect} select={select} image={albaniaPassport} name={"albania"} />
          <SelectorPassport setSelect={setSelect} select={select} image={algeriaPassport} name={"algeria"} />
          <SelectorPassport setSelect={setSelect} select={select} image={andorraPassport} name={"andorra"} />
          <SelectorPassport setSelect={setSelect} select={select} image={angolaPassport} name={"angola"} />
          <SelectorPassport setSelect={setSelect} select={select} image={anguillaPassport} name={"anguilla"} />
        </div>
    </Drawer>
      <div className={styles.container}>
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={0} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={1} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={2} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={3} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={4} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={5} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={6} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={7} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={8} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={9} />
      </div>
      <button onClick={() => {
          setSelectArray(selectArray = selectArray, selectArray[0].passport = undefined)
          setRerender(!rerender)
          console.log(selectArray)
        }}>1</button>
        <button onClick={() => {
          setSelectArray(selectArray = selectArray, selectArray[1].passport = undefined)
          setRerender(!rerender)
          console.log(selectArray)
        }}>2</button>
        <button onClick={() => {
          setSelectArray(selectArray = selectArray, selectArray[2].passport = undefined)
          setRerender(!rerender)
          console.log(selectArray)
        }}>3</button>
        <button onClick={() => {
          setSelectArray(selectArray = selectArray, selectArray[3].passport = undefined)
          setRerender(!rerender)
          console.log(selectArray)
        }}>4</button>
        <button onClick={() => {
          setSelectArray(selectArray = selectArray, selectArray[4].passport = undefined)
          setRerender(!rerender)
          console.log(selectArray)
        }}>5</button>
        <button onClick={() => {
          setSelectArray(selectArray = selectArray, selectArray[5].passport = undefined)
          setRerender(!rerender)
          console.log(selectArray)
        }}>6</button>
        <button onClick={() => {
          setSelectArray(selectArray = selectArray, selectArray[6].passport = undefined)
          setRerender(!rerender)
          console.log(selectArray)
        }}>7</button>
        <button onClick={() => {
          setSelectArray(selectArray = selectArray, selectArray[7].passport = undefined)
          setRerender(!rerender)
          console.log(selectArray)
        }}>8</button>
        <button onClick={() => {
          setSelectArray(selectArray = selectArray, selectArray[8].passport = undefined)
          setRerender(!rerender)
          console.log(selectArray)
        }}>9</button>
        <button onClick={() => {
          setSelectArray(selectArray = selectArray, selectArray[9].passport = undefined)
          setRerender(!rerender)
          console.log(selectArray)
        }}>10</button>
    </>
  )
}

export default memo(Selector)