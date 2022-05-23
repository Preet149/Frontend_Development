const buttonEl = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("list-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
   myLeads = leadsFromLocalStorage
   render(myLeads)
}

deleteBtn.addEventListener("dblclick",function() {
   localStorage.clear()
   myLeads = []
   render(myLeads)
})


tabBtn.addEventListener("click", function() {
   chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
      myLeads.push(tabs[0].value)
      localStorage.setItem("myLeads", myLeads)
      render(myLeads)
   })
})

buttonEl.addEventListener("click", function() {
     myLeads.push(inputEl.value)
     inputEl.value = ""            //The inputfield gets empty
     localStorage.setItem("myLeads", JSON.stringify(myLeads))
     render(myLeads)
})

//Showing the links as a list
function render(leads) {
      let listItems = ""
      for (let i = 0;i < leads.length; i++) {
           listItems += `
           <li>
              <a target='_blank' href='${leads[i]}'>
                  ${leads[i]}
              </a>
           </li>
         `
      }
      ulEl.innerHTML = listItems
}

