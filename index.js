// Features
// (1)* button/"add Item" needs to add html into ul/"shopping-list" (plus -enter- on kb). this might use .submit() but then also need to use preventDefault()
//  2) button/"check"  needs to add .shopping-item__checked class to that li (this?). Pressing again needs to remove it. so toggleClass() is likely
//  3) button/"delete" needs to .toggle() that li since no display:none css exists right now.
//  4) hint says i will also need closest() which selects the closest parent to the element sleceted. so if li is in selector then the ul will be grabbed, could be good for strike through?

//  5)OPTIONAL use event.which and mousedown and keydown to add next to item name if it was entered with submnit buton or ener on keyvboard to show functionality for fun

// 6) Bug to fix: check and delete buttons have no gap between them on generated list item


// Add Item
function addItem() {
    $('#js-shopping-list-form').submit(event => {
        // this stops the default form submission behavior
        event.preventDefault();
        const addedItem = $(event.currentTarget).find('#shopping-list-entry').val();
        $('.shopping-list').append(`<li><span class="shopping-item">${addedItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
    })
}; 


// Strikethrough
function strikethrough() {
    $('.shopping-list').on('click','.button-label:contains("check")', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
};


// Delete a n Item
function deleteItem() {
    $('.shopping-list').on('click','.button-label:contains("delete")', function(event) {
        $(this).closest('li').toggle();
    });
};




$(addItem);
$(strikethrough);
$(deleteItem);