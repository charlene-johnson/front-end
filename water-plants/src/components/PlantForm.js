import React, {useState} from "react";
import {Modal, ModalHeader,ModalBody} from "reactstrap"



const PlantForm = props => {
    const [plant, setPlant] = useState({
        id: Date.now(),
        nickname:"",
        species: "",
        h2oFrequency: ""
    })

    const changeHandler = (event) => {
        setPlant({
            ...plant,
            [event.target.name] : event.target.value
        })
    }
const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);  

    return(
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add Plant</ModalHeader>
            <ModalBody>
                <form onSubmit={event =>{
                    event.preventDefault()
                    props.addPlant(plant)

                    setPlant({id: Date.now(), nickname:"", species: "", h2oFrequency: ""})
                }} >
                    <div className="addPlant">
                        <h1>Add a New Plant</h1>
                    </div>
                    <label htmlFor="nickname">Nickname your Plant: </label>
                    <input
                        id="nickname"
                        type="text"
                        name="nickname"
                        placeholder="Enter your plant's nickname"
                        value={plant.nickname}
                        onChange={changeHandler}
                        />
                    <label htmlFor="species">Enter your Plant's Species: </label>
                    <input
                        id="species"
                        type="text"
                        name="species"
                        placeholder="Enter your plant's nickname"
                        value={plant.species}
                        onChange={changeHandler}
                        />
                    <label htmlFor="h2o">Select your Water Schedule</label>
                    <select
                        id="h20"
                        name="h20"
                        value={plant.h2oFrequency}
                        onChange={changeHandler}
                        >
                        <option value="" disabled={true}>Select Your Water Schedule</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Bi-Weekly">Bi-Weekly</option>
                        <option value="Monthly">Monthly</option>
                    </select> 
                    <button type="submit">Add Plant</button>
                </form>
            </ModalBody>
        </Modal>
    )
}

export default PlantForm;