// login

const verifybtn = document.getElementById('verify')

verifybtn.addEventListener('click' , verify)

function verify() {
    var psw = document.getElementById('password').value
    const password = 'abcd'
    if(psw === password){
        const login = document.getElementById('login')
        const loanbook = document.getElementById('loanbook')

        login.style.display = 'none'
        loanbook.style.display = 'block'
    }
    else{
        const errcon = document.getElementById('error')
        errcon.style.backgroundColor = 'red'
        errcon.style.color = 'black'
        errcon.textContent = 'Wrong Password'
    }
}

//login

//search

function search(){
    const searchbar = document.getElementById('searchbar')
    const header = document.getElementById('header')

    header.style.display = 'none'
    searchbar.style.display = 'flex'
}

//search

//back

function back(){
    const searchbar = document.getElementById('searchbar')
    const header = document.getElementById('header')

    searchbar.style.display = 'none'
    header.style.display = 'flex'
}

//back

//change tab

const tabbtn = document.querySelector('#tab')

tabbtn.addEventListener('change' , changetab)

function changetab(){
    const tabbefore = document.getElementById('before')
    const alltab = document.getElementById('all')
    const book = document.getElementById('book')

    alltab.classList.toggle('changetabview')
    book.classList.toggle('changebookwidth')
    
    tabbefore.classList.toggle('changetab')

}

//change tab

//list

function createList(cus_name,cus_bal,cus_id,prfimgsrc){
    const book = document.getElementById('book')
    const all = document.getElementById('all')
    const stared = document.getElementById('stared')

    const list = document.createElement('div')
    list.className = 'list'
    list.style.borderColor = 'red'
    const profile = document.createElement('div')
    profile.className = 'profile'
    const prfimg = document.createElement('img')
    prfimg.src = prfimgsrc
    const detail = document.createElement('div')
    detail.className = 'detail'
    const nm_and_bal = document.createElement('div')
    nm_and_bal.className = 'nm_and_bal'
    const nm = document.createElement('p')
    nm.className = 'nm'
    nm.textContent = cus_name
    const bal = document.createElement('p')
    bal.className = 'bal'
    bal.textContent = "RS."+cus_bal
    const viewbtn = document.createElement('button')
    viewbtn.className = 'view'
    viewbtn.id = 'view'
    viewbtn.onclick = 'view()'
    const viewbtnimg = document.createElement('img')
    viewbtnimg.src = 'view.png'

    profile.append(prfimg)
    nm_and_bal.append(nm)
    nm_and_bal.append(bal)
    viewbtn.append(viewbtnimg)
    detail.append(nm_and_bal)
    detail.append(viewbtn)
    list.append(profile)
    list.append(detail)
    all.append(list)
}

//list

createList('Elon musk sdvb',456,1234567,'profile.png')
createList('Insaf',456,1234567,'https://drive.google.com/uc?export=view&id=1-8CcxufGRlrf8a-KKRlSajkTkSODqoBW')
createList('Insaf',456,1234567,'https://drive.google.com/uc?export=view&id=1-8CcxufGRlrf8a-KKRlSajkTkSODqoBW')