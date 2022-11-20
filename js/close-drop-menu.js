const $body = $(".body");
const $menu1 = $(".drop-menu--region");
const $menu2 = $(".drop-menu--tools");
const $menu3 = $(".header__form");

const onMouseUp = (e) => {
	if (
		!$menu1.is(e.target) && // If the target of the click isn't the container...
		$menu1.has(e.target).length === 0
	) {
		// ... or a descendant of the container.
		$menu1.removeClass("drop-menu--open");
		$body.removeClass("body--lock");
	}
};

$(".toggle1").on("click", () => {
	$body.toggleClass("body--lock");
	$menu1
		.toggleClass("drop-menu--open")
		.promise()
		.done(() => {
			if ($menu1.hasClass("drop-menu--open")) {
				$(document).on("mouseup", onMouseUp); // Only listen for mouseup when menu is active...
			} else {
				$(document).off("mouseup", onMouseUp); // else remove listener.
			}
		});
});

const onMouseUp2 = (e) => {
	if (
		!$menu2.is(e.target) && // If the target of the click isn't the container...
		$menu2.has(e.target).length === 0
	) {
		// ... or a descendant of the container.
		$menu2.removeClass("drop-menu--open");
		$body.removeClass("body--lock");
	}
};

$(".toggle2").on("click", () => {
	$body.toggleClass("body--lock");
	$menu2
		.toggleClass("drop-menu--open")
		.promise()
		.done(() => {
			if ($menu2.hasClass("drop-menu--open")) {
				$(document).on("mouseup", onMouseUp2); // Only listen for mouseup when menu is active...
			} else {
				$(document).off("mouseup", onMouseUp2); // else remove listener.
			}
		});
});

const onMouseUp3 = (e) => {
	if (
		!$menu3.is(e.target) && // If the target of the click isn't the container...
		$menu3.has(e.target).length === 0
	) {
		// ... or a descendant of the container.
		$menu3.removeClass("header__form--open");
		$body.removeClass("body--lock");
	}
};

$(".header__search-button").on("click", () => {
	$body.toggleClass("body--lock");
	$menu3
		.toggleClass("header__form--open")
		.promise()
		.done(() => {
			if ($menu3.hasClass("header__form--open")) {
				$(document).on("mouseup", onMouseUp3); // Only listen for mouseup when menu is active...
			} else {
				$(document).off("mouseup", onMouseUp3); // else remove listener.
			}
		});
});
