let boxex = document.querySelector(".boxes")
let box = boxex.querySelectorAll(".box")
let game_status = document.querySelector(".game_status")
let btn = document.querySelector("button")
let first_player = "X"
let second_player = "O"
let current_player = first_player

let running;
let win_index = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15], [0, 5, 10, 15], [3, 6, 9, 12]]
let option_box = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]



init()



function init() {
    box.forEach(a => {
        let click_box=a
        click_box.addEventListener("click", firstupdate)
        let ss=running==false?false:true
        running = ss

    })
    btn.addEventListener("click", reset)





}
function firstupdate(i) {
    let ind = this.dataset.index
    
   

    if (option_box[ind] != "" || running==false) {
        return
    }
    else {
        update_box(ind)


    }










}
function update_box(i) {
    let stu = (current_player == first_player) ? second_player : first_player
    game_status.textContent = `${stu} Turn`
    option_box[i] = current_player
    console.log(option_box)
    box[i].textContent = current_player
    check_win()
}

function check_win() {
    let you_won = false
    for (i = 0; i < win_index.length; i++) {
        let win_ind = win_index[i]
        let ind_1 = option_box[win_ind[0]]
        let ind_2 = option_box[win_ind[1]]
        let ind_3 = option_box[win_ind[2]]
        let ind_4 = option_box[win_ind[3]]



        if (ind_1 == "" || ind_2 == "" || ind_3 == "" || ind_4 == "") {
            continue
        }
        if (ind_1 == ind_2 && ind_2 == ind_3 && ind_3 == ind_4) {
            you_won = true
            box[win_ind[0]].classList.add("win")
            box[win_ind[1]].classList.add("win")
            box[win_ind[2]].classList.add("win")
            box[win_ind[3]].classList.add("win")


        }

    }
    if (you_won == true) {
        game_status.textContent = `${current_player} Won`
        
        running = false
       



    }
    else if (!option_box.includes("")) {

        game_status.textContent = `Match Draw`
        running = false

    }
    else (change_player())
}




function change_player() {

    let cc_player = (current_player == first_player) ? second_player : first_player
    current_player = cc_player
    running = true




}
function reset() {
    box.forEach(a => {
        a.innerHTML = ""
        a.classList.remove("win")
    })
    game_status.textContent = "Lets play"
    option_box = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    running=true
  
   
}

