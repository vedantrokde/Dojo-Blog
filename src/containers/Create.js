import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [body, setBody] = useState("");
	const [isPending, setIsPending] = useState(false);

	const handleAddBlog = (event) => {
		setIsPending(true);
		event.preventDefault();
		const blog = { title, author, body };

		fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		})
			.then((response) => {
				if (response.ok) {
					setAuthor("");
					setBody("");
					setTitle("");
					setIsPending(false);
          // navigate(-1);
          navigate('/');
				}
			})
			.catch((error) => {
				console.error(error);
				setIsPending(false);
			});
	};

	return (
		<div className="create">
			<h2>Add a New Blog</h2>
			<form onSubmit={handleAddBlog}>
				<label htmlFor="title">Blog title:</label>
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text"
					name="title"
					id="title"
					required
				/>
				<label htmlFor="author">Blog author:</label>
				<input
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
					type="text"
					name="author"
					id="author"
					required
				/>
				<label htmlFor="content">Blog content:</label>
				<textarea
					value={body}
					onChange={(e) => setBody(e.target.value)}
					name="content"
					id="content"
					required
				/>
				{isPending ? (
					<button disabled>Adding Blog...</button>
				) : (
					<button>Add Blog</button>
				)}
			</form>
		</div>
	);
};

export default Create;
