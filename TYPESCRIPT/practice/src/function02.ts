const function1 = (callback: () => void): void => {
    console.log('In my bag, there are...');
    callback();
    console.log('What is in your bag?');
    console.log('Me too! In my bag, there are...')
    callback();
}

const answer = (): void => {
    console.log('smartphone, wallet and some chocolates');
}

function1(answer);