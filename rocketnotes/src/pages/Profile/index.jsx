import { useNavigate } from 'react-router-dom'
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api"

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import { Container, Form, Avatar} from './styles'

export function Profile(){
  const { user, updateProfile } = useAuth()

  const [name, setName ] = useState(user.name)
  const [email, setEmail ] = useState(user.email)
  const [oldPassword, setOldPassword ] = useState()
  const [newPassword, setNewPassword ] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

async function handleUpdate() {
  const updated = {
    name,
    email,
    password: newPassword,
    old_password: oldPassword,
  }

  const userUpdated = Object.assign( user, updated)

  await updateProfile({ user: userUpdated, avatarFile })
}

function handleChangeAvatar(event){
  const file = event.target.files[0]

  setAvatarFile(file)

  const imagePreview = URL.createObjectURL(file)
  setAvatar(imagePreview)


}
  return(
    <Container>
      <header>
        <button 
        type='button' 
        to="/"
        onClick={handleBack}>
          
          <FiArrowLeft/>
          </button>
      </header>

      <Form>

        <Avatar>
          <img 
          src={avatar} 
          alt="Foto usuario"
           />
           <label 
           htmlFor="avatar">
            <FiCamera/>
            <input
            id="avatar"
            type="file"
            onChange={handleChangeAvatar}
            />
           </label>
        </Avatar>
        <Input 
        placeholder="Nome"
        type="text"
        icon={FiUser}
        value={ name }
        onChange={e => setName(e.target.value)}
        />
        <Input 
        placeholder="Email"
        type="email"
        icon={FiMail}
        value={ email }
        onChange={e => setEmail(e.target.value)}

        />
        <Input 
        placeholder="Senha atual"
        type="password"
        icon={FiLock}
        onChange={e => setOldPassword(e.target.value)}

        />
        <Input 
        placeholder="Nova senha"
        type="password"
        icon={FiLock}
        onChange={e => setNewPassword(e.target.value)}

        />
        <Button
        title="Salvar"
        onClick={handleUpdate}
        />
          

      </Form>
    </Container>
  )
}