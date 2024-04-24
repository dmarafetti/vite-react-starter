import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from "react-i18next";

export default function Navbar() {

    const {t} = useTranslation();


    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">

            <div className="container-fluid justify-content-end">

                <div className="btn-group me-3" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"
                           checked/>
                    <label className="btn btn-outline-secondary" htmlFor="btnradio1">Radio 1</label>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                    <label className="btn btn-outline-secondary" htmlFor="btnradio2">Radio 2</label>
                </div>


                <form className="d-flex" role="search">

                    <div className="input-group">
                        <input type="text" className="form-control" placeholder={t('SEARCH_PH')}
                               aria-label="Input group example" aria-describedby="btnGroupAddon"/>
                        <div className="input-group-text" id="btnGroupAddon">
                            <FontAwesomeIcon icon={faSearch}/>
                        </div>
                    </div>
                </form>

            </div>

        </nav>

    )

}
