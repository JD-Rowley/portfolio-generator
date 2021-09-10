var commandLineArgs = process.argv[1];
console.log(commandLineArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArr => {
    profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);