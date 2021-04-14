import '../styles/index.scss';
import {init} from "./components";

if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}

init();