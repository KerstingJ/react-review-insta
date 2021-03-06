const posts = [
    {
      id: 1,
      username: "philzcoffee",
      thumbnailUrl:
        "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",
  
      imageUrl:
        "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
      likes: ["martinseludo", "biancasaurus", "dennis_futbol", "philzcoffee", "BigJohnnySlim", "LittleLeftFoot", "TurnipTeddy", "SallyySueMay", "MaryJaneJeffries", "l33tC0d3r", "NotGucciMane"],
      timestamp: Date.now() - 8457,
      comments: [
        {
          id: "1",
          username: "philzcoffee",
          text:
            "We've got more than just delicious coffees to offer at our shops!"
        },
        {
          id: "2",
          username: "biancasaurus",
          text: "Looks delicious!"
        },
        {
          id: "3",
          username: "martinseludo",
          text: "Can't wait to try it!"
        }
      ]
    },
    {
      id: 2,
      username: "twitch",
      thumbnailUrl:
        "https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg",
      imageUrl:
        "https://tk-assets.lambdaschool.com/89d13918-b7a2-4b40-9658-f376ea3f6b59_37131538_213683546146400_1083714364399157248_n.jpg",
      likes: ["themexican_leprechaun", "michaelmarzetta", "dennis_futbol", "BigJohnnySlim", "LittleLeftFoot", "TurnipTeddy", "SallyySueMay", "MaryJaneJeffries", "l33tC0d3r", "NotGucciMane"],
      timestamp: Date.now() - 1345,
      comments: [
        {
          id: "4",
          username: "twitch",
          text: "Epic Street Fighter action here in Las Vegas at #EVO2017!"
        },
        {
          id: "5",
          username: "michaelmarzetta",
          text: "Omg that match was crazy"
        },
        {
          id: "6",
          username: "themexican_leprechaun",
          text: "What a setup"
        },
        {
          id: "7",
          username: "dennis_futbol",
          text: "It that injustice"
        },
        {
          id: "8",
          username: "dennis_futbol",
          text: "Is"
        }
      ]
    },
    {
      id: 3,
      username: "playhearthstone",
      thumbnailUrl:
        "https://tk-assets.lambdaschool.com/c432f179-8bd7-4758-959d-d88a21f96bca_37105899_432228420518610_5035444036064772096_n.jpg",
      imageUrl:
        "https://tk-assets.lambdaschool.com/43bf01f9-319c-469d-8cf5-0120fe1007f1_yosemite.jpg",
      likes: ["micpetboudreau", "playhearthstone", "awesomebt28", "awaywetravel", "tapmelon", "twitch", "BigJohnnySlim", "LittleLeftFoot", "TurnipTeddy", "SallyySueMay", "MaryJaneJeffries", "l33tC0d3r", "NotGucciMane"],
      timestamp: Date.now() - 6631,
      comments: [
        {
          id: "9",
          username: "playhearthstone",
          text:
            "Power alone is not to be feared. Fear instead those who wield it! #FrozenThrone #Expansion #DeathKnights"
        },
        {
          id: "10",
          username: "tapmelon",
          text:
            "Wish that death knight could be added as a new playable class in this expansion."
        },
        {
          id: "11",
          username: "micpetboudreau",
          text: "Can't wait"
        },
        {
          id: "12",
          username: "awaywetravel",
          text: "I <3 Hearthstone."
        },
        {
          id: "13",
          username: "awesomebt28",
          text: "I like how gul'dan looks so old and useless"
        }
      ]
    }
  ];
  
  export default posts;

  export function getPosts(){
    return posts;
  }

  export function getPost(id){
    return posts.find(post => post.id === id);
  }

  export function deletePost(id){
    return posts.filter(post => post.id !== id)
  }