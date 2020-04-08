base = 'https://script.google.com/macros/s/AKfycbxNfH6OrQbfKaxtEk9dI4JvK0-VNz8hiXd72bqUf0AYPqxmhCA/exec?teacher=jeff'
var url = base + '&question='
var urls = []
var i = 1;
while (i < 21){
    urls.push(url + i)
    i += 1
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function loopedcall(item, index, attempt){
    $.ajax({
        url: item,
        method: "GET",
        dataType: "json",
        data: "{}",
        success: function (data) {
            console.log(data)
        },
        error: async function (xhr, status, error) {
            if (attempt > 5){
                console.log("Was not able to send attempt " + attempt + ": " + item)
            }
            else {
                await sleep(1000*(attempt+1))
                console.log("Trying again " + item)
                loopedcall(item, index, attempt + 1)
            }
        }
        })
}

function getdata(item, index){
    loopedcall(item, index, 0)
}
console.log(urls)
urls.forEach(getdata)