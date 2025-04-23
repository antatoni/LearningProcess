import LearningList from "../Components/LearningList.jsx"
export default function LearningPlan() {
    const learnItems = [
        'Components',
        'Conditional Rendering',
        'Props',
        'Working with collections'
    ]
    return (
        // <>
        //     <p>We will review</p>
        //     <ul>
        //         <li>Components</li>
        //         <li>Conditional Rendering</li>
        //         <li>Props</li>
        //         <li>Working with collections</li>
        //     </ul>
        // </>

        <>
            <p>We will review</p>
            <ul>
                {/* {learnItems.map((el, index) => <li key={index}>{el}</li>)} */}
                <LearningList items={learnItems} />
            </ul>
        </>
    )
}