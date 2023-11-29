import { Link } from 'react-router-dom'

import { Container, Form } from "./styles";

import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

export function New(){
  return(
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Notas</h1>
            <Link to="/">voltar</Link>
          </header>
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links uteis" >

          <NoteItem value="https://rocketseat.com.br"/>
          <NoteItem isNew placeholder="Novo link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
          <NoteItem value="react"/>
          <NoteItem isNew placeholder="Nova tag" />

            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>

    </Container>
  )
}