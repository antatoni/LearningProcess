export default function LearningList({ items }) {
    return (
        <ul>
            {items.map((el, index) => (
                <li key={index}>{el}</li>
            ))}
        </ul>
    )
}

// const LearningList = ({ items }) => (
//     <ul>
//         {items.map((el, index) => (
//             <li key={index}>{el}</li>
//         ))}
//     </ul>
// )


// export default LearningList