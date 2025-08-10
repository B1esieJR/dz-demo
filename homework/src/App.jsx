import TitlePage from "./components/TitlePage/TitlePage";
import Button from "./components/Button/Button";
import Paragraph from "./components/Paragraph/Paragraph";
import './App.css'
function App() {

  return (
   <>
   <TitlePage
   text="Поиск"
   />
   <Paragraph
   text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
   />
   <Button
   text="Искать"/>
   </>
  )
}

export default App
