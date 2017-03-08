/**
 * Created by FSX on 6/03/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
	Button
} from 'antd';

var App = React.createClass({

	render: function() {

		return (
			<div>
			<h1>Hey,this is a React and Antd IDE</h1>
            <div className="Antd">
			<Button type="danger" size="large">成功加载Antd组件</Button>
            </div>
			</div>
		)
	}
});

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);