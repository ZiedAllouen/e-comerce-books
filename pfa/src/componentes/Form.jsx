import React, { useState } from "react";
import axios from 'axios'
import { Container } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MapIcon from '@mui/icons-material/Map';
import "./style.css"
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from 'react-toastify';
import NavBar2 from './NavBar2'
import styled from 'styled-components'
const ContainerT =styled.div `
display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 10px;
  width: 10%;
padding:20px;

`
const Form= () => {

    const [msg,setMsg] = useState('');
    const [user, setUser] = useState({
        subject: "",
        description: "",
        email: ""
    });

    const { subject, description,email} = user;



    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 5000));

    const notify = () => toast.promise(

        resolveAfter3Sec,
        {
            pending: 'Sending .. ',
            success: 'Message sent 👌',
            error: 'Promise rejected 🤯'
        }
    )

    const onSubmit = async e => {
        await axios.post("http://localhost:5000/mail/",user)
            .then(response => setMsg(response.data.respMesg));
    };

    const ba3 = () =>{
        notify();
        onSubmit();
    }


    return (
        <><NavBar2/>
        <div className="content">
            
            <div className="container">
            <Container maxWidth="lg">
                <CssBaseline />
                <div class="row" >
                <div className="col-md-5 mr-auto">
                    <h2>Contact Us</h2>
                    <p className="mb-5">You can use this form to contact us!
                        Post a book to sell or exchange!
                        Report a bug!
    Report a disrespectful user in chat!
                    </p>
                    <ul className="list-unstyled pl-md-5 mb-5">
                        <li className="d-flex text-black mb-2">
                            <span className="mr-3"><MapIcon sx={{marginRight:'15px'}}/> </span>Rue Bni hassen
                            <br/> Jemmel
                        </li>
                        <li class="d-flex text-black mb-2"><span class="mr-3"><LocalPhoneIcon  sx={{marginRight:'15px'}}/></span> +2169299998</li>
                        <li class="d-flex text-black"><span class="mr-3"><MailOutlineIcon  sx={{marginRight:'15px'}}/></span> Tunisian@Readers.tn</li>
                    </ul>
                </div>

                    <div class="col-md-6">
                        <div className="row">
                            <div>
                                <TextField type="email"
                                           name="email"
                                           id="name"
                                           label="Email Address *"
                                           autoComplete="email"
                                           onChange={onInputChange}
                                           autoFocus
                                           value={email}
                                           inputProps={{ min: 0, style: { marginLeft: 25 } }}
                                           fullWidth
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 form-group">
                                <TextField type="text"
                                           name="subject"
                                           id="name"
                                           label="Subject *"
                                           onChange={onInputChange}
                                           value={subject}
                                           inputProps={{ min: 0, style: { marginLeft: 25 } }}
                                           
                                           fullWidth
                                />
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-md-12 form-group">
                                <TextField type="text"
                                          name="description"
                                          id="description"
                                          inputProps={{ min: 0, style: { marginLeft: 25 } }}
                                          label="Description *"
                                           multiline
                                           rows={8}
                                          onChange={onInputChange}
                                          value={description}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <Button type="submit" value="Send Message"
                                       onClick={ba3}
                                       style={{marginLeft:"0px"}} variant="contained" size="large">
                                    Send  message
                                </Button>



                            </div>
                        </div>

                    </div>
            </div>

<ContainerT>
<ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
/>
</ContainerT>
            </Container>
            </div>
        </div>
        </>
    );
};

export default Form;