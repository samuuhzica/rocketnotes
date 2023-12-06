import { useAuth } from "../../hooks/auth"
import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header(){
  const { signOut } = useAuth()
  return (
    <Container>
      <Profile to="/profile">
        <img 
        src="https://github.com/samuuhzica.png" 
        alt="Foto do usuario" 
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Samuel Freitas</strong>
        </div>
      </Profile>
      <Logout>

        <RiShutDownLine onClick={signOut} />
      </Logout>

    </Container>
  )
}