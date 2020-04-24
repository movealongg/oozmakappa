
//RANDOM TESTIMONIAL
function randomtext() {
	let randomtxt = [
		'Joining Oozma Kappa is nothing like I expected, but everything that I was looking for.',
		'From the outside looking in, you can never understand it. From the inside looking out, you can never explain it.',
		'Dream big, never let anyone tell you you&#39;re not scary.',
		'We&#39;re a team. Nothing is more important than brotherhood.',
		'Every dream begins somewhere. Some are born to greatness, and some find greatness on their own.',
		'Scare big, dream bigger.',
		'We scare because we care.'
	];
return randomtxt[Math.floor((Math.random() * randomtxt.length))];
}
document.getElementById("quote").innerHTML = randomtext();

