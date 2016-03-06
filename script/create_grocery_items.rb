grocery_item_names = [
  "peanut butter",
  "ice cream",
  "bread",
  "olives",
  "pita",
  "hummus",
  "tofu"
]

def random_price
  rand(1000)
end

def random_purchased_state
  rand(2) == 1
end

def random_quantity
  rand(20)
end

2.times do
  grocery_item_names.each do |name|
    GroceryItem.create!(
      name: name,
      quantity: random_quantity,
      purchased: random_purchased_state,
      cost_in_cents: random_price
    )
  end
end

GroceryItem.all.each do |gi|
  1.upto(rand(2) + 1) do |n|
    n.times { gi.stores << Store.order("RANDOM()").first }
  end
end
