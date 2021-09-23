const form = <HTMLFormElement>document.querySelector('#searchForm');
const findInput = <HTMLInputElement>document.querySelector('#searchParams')

form.addEventListener('submit', async event => {
    event.preventDefault();

    const findValue = <string>findInput.value;

    const response: Response = await fetch(`http://127.0.0.1:2000/users/${findValue}`, {
        method: "GET",
    })

    console.log(response.json())
})