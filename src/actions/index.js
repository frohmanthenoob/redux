export const ADD_RECIP = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

export function addRecip ({day,recipe,meal}){
    return {
        type:ADD_RECIP,
        recipe,
        day,
        meal
    }
}

export function removeFromCalendar({day,meal}){
    return {
        type:REMOVE_FROM_CALENDAR,
        day,
        meal
    }

}