<!DOCTYPE html>
<html lang="en">
<head>
    <title><%= title %> | Abdlmu'tii</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="image" property="og:image" content="<%= img %>">
  <meta name="theme-color" content="#9966ff" />
  <meta property="og:title" content="<%= title %>" />
<meta property="og:description" content="<%= desc %>" />
<meta name="description" property="og:description" content="<%= desc %>">
<meta property="og:image" content="<%= img %>" />
<meta property="og:url" content="https://abdlmutii.repl.co" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="<%= category %>" />
<meta property="og:article:author" content="Abdlmu'tii" />
    <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://kit.fontawesome.com/3000af0e50.js" crossorigin="anonymous"></script>
</head>
<body class='bg-white text-black'>
    <nav class="bg-black flex items-center justify-between flex-wrap py-4 px-6">
  <div class="flex items-center">
    <span class="text-gray-500 mr-2">/</span>
    <span class="text-white font-bold">Blogs</span>
  </div>
  <div class="flex items-center md:hidden">
    <button type="button" class="text-white hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="Toggle menu">
      <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z" clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>
  <div class="hidden md:block">
    <div class="ml-4 flex items-center">
      <a href="/" class="text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
      <a href="/resume" class="text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">Resume</a>
      <a href="/contact" class="text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
    </div>
  </div>
    </nav>

  <div class="flex bg-black text-white flex-col md:flex-row">
        <div class="md:w-1/2 p-4">
            <img src="<%= img %>" alt="Blog post image" class="w-full rounded-lg">
        </div>
        <div class="md:w-1/2 p-4 flex flex-col justify-center">
            <p class="text-sm font-medium"><%= category %></p>
            <h1 class="text-3xl font-bold mt-2"><%= title %></h1>
            <p class="text-base text-gray-400 font-medium mt-3 mb-2"><%= desc %></p>
        </div>
  </div>

  <div class="font-medium mx-6 text-base mt-4 md:mx-8">
   <%- content %>
  </div>
  <footer class="bg-black py-6 mt-4">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between flex-wrap">
      <div class="w-full md:w-1/4 mb-4 md:mb-0">
        <h2 class="text-lg font-medium text-white mb-2">Subscribe to our newsletter</h2>
        <form class="flex" id="subscribe-form">
          <input class="bg-gray-700 rounded-l-md py-2 px-4 w-full text-white" type="email" placeholder="Enter your email" id="email-input">
          <button class="bg-blue-600 rounded-r-md py-2 px-4 text-white" type="submit">Subscribe</button>
        </form>
      </div>
      <div class="w-full md:w-3/4 md:text-right">
        <a class="text-gray-400 hover:text-white mx-3" href="https://abdlmutii.repl.co">Portfolio</a>
        <a class="text-gray-400 hover:text-white mx-3" href="https://abdlmutii.repl.co/resume">Resumè</a>
        <a class="text-gray-400 hover:text-white mx-3" href="https://abdlmutii.repl.co/contact">Contact</a>
        <a class="text-gray-400 hover:text-white mx-3" href="https://oceans.abdlmutii.repl.co">Oceans</a>
        <a class="text-gray-400 hover:text-white mx-3" href="https://abdlmutii.repl.co/blogs">Blogs</a>
        <div class="mt-4">
          <a class="text-gray-400 hover:text-white mx-3" href="https://discord.gg/8UqPNbeYBv"><i class="fab fa-discord"></i></a>
          <a class="text-gray-400 hover:text-white mx-3" href="https://twitter.com/abdlmutii"><i class="fab fa-twitter"></i></a>
          <a class="text-gray-400 hover:text-white mx-3" href="mailto:abdlmutii@outlook.com"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>
  </div>
</footer>

<script>
  const form = document.getElementById('subscribe-form');
  const emailInput = document.getElementById('email-input');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const data = { email };

    fetch('/submail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        console.log('Subscription successful!');
      } else {
        console.error('Subscription failed.');
      }
    })
    .catch(error => {
      console.error(error);
    });
  });
</script>

</body>
  </html>
