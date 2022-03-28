class LocalStorage {

  getUserName(){
    return localStorage.getItem("userName") || ''
  }

  setUserName(item:string){
    return localStorage.setItem("userName", item)
  }

  getColumns(){
    return localStorage.getItem("columns") || ''
  }

  setColumns(item:string){
    return localStorage.setItem("columns", item)
  }

  getCards(){
    return localStorage.getItem("cards") || ''
  }

  setCards(item:string){
    return localStorage.setItem("cards", item)
  }

  getComments(){
    return localStorage.getItem("comments") || ''
  }

  setComments(item:string){
    return localStorage.setItem("comments", item)
  }
}
export const Local = new LocalStorage();
