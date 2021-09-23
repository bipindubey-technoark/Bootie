import logo from './logo.svg';
import './App.css';
import './assets/css/bootstrap.css';
import './assets/css/font-awesome.css';
import './assets/css/style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Homepage from './pages/homepage';
import theme from './lib/theme';
import Shop from './pages/shop';

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<BrowserRouter basename="/">
					<Switch>
						<Route path="/" component={Homepage} exact/>
						<Route path="/shop" component={Shop} />
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
}

export default App;
