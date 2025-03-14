function showHeader(){
    document.writeln('<h1>JS fetch API integration</h1>');
}

function showLoader(){
    document.writeln('<div id="resultFromApi">...</div>');
}

function loadDataFromApi() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        //document.write('<p>' + JSON.stringify(json) + '</p>');
        document.getElementById('resultFromApi').innerHTML = JSON.stringify(json);
      })
}

function loadDataFromApi2(){
    fetch('https://dummyjson.com/c/3029-d29f-4014-9fb4')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        //document.write('<p>' + JSON.stringify(json) + '</p>');
        document.getElementById('resultFromApi').innerHTML = JSON.stringify(json);
      })
}

function showFooter(){
    document.writeln('<footer>Footer</footer>');
}

function startApp(){
    loadDataFromApi2();
    loadDataFromApi();
    
    showHeader();
    showLoader();
    showFooter();
    
    
}

startApp();
