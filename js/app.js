// self executing main function
(function() {
  console.log('Welcome to the calculator app');

  //--------------- put your code below this line -------------

  // input field for the calculator screen
  let q = [], o = d.getElementById('output');

  document.addEventListener('click', ({ target: { classList, value } }) => {
    if (classList.contains('bttn')) {
        switch (value) {
            case 'C':
                o.value = '';
                q = [];
                break;
            case '=':
                const t = eval(q.join(''));
                q.push('=', t);

                o.value = q.join('');
                q = [];
                break;
            case 'x':
                value = '*';
            default:
                q.push(value);
                o.value = q.join('');
        }
    }
  });
})();
