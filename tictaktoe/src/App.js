import React, { useState } from 'react';
import Icon from './Components/Icon';


// import react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import reactstrap
import { Button, Container, Card, CardBody, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";


const tiktacArray = new Array(9).fill("");

const App = () => {
    let [iscross, setIscross] = useState(true);
    let [WinMessage, setWinMessage] = useState("");

    const playAgain = () => {
        setIscross(true);
        setWinMessage("");
        tiktacArray.fill("");
    }
<<<<<<< HEAD
    const findWinner = () => {
        if (tiktacArray[0] === tiktacArray[1] && tiktacArray[0] === tiktacArray[2] && tiktacArray[0] !== "") {
            setWinMessage(tiktacArray[0] + " has won");
        }
        else if (tiktacArray[3] === tiktacArray[4] && tiktacArray[3] === tiktacArray[5] && tiktacArray[3] !== "") {
            setWinMessage(tiktacArray[3] + " has won");
        }
        else if (tiktacArray[6] === tiktacArray[7] && tiktacArray[6] === tiktacArray[8] && tiktacArray[6] !== "") {
            setWinMessage(tiktacArray[6] + " has won");
        }
        else if (tiktacArray[0] === tiktacArray[3] && tiktacArray[0] === tiktacArray[6] && tiktacArray[0] !== "") {
            setWinMessage(tiktacArray[0] + " has won");
        }
        else if (tiktacArray[1] === tiktacArray[4] && tiktacArray[1] === tiktacArray[7] && tiktacArray[1] !== "") {
            setWinMessage(tiktacArray[1] + " has won");
        }
        else if (tiktacArray[2] === tiktacArray[5] && tiktacArray[2] === tiktacArray[8] && tiktacArray[2] !== "") {
            setWinMessage(tiktacArray[2] + " has won");
        }
        else if (tiktacArray[0] === tiktacArray[4] && tiktacArray[0] === tiktacArray[8] && tiktacArray[0] !== "") {
            setWinMessage(tiktacArray[0] + " has won");
        }
        else if (tiktacArray[2] === tiktacArray[4] && tiktacArray[2] === tiktacArray[6] && tiktacArray[2] !== "") {
            setWinMessage(tiktacArray[2] + " has won");
        else{
             setWinMessage("Draw");
        }    
=======
     const findWinner = () => {
        if (tiktacArray[0] == tiktacArray[1] && tiktacArray[0] == tiktacArray[2] && tiktacArray[0] != "") {
            setWinMessage(tiktacArray[0] + "has won");
        }
        else if (tiktacArray[3] == tiktacArray[4] && tiktacArray[3] == tiktacArray[5] && tiktacArray[3] != "") {
            setWinMessage(tiktacArray[3] + "has won");
        }
        else if (tiktacArray[6] == tiktacArray[7] && tiktacArray[6] == tiktacArray[8] && tiktacArray[6] != "") {
            setWinMessage(tiktacArray[6] + "has won");
        }
        else if (tiktacArray[0] == tiktacArray[3] && tiktacArray[0] == tiktacArray[6] && tiktacArray[0] != "") {
            setWinMessage(tiktacArray[0] + "has won");
        }
        else if (tiktacArray[1] == tiktacArray[4] && tiktacArray[1] == tiktacArray[7] && tiktacArray[1] != "") {
            setWinMessage(tiktacArray[1] + "has won");
        }
        else if (tiktacArray[2] == tiktacArray[5] && tiktacArray[2] == tiktacArray[8] && tiktacArray[2] != "") {
            setWinMessage(tiktacArray[2] + "has won");
        }
        else if (tiktacArray[0] == tiktacArray[4] && tiktacArray[0] == tiktacArray[8] && tiktacArray[0] != "") {
            setWinMessage(tiktacArray[0] + "has won");
        }
        else if (tiktacArray[2] == tiktacArray[4] && tiktacArray[2] == tiktacArray[6] && tiktacArray[2] != "") {
            setWinMessage(tiktacArray[2] + "has won");
>>>>>>> 05e39e9d8fe954b7597da6c94455a301315ecdb8
        }


    }

    const changeItem = (index) => {
        if (WinMessage) {
            return toast("Game has already got over", { type: "success" });
        }
        if (tiktacArray[index] === "") {
            tiktacArray[index] = iscross ? "Cross" : "Circle";
            setIscross(!iscross);
        }
        else {
            return toast("This is already occupied ", { type: "error" });
        }
        findWinner();
    }

    return (

        <Container className="p-5 gamebox">
            <ToastContainer position="bottom-center"></ToastContainer>
            <Row>
                <Col md={6} className="offset-md-3"></Col>
                {
                    WinMessage ? (
                        <div>
                            <h1 className="text-center">
                                {WinMessage}
                            </h1>
                            <Button onClick={playAgain}>Play Again</Button>
                        </div>


                    ) : (
                        <div>
                            {/* <h1>{iscross ? "Cross's Turn" : "Circle's Turn"}</h1>  */}
                            <h1 className="text-center mb-5 " style={{color:"white"}}>TIC TAC TOE</h1>
                            <Button className="btn" onClick={() => setIscross(true)}>X</Button>
                            <Button className="btn" onClick={() => setIscross(false)}>O</Button>
                        </div>

                    )
                }



                <div className="grid">
                    {tiktacArray.map((value, index) => (
                        <div>
                            <Card onClick={() => changeItem(index)}>
                                <CardBody className="box">
                                    <Icon choice={tiktacArray[index]} />
                                </CardBody>
                            </Card>
                        </div>

                    ))}
                </div>
            </Row>
        </Container>

    )
}

export default App
