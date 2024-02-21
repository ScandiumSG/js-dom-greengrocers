function GenerateCartItem(item, count) {
    const cartItem = document.createElement("li")
  
    const image = document.createElement("img")
    image.classList.add("cart--item-icon")
    image.src = "./assets/icons/"+item.id+".svg"
    image.alt = item.name
  
    const cartItemName = document.createElement("p")
    cartItemName.textContent = item.name
  
    const quantityCounter = document.createElement("span")
    quantityCounter.classList.add("quantity-text", "center")
    quantityCounter.textContent = count
  
    const removeButton = document.createElement("button")
    removeButton.classList.add("quantity-btn", "remove-btn", "center")
    removeButton.textContent = "-"
    removeButton.addEventListener("click", () => {
      state.cart.splice(state.cart.indexOf(item), 1)
      GenerateCartItemList()
    })
  
    const addButton = document.createElement("button")
    addButton.classList.add("quantity-btn", "add-btn", "center")
    addButton.textContent = "+"
    addButton.addEventListener("click", () => {
      state.cart.push(item)
      GenerateCartItemList()
    })
  
    cartItem.appendChild(image)
    cartItem.appendChild(cartItemName)
    cartItem.appendChild(removeButton)
    cartItem.appendChild(quantityCounter)
    cartItem.appendChild(addButton)
  
    return cartItem
  }