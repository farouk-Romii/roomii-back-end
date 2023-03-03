/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: "farouk", last_name: 'katakpaou',email: 'farouk@gamil.com', type:"land_lord",username: "faroukjoker",password: "passwords"},
    {first_name: "khadija", last_name: 'bangura',email: 'farouk@gamil.com', type:"land_lord",username: "khadija",password: "passwords"},
    {first_name: "shadman", last_name: 'choudaury',email: 'farouk@gamil.com', type:"land_lord",username: "shadmanu",password: "pawords"},
    {first_name: "jose", last_name: 'rowValue1',email: 'farouk@gamil.com', type:"tenant",username: "josethegoat",password: "passdjrds"},
    {first_name: "chris", last_name: 'l',email: 'farouk@gamil.com', type:"tenant",username: "chrisl",password: "pasords"},
    {first_name: "chris", last_name: 'p',email: 'farouk@gamil.com', type:"tenant",username: "chrisp",password: "paswords"},
  ]);



  await knex('room_listings').del()
  await knex('room_listings').insert([
    {description: "room_1", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '347', location:"Queens",user_id: 1},
    {description: "room_2", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '566', location:"Bronx",user_id: 2},
    {description: "room_3", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '788', location:"Brooklyn",user_id: 2},
    {description: "room_4", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '988', location:"Manhattan",user_id: 2},
    {description: "room_5", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '899', location:"Manhattan",user_id: 1},
    {description: "room_3", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '788', location:"Brooklyn",user_id: 2},
    {description: "room_4", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '988', location:"Manhattan",user_id: 2},
    {description: "room_5", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '899', location:"Manhattan",user_id: 1},
    {description: "room_3", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '788', location:"Brooklyn",user_id: 2},
    {description: "room_4", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '988', location:"Manhattan",user_id: 2},
    {description: "room_5", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '899', location:"Manhattan",user_id: 1},
    {description: "room_3", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '788', location:"Brooklyn",user_id: 2},
    {description: "room_4", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '988', location:"Manhattan",user_id: 2},
    {description: "room_5", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '899', location:"Manhattan",user_id: 1},
    {description: "room_3", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '788', location:"Brooklyn",user_id: 2},
    {description: "room_4", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '988', location:"Manhattan",user_id: 2},
    {description: "room_5", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '899', location:"Manhattan",user_id: 1},
    {description: "room_3", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '788', location:"Brooklyn",user_id: 2},
    {description: "room_4", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '988', location:"Manhattan",user_id: 2},
    {description: "room_5", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '899', location:"Manhattan",user_id: 1},
    {description: "room_3", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '788', location:"Brooklyn",user_id: 2},
    {description: "room_4", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '988', location:"Manhattan",user_id: 2},
    {description: "room_5", photos: 'https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg,https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg',price: '899', location:"Manhattan",user_id: 1},
  ]);


  await knex('favorites').del()
  await knex('favorites').insert([
    {user_id: 1, room_listing_id: 2},
    {user_id: 1, room_listing_id: 3},
    {user_id: 1, room_listing_id: 1}
  ]);

  await knex('messages').del()
  await knex('messages').insert([
    {sender_id: 1, receiver_id: 2,text: "somthing"},
    {sender_id: 1, receiver_id: 2,text: "second message"},
    {sender_id: 1, receiver_id: 2,text: "third somthing"}
  ]);
};
