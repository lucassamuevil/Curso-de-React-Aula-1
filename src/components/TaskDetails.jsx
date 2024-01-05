import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from "./Button";
import "./TaskDetails.css";

const TaskDetails = () => {
    const navigate = useNavigate();
    const { taskTitle } = useParams();
    const displayedTitle = taskTitle || "teste";

    return (  
        <>
            <div className="back-button-container">
                <Button onClick={() => navigate(-1)}> Voltar </Button>
            </div>
            <div className="task-details-container">
                <h3>{displayedTitle}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae,
                     a voluptatem natus soluta voluptas autem, cumque maxime, mollitia nostrum error 
                     ut dolores voluptatum accusantium quasi doloremque eos est voluptatibus.</p>
            </div>
        </>
    );
};
 
export default TaskDetails;
