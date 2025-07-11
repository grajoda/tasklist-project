const defaultUrl = 'http://localhost:4001'

// Get 
export const getToUrl = async (endpoint) => {
    try {
        const userToken = sessionStorage.getItem('userToken')
        const response = await fetch(`${defaultUrl}/${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'user-token' : JSON.stringify(userToken)
            }
        });

        if (!response.ok) {
            console.log('Erro no get')
            console.log(response)
        }

        const data = await response.json()
        return data
    } catch(err) {
        console.log(err);
    }
}


export const commandGet = async (endpoint) => {
    try {
        const userToken = sessionStorage.getItem('userToken')
        const response = await fetch(`${defaultUrl}/${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'user-token' : JSON.stringify(userToken)
            }
        });

        if (!response.ok) {
            console.log('Erro no get')
        }

    } catch(err) {
        console.log(err);
    }
}


// Post 
export const postToUrl = async (formdata, endpoint) => {
    try {
        const userToken = sessionStorage.getItem('userToken')
        const response = await fetch(`${defaultUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'user-token' : JSON.stringify(userToken)
            },
            body: JSON.stringify(formdata)
        });

        if (!response.ok) {
            console.log(`Erro na Requisição /${endpoint}`)
        }
    } catch (err) {
        console.log(err);
    }
}


export const postToUrlAndReturn = async (formdata, endpoint) => {
    try {
        const userToken = sessionStorage.getItem('userToken')
        const response = await fetch(`${defaultUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'user-token' : JSON.stringify(userToken)
            },
            body: JSON.stringify(formdata)
        });

        if (!response.ok) {
            console.log(`Erro na Requisição /${endpoint}`)
        }

        const data = await response.json() 
        return data
    } catch (err) {
        console.log(err);
    }
}


// Put/Patch
export const putToUrl = async (formdata, endpoint) => {
    try {
        const userToken = sessionStorage.getItem('userToken')
        const response = await fetch(`${defaultUrl}/${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'user-token' : JSON.stringify(userToken)
            },
            body: JSON.stringify(formdata)
        });

        if (!response.ok) {
            console.log(`Erro na Requisição /${endpoint}`)
        }
    } catch (err) {
        console.log(err);
    }
}

// Delete
export const deleteToUrl = async (endpoint) => {
    try {
        const userToken = sessionStorage.getItem('userToken')
        const response = await fetch(`${defaultUrl}/${endpoint}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'user-token' : JSON.stringify(userToken)
            }
        });

        if (!response.ok) {
            console.log(`Erro na Requisição /${endpoint}`)
        }
    } catch(err) {
        console.log(err);
    }
}