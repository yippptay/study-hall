const jwt = require('jsonwebtoken');

SECRET = 'Coheed and Cambria';

userdata = {
    username: 'AlexMerced',
    id: '12G56',
};

//CREATE/SIGN A Token

const token = jwt.sign(userdata, SECRET);

console.log(token);

//VERIFY THE TOKEN

try {
    const payload = jwt.verify(token, SECRET);

    console.log(payload);

    const bad = jwt.verify(token, 'cheese');

    console.log(bad);
} catch (error) {
    console.log(error);
}
