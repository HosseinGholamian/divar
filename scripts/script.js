var grayScreenOverlay = document.querySelector('#grayScreenOverlay')
grayScreenOverlay.addEventListener('click', clickOverLay)

//add event listener to list function
function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
    }
}



//price slider
const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".price-slider .progress");
let priceGap = 1000;
priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.right = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.left = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});
//end of price slider






//Mega Menu Container

var DesktopCategoryBtn = document.querySelector("#desktop-category-button");
var desktopMagaMenuContainer = document.querySelector('#desktopMagaMenuContainer')
var sublistIteme_list = document.querySelectorAll("#desktopMagaMenuContainer .sub-list-item");
var subListItemMain_list = document.querySelectorAll('.sub-list-itam_main');





DesktopCategoryBtn.addEventListener('click', openDesktopMegaMenuContainer)

function openDesktopMegaMenuContainer() {
    var subListItem_active = document.querySelector(".sub-list-item.sub-list-item-active");
    if (subListItem_active != null) {
        subListItem_active.classList.remove('sub-list-item-active');

    }
    sublistIteme_list[0].classList.add('sub-list-item-active')
    grayScreenOverlay.classList.toggle('visible');
    desktopMagaMenuContainer.classList.toggle('visible');

}


// subListItemMain_list.map(function(mainItem) {
//     mainItem.addEventListener('mouseover', function() {
//         var subListItem_active = document.querySelector("#desktopMagaMenuContainer .sub-list-item.sub-list-item-active");
//         subListItem_active.classList.remove('sub-list-item-active');
//         this.parentElement.classList.add('sub-list-item-active')
//     })
// })


for (let index = 0; index < subListItemMain_list.length; index++) {
    const mainItem = subListItemMain_list[index];
    mainItem.addEventListener('mousemove', changeMainItem)
    mainItem.addEventListener('click', changeMainItem)
}


function changeMainItem() {
    var subListItem_active = document.querySelector(".sub-list-item.sub-list-item-active");
    subListItem_active.classList.remove('sub-list-item-active');
    this.parentElement.classList.add('sub-list-item-active')
}


// End Of  Mega Menu Container








// SideBar Filter
var desktopFilterBoxContainer = document.querySelector('.desktop-filter-box-container')
desktopFilterBoxContainer.addEventListener('click', openDesktopFilterCallapseItem)

function openDesktopFilterCallapseItem(e) {


    var clickedElement = e.target;
    if (clickedElement.classList.contains('desktop-sidebar-filter-item')) {

        var targerElement = clickedElement.nextElementSibling;
        targerElement.classList.toggle('sidebar-callapsable_visible');
        clickedElement.classList.toggle('active');
    }


}

//End if sidebar filter


//toggle
var toggleContainerList = document.querySelectorAll('.toggle-container');


for (let index = 0; index < toggleContainerList.length; index++) {
    toggleContainer = toggleContainerList[index];
    toggleContainer.addEventListener('click', changeToggle)
}



function changeToggle() {

    var toggle = this.firstElementChild;
    toggle.classList.toggle('toggle-on');
    this.classList.toggle('toggle-conatiner-on');

    var checkBox = this.lastElementChild;
    if (checkBox.checked) {
        checkBox.checked = false;
    } else {
        checkBox.checked = true;
    }

}

//end of toggle
//burger sidbar in mobile{
var burger = document.querySelector(".burger-container");
var sidebar = document.querySelector(".sidebar");


burger.addEventListener('click', function() {
    sidebar.classList.toggle('open-sidebar');
    burger.classList.toggle('close');

})

// end of burger menu sidebar

//Modals


var modalExitBtnList = document.querySelectorAll('.modal-exit');



for (let index = 0; index < modalExitBtnList.length; index++) {
    const modalExitBtn = modalExitBtnList[index];
    modalExitBtn.addEventListener('click', function() {
        this.parentElement.parentElement.classList.add('close-modal');
        grayScreenOverlay.classList.toggle('visible');
    })

}


//loign modal

var loginBtn = document.querySelector('[target=login-modal]');
loginBtn.addEventListener('click', function() {
    var loginModal = document.querySelector('[role=login-modal]');
    loginModal.classList.toggle('close-modal')
    grayScreenOverlay.classList.toggle('visible');
})

//multi selection
const selectMultiBtn = document.querySelector('.select-btn'),
    multiSelectionItems = document.querySelectorAll(' .multi-item ');

selectMultiBtn.addEventListener('click', function() {
    selectMultiBtn.classList.toggle('open');

})


var selectedItemContainer = document.querySelector(".selected-item-container")




multiSelectionItems.forEach(item => {
    item.addEventListener('click', function() {
        //console.log(this.firstElementChild.innerText);
        item.classList.toggle('checked');
        selectedItemContainer.innerHTML = '';
        var checked = document.querySelectorAll('.multi-item.checked');
        var checkList = [];
        checked.forEach(checked => {
            var city = checked.firstElementChild.innerText;
            checkList.push(city);
            var htmlcity = '';
            checkList.forEach(city => {
                htmlcity += '<div class="selected-item   mr-4 ml-4  mb-4">' + city + '</div>';
            });

            selectedItemContainer.innerHTML = htmlcity;
        });


    })
});


//city modal

var CityBtn = document.querySelectorAll('[target=city-modal]');
CityBtn.forEach(CityBtn => {
    CityBtn.addEventListener('click', function() {
        var cityModal = document.querySelector('[role=city-modal]');
        cityModal.classList.toggle('close-modal')
        grayScreenOverlay.classList.toggle('visible');
    })
});


// grey OverLay



function clickOverLay() {
    var loginModal = document.querySelector('[role=login-modal]');
    var cityModal = document.querySelector('[role=city-modal]');



    if (desktopMagaMenuContainer.classList.contains('visible')) {
        grayScreenOverlay.classList.toggle('visible');
        desktopMagaMenuContainer.classList.toggle('visible');

    }

    if (!loginModal.classList.contains('close-modal')) {
        loginModal.classList.toggle('close-modal')
        grayScreenOverlay.classList.toggle('visible');
    }

    if (!cityModal.classList.contains('close-modal')) {
        cityModal.classList.toggle('close-modal')
        grayScreenOverlay.classList.toggle('visible');
    }



}

// End Of Gray OverLay