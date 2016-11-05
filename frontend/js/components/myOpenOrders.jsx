'use strict';
const React = require('react');

const OpenOrderItem = React.createClass({
	render: function() {
		let data = this.props.data;
		let date = new Date(+data.Time.slice(6).slice(0, -2));
		let style = {marginLeft : 10};

		return(
				<tr className={(data.isMirror ? (data.Side ? 'buy' : 'sell') : (data.Side ? 'sell' : 'buy'))}
				id={data.ID}>
					<td className="title">
						{(data.isMirror ? data.Symbol.AwayName : data.Symbol.HomeName)}
					</td>
					<td>
						<span className="date">{`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`} | </span>
						<span className="time">{`${date.getHours() - 2}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`}</span>
					</td>
					<td>{(data.isMirror ? (data.Side ? 'Buy' : 'Sell') : (data.Side ? 'Sell' : 'Buy'))}</td>
					<td className="quantity">{data.Volume}</td>
					<td>{(data.isMirror ? Math.round10(1 - data.Price, -2) : data.Price)}</td>
					<td>
						<span className={`${(data.isMirror ? (data.Side ? 'buy' : 'sell') : (data.Side ? 'sell' : 'buy'))} last_price`}>
							{data.isMirror ? Math.round10(1 - data.Symbol.LastPrice, -2) : data.Symbol.LastPrice}
						</span>
					</td>
					<td className={data.isPosition ? 'pos' : ''}>{}</td>
					<td>
						<button className="edit btn wave">Edit</button>
						<button className="delete btn wave" style={style}>Cancel</button>
					</td>
				</tr>
		);
	}
});

const MyOpenOrdersApp = React.createClass({
	getInitialState: function() {
		return {
			data: positionControllerClass.filterData(this.props.data, this.props.id),
			id: this.props.id
		};
	},
	componentDidMount: function() {
		let self = this;
		window.ee.addListener('myOpenOrder.update', function(newData) {
			newData = positionControllerClass.filterData(newData, self.props.id);
			self.setState({data: newData});
		});
	},
	render: function() {
		let data = this.state.data;
		if (data.length) {
			return (
					<tbody className="filter_item active" id={this.state.id}>
						{
							data.map(function (item) {
								return <OpenOrderItem data={item} key={item.ID}/>
							})
						}
					</tbody>
			)
		}
		return (
				<tbody>{}</tbody>
		);
	}
});

module.exports = MyOpenOrdersApp;