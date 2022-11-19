export const ClocksNumbers = () => {
    
    const n = 12; 

    return (
        <>
            {
                [...Array(n)].map((e,i)=>(
                    <div className={`number number${i+1}`}>{i+1}</div>
                ))
            }
        </>
    )
}
