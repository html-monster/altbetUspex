var ajaxAutoTradeClass = new function () {
	function onSuccessAjax(data) {
		data = data.split('_');

		console.log('Order sending finished: ' + data[0]);
	}
	function onErrorAjax(x, y, z) {
		console.dir('XMLHTTPRequest object: ', x);
		console.dir('textStatus: ',  y);
		console.dir('errorThrown: ',  z);
		defaultMethods.showError('The connection to the server has been lost. Please check your internet connection or try again.');
	}
	this.sendOrder = function(context, modification, price){
		var url,
				data = {},
				trader = $('.active_trader');

		data.Symbol = trader.attr('id').slice(7);
		data.Quantity = $('.active_trader .control .quantity.number').val();
		if($('#IsMirror').length)
			data.isMirror = $('#IsMirror').val() == 'False' ? 0 : 1;
		else
			data.isMirror = trader.find('.event_name').eq(0).hasClass('active') ? 0 : 1;

		if(context.hasClass('sell_mkt') || context.hasClass('buy_mkt')){
			data.OrderType = 'false';
			url = globalData.rootUrl + 'Order/MarketTrading';
		}
		else{
			data.OrderType = 'true';
			data.LimitPrice = price;
			url = $('.template .order_content.new form').attr('data-ajax-url');
		}

		if(modification == 'sell')
			data.Side = 'Sell';
		else
			data.Side = 'Buy';

		defaultMethods.sendAjaxRequest('POST', onSuccessAjax, onErrorAjax, url, null, data);
	};

	this.sendSpreadOrder = function(buyPrice, sellPrice){
		var url = $('.template .order_content.spread form').attr('data-ajax-url'),
				data = {},
				quantity = $('.active_trader .control .quantity.number').val(),
				trader = $('.active_trader');

		data.Symbol = trader.attr('id').slice(7);
		data.SellOrderQuantity = quantity;
		data.BuyOrderQuantity = quantity;
		data.SellOrderLimitPrice = sellPrice;
		data.BuyOrderLimitPrice = buyPrice;
		if($('#IsMirror').length)
			data.isMirror = $('#IsMirror').val() == 'False' ? 0 : 1;
		else
			data.isMirror = trader.find('.event_name').eq(0).hasClass('active') ? 0 : 1;

		// console.log(data);
		JSON.stringify(data);

		defaultMethods.sendAjaxRequest('POST', onSuccessAjax, onErrorAjax, url, null, data);
	}
};
