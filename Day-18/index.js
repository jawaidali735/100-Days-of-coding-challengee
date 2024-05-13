"use strict";
// Question 52:
Object.defineProperty(exports, "__esModule", { value: true });
let makeSmartphone = {
    brand: "vivo",
    model: "vivo v25 5G",
    features: {
        screen: 5.6,
        battery: 4000,
        frontCamera: 50,
        backCamera: 20,
        storage: 256,
    }
};
console.log(makeSmartphone);
//Question: 53
let lists = {
    languages: ["CSS", "JavaScript", "TypesScript"],
    tools: ["Visual Studio Code", "QualBot", "Href"],
    frameWorks: ["React", "Angular", "Vue.js"]
};
let { languages, tools, frameWorks } = lists;
console.log(`languages: ${languages[2]}, tools: ${tools[0]}, freamworks: ${frameWorks[0]}`);
//Question: 54
// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
// Explain & TIP: This is like having labels you can rewrite anytime, which is great for when you need to adjust your list based on new information.
function creartingflexibleObjectKey(key, value) {
    let objectKey = {};
    objectKey[key] = value;
    return objectKey;
}
let userPreference = creartingflexibleObjectKey("theme", "dark");
console.log(userPreference);
