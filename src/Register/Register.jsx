import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { AuthContext } from '../Providers/Authprovider';
import { getAuth, updateProfile } from "firebase/auth";
import "./Register.css";
const Register = () => {
    const {createUser,updateUserData} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                const auth = getAuth();
                    updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                    }).then(() => {
                    console.log("user updated successfully")
                    // ...
                    }).catch((error) => {
                    // An error occurred
                    // ...
                    });
                console.log(createdUser);
                setError('');
                event.target.reset();
                setSuccess('User has been created successfully');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }
    return (
       <div>
        <Header></Header>
         <Container className='custom-width mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        name="accept"
                        label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
                </Form.Group>
                <Button variant="secondary"  type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
                <Form.Text className="text-success">
                   {success}
                </Form.Text>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </Container>
        <Footer></Footer>
       </div>
    );
};

export default Register;