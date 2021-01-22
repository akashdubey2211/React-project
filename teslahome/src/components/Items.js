import React from 'react'
import Button from "./Button"
import "./items.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Items = ({title,desc, desclink,backgroudImg, leftBtnText,leftBtnLink, rightBtnText,rightBtnLink , twoButtons,first}) => {
    return (
        <div className="items"  style={{
            backgroundImage:`url(${backgroudImg})`
        }}>  
            <div className="item_container">
                
                <div className="item_text">
                    <p>{title}</p>
                <div className="item_disc">
                    <p>{desc}</p>
                            </div>
                            </div>
                <div className="lowerItmes">
                <div className="items_button">
                    <Button imp='primary' text={leftBtnText} link={leftBtnLink}/>
                    {twoButtons &&(
                        <Button imp='secondary' text={rightBtnText} link={rightBtnLink}/>
                    )}

                            </div>
                            {first&&(
                                <div className="item_expand">
                                    <ExpandMoreIcon/>
                                </div> 
                            )}
                </div>
            </div>
        </div>
    )
}

export default Items;
