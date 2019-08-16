import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider} from 'antd';

import store from './store';
import App from './App';
import './assets/css/index.scss';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');
const Root: React.FC = () => (
    <Provider store={store}>
        <Router>
            {/* 新版的antd用ConfigProvider配合moment使用国际化定义 */}
            <ConfigProvider locale={zhCN}>
                <App />
            </ConfigProvider>
        </Router>
    </Provider>
);
ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement);
