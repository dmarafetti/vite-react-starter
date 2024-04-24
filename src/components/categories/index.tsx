import {memo} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChartSimple, faStar, faClock, faSortAlphaAsc} from '@fortawesome/free-solid-svg-icons';
import {IconProp} from "@fortawesome/fontawesome-svg-core";



export default function Categories () {

    return (

        <>

            <p>Filter by report type.</p>

            <div className="list-group report-type__list">

                <NavigateButtonRecent title={'Recently Used'} report={'recently-used'}/>

                <NavigateButtonAll title={'All'} report={'all'}/>

                <NavigateButtonFavs title={'Favorites'} report={'favs'}/>

                <NavigateButtonStats title={'Category 1'} report={'cat1'}/>

                <NavigateButtonStats title={'Category 2'} report={'cat2'}/>

                <NavigateButtonStats title={'Category 3'} report={'cat3'}/>

            </div>

        </>

    );
}


type NavigateButtonType = {

    report: string,
    title: string,
    iconClass?: IconProp,
    isFav?: boolean
}


const NavigateButton = memo( ({report, title, iconClass, isFav = false}: NavigateButtonType) => {

    /**
     * Location info
     */
    const location = useLocation();

    /**
     * Navigate programatically
     */
    const navigate = useNavigate();


    return (

        <button type="button" className={`list-group-item list-group-item-action ${location.pathname.endsWith(report) ? 'selected' : ''} ${isFav ? 'favorite' : ''}`} onClick={() => navigate(`/reports/${report}`, {state: {report}})}>
            <FontAwesomeIcon icon={iconClass!} /> {title}
        </button>

    );

}, (prev, next) => {

    return prev.report === next.report;

});


const NavigateButtonStats = (props: NavigateButtonType) => <NavigateButton iconClass={faChartSimple} {...props} />


const NavigateButtonFavs = (props: NavigateButtonType) => <NavigateButton iconClass={faStar} isFav={true} {...props} />


const NavigateButtonRecent = (props: NavigateButtonType) => <NavigateButton iconClass={faClock} {...props} />


const NavigateButtonAll = (props: NavigateButtonType) => <NavigateButton iconClass={faSortAlphaAsc} {...props} />
