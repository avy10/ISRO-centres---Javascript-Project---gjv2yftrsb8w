/* function searchToggle(obj, evt) {
	var container = $(obj).closest(".search-wrapper");
	if (!container.hasClass("active")) {
		container.addClass("active");
		evt.preventDefault();
	} else if (
		container.hasClass("active") &&
		$(obj).closest(".input-holder").length == 0
	) {
		container.removeClass("active");
		// clear input
		container.find(".search-input").val("");
	}
}
 */
const infoDIVVA = document.querySelector(".info");

const btnsDIVVA = document.querySelector(".buttonsContainer");
const btns = document.getElementsByClassName("adi");
document.addEventListener("DOMContentLoaded", function () {
	const searchIcon = document.querySelector(".search-icon");
	const closeIcon = document.querySelector(".close");
	const searchInput = document.querySelector(".search-input");
	const searchWrapper = document.querySelector(".search-wrapper");

	searchIcon.addEventListener("click", function (event) {
		searchToggle(event);
		// const p = infoDIVVA.querySelector("p");
		// infoDIVVA.removeChild(p);
		infoDIVVA.querySelector("p").classList.add("hidden");
		btnsDIVVA.classList.remove("hidden");
	});

	closeIcon.addEventListener("click", function (event) {
		searchToggle(event);
		infoDIVVA.querySelector("p").classList.remove("hidden");
		btnsDIVVA.classList.add("hidden");

		inputBox.value = "";
		inputBox.blur();
		fetchData();
		stateBTN.classList.remove("searchActive");
		cityBTN.classList.remove("searchActive");
		centreBTN.classList.remove("searchActive");
	});

	function searchToggle(event) {
		if (!searchWrapper.classList.contains("active")) {
			searchWrapper.classList.add("active");
			event.preventDefault();
		} else if (
			searchWrapper.classList.contains("active") &&
			!event.target.closest(".input-holder")
		) {
			searchWrapper.classList.remove("active");
			// clear input
			searchInput.value = "";
		}
	}
});
