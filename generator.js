// alert("hello u r here")
//p-joke
// butt - btn 

const jokepara =document.getElementById("joke");
const btn = document.getElementById("click");
const url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let getJoke=()=>{
	jokepara.classList.remove("fade");
	fetch(url)
	.then(data=>data.json())
	.then(item=>{
		jokepara.textContent =`${item.joke}`;
		jokepara.classList.add("fade");
});
} 
btn.addEventListener("click" ,getJoke);
getJoke();