import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./containers/Create";
import BlogDetails from "./containers/BlogDetails";
import NotFound from "./containers/NotFound";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Routes>
						<Route exact="true" path="/" element={<Home />} />
						<Route path="/create" element={<Create />} />
						<Route path="/blogs/:id" element={<BlogDetails />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
