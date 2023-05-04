import {Container, Button ,Input,Grid,Textarea,Stack} from '@mantine/core';
import './App.css';
import Card from './components/Card';
import{useState} from "react";



const App= () => {
  const[title,setTitle]=useState("");
  const[paragraph,setParagraph]=useState("");
  const[list,setList]=useState([
      {
    id:1,
    title:"dağ 1",
  par:"explaination"},
  {
    id:2,
    title:"dağ 1",
  par:"explaination"},
  {id:3,
    
    title:"dağ 1",
  par:"explaination"},
  {id:4,
    title:"dağ 1",
  par:"explaination"},
  {id:5,
    title:"dağ 1",
  par:"explaination"},]);
 
  const click=() => {
    setTitle("");
    setParagraph("");

     setList([
      ...list,
     
      {
          id: 5,
          title,
          par:paragraph

     },]);
    
  };
return( 
  <Container>
   
<h1>Kart oluşturma programı</h1>
<Stack>
<Input.Wrapper label="Başlık">
  <Input  placeholder="Başlık yazınız" value={title} onChange={(e) => setTitle(e.target.value)}/>
</Input.Wrapper>
<Textarea placeholder="Paragraph  yazınız"   value={paragraph} onChange={(e) => setParagraph(e.target.value)}
label="Paragraph"/>


<Button variant="outline"  onClick={click}>Kart oluşturma </Button>
</Stack>
  <h2>Kartlar</h2>
  <Grid>
  {list.map (({par,title}, i) => (
     <Grid.Col span={4} key={`index ${i}`}>
      <Card par={par} title={title}  /></Grid.Col>

))}
  </Grid>
  </Container>
);
  };
  

export default App;
