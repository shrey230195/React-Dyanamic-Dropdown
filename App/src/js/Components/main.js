/** 

 * @jsx React.DOM 
 */
 var React=require('react');
 
var State= React.createClass({
	
	some:function(e){
		var val = this.refs.name.getDOMNode().innerHTML;
		console.log(val);
		this.props.onUpdate(val);

	},
	render: function(){
		return(
				
				  <li ref="name" onClick={this.some}>{this.props.states}</li>

			);
	}
});
var City= React.createClass({
	some:function(e){
		var val = this.refs.name.getDOMNode().innerHTML;
		console.log(val);
		this.props.onUpdate(val);

	},
	render: function(){
		return(
				
				    <li ref="name" onClick={this.some}>{this.props.cities}</li>
				   

				  

			);
	}
});

var App = React.createClass({

	getInitialState: function(){
		return{
		stateValue :'----',
		cityValue :'----',
		Data:[
			{  id:0,
				state: '----',
				city:[
					{
						id:0,
						value:'--Select a State--'
					}
					
				]
			},
			{   id:1,
				state: 'Himanchal Pradesh',
				city:[
					{
						id:0,
						value:'Shimla'
					},
					{
						id:1,
						value:'Dharmshaala'
					},
					{
						id:2,
						value:'Kullu'
					},
					{
						id:3,
						value:'Manali'
					},
					{
						id:4,
						value:'Solan'
					},
					{
						id:5,
						value:'Mandi'
					},
					
				]
			},

			{   id:2,
				state: 'Uttar Pradesh',
				city:[
					{
						id:0,
						value:'Agra'
					},
					{
						id:1,
						value:'Allahbaad'
					},
					{
						id:2,
						value:'Lucknow'
					},
					{
						id:3,
						value:'Firozabaad'
					},
					{
						id:4,
						value:'Gorakhpur'
					},
					{
						id:5,
						value:'Noida'
					},
					{
						id:6,
						value:'Varanasi'
					},
					{
						id:7,
						value:'Kanpur'
					},
				]
			},
			{id:3,
				state: 'Rajasthan',
				city:[
					{
						id:0,
						value:'Jaipur'
					},
					{
						id:1,
						value:'Udaipur'
					},
					{
						id:2,
						value:'Raipur'
					},
					
				]
			},
			{id:4,
				state: 'Tamilnadu',
				city:[
					{
						id:0,
						value:'Chennai'
					},
					{
						id:1,
						value:'Madurai'
					},
					{
						id:2,
						value:'Salem'
					},
					{
						id:3,
						value:'Thanjavur '
					},
					{
						id:4,
						value:'Vellor'
					},
					{
						id:5,
						value:'Tirrupur'
					},
					
				]
			}
		]
		};
	},

	updateState:function(val){
		this.setState({
			stateValue:val,
			cityValue:'----'
		});
	},
	updateCity:function(val){
		this.setState({
			cityValue:val
		});


	},
	render: function(){
		var self = this;
		var stateName =  this.state.Data.map(function(a,key){


                return <State states={a.state} onUpdate={self.updateState}/>
            });
		var cityName =  this.state.Data.map(function(b,key){
				
				var I=b.city.map(function(s){
					//console.log(this.state.stateValue);

					if(b.state===self.state.stateValue){
					return <City cities={s.value} onUpdate={self.updateCity}/>
				}

				});
				return I;
                
            });

		return(
			<div className="container">
				<h1>ReactJS Dyanamic Dropdown</h1>
				<div className="dropdown">
					  <label>State</label>
					  <input type="text" data-toggle="dropdown" onChange={this.updateState} value={this.state.stateValue}/>
					  <span className="caret"></span>
					  <ul className="dropdown-menu">
					    {stateName}
					  </ul>
					  

					  </div>

				<div className="dropdown">
					  <label>City</label>
					  <input type="text" data-toggle="dropdown" onChange={this.updateCity} value={this.state.cityValue}/>
					  <span className="caret"></span>
					  <ul className="dropdown-menu">
					    {cityName}
					  </ul>
					  

				</div>	
				<div className="jumbotron">
					<h3>Your Selection </h3>
					<h4>State  : &nbsp; &nbsp; &nbsp;  {this.state.stateValue}</h4>
					<h4>City   :  &nbsp; &nbsp; &nbsp; {this.state.cityValue}</h4>  
				</div>
				<div className="footer"><h3> Shrey Dixit</h3> <a href="https://github.com/shrey230195/React-Dyanamic-Dropdown"><img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"/><h4>source code</h4> </a></div>
				
			</div>
			)
	}
})
React.renderComponent(<App/>,document.getElementById("app"));