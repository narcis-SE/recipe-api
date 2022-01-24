import { useState, useEffect } from 'react';
import { Hits } from '../models/recipe-model';
import Modal from 'react-modal';
import { ResultExpanded } from './ResultExpanded';
import "./Result.css"
import Heart from "react-animated-heart"
import ListOfFavorites from './ListOfFavorites';

export interface RecipeProp {
  recipe: Hits;
  //onClose: ()=>void
  onFavorite: (recipe: Hits)=> void
}

export function Result({ recipe, onFavorite}: RecipeProp) {


  let [ openExpanded, setOpenExpanded ] = useState(false);
  
  function openModal() {
      setOpenExpanded(true);
  }
  function closeModal() {
      setOpenExpanded(false);
  }

  const [isClick, setClick] = useState(false);
  const likeButton = ()=>{
      onFavorite(recipe);
      setClick(!isClick)
  }

  // useEffect(()=> {Modal.setAppElement('#');})
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

//   function handleDeletePost(index:number){
//     setPosts(prev =>[...prev.slice(0,index), ...prev.slice(index+1)])
// }

return (
  <div className="Result">
    <h3>{recipe.recipe.label}</h3>

      <div className="image">
        <img src={recipe.recipe.image} alt="" onClick={openModal}/></div>
        <div className={isClick? "liked": "unliked"}>
            <div className= "heart" style={{textAlign:"center"}} >
                <Heart isClick={isClick} onClick={likeButton}>{isClick? "unlike":"like"}/</Heart>
            </div>
            <button onClick={likeButton}>{isClick? "Unlike":"Like"}</button>
        </div>

        

        {/* <button onClick={openModal}>View Details</button> */}
            <div id="Result"></div>

           {openExpanded && 

            <Modal
            isOpen={openExpanded}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
          
            <ResultExpanded recipe={recipe} onClose={closeModal}/>

        
            </Modal>
             }
              {/* <LikeButton onClick={()=>onFavorite(recipe) }/>  */}

        <p className="link"><a href={recipe.recipe.url} target="_blank">Link to Recipe</a></p>
      </div>
      )}
