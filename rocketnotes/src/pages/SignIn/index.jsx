import { useContext } from 'react';

import { FiMail, FiLock} from 'react-icons/fi'

import {Link} from 'react-router-dom'

import {MyContext} from '../../hooks/myContext'

import { Container, Form, Background } from "./styles";

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SignIn(){

  const data = useContext(MyContext)
  console.log("MEU CONTEXTO =>", data)
  return(
    <Container>
      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para salvar e gerenciar links úteis. </p>

        <h2>Faça seu login</h2>

        <Input
        placeholder="E-mail"
        type="text"
        icon={FiMail}
        
        />

        <Input
        placeholder="Senha"
        type="password"
        icon={FiLock}
        
        />

        <Button title="Entrar" />

        <Link to="/register">
          Criar conta
        </Link>
          
      </Form>
      <Background/>
    </Container>
  )
}