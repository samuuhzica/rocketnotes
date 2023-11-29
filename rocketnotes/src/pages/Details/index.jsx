import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tags";
import { ButtonText } from "../../components/ButtonText";

export function Details() {


  return(
    <Container>
     <Header/>
    <main>
      <Content>

   
     <ButtonText title="Excluir nota"/>

     <h1>
      Introdução ao React
     </h1>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur deserunt aspernatur sunt unde iste iure autem nesciunt laudantium? Totam dolores dolorum qui quos ab illum nam atque fugit officia!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic officiis voluptatum amet inventore error? Ut, magnam iusto ab, quisquam maiores minima id magni, odit ea cupiditate similique optio corporis laboriosam!
     </p>

     <Section title="Links úteis">
      <Links>
        <li><a href="#">https://rocketseat.com.br</a></li>
        <li><a href="#">https://rocketseat.com.br</a></li>
      </Links>
     </Section>
     <Section title="Marcadores">
      <Tag title="express"/>
      <Tag title="node"/>
     </Section>


     
     
      <Button title="Voltar"/>
      </Content>
    </main>


    </Container>
  )
}