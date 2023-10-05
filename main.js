console.log('JaveScript HW day 3')

const body = document.body
body.style.backgroundColor = 'black'
body.style.color = 'white'
body.style.textAlign = 'center'



const listForm = document.querySelector('#list-form')
const listContainer = document.querySelector('#list-container')

const tDList = document.createElement('ul')
tDList.innerText = 'TO DO LIST'
tDList.style.fontSize = '30px'; tDList.style.listStyle = 'none'
tDList.style.marginLeft = '600px'; tDList.style.marginRight = '650px'

listContainer.append(tDList)

//listens for item submission and initiates function(s) to add it to list.
listForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const listItem = getItem()
    const itemDesc = getDesc()
    makeListItem(listItem, itemDesc)}
    )
    
    //listens for item click and initiates removal
tDList.addEventListener('click', (e) => {
    e.target.remove()
})
    
//logs item entered in form.
function getItem() {return document.querySelector('#item-field').value}
//logs description entered in form.
function getDesc() {return document.querySelector('#item-desc').value}
    
//takes item, creates li and adds it to to do list.
function makeListItem(listItem, itemDesc) {    
    const newListItem = document.createElement('li')
    newListItem.style,fontSize = '20px'
    newListItem.innerText = `${listItem} - ${itemDesc}`    
    tDList.append(newListItem)
    console.log(tDList)
}


