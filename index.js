const inputBoxId = "#newTodo"
const todoListId = "#todo-list"

const TodosList = new Todos()
const inputDom = document.querySelector(inputBoxId)
const todoListDom = document.querySelector(todoListId)

function clearValueEnterTodo() {
    inputDom.value = ''
}

function emptyNode(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function renderList() {
    emptyNode(todoListDom)
    !TodosList.isEmpty() ? TodosList.getTodos().forEach((todo) => {
        const li = document.createElement('li')
        const div = document.createElement('div')
        const input = document.createElement('input')
        const span = document.createElement('span')
        
        span.innerText = 'X'
        span.setAttribute('id', todo.id)
        input.type = "text"
        input.value = todo.value
        
        li.classList.add('todo')
        div.classList.add('input-box')
        span.classList.add('cross-icon')
        
        div.appendChild(input)
        li.appendChild(div)
        li.appendChild(span)
        todoListDom.appendChild(li)
    }) : (() => {
        const span = document.createElement('span')
        span.innerText = 'No Todos Added'
        todoListDom.appendChild(span)
    })()
}

function addTodo() {
    TodosList.addTodo(inputDom.value)
    renderList()
    clearValueEnterTodo()
}

todoListDom.addEventListener('click', (e) => {
    if (e && e.target && e.target.id && e.target.nodeName === 'SPAN') {
        TodosList.removeTodo(e.target.id)
        renderList()
    }
})


renderList()