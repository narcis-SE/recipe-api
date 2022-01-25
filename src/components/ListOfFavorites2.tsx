import React from 'react'
import { Hits } from "../models/recipe-model"
import Modal from 'react-modal'
import { useState } from "react"
import {ResultExpanded} from "./ResultExpanded"

interface Props {
    recipe: Hits
    onDelete: () => void;
}

function ListOfFavorites2({recipe, onDelete}:Props) {

    let [ openExpanded, setOpenExpanded ] = useState(false);
  
    function openModal() {
        setOpenExpanded(true);
    }
    function closeModal() {
        setOpenExpanded(false);
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    return (
        <div className="ListOfFavorites2">
            {openExpanded &&
                <Modal
                    isOpen={openExpanded}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <ResultExpanded recipe={recipe} onClose={closeModal} />


                </Modal>
            }
             <p onClick={openModal}>{recipe.recipe.label}</p>
             <a href={recipe.recipe.url}>Link to Recipe</a>
            <i className="material-icons" onClick={onDelete}>delete</i>
        </div>
    )
}

export default ListOfFavorites2
