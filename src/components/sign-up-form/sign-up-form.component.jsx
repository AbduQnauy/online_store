import { async } from "@firebase/util";
import {useState} from "react"
import { useDispatch } from 'react-redux'
import Button from '../button/button.component'
import { signUpStart } from '../../store/user/user.action'
import FormInput from '../form-input/form-input.component'

import { SignUpConatiner } from './sign-up-form.styles'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = (props) => {

    const dispatch = useDispatch()

    const [formFields, setFormFields] = useState(defaultFormFields) 
    const {displayName, email, password, confirmPassword } = formFields

    const resetFormFields = () =>{
        setFormFields(defaultFormFields)
    }

   const handleSubmit = async (event) =>{
    event.preventDefault()
    if(password !== confirmPassword) {alert('passwords do not match'); return}

    try{
        dispatch(signUpStart(email, password, displayName))
        resetFormFields()
    }
    catch(error){
        if(error.code === 'auth/email-already-in-use'){
            alert('Can not create user, email already in use')
        }else{

            console.log('User creation encountered an error',error)
        }
    }

   }
  
  const changeHandler = ({target:{name, value}}) => setFormFields({...formFields, [name]: value})
  return (
    <SignUpConatiner>
        <h2>Do you have an account ?</h2>
      <span>Sign Up With Your Credentials</span>
      <form onSubmit={handleSubmit}>

        <FormInput label='DisplayName' type='text' required onChange={changeHandler} name='displayName' value={displayName}/>  

        <FormInput label='Email' type='email' required onChange={changeHandler} name='email' value={email}/>

        <FormInput label='Password' type='password' required onChange={changeHandler} name='password' value={password}/>

        <FormInput label='Confirm Password' type='password' required onChange={changeHandler} name='confirmPassword' value={confirmPassword}/>

        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpConatiner>
  )
};

export default SignUpForm;
