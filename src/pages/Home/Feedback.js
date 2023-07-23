import React from 'react';
import { useState } from 'react';
import "./Home.css";
import Button from '../../components/Button/Button';

//firebase imports
import {db} from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export const Feedback = () => {
    const [name, setName] = useState();
    const [feedback, setFeedback] = useState();
    const userCollectionRef = collection(db, "feedbackData");

    const handleSubmit =()=>{
        addDoc(userCollectionRef, {
            name: name,
            feedback: feedback
        }).then(() => {
            (alert("Thanks for your feedback!"))
        })
    }

  return (
    <div className="feedback">
          <h1 className="subheading2" style={{textAlign: "left"}}>got any feedback?</h1>

          <div className="feedback-form-flex">
            <h3 className="body1" style={{textAlign: 'left'}}>This is a newly made website, so let me know of your thoughts. I’m always looking to grow and improve!</h3>

            <form className="feedback-form">
            <input className="feedback-form-name" 
            type={'text'} 
            id = "input1" 
            placeholder="name or alias" 
            onChange={(event)=>{
                setName(event.target.value);
            } }
            />
            <textarea className="feedback-form-thoughts"
            type={'text'} id="input2"
             placeholder="your thoughts/suggestions"
             onChange={(event)=>{
                setFeedback(event.target.value);
            } }
            />
            <div className="feedback-button">
            <Button 
                color1= {"#FFFFFF"}
                children = {"submit"}
                onClick={handleSubmit}
                size={"500"}
                fontSize= {"1.3rem"}
                ></Button>
            </div>
          </form>
          </div>
          </div>
  )
}
