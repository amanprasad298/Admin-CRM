import React from 'react'
import {Link } from 'react-router-dom'
import { Dropdown ,OverlayTrigger,Tooltip} from 'react-bootstrap'

const TodoBoardCard = (props) =>{
        return(
             
            <div id={`draggable-item-${props.id}`}>
                <div className={`draggable-item todo-board-card ${props.className} `}>
                    <div className="item-body">
                        <div>
                            <h5>{props.title}</h5>
                            <p className="text-ellipsis short-1 mb-0 mt-1">{props.desc}</p>
                        </div>
                        <div>
                            <div className="rounded">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Download</Tooltip>} >
                                    <Link to="#">
                                        <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </Link>
                                </OverlayTrigger>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            )
}

export default TodoBoardCard;

