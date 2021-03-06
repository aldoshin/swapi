'use strict';

import './main.style.css';
import mainRoute from './main.route';
import MainController from './main.controller';

export default function mainView(ngModule) {
    ngModule
        .controller('MainController', MainController)
        .config(mainRoute);
}
