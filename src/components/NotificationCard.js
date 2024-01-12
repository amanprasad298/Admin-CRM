
import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import { Dropdown ,OverlayTrigger,Tooltip} from 'react-bootstrap'

const NotificationCard =(props) =>{


    return(
            <div id={`list-draggable-item-${props.id}`}>
                <div className={`draggable-item todo-list-card ${props.className}`}>
                    <div className="item-body">
                        <div>
                            <div class="custom-control custom-checkbox custom-control-inline mb-1">
                                <input type="checkbox" class="custom-control-input" id={props.id}/>
                                <label class="custom-control-label" for={props.id}><h5 className='ml-1'>{props.title}</h5></label>
                            </div>
                            <p> {props.desc} </p>
                            <div className="d-flex flex-row">
                                <p className='mr-2'><i class="fa-regular fa-clock"/>  {props.date}</p>
                                <p>{props.time}</p>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            )
}
export default NotificationCard

