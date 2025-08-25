import TitlePage from "./components/TitlePage/TitlePage";
import Button from "./components/Button/Button";
import Paragraph from "./components/Paragraph/Paragraph";
import './App.css'
import Header from "./layouts/header/Header.jsx";
import SearchInput from "./components/Input/SearchInput/SearchInput.jsx";
import SearchIcon from "./assets/svgImage/SearchIcon.jsx";
import {useState} from "react";
function App() {
    const [textValue, setTextValue] = useState('');
    const handleSearch = ()=>{
    setTextValue(textValue + '!');
    }
    const handleInputChange = (e) => {
        setTextValue(e.target.value);
    }
  return (
   <>
       <Header />
   <TitlePage
   text="Поиск"
   />
   <Paragraph
   text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
   />
   <div className='search-group'>
    <SearchInput
    onChange={handleInputChange}
    textValue={textValue}
    placeholder={'Введите название'}
    image={SearchIcon}
    />
   <Button
   text="Искать"
   onClick={handleSearch}/>
   </div>
   </>
  )
}

export default App
