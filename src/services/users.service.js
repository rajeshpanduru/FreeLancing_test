const users = [
  {
    id: 1,
    instagramHandle: "@open-architected",
    description:
      "The seated lotus postures are an amazing way to go into meditation, or simply just to take a moment to ground oneself. Check out my OnlyFans here -> ...",
    followers: 5,
    category: ["fashion"]
  },
  {
    id: 2,
    instagramHandle: "logisticalbear",
    description:
      "I had some amazing people in my life. Look at my father - he came from a small fishing village of five hundred people and at six foot four with giant ears and a kind of very odd expression, thought he could be a movie star.",
    followers: 68,
    category: ["food"]
  },
  {
    id: 3,
    instagramHandle: "future-proofed-alien",
    description:
      "With 'Twilight,' you have these massive tomes that you have to condense. With 'Penoza,' we had an eight episode Dutch series that, just for the pilot alone,",
    followers: 48,
    category: ["fashion"]
  },
  {
    id: 4,
    instagramHandle: "graphic-interfaceguy77",
    description:
      "My Facebook account is linked above. Collect moments not things, unless those things are cats",
    followers: 82,
    category: ["business"]
  },
  {
    id: 5,
    instagramHandle: "localhost-ghost",
    description:
      "Maybe she’s born with it, maybe it’s caffeine. Become a crypto billionare (click here). Check out my onlyfans (click here)",
    followers: 48,
    category: ["food"]
  },
  {
    id: 6,
    instagramHandle: "@someone32",
    description:
      "I don't like staying in hotels. I like to be in my own bed. San Diego as a city is really awesome. ",
    followers: 85,
    category: ["food"]
  }
];

// Simulating an external response
export const getUserData = (userId) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => userId === user.id);

    if (!user) {
      reject("User ID does not exists");
    }
    setTimeout(resolve(user), Math.random() * 1000);
  });
};
