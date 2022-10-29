import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hoc/useFetch";

const BlogDetails = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const {
		data: blog,
		error,
		isPending,
	} = useFetch("http://localhost:8000/blogs/" + id);

	const handleDeleteBlog = () => {
		fetch("http://localhost:8000/blogs/" + id, {
			method: "DELETE",
		})
			.then((response) => {
				if (response.ok) {
					navigate("/");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div className="blog-details">
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={handleDeleteBlog}>Delete</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
