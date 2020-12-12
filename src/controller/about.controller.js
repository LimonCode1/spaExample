// importando views html
import { post } from 'jquery';
import about from '../views/about.html';

const getpost = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	return await response.json();
};

export default async () => {
	const divElement = document.createElement('div');
	divElement.innerHTML = about;

	let totalPublicaciones = divElement.querySelector('#total');
	const ulHtml = divElement.querySelector('#posts');

	const posts = await getpost();
	totalPublicaciones.innerHTML = posts.length;

	posts.forEach((posts) => {
		ulHtml.innerHTML += `
        <li class='list-group-item border-primary bg-dark text-white'>
            <h5>${posts.title}</h5>
            <p>${posts.body}</p>
        </li>`;
	});
	console.log(posts);
	return divElement;
};
