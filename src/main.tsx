import React from 'react'
import ReactDOM from 'react-dom/client'
import {I18nextProvider} from "react-i18next";
import i18n from './locale';
import App from './App.tsx';
import './sass/styles.scss';
import {bootstrap} from "./commons/react/index.ts";
import axios from "axios";
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';


bootstrap('reporting', {attrs: ['VITE_NODE_DOCKER_HOST', 'VITE_NODE_DOCKER_PORT']}, (node, applicationParams, env) => {

    console.log(applicationParams, env);

    //
    // configure axios
    //

    axios.defaults.baseURL = `${env!.get('VITE_NODE_DOCKER_HOST')}:${env!.get('VITE_NODE_DOCKER_PORT')}/api/v1`;



    ReactDOM.createRoot(node).render(

        <React.StrictMode>
            <I18nextProvider i18n={i18n}>
                <QueryClientProvider client={new QueryClient()}>
                    <App />
                </QueryClientProvider>
            </I18nextProvider>
        </React.StrictMode>
    )

});







