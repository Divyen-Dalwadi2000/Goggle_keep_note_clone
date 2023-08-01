
$(document).ready(() => {
    $("#add").click((text = '') => {
        // 🌟 create a div element and adds a CSS class to the element
        const note = document.createElement('div');
        note.classList.add('note');

        const htmlData = `
        <div class="operation">
        <img class="edit" src="./img/edit.png" alt="edit png">
        <img class="delete" src="./img/delete.png" alt="delete png">
        </div>
        <div class="main2 ${text ? "" : "hidden" }"></div>
        <textarea class="${text ? "hidden" : "" }"></textarea> `;

        // 🌟 insert HTML content into an element at a 'afterbegin' of 'note' DIV
        note.insertAdjacentHTML('afterbegin', htmlData);
        // 🌟  appended as a child to the <body> element of the document
        document.body.appendChild(note);


        // 🌟 deleting the node
        $(".delete").click(() => {
            note.remove();
        });

        //
        
    });

    // 🌟 get the reference
    // const $editButton = $(note).find(".edit");
    // const $deleteButton = $(note).find(".delete");
    // const $main2Div = $(note).find(".main2");
    // const $textarea = $(note).find("textarea");

});
