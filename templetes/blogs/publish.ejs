<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Post a Blog</title>
	<!-- Add Tailwind CSS stylesheet -->
	<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
	<div class="max-w-lg mx-auto py-12">
		<h1 class="text-3xl font-bold text-gray-900 mb-6 text-center">Post a Blog</h1>
		<form id="blog-form" class="bg-white rounded-lg overflow-hidden shadow-md p-6">
			<label for="title" class="block text-gray-700 font-bold mb-2">Title:</label>
			<input type="text" id="title" name="title" class="w-full px-4 py-2 border rounded-lg mb-4" required>
      <label for="category" class="block text-gray-700 font-bold mb-2">Category:</label>
			<input type="text" id="category" name="category" class="w-full px-4 py-2 border rounded-lg mb-4" required>
			<label for="content" class="block text-gray-700 font-bold mb-2">Content:</label>
			<textarea id="content" name="content" class="w-full px-4 py-2 border rounded-lg mb-4" rows="6" required></textarea>
			<label for="image" class="block text-gray-700 font-bold mb-2">Image:</label>
			<input type="file" id="image" name="image" class="w-full px-4 py-2 border rounded-lg mb-4" accept="image/*" required>
			<div class="text-center">
				<button type="submit" class="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">Submit</button>
			</div>
		</form>
	</div>
	<script>
		const form = document.getElementById("blog-form");
		form.addEventListener("submit", async (event) => {
			event.preventDefault();
			const title = document.getElementById("title").value;
			const content = document.getElementById("content").value;
			const ctg = document.getElementById("category").value;
			const fileInput = document.getElementById("image");
			const file = fileInput.files[0];
			const reader = new FileReader();
			reader.onload = async () => {
				const img = reader.result;
				const response = await fetch("/post", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ title, content, ctg, img })
				});
				if (response.ok) {
					form.reset();
					alert(response.toString());
					// location.href = `/${response.key}`;
				} else {
					alert("Error submitting blog post.");
				}
			};
			reader.readAsDataURL(file);
		});
	</script>
</body>
</html>
