import React from 'react';
import Icon from './Components/Icon';


// import react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import reactstrap
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";

const tiktacArray = new Array(9).fill("");

const App = () => {
    let [iscross,setIscross] = useState(True);
    let [WinMessage,setWinMessage] = useState("");
     
    const playAgain=()=>{
        setIscross(True);
        setWinMessage("");
        tiktacArray.fill("");
    }
    const findWinner=()=>{

    }

    return (
        <>
            <Icon choice="circle"/>
        </>
    )
}

export default App