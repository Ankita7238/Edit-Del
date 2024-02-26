function handleFormSubmit(event) {
    event.preventDefault();
    let amt = document.getElementById("amountInput").value;
    let des = document.getElementById('descInput').value;
    let cat = document.getElementById('categoryInput').value;
    const details = {
        'amount': amt,
        'description': des,
        'category': cat
    };
    const detailstring = JSON.stringify(details);
    localStorage.setItem(cat, detailstring);

    const list = document.getElementById('list');
    const item = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = `${cat}-${des}-${amt}`;
    // Set the key as a data attribute
    item.dataset.key = cat;
    const delbtn = document.createElement('input');
    delbtn.type = 'button';
    delbtn.value = 'Delete Expense';
    const editbtn = document.createElement('input');
    editbtn.type = 'button';
    editbtn.value = 'Edit Expense';
    item.appendChild(p);
    item.appendChild(delbtn);
    item.appendChild(editbtn);
    list.appendChild(item);

    delbtn.addEventListener('click', function(){
        const key = delbtn.parentNode.dataset.key;
        localStorage.removeItem(key);
        delbtn.parentNode.remove();
    });

    editbtn.addEventListener('click', function(){
        const key = editbtn.parentNode.dataset.key;
        let parent=editbtn.previousElementSibling.previousElementSibling
        let fulltext=parent.textContent.split('-')
        editbtn.parentNode.remove();
        document.getElementById('amountInput').value = fulltext[2];
        document.getElementById('descInput').value =fulltext[1];
        document.getElementById('categoryInput').value = fulltext[0];
        localStorage.removeItem(key);
    });
}

