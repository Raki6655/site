document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.defaults({
		scroller: window,
		fastScrollEnd: true, // Ensures smooth end of the scroll
		refreshPriority: 1, // Adjusts the refresh priority for better performance
	});
	const lenis = new Lenis();
	lenis.on("scroll", ScrollTrigger.update);
	gsap.ticker.add((time) => {
		lenis.raf(time * 1000);
	});

	gsap.fromTo(
		".logoText",
		{
			y: -150,
			scale: 6,
		},
		{
			y: 0,
			scale: 1,
			duration: 1,
			scrollTrigger: {
				trigger: ".header",
				scrub: 2,
				end: "bottom 20%",
				invalidateOnRefresh: "true",
				ease: "expoScale(0,5,7,none)",
				scrub: true,
			},
		}
	);

	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: "ul",
			start: "top 20%",
			end: "bottom 30%",
			scrub: 2,
			ease: "ease",
			duration: 3,
		},
	});

	timeline
		.to(".slide1 span", {
			y: 220,
		})
		.to(".slide2 span", {
			y: 220,
		})
		.to(".slide3 span", {
			y: 220,
		})
		.to(".slide4 span", {
			y: 220,
		});

	ScrollTrigger.create({
		trigger: ".Hero .container .imageContainer",
		pin: true,
		scrub: 1,
		onUpdate: (self) => {
			const progress = self.progress;
			gsap.to(".image", {
				clipPath: `circle(${5 + progress * 95}% at ${64 - progress * 14}% ${
					31 + 19 * progress
				}%)`,
				// scale: 1.2 - 0.5 * progress,
			});
		},
	});
});

// gsap.set(".images img", {
// 	y: 500,
// });
const tl = gsap.timeline();
// tl.to(".first", {
// 	y: -1000,
// })
// 	.to(".second", {
// 		y: -1000,
// 	})
// 	.to(".third", {
// 		y: -1000,
// 	});

// ScrollTrigger.create({
// 	trigger: ".Services",
// 	end: "+=2000",
// 	pin: true,
// 	pinSpacing: false,
// 	animation: tl,
// 	markers: true,
// 	scrub: true,
// });

const h1 = document.querySelector(".Services  h1");
const sections = document.querySelectorAll(".images-wrapper .images");
const servicesSection = document.querySelector(".Services");
// Configure ScrollTrigger for each section
sections.forEach((section, index) => {
	ScrollTrigger.create({
		trigger: section,
		start: "top 30%", // When section hits center of viewport
		end: "bottom top",
		onEnter: () => updateTitle(index),
		onEnterBack: () => updateTitle(index),
	});
});
ScrollTrigger.create({
	trigger: servicesSection,
	start: "top 30%", // When Services section enters viewport
	end: "bottom top", // When Services section exits viewport
	onEnter: () => gsap.to(h1, { opacity: 1, duration: 0.5 }),
	onLeave: () => gsap.to(h1, { opacity: 0, duration: 0.5 }),
	onEnterBack: () => gsap.to(h1, { opacity: 1, duration: 0.5 }),
	onLeaveBack: () => gsap.to(h1, { opacity: 0, duration: 0.5 }),
});

gsap.to(".img-p-1", {
	y: -300,
	scrollTrigger: {
		trigger: ".first",
		start: "top 80%",
		end: "bottom 50%",

		scrub: true,
	},
});
gsap.to(".img-p-2", {
	y: -100,
	scrollTrigger: {
		trigger: ".first",
		start: "top 10%",
		end: "bottom 50%",

		scrub: true,
	},
});

gsap.to(".img-d-1", {
	y: -200,
	scrollTrigger: {
		trigger: ".second",
		start: "top 80%",
		end: "bottom 50%",

		scrub: true,
	},
});
gsap.to(".img-d-2", {
	y: -500,
	scrollTrigger: {
		trigger: ".second",
		start: "top 10%",
		end: "bottom 50%",

		scrub: true,
	},
});

gsap.to(".img-m-1", {
	y: -200,
	scrollTrigger: {
		trigger: ".third",
		start: "top 80%",
		end: "bottom 50%",

		scrub: true,
	},
});
gsap.to(".img-m-2", {
	y: -200,
	scrollTrigger: {
		trigger: ".third",
		start: "top 10%",
		end: "bottom 50%",

		scrub: true,
	},
});
gsap.to(".img-m-3", {
	y: 50,
	scrollTrigger: {
		trigger: ".third",
		start: "top 10%",
		end: "bottom 50%",

		scrub: true,
	},
});

// Update title based on active section
function updateTitle(index) {
	const titles = [
		"Portfolios that are sleek",
		"Dashboards Fully Customizable",
		"Smooth and Fastest Mobile Apps",
	];
	h1.textContent = titles[index] || "High Quality Jeans"; // Fallback
}

const listSlides = document.querySelectorAll(".imageCard");
console.log(listSlides);
listSlides.forEach((item, index) => {
	if (index !== listSlides.length - 1) {
		gsap.to(item, {
			scale: 0.9,
			opacity: 0,
			scrollTrigger: {
				trigger: item,
				start: "top 2%",

				end: "bottom 2%",
				scrub: true,
			},
		});
	}
});
