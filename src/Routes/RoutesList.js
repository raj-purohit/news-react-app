import React from 'react';
import LazyLoader from '@loadable/component'

import { URL_DASHBOARD } from "Helpers/Paths";

export default  [
    {
        path        :   "/",
        exact       :   true,
        component   :   LazyLoader(() => import('Components/Dashboard/Dashboard'))
    }, {
        path        :   URL_DASHBOARD,
        exact       :   true,
        component   :   LazyLoader(() => import('Components/Dashboard/Dashboard')),
        name        : "Dashboard",
    } ,
]
