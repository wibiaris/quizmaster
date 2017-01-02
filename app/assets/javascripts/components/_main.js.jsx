var Route = ReactRouter.Route;

this.MyRoutes = (
  <Route handler={Main}>
    <Route name='home' handler={Main} path='/' />
  </Route>
);

var Main = React.createClass({
	render() {
		return (
			<div>
				<Header />
				<Body />
			</div>
		)
	}

});