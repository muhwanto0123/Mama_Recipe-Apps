export const GET_FOOD = 'GET_FOOD'

const API_URL = 'https://8c30a659b6b54da0b2dd2f5650999620.api.mockbin.io/'

export const getFood = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                }
            })
            const json = await result.json()
            if(json){
                dispatch({
                    type: GET_FOOD,
                    payload: json,
                })
            }else{
                console.log('Unable to exit')
            }
        }
    } catch (error) {
        console.log(error)
    }
}