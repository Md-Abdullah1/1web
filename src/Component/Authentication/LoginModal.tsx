import React from 'react'
import { ModalBody } from 'reactstrap'
import { FormSubmitProp } from '../../Types/Auth/AuthType'
import LoginForm from './LoginForm'

const LoginModal:React.FC<FormSubmitProp> = ({modal}) => {
  return (
    <ModalBody>
        <LoginForm/>
    </ModalBody>
  )
}

export default LoginModal