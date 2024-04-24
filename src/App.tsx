import {useTranslation} from "react-i18next";
import {createHashRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider} from "react-router-dom";
import Categories from "./components/categories";
import Reports from "./components/reports";


export default function Router () {

    const router = createHashRouter(

           createRoutesFromElements(

               <Route path={'/*'} element={<Outlet />} >

                   <Route path={'reports'} element={<ReportsPanel />}>

                       <Route path={'recently-used'} element={<Reports type={'recently-used'}/>} />

                       <Route path={'all'} element={<Reports type={'all'}/>}/>

                       <Route path={'favs'} element={<Reports type={'favs'}/>}/>

                       <Route path={'cat1'} element={<Reports type={'cat1'} />}/>

                       <Route path={'cat2'} element={<Reports type={'cat2'} />}/>

                       <Route path={'cat3'} element={<Reports type={'cat3'} />}/>

                   </Route>


                   {/* fallback redirect */}

                   <Route path="*" element={<Navigate to="/reports" />} />

              </Route>

           )
    )

    return (

        <RouterProvider router={router} />

    );

}




function ReportsPanel () {

    const {t} = useTranslation();

    return (

        <>
            <div className="container-fluid p-4">

                <div className="row">

                    <div className="col-3">

                        <div className="card border border-primary card__report-type">

                            <div className="card-header bg-primary text-light">{t('CATEGORIES')}</div>

                            <div className="card-body">

                                <Categories/>

                            </div>

                        </div>

                    </div>

                    <div className="col-9">

                        <div className="card border border-primary">

                        <div className="card-header bg-primary text-light">{t('REPORTS')}</div>

                            <div className="card-body">

                                <Outlet />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    )
}


