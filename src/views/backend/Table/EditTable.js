import React , {useState} from 'react'
import {Container,Row,Col,Collapse} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'

const EditTable = () => {
   const data =[{
    "id": 1,
    "Products": "Gio Metric",
    "Quantity": 2,
    "Price": 459,
    "LineTotal": 999,
  },

  ]

  


    const [Add, setAdd] = useState(data)
    const [addFormData] = useState({
        id: "",
        Products:"",
        Quantity:"",
        Price:"",
        LineTotal:""
        
    })

    const handleAddFormChanges=(event)=>{
        event.preventDefault();
        const id = event.target.closest('tr').getAttribute('dataid')
        const tdElem = event.target.closest('tr').querySelectorAll('td')
        const obj = {
            id: Number(id)
        }
        Array.from(tdElem, (elem) => {
            if (elem.getAttribute('name') !== null) {
                obj[elem.getAttribute('name')] = elem.innerText
            }
            return null
        })

        const newArrIndex = Add.findIndex(item => {
            if (item.id === Number(id)) {
                return item
            }else{
                return null
            }
        })
        Add[newArrIndex] = obj
        setAdd(Add)
        
    };
    const handleAddFormSubmit = (event) => {
        event.preventDefault();
    
        let newContact = {
            id:Add.length+1,
            Products: addFormData.Products,
            Quantity: addFormData.Quantity,
            Price: addFormData.Price,
            LineTotal:addFormData.LineTotal,
            City: addFormData.City
        };
        // Add.push(newContact)
        const newContacts = [...Add, newContact];
        setAdd(newContacts);
        
    };
    const handleDeleteClick = (addId) => {
        const newContacts = [...Add];
        const index = Add.findIndex((adds) => adds.id === addId);
        newContacts.splice(index,1);
        setAdd(newContacts);
        
    }



  return(
        <>
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <div>
                            <Card.Body>
                                
                                <div id="table" className="table-editable">
                                    <span className="table-add float-right mb-3 mr-2">
                                    <button onClick={handleAddFormSubmit} className="btn btn-sm bg-primary"><i
                                    className="ri-add-fill"><span className="pl-1">Add New</span></i>
                                    </button>
                                    </span>
                                    <table className="table table-bordered table-responsive-md table-striped text-center">
                                    <thead>
                                        <tr>
                                            <th>Products or Service</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Line Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      {Add.map((adds,props) => (
                                              
                                            <tr key={props} dataid={adds.id}>
                                            
                                            <td name="Products"    contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.Products}</td>
                                            <td name="Quantity"     contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.Quantity}</td>
                                            <td name="Price" contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>INR {adds.Price}</td>
                                            <td name="LineTotal" contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>INR {adds.LineTotal}</td>
                                            <td>
                                                <span className="table-remove"><button onClick={() => handleDeleteClick(adds.id)} type="button"
                                                className="btn bg-danger-light btn-rounded btn-sm my-0">Remove</button></span>
                                            </td>
                                        </tr>
                                        
                                      ))}
                                    </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default EditTable;