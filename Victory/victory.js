let gameId = sessionStorage.gameId;
let idToken = sessionStorage.authToken;
let base = sessionStorage.base;


async function getWinner() {
    const result = await axios({
        method: 'get',
        url: `${base}/games/${gameId}/won`,
        headers: {
            authorization: `bearer ${idToken}`
        },
        withCredentials: true,
    })
    return result.data.won;
}


let winner = getWinner();


function renderWinner() {
    let html = `<section class="hero is-fullheight">
                    <div class="hero-body has-text-centered">
                        <div class="container">
                            <h1 class = "title is-1 has-text-white has-text-centered">Congrats ${winner}, you won!</h1>
                        <div class='container'> 
                        <div class='columns is-mobile is-centered'> 
                            <div class='column is-4'> 
                            <div class='has-text-centered'> 
                                <button class="button is-warning" id='btn' style="font-weight: bold"> 
                                Return to Lobby
                                </button> 
                        </div> 
                        </div>
                    </div>
                    </div>
                    </div>
                </section>`
    let $root = $(`#root`);
    $root.append(html);
}

renderWinner();