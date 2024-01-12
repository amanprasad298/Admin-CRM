import React,{useState,useEffect} from 'react'
import { Container ,Row, Col,Button,ButtonGroup } from 'react-bootstrap'
import  Card from '../../../components/Card'
import jQuery  from 'jquery'
import {Link} from 'react-router-dom'

//dragula
import dragula from '../../../../node_modules/dragula/dist/dragula.min'


//TodoBoardCard
import TodoBoardCard from '../../../components/TodoBoardCard'
import TodoListCard from '../../../components/TodoListCard'

const $=jQuery

const Assets = () => {
    //state
    const [tab,SetTab] =useState(true)
    useEffect(
        () =>{
            const board =  $('.draggable-item');
            const selector = [];
    if(board.length > 0 )
    {
        for(var i = 0 ; i < board.length ; i++) {
            selector.push(document.querySelector('#draggable-item-'+i));
            selector.push(document.querySelector('#list-draggable-item-'+i));
        }
    }
    dragula( selector ).on('drop', function(el) {
        $(el).addClass(' animate__animated animate__rubberBand')
        setTimeout(function () { 
            $(el).removeClass(' animate__animated animate__rubberBand')
        }, 1000)
    });
        }
    )
return (
        <>
            <Container fluid>
            <Link to="/assets-add" className="btn btn-primary position-relative d-flex align-items-center justify-content-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add New Assets
                    </Link>
                <Row>
                    <Col md="12">
                        <Card>
                            <Card.Header className="border-bottom-0">
                                <Card.Header.Title>
                                    <h4 className="card-title">Assets</h4>
                                </Card.Header.Title>
                                
                                <Card.Header.Action>
                                    <ButtonGroup className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                        <Button type="button" variant={`outline-primary ${tab === true ? 'active' :'' }` } onClick={() =>SetTab(true)} data-toggle-extra="tab" data-target-extra="#board-content">Board</Button>
                                        <Button type="button" variant={`outline-primary ${ tab === false ? 'active' :''} `} onClick={() => SetTab(false)} data-toggle-extra="tab" data-target-extra="#list-content">List</Button>
                                    </ButtonGroup>
                                </Card.Header.Action>
                            </Card.Header>
                        </Card>
                    </Col>

                
                    

                    
                    <Col md="12">
                        <div id="board-content" className={`animate__animated animate__fadeIn ${tab === true ? 'active' :'' }`} data-toggle-extra="tab-content">
                            <div className="board-content">
                                <div className="board-item">
                                    <Card>
                                        <Card.Body>
                                            <h5 className="item-title">Videos</h5>
                                        </Card.Body>
                                    </Card>
                                    <div className="board-scrollbar board-scrollbar-0">
                                    
                                            
                                                <TodoBoardCard id="1" className="border-color-left-blue" title="Launch SpaceX" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                            
                                        
                                    
                                            <div>
                                                <TodoBoardCard id="2" className="border-color-left-red" title="New Updates" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                            </div>
                                        
                                    
                                            <div>
                                                <TodoBoardCard id="3" className="border-color-left-yellow" title="Night mode" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                            </div>
                                        
                                    
                                            <div>
                                                <TodoBoardCard id="4" className="border-color-left-green" title="Use-cases" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>    
                                            </div>
                                        
                                    </div>
                                </div>
                                <div className="board-item">
                                    <Card>
                                        <Card.Body>
                                            <h5 className="item-title">Images</h5>
                                        </Card.Body>
                                    </Card>
                                    <div className="board-scrollbar board-scrollbar-1">
                                    
                                            <div>
                                                <TodoBoardCard id="7" title="New Updates" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/> 
                                            </div>
                                        
                                    
                                            <div>
                                                <TodoBoardCard id="6" className="border-color-left-yellow" title="Launch SpaceX" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                            </div>
                                        
                                    
                                            <div>
                                                <TodoBoardCard id="9" className="border-color-left-red" title="Use-cases" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                            </div>
                                        
                                    
                                            <div>
                                                <TodoBoardCard id="8" className="border-color-left-blue" title="Night mode" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>    
                                            </div>
                                        
                                    </div>
                                </div>
                                <div className="board-item">
                                    <Card>
                                        <Card.Body>
                                            <h5 className="item-title">Documents</h5>
                                        </Card.Body>
                                    </Card>
                                    <div className="board-scrollbar board-scrollbar-2">
                                    
                                            <div>
                                                <TodoBoardCard id="13" className="border-color-left-red" title="Night mode" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/> 
                                            </div>
                                        
                                    
                                            <div>
                                                <TodoBoardCard id="11" className="border-color-left-blue" title="Launch SpaceX" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                            </div>
                                        
                                    
                                            <div>
                                                <TodoBoardCard id="14" className="border-color-left-green" title="Use-cases" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                            </div>
                                        
                                    
                                            <div>
                                                <TodoBoardCard id="12" className="border-color-left-red" title="New Updates" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                            </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div id="list-content" className={`animate__animated animate__fadeIn ${tab === false ? 'active' :'' }`} data-toggle-extra="tab-content">
                            <div className="list-content">
                                <div className="list-item">
                                    <Card>
                                        <Card.Body>
                                            <h5 className="item-title">Videos</h5>
                                        </Card.Body>
                                    </Card>
                                
                                        <div>
                                            <TodoListCard id="1" className="border-color-left-blue" title="Launch SpaceX" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                        </div>
                                     
                                
                                        <div>
                                            <TodoListCard id="2" className="border-color-left-red" title="New Updates" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                        </div>
                                    
                                
                                        <div>
                                            <TodoListCard id="3" className="border-color-left-yellow" title="Night mode" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                        </div>
                                    
                                
                                        <div>
                                            <TodoListCard id="4" className="border-color-left-green" title="Use-cases" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                        </div>
                                           
                                </div>
                                <div className="list-item">
                                    <Card>
                                        <Card.Body>
                                            <h5 className="item-title">Images</h5>
                                        </Card.Body>
                                    </Card>
                                
                                        <div>
                                            <TodoListCard id="6" className="border-color-left-blue" title="Launch SpaceX" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                        </div>
                                    
                                
                                        <div>
                                            <TodoListCard id="7" className="border-color-left-red" title="Launch SpaceX" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                        </div>
                                    
                                
                                        <div>
                                            <TodoListCard id="8" className="border-color-left-yellow" title="Night mode" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                        </div>
                                    
                                
                                        <div>
                                            <TodoListCard id="9" className="border-color-left-green" title="Use-cases" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                        </div>
                                    
                                </div>
                                <div className="list-item">
                                    <Card>
                                        <Card.Body>
                                            <h5 className="item-title">Documents</h5>
                                        </Card.Body>
                                    </Card>
                                
                                        <div>
                                            <TodoListCard id="11" className="border-color-left-blue" title="Launch SpaceX" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                        </div>
                                    
                                
                                        <div>
                                            <TodoListCard id="12" className="border-color-left-red" title="New Updates" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                        </div>
                                    
                                
                                        <div>
                                            <TodoListCard id="13" className="border-color-left-yellow" title="Night mode" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                        </div>
                                    
                                
                                        <div>
                                            <TodoListCard id="14" className="border-color-left-green" title="Use-cases" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                        </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
)
}

export default Assets