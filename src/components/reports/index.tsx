import Navbar from "./navbar";
import {useQuery} from "@tanstack/react-query";
import {UserService} from "../../services";
import Avatar from "./avatar";
import IndeterminateCheckbox from "./row/indeterminateCheckbox";
import {useTranslation} from "react-i18next";

type ReportsPropsType = {

    type: string
}

export default function Reports ({type}: ReportsPropsType) {


    const {t} = useTranslation();

    const {data,isFetched, isFetching, refetch} = useQuery({

        queryKey: ['reports', type],

        queryFn: async () => await UserService.getAll()

    });



    const onFilter = async () => {

        await refetch();

    };



    return (

        <>

            <Navbar onFilter={onFilter} />

            {
                isFetching && (<p>loading...</p>)

            }

            {
                isFetched && (

                    <table className="table table-striped table-hover report-list">
                        <thead>
                            <tr>
                                <th scope="col"><IndeterminateCheckbox indeterminate={true} /></th>
                                <th scope="col">#</th>
                                <th scope="col">{t('FIRSTNAME')}</th>
                                <th scope="col">{t('LASTNAME')}</th>
                                <th scope="col">{t('CITY')}</th>
                                <th scope="col">{t('COUNTRY')}</th>
                                <th scope="col">{t('JOB_TITLE')}</th>
                                <th scope="col">{t('AVATAR')}</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data?.data.map((user, index) => {

                                    return (
                                        <tr key={index}>
                                            <td><IndeterminateCheckbox indeterminate={false} /></td>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.city}</td>
                                            <td>{user.country}</td>
                                            <td>{user.jobTitle}</td>
                                            <td>
                                                <Avatar url={user.avatar} title={`user-${user.id}-avatar`} />
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>

                )

            }

        </>

    )

};
