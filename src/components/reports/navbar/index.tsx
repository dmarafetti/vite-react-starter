import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from "react-i18next";
import {useState} from "react";

export default function Navbar({onFilter}) {


    const {t} = useTranslation();


    const [showFavorites, setShowFavorites] = useState(false);


    const [query, setQuery] = useState('');


    const toggleFavs = (newState: boolean) => {

        if(showFavorites !== newState) {

            setShowFavorites(!showFavorites);

            onFilter({is_favorite: newState});

        }

    };

    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">

            <div className="container-fluid justify-content-end">

                <div className="btn-group me-3" role="group" aria-label="Basic radio toggle button group">
                    <button type="button" className={`btn btn-outline-secondary ${!showFavorites ? 'active' : ''}`} onClick={() => toggleFavs(false)}>All</button>
                    <button type="button" className={`btn btn-outline-secondary ${showFavorites ? 'active' : ''}`} onClick={() => toggleFavs(true)}>Favorites</button>
                </div>


                <form className="d-flex" role="search">

                    <div className="input-group">
                    <input type="text" className="form-control" placeholder={t('SEARCH_PH')}
                               aria-label="Input group example" aria-describedby="btnGroupAddon"
                                value={query} onChange={e => setQuery(e.target.value)}/>
                        <div className="input-group-text" id="btnGroupAddon">
                            <FontAwesomeIcon icon={faSearch}/>
                        </div>
                    </div>
                </form>

            </div>

        </nav>

    )

}
