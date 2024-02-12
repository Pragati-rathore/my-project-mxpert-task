import React from 'react'
import Heading from '../Heading/Heading';
import "./TheBest.css"
import Button from '../Button/Button';

export default function TheBest() {
    const styles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap:"25px"


    };
  return (
    <div style={{backgroundColor:"#eceaea"}}>
        <div className='container-main' >
            <div className='best-sect'>
            <Heading sectionText="ONLY THE BEST" mainText="Fresh Ingredient, Tasty Meals" styleHd={styles}/>
            <div>
            <p  className='best-para'>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. 
                </p>
            </div>
            <div>
                <Button text="VIEW ITEM"/>
            </div>

        </div>

    </div>
    </div>
        
  )
}
