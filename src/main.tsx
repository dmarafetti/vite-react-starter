import React from 'react'
import ReactDOM from 'react-dom/client'
import {I18nextProvider} from "react-i18next";
import i18n from './locale';
import App from './App.tsx';
import './sass/styles.scss';
import {bootstrap} from "./commons/react/index.ts";


bootstrap('reporting', {attrs: ['VITE_NODE_DOCKER_HOST', 'VITE_NODE_DOCKER_PORT']}, (node, applicationParams, env) => {

    console.log(applicationParams, env);

    ReactDOM.createRoot(node).render(

        <React.StrictMode>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </React.StrictMode>,
    )

});







