'use strict';

import mainRoute from './main.route';

export default function mainView(ngModule) {
    ngModule
        .config(mainRoute);
}
