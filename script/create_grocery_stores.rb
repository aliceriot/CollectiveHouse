[
  "Harvest",
  "Whole Foods",
  "City Feed",
  "Bob's Pita",
  "Roslindale Village Mart",
  "Fish Mart",
  "Stop and Shop",
  "Super 88"
].each { |store| Store.find_or_create_by(display_name: store) }
