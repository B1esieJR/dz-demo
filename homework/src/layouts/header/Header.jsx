import Bookmark from "../../assets/svgImage/Bookmark.jsx";
import './header.css'
import Authorization from "../../assets/svgImage/Authorization.jsx";
import Link from "../../components/Link/Link.jsx";
export default function Header() {
    return(
        <div className="header_container">
            <Bookmark />
            <div className="header_link_group">
                <Link
                    href={'/'}
                    text={'Поиск фильмов'}
                />
                <Link
                    href={'/'}
                    text={'Мои фильмы'}
                />
                <Link
                    href={'/'}
                    image={Authorization}
                    text={'Войти'}
                />
            </div>
        </div>
    )
}