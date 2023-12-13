import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Container, Form } from "./styles";

import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';

import { api } from "../../services/api"

export function New(){
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag ])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote(){
    if(!title) {
      return alert("Digite um título para a nota.")
    }
    if(newLink) {
      return alert("Voce digitou um link para adicionar, mas nao clicou para adicionar. Clique no botao para adicionar ou deixe o espaco vazio.")
    }
    if(newTag) {
      return alert("Voce digitou uma tag para adicionar, mas nao clicou para adicionar. Clique no botao para adicionar ou deixe o espaco vazio")
    }
    await api.post("/notes", {
      title,
      description,
      tags,
      links
      
      
    })
      alert("Nota criada com sucesso")
      navigate("/")
  }



  return(
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Notas</h1>
            <ButtonText 
            title="Voltar"
            onClick={handleBack}
           />
          </header>
          <Input 
          placeholder="Título"
          onChange={e => setTitle(e.target.value)}
           />
          <Textarea 
          placeholder="Observações"
          onChange={e => setDescription(e.target.value)}
           />

          <Section title="Links uteis" >

          {
            links.map(( link, index) => (
              <NoteItem
              key={String(index)}
              value={link}
              onClick={() =>  handleRemoveLink(link) }
              />
            ))
          }
          <NoteItem
           isNew
           placeholder="Novo link"
           value={newLink}
           onChange={e => setNewLink(e.target.value)}
           onClick={handleAddLink}
           />
          </Section>

          <Section title="Marcadores">
            <div className="tags">

              {
                tags.map((tag,index) => (

                  <NoteItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

          <NoteItem 
          isNew 
          placeholder="Nova tag" 
          onChange={e => setNewTag(e.target.value)}
          value={newTag}
          onClick={handleAddTag}
          />

            </div>
          </Section>
          <Button 
          title="Salvar"
          onClick={handleNewNote} 
          />
        </Form>
      </main>

    </Container>
  )
}