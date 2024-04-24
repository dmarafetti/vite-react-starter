import Navbar from "./navbar";

type ReportsPropsType = {

    type: string
}

export default function Reports ({type}: ReportsPropsType) {


    return (

        <>

            <Navbar />

            {type}

        </>

    )

};
