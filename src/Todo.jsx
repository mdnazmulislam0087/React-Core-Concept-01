// export default function Todo({task}){
//     return(
//         <li>Task:{task} </li>
//     )
// }

// Conditional rendering option 1:
// export default function Todo({task, isDone}){
//  if (isDone === true) {
//  return <li>Finished Task: {task}</li>
// }
// else {
//     return <li>Unfinished: {task}</li>
// }
// }


// Conditional rendering option 2:
// export default function Todo({task, isDone}){
//     if (isDone){
//         return <li>Finished Task: {task}</li>
//     }
//     return <li>Unfinished: {task}</li>
// }

// Conditional rendering option 3: Ternary rendering option
// export default function Todo({task, isDone}){
//     return (
//         <li>{isDone ? 'Finished' : 'Unfinished' } : {task}</li>
//     )
// }

// Conditional rendering option 4: Ternary rendering option if true apply conditional rendering
// export default function Todo({task, isDone}){
//     return (
//         <li>{isDone && 'Finished'} : {task}</li>
//     )
// }

// Conditional rendering option 5: Ternary rendering option if False apply condition
// export default function Todo({task, isDone}){
//     return (
//         <li>{isDone || 'UnFinished'} : {task}</li>
//     )
// }

// Conditional rendering option 6:
export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone === true) {
        listItem = <li>Finished Task: {task}</li>
    }
    else {
        listItem = <li>Unfinished: {task}</li>
    }
    return listItem
}