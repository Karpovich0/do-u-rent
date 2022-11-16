const $menu1 = $(".drop-menu--region");
const $menu2 = $(".drop-menu--tools");

const onMouseUp = (e) => {
	if (
		!$menu1.is(e.target) && // If the target of the click isn't the container...
		$menu1.has(e.target).length === 0
	) {
		// ... or a descendant of the container.
		$menu1.removeClass("drop-menu--open");
	}
};

$(".toggle1").on("click", () => {
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
	}
};

$(".toggle2").on("click", () => {
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
