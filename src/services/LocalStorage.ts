class LocalStorage {

  getUserName(){
    return localStorage.getItem("userName")
  }

  setUserName(item:[]){
    return localStorage.setItem("userName", JSON.stringify(item))
  }

  getColumns(){
    return localStorage.getItem("columns")
  }

  setColumns(item:[]){
    return localStorage.setItem("columns", JSON.stringify(item))
  }

  getCards(){
    return localStorage.getItem("cards")
  }

  setCards(item:[]){
    return localStorage.setItem("cards", JSON.stringify(item))
  }

  getComments(){
    return localStorage.getItem("comments")
  }

  setComments(item:[]){
    return localStorage.setItem("comments", JSON.stringify(item))
  }
}
export const Local = new LocalStorage();
