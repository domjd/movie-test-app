const dummyData = [
  {
    id: 1022789,
    title: "Inside Out 2",
    overview:
      "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
    releaseDate: "2024-06-11",
    imageURL:
      "https://image.tmdb.org/t/p/original/oxxqiyWrnM0XPnBtVe9TgYWnPxT.jpg",
  },
  {
    id: 653346,
    title: "Kingdom of the Planet of the Apes",
    overview:
      "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
    releaseDate: "2024-05-08",
    imageURL:
      "https://image.tmdb.org/t/p/original/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
  },
  {
    id: 150540,
    title: "Inside Out",
    overview:
      "From an adventurous balloon ride above the clouds to a monster-filled metropolis, Academy Award®-winning director Pete Docter (“Monsters, Inc.,” “Up”) has taken audiences to unique and imaginative places. In Disney and Pixar’s original movie “ Inside Out,” he will take us to the most extraordinary location of all—inside the mind.",
    releaseDate: "2015-06-17",
    imageURL:
      "https://image.tmdb.org/t/p/original/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
  },
  {
    id: 573435,
    title: "Bad Boys: Ride or Die",
    overview:
      "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
    releaseDate: "2024-06-05",
    imageURL:
      "https://image.tmdb.org/t/p/original/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg",
  },
  {
    id: 1001311,
    title: "Under Paris",
    overview:
      "In the Summer of 2024, Paris is hosting the World Triathlon Championships on the Seine for the first time. Sophia, a brilliant scientist, learns from Mika, a young environmental activist, that a large shark is swimming deep in the river. To avoid a bloodbath at the heart of the city, they have no choice but to join forces with Adil, the Seine river police commander.",
    releaseDate: "2024-06-05",
    imageURL:
      "https://image.tmdb.org/t/p/original/flX5OSC1NAKHqjLIZL5YcyxtSXh.jpg",
  },
  {
    id: 823464,
    title: "Godzilla x Kong: The New Empire",
    overview:
      "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
    releaseDate: "2024-03-27",
    imageURL:
      "https://image.tmdb.org/t/p/original/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
  },
  {
    id: 639720,
    title: "IF",
    overview:
      "A young girl who goes through a difficult experience begins to see everyone's imaginary friends who have been left behind as their real-life friends have grown up.",
    releaseDate: "2024-05-08",
    imageURL:
      "https://image.tmdb.org/t/p/original/xbKFv4KF3sVYuWKllLlwWDmuZP7.jpg",
  },
  {
    id: 929590,
    title: "Civil War",
    overview:
      "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
    releaseDate: "2024-04-10",
    imageURL:
      "https://image.tmdb.org/t/p/original/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
  },
  {
    id: 955555,
    title: "The Roundup: No Way Out",
    overview:
      "Detective Ma Seok-do changes his affiliation from the Geumcheon Police Station to the Metropolitan Investigation Team, in order to eradicate Japanese gangsters who enter Korea to commit heinous crimes.",
    releaseDate: "2023-05-31",
    imageURL:
      "https://image.tmdb.org/t/p/original/lW6IHrtaATxDKYVYoQGU5sh0OVm.jpg",
  },
  {
    id: 829402,
    title: "Ultraman: Rising",
    overview:
      "With Tokyo under attack from kaiju, Ultraman discovers his greatest challenge isn’t fighting giant monsters - it’s raising one.",
    releaseDate: "2024-06-14",
    imageURL:
      "https://image.tmdb.org/t/p/original/j886YEkIUsiImY53px5VHKD4lRa.jpg",
  },
  {
    id: 1115623,
    title: "The Last Kumite",
    overview:
      "When Karate champion Michael Rivers wins the last tournament of his career, shady businessman Ron Hall offers him the opportunity to fight in an illegal Kumite in Bulgaria against the world’s best martial artists.  When Michael declines, Hall has his daughter kidnapped and, in order to rescue her, Rivers is left with no choice but to compete in the deadly tournament. Arriving in Bulgaria, he finds out that he is not the only fighter whose loved one was taken. Rivers enlists the help of trainers Master Loren, and Julie Jackson but will it be enough for him to win the tournament and save his daughter’s life?",
    releaseDate: "2024-05-09",
    imageURL:
      "https://image.tmdb.org/t/p/original/zDkaJgsPoSqa2cMe2hW2HAfyWwO.jpg",
  },
  {
    id: 1086747,
    title: "The Watchers",
    overview:
      "A young artist gets stranded in an extensive, immaculate forest in western Ireland, where, after finding shelter, she becomes trapped alongside three strangers, stalked by mysterious creatures each night.",
    releaseDate: "2024-06-06",
    imageURL:
      "https://image.tmdb.org/t/p/original/vZVEUPychdvZLrTNwWErr9xZFmu.jpg",
  },
  {
    id: 614933,
    title: "Atlas",
    overview:
      "A brilliant counterterrorism analyst with a deep distrust of AI discovers it might be her only hope when a mission to capture a renegade robot goes awry.",
    releaseDate: "2024-05-23",
    imageURL:
      "https://image.tmdb.org/t/p/original/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg",
  },
  {
    id: 626412,
    title: "Alienoid: Return to the Future",
    overview:
      "Ean has a critical mission to return to the future to save everyone. However, she becomes trapped in the distant past while trying to prevent the escape of alien prisoners who are locked up in the bodies of humans. Meanwhile, Muruk, who helps Ean escape various predicaments, is unnerved when he begins sensing the presence of a strange being in his body. Traveling through the centuries, they are trying to prevent the explosion of the haava.",
    releaseDate: "2024-01-10",
    imageURL:
      "https://image.tmdb.org/t/p/original/4RClncz0GTKPZzSAcAalHCw0h3g.jpg",
  },
  {
    id: 1011985,
    title: "Kung Fu Panda 4",
    overview:
      "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
    releaseDate: "2024-03-02",
    imageURL:
      "https://image.tmdb.org/t/p/original/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
  },
  {
    id: 1016346,
    title: "MR-9: Do or Die",
    overview:
      "Masud Rana is a Secret Agent with code name MR-9 of the Bangladesh Counter Intelligence Agency",
    releaseDate: "2023-08-25",
    imageURL:
      "https://image.tmdb.org/t/p/original/geAWZUshBg4hS8TIeLOEhJbglpo.jpg",
  },
  {
    id: 719221,
    title: "Tarot",
    overview:
      "When a group of friends recklessly violate the sacred rule of Tarot readings, they unknowingly unleash an unspeakable evil trapped within the cursed cards. One by one, they come face to face with fate and end up in a race against death.",
    releaseDate: "2024-05-01",
    imageURL:
      "https://image.tmdb.org/t/p/original/gAEUXC37vl1SnM7PXsHTF23I2vq.jpg",
  },
  {
    id: 746036,
    title: "The Fall Guy",
    overview:
      "Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.",
    releaseDate: "2024-04-24",
    imageURL:
      "https://image.tmdb.org/t/p/original/aBkqu7EddWK7qmY4grL4I6edx2h.jpg",
  },
  {
    id: 519182,
    title: "Despicable Me 4",
    overview:
      "Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, and the family is forced to go on the run.",
    releaseDate: "2024-06-20",
    imageURL:
      "https://image.tmdb.org/t/p/original/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
  },
  {
    id: 786892,
    title: "Furiosa: A Mad Max Saga",
    overview:
      "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
    releaseDate: "2024-05-22",
    imageURL:
      "https://image.tmdb.org/t/p/original/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
  },
];

export const fetchDummyData = async (page: number, genre: string) => {
  // Simulating an API call
  const response = await new Promise((resolve) =>
    setTimeout(() => resolve(dummyData), 2000)
  );

  return response;
};
