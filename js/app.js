// self executing main function
(function(d) {
  console.log('Welcome to the calculator app');

  //--------------- put your code below this line -------------

  // input field for the calculator screen
  let q = '', o = d.getElementById('output');

  d.addEventListener('click', ({ target: { value } }) => {
    if (value) {
        switch (value) {
            case 'C':
                q = '';
            case '=':
                let i, t = q.split(/([\+x-])/);

                [
                    ['x', (a, b) => a * b],
                    ['+', (a, b) => a + b],
                    ['-', (a, b) => a - b]
                ].forEach(
                    ([k, fn]) => {
                        while ((i = t.indexOf(k)) > -1) {
                            t.splice(i-1, 3, fn(parseInt(t[i-1]), parseInt(t[i+1])));
                        }
                    }
                );

                o.value = t[0];

                q = '';
                break;
            default:
                q += value;
                o.value = q;
        }
    }
  });
})(document);
