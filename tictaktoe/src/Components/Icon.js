import React from 'react';
import { FaTimes, FaRegCircle, FaPen } from 'react-icons/fa';

const Icon = ({ choice }) => {
    
        switch (choice) {
        case "Cross":
            return <FaTimes className="icon"/>;
        case "Circle":
            return <FaRegCircle className="icon" />;
        default:
            return "";    

    }
    
}
export default Icon