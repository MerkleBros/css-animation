const me = "Me";
const dog = "Dog";
const narrator = "Narrator";
const messages = [
  {
    speaker: narrator,
    message:
      "Sometimes a person happens upon a dog chewing on a nefarious stick.",
  },
  { speaker: me, message: "Dog, why do you chew on this unrighteous stick?" },
  {
    speaker: dog,
    message:
      "It is my curse to chew on this stick. It is the stick of condemnation!",
  },
  { speaker: me, message: "And who do you condemn, hound?" },
  { speaker: dog, message: "I condemn the stick - the stick of condemnation!" },
  { speaker: me, message: "What does the stick do to you?" },
  { speaker: dog, message: "It harms me." },
  {
    speaker: me,
    message: "Beast, you must unmouth the stick if you wish to stop that.",
  },
  { speaker: dog, message: "What would you know of sticks and mouths?" },
  {
    speaker: me,
    message:
      "Do you think my mouth has been free of sticks? I've suffered a splinter time to time.",
  },
  { speaker: me, message: "Do you not like the other sticks?" },
  {
    speaker: dog,
    message: "I love the other sticks. But this stick is my stick.",
  },
  {
    speaker: me,
    message: "There are a thousand thousand sticks to chase, my dog.",
  },
  { speaker: dog, message: "But I'm comfortable with this stick." },
  {
    speaker: me,
    message: "Do you play with this stick - the stick of condemnation?",
  },
  { speaker: dog, message: "We do not play." },
  { speaker: me, message: "Why not?" },
  { speaker: dog, message: "We've grown tired and pained, together." },
  { speaker: me, message: "Do you enjoy the features of this stick?" },
  { speaker: dog, message: "I cannot tell anymore." },
  { speaker: me, message: "And why not?" },
  {
    speaker: dog,
    message: "I can no longer see the stick. It's in my mouth, after all.",
  },
  {
    speaker: me,
    message:
      "Beast, you must have distance from this twig to make accurate appraisal.",
  },
  {
    speaker: dog,
    message: "The stick is all tied up in me. I cannot move away from it.",
  },
  {
    speaker: me,
    message: "It will hurt to drop this stick, I know. But it must be done.",
  },
  { speaker: dog, message: "What if this stick is the best one for me?" },
  { speaker: me, message: "Does this stick fit your mouth?" },
  {
    speaker: dog,
    message: "It bends in the wrong ways and has points all over it.",
  },
  { speaker: me, message: "Not all sticks fit all mouths." },
  { speaker: dog, message: "But we've made things fit." },
  { speaker: me, message: "At what cost? At what suffering?" },
  { speaker: dog, message: "Life is suffering." },
  { speaker: me, message: "The other sticks weren't like this, were they?" },
  { speaker: dog, message: "They were not." },
  { speaker: me, message: "Drop the stick then, dog." },
  { speaker: dog, message: "I can't." },
  { speaker: me, message: "You must." },
  { speaker: dog, message: "Can't you see that the stick is only a metaphor?" },
  {
    speaker: dog,
    message: "Can't you see that I cannot forgive her so easily?",
  },
  {
    speaker: dog,
    message: "My owner thrust this stick upon me and left me here alone!",
  },
  { speaker: dog, message: "How can I forgive that?" },
  {
    speaker: me,
    message:
      "The stick of condemnation must not be treated as some literary allusion. Take things at face value, my beast.",
  },
  { speaker: me, message: "She's given you a cursed stick." },
  { speaker: dog, message: "I hate her and I hate the stick of condemnation!" },
  {
    speaker: me,
    message:
      "The stick makes you act like a small puppy. You're better than this.",
  },
  { speaker: dog, message: "It feels so good to condemn!" },
  { speaker: me, message: "There's power in magical sticks, it's true." },
  { speaker: me, message: "But you're more than rage and hate." },
  {
    speaker: dog,
    message: "If I drop this stick, I'll have to face my own failings.",
  },
  {
    speaker: me,
    message: "Isn't that what you've been afraid of all along?",
    delay: 5,
  },
  { speaker: dog, message: "..." },
  {
    speaker: narrator,
    message: "Sometimes a dog musters the courage to drop a cursed stick",
  },
  { speaker: me, message: "You've done good, boy. You're a good boy." },
  { speaker: dog, message: "I didn't know that I needed to drop the stick." },
  { speaker: me, message: "You needed outside counsel." },
  { speaker: dog, message: "I needed a friend." },
  { speaker: me, message: "You've found one now. Let's go." },
];

let index = 0;
const element = document.getElementById("message");
element.addEventListener("animationend", (e) => {
  if (index >= messages.length) {
    return;
  }

  element.classList.remove("typing");
  element.innerHTML = "";
  void element.offsetWidth;

  const message = messages[index].message;
  const speaker = messages[index].speaker;

  if (speaker === "Me") {
    document.getElementsByClassName("monster-container")[0].style.opacity = 1;
    document.getElementsByClassName("dog-container")[0].style.opacity = 0.7;
  } else {
    document.getElementsByClassName("monster-container")[0].style.opacity = 0.7;
    document.getElementsByClassName("dog-container")[0].style.opacity = 1;
  }

  element.innerHTML = `${speaker}: ${message}`;
  element.classList.add("typing");
  index++;
});
element.classList.add("typing");
